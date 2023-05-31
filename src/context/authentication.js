import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  FacebookAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import React, { createContext, useState, useEffect } from "react";
import { auth, db } from "../firebase/firebase.config";

export const AuthenticationContext = createContext();

export const AuthenticationProvider = ({ children }) => {
  const [user, setUser] = useState("");
  const [userData, setUserData] = useState({});
  const [loggining, setLogining] = useState(false);
  const [gettingUser, setGettingUser] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [loading, setLoading] = useState(true);

  const handleErrorMessage = (err) => {
    if (err === "Firebase: Error (auth/email-already-exists).") {
      setAlertMessage(
        "Sağlanan e-posta zaten mevcut bir kullanıcı tarafından kullanılıyor. Her kullanıcının benzersiz bir e-posta adresi olmalıdır"
      );
    } else if (err === "Firebase: Error (auth/id-token-expired).") {
      setAlertMessage("kullanıcı hatırlama süresi doldu.");
    } else if (err === "Firebase: Error (auth/internal-error).") {
      setAlertMessage(
        "Kimlik doğrulama sunucusu beklenmeyen bir hatayla karşılaştı. "
      );
    } else if (err === "Firebase: Error (auth/invalid-email).") {
      setAlertMessage(
        "email kullanıcı özelliği için sağlanan değer geçersiz. mail adresi, geçerli e-posta adresi olmalıdır."
      );
    } else if (err === "Firebase: Error (auth/wrong-password).") {
      setAlertMessage("şifreyi yanlış girdiniz");
    } else if (err === "Firebase: Error (auth/user-not-found).") {
      setAlertMessage("Kullanıcı bulunamadı, kaydolun veya tekrar deneyin");
    } else {
      setAlertMessage("Bir hata meydana geldi, tekrar deneyin");
    }
  };

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
    setLoading(false);
    if (user && !user.isAnonymous) {
      updateDoc(doc(db, "Users", auth.currentUser.uid), {
        isOnline: true,
        lastLogin: new Date(),
      });
    }
  });

  const providerG = new GoogleAuthProvider();
  const providerF = new FacebookAuthProvider();

  const googlelogin = async (e) => {
    e.preventDefault();

    const subs = await signInWithPopup(auth, providerG);

    await setDoc(doc(db, "Users", subs.user.uid), {
      userid: subs.user.uid,
      userName: "",
      lastName: "",
      phone: "",
      email: subs.user.email,
      provider: subs.user.operationType,
      city: "",
      region: "",
      adress: "",
      createdAt: new Date(),
      notification: "",
      virgin: true,
      isOnline: true,
      firm: false,
      client: true,
      logo: "",
      userUnique: new Date().valueOf().toString().substring(6),
      updatedAt: "",
      ZIP: "",
    }).then(() => setLogining(false));
    // This gives you a Google Access Token. You can use it to access the Google API.
    // The signed-in user info.
  };

  const facebooklogin = async (e) => {
    e.preventDefault();

    const subs = await signInWithPopup(auth, providerF);

    await setDoc(doc(db, "Users", subs.user.uid), {
      userid: subs.user.uid,
      userName: "",
      lastName: "",
      phone: "",
      email: subs.user.email,
      provider: "facebook",
      city: "",
      regDevice: isMobile ? "mobile" : "desktop",
      currentDevice: isMobile ? "mobile" : "desktop",
      region: "",
      adress: "",
      createdAt: new Date(),
      notification: "",
      virgin: true,
      isOnline: true,
      firm: false,
      client: true,
      logo: "",
      userUnique: new Date().valueOf().toString().substring(6),
      updatedAt: "",
      ZIP: "",
      //new
      orders: 0,
      viewedProduct: false,
      viewedBlog: false,
      point: [],
      readenBlogs: [],
      readenProducts: [],
      chatted: false,
      lastLogin: new Date(),
      likes: [],
      comments: [],
    }).then(() => navigate("/"));
  };

  const register = async (e, email, pass) => {
    e.preventDefault();
    const createUser = await createUserWithEmailAndPassword(auth, email, pass);
    await setDoc(doc(db, "Users", createUser.user.uid), {
      userid: createUser.user.uid,
      userName: "",
      lastName: "",
      phone: "",
      email: email,
      provider: createUser.operationType,
      city: "",
      region: "",
      adress: "",
      createdAt: new Date(),
      notification: "",
      virgin: true,
      isOnline: true,
      firm: false,
      client: true,
      logo: "",
      userUnique: new Date().valueOf().toString().substring(6),
      updatedAt: "",
      ZIP: "",
    })
      .then(setUser(createUser.user))
      .then(getUserData());
  };

  const logout = async (e, go) => {
    e.preventDefault();
    await updateDoc(doc(db, "Users", auth.currentUser.uid), {
      isOnline: false,
    });
    await signOut(auth)
      .then(() => setUser(""))

      .finally(() => go("/"));
  };

  const getUserData = async () => {
    setGettingUser(true);
    try {
      const userRef = doc(db, "Users", user.uid);
      const docSnap = await getDoc(userRef);
      if (docSnap.exists()) {
        setUserData({
          ...docSnap.data(),
          userNameAuth: auth.currentUser.displayName,
        });
        setGettingUser(false);
      } else {
      }
    } catch (e) {
      setGettingUser(false);
      //console.log(e.message)
    }
  };

  useEffect(() => {
    if (user && !user.isAnonymous) {
      getUserData();
    }
  }, [user]);

  const loginEmail = async (e, mail, pass, navigate) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, mail, pass)
        .then((user) => setUser(user))
        .then(() => setLogining(false))
        .catch((e) => {
          handleErrorMessage(e.message);
        });
    } catch (error) {
      handleErrorMessage(error.message);
    }
  };

  const popuplogin = async (e, mail, pass) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, mail, pass).then((user) =>
        setUser(user)
      );
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <AuthenticationContext.Provider
      value={{
        Authenticated: !!user,
        logout,
        user,
        setUser,
        userData,
        loginEmail,
        register,
        popuplogin,
        googlelogin,
        facebooklogin,
        loggining,
        alertMessage,
        getUserData,
        gettingUser,
        loading,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};
