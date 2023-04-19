import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./sideLinks.scss";
import User from "./svg/user.svg";
import Circle from "./svg/circle.svg";
import LogoutIcon from "./svg/logout.svg";
import { auth, db, storage } from "../../firebase/firebase.config";
import { useState } from "react";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { doc, updateDoc } from "firebase/firestore";
import { updateProfile } from "firebase/auth";
import { AuthenticationContext } from "../../context/authentication";
import DashboardIcon from "@mui/icons-material/Dashboard";
import { Typography } from "@mui/material";
import {
  AddCircleOutline,
  ManageAccounts,
  ArrowForward,
} from "@mui/icons-material";

function SideLinks() {
  const [file, setFile] = useState("");
  const [uploading, setUploading] = useState(true);
  const { logout } = useContext(AuthenticationContext);
  const Links = [
    { id: "01", label: "Panelim", to: "/profil", icon: Circle },
    { id: "02", label: "Hesabım", to: "/profil/hesabim", icon: User },
    { id: "03", label: "Tekliflerim", to: "/profil/kesiflerim", icon: Circle },
  ];

  function handleChange(event) {
    setFile(event.target.files[0]);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setUploading(true);
    let url;
    if (file && auth.currentUser) {
      const imgRef = ref(storage, `logo/${auth.currentUser.uid + file.name}`);
      const snap = await uploadBytes(imgRef, file);
      const dlurl = await getDownloadURL(ref(storage, snap.ref.fullPath));
      url = dlurl;
      await (doc(db, "Users", auth.currentUser.uid),
      {
        logo: url,
      });
      await updateProfile(auth.currentUser, { photoURL: url });

      await updateDoc(doc(db, "Users", auth.currentUser.uid), {
        logo: url,
      })
        .then(() => setUploading(false))
        .finally(() => alert("Fotoğraf başarıyla güncellendi"))
        .catch((e) => {
          setUploading(false);
          alert(e.message);
        });
    } else {
      alert("Üye girişi yapın veya kayıt olun");
    }
  };
  let navigate = useNavigate();
  return (
    <div className="links">
      <div className="nav-links">
        {Links.map((i) => {
          return (
            <NavLink
              className={({ isActive }) => (isActive ? "link active" : "link")}
              to={i.to}
              key={i.id}
            >
              <Typography className="linkText">
                {i.label === "Hesabım" ? (
                  <ManageAccounts />
                ) : i.label === "Tekliflerim" ? (
                  <AddCircleOutline />
                ) : i.label === "Panelim" ? (
                  <DashboardIcon />
                ) : (
                  <ArrowForward />
                )}
                {i.label}
              </Typography>
            </NavLink>
          );
        })}
      </div>
    </div>
  );
}

export default SideLinks;
