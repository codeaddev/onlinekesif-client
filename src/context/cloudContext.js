import {
  arrayUnion,
  collection,
  doc,
  onSnapshot,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import React, { createContext, useContext, useEffect, useState } from "react";
import { DogalgazTesisat } from "../components/data/DogalgazTesisat";
import { KazanData } from "../components/data/KazanDataBase";
import { KlimaData } from "../components/data/KlimaDataBase";
import { KombiData } from "../components/data/KombiDataBase";
import { auth, db } from "../firebase/firebase.config";
import { AuthenticationContext } from "./authentication";
import axios from "axios";

export const CloudContext = createContext();

export const CloudProvider = ({ children }) => {
  const { user } = useContext(AuthenticationContext);
  const [myJobs, setMyJobs] = useState([]);

  const [firmAds, setFirmAds] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [completedJobs, setCompletedJobs] = useState([]);
  const [wpBlogs, setWPBlogs] = useState([]);
  //    "proxy": "https://onlinekesif.com/blog/",

  useEffect(() => {
    var config = {
      method: "get",
      //url: '/wp-json/wp/v2/posts',
      url: " https://onlinekesif.com/blog/wp-json/wp/v2/posts?_embedded",
      withCredentials: false,
      headers: {
        accepts: "application/json",
      },
    };

    axios
      .get(config.url)
      .then(function (response) {
        setWPBlogs(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  // useEffect(()=>{

  //     var config = {
  //         method: 'get',
  //         url: 'wp-json/wp/v2/posts',
  //         headers: {
  //           'accepts': 'application/json'
  //         }
  //       };

  //       axios(config)
  //       .then(function (response) {

  //         console.log(JSON.stringify(response.data));
  //         setWPBlogs(JSON.stringify(response.data));
  //       })
  //       .catch(function (error) {
  //         console.log(error);
  //       });

  // },[])

  const handleDataViwed = async (col, item) => {
    if (user && !auth.currentUser.isAnonymous) {
      var ref = doc(db, col, item);
      var refUser = doc(db, "Users", auth.currentUser.uid);
      await updateDoc(ref, {
        viewed: arrayUnion({
          id: new Date().valueOf().toString().substring(8),
          by: auth.currentUser.uid,
          time: new Date(),
        }),
      });
      await updateDoc(refUser, {
        point: arrayUnion({
          id: new Date().valueOf().toString().substring(8),
          score: 1,
          time: new Date(),
          type: col + " viewed",
        }),
      }).catch((e) => {
        return;
      });
    } else {
      var ref = doc(db, col, item.doc);
      updateDoc(ref, {
        viewed: arrayUnion({
          id: new Date().valueOf().toString().substring(8),
          by: "anonim",
          time: new Date(),
        }),
      }).catch((e) => {
        return;
      });
    }
  };

  // useEffect(()=>{
  //     if(user){
  //     const user1=auth.currentUser.uid;
  //     const user2="Online_Keşif"
  //     const id=`${user1+user2}`;
  //     const msgRef=collection(db,"messages",id,"chat")
  //     const q=query(msgRef,where("from","==","Online_Keşif"))
  //     onSnapshot(q,querySnapshot=>{
  //         setNotification(querySnapshot.length)

  //         })

  // }
  // },[])

  useEffect(() => {
    if (user) {
      let userid = auth.currentUser.uid;
      const q = query(collection(db, "Jobs"), where("userid", "==", userid));

      const jobgetting = onSnapshot(q, (snap) => {
        var jobs = [];
        snap.forEach((doc) => {
          jobs.unshift(doc.data());
        });

        setMyJobs(jobs);
      });

      return () => jobgetting();
    }
  }, [user]);

  useEffect(() => {
    const referance = collection(db, "FirmAds");

    const adsGetting = onSnapshot(referance, (snap) => {
      var ads = [];
      snap.forEach((doc) => {
        ads.unshift(doc.data());
      });

      setFirmAds(ads);
    });

    return () => adsGetting();
  }, []);
  useEffect(() => {
    const referance = collection(db, "Blogs");

    const blogGetting = onSnapshot(referance, (snap) => {
      var blogList = [];
      snap.forEach((doc) => {
        blogList.unshift(doc.data());
      });

      setBlogs(blogList);
    });

    return () => blogGetting();
  }, []);
  useEffect(() => {
    const referance = collection(db, "completedJobs");

    const completedJobGetting = onSnapshot(referance, (snap) => {
      var jobList = [];
      snap.forEach((doc) => {
        jobList.unshift(doc.data());
      });

      setCompletedJobs(jobList);
    });

    return () => completedJobGetting();
  }, []);
  const questionData = [KombiData, KazanData, KlimaData, DogalgazTesisat];

  return (
    <CloudContext.Provider
      value={{
        myJobs,
        firmAds,
        blogs,
        questionData,
        completedJobs,
        handleDataViwed,
        wpBlogs,
      }}
    >
      {children}
    </CloudContext.Provider>
  );
};
