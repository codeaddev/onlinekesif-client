import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import HeaderSearch from "../headerSearch/HeaderSearch";
import Video from "./video.mp4";

const HomeHeader = ({
  filteredData,
  setFilteredData,
  wordEntered,
  setWordEntered,
  show,
  setShow,
  setMainList,
}) => {
  // const [showNew, setShowNew] = useState(1);
  // useEffect(()=>{
  //   setInterval(()=>{
  //     setShowNew(pre=>pre+1)
  //   },2000)

  //   return ()=>clearInterval()

  // },[])

  // const list=["Kazan","Kombi","Klima","Doğalgaz","Tesisat"]
  // useEffect(() => {
  //   const timeoutId = setInterval(() => {
  //     setShowNew(list[Math.floor(Math.random()*list.length)])
  //   }, 850)
  //   return () => {
  //     clearInterval(timeoutId)
  //   }
  // }, [])
  return (
    <>
      <div className="section header">
        <video
          id="video"
          muted
          loop
          autoPlay
          width={"100%"}
          height={"100%"}
          playsInline="playsinline"
        >
          <source src={Video} className="video-main" type="video/mp4" />
        </video>
        <div className="header-wrapper">
          <div className="top">
            <h2 id="goal">
              Almak istediğiniz teknik hizmeti önce Online Keşif'e anlatın
            </h2>

            <HeaderSearch
              setMainList={setMainList}
              filteredData={filteredData}
              setFilteredData={setFilteredData}
              wordEntered={wordEntered}
              setWordEntered={setWordEntered}
              show={show}
              setShow={setShow}
            />
            <h3 id="goal-exp">Sizin için en iyi çözümü bulalım</h3>
          </div>
        </div>

        {/* <iframe 
      width="100%" 
      height="315" 
      src="https://www.youtube.com/embed/H3b4wPvcaxE"
      controls="0"
      autoplay="1"
      showinfo="0"
      autohide="1" 
      title="YouTube video player" 
      frameborder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen/> */}
      </div>
    </>
  );
};

export default HomeHeader;
