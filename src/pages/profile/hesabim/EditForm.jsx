import { doc, updateDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import React, { useContext } from "react";
import { useState } from "react";
import Loading from "../../../components/loading/Loading";
import { AuthenticationContext } from "../../../context/authentication";
import { auth, db, storage } from "../../../firebase/firebase.config";
import { Alert } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { updateProfile } from "firebase/auth";
import Header from "../../../components/data/text/Header";
import { useRef } from "react";
import Select from "react-select";
import { Regions } from "../../../components/data/general";
import EditPassword from "./EditPassword";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
function EditForm() {
  const { userData } = useContext(AuthenticationContext);
  const [file, setFile] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [edit, setEdit] = useState({});
  const [uploading, setUploading] = useState(false);
  const [alert, setAlert] = useState("");
  const [error, setError] = useState("");
  const [regions, setRegions] = useState([]);

  const nameRef = useRef();

  function handleChange(event) {
    setFile(event.target.files[0]);
  }
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setUploading(true);
    let url;
    if (file) {
      const imgRef = ref(storage, `logo/${auth.currentUser.uid + file.name}`);
      const snap = await uploadBytes(imgRef, file);
      const dlurl = await getDownloadURL(ref(storage, snap.ref.fullPath));
      url = dlurl;
      await updateDoc(doc(db, "Users", auth.currentUser.uid), {
        logo: url,
      });
      await updateProfile(auth.currentUser, { photoURL: url });
    }
    if (displayName) {
      await updateProfile(auth.currentUser, { displayName: displayName });
    }
    await updateDoc(doc(db, "Users", auth.currentUser.uid), {
      ...edit,
      updatedAt: new Date(),
    })
      .then(() => setUploading(false))
      .finally(() => setAlert("Bilgiler başarıyla güncellendi"))
      .catch((e) => {
        setUploading(false);
        setError(e.message);
      });
  };

  const handleEdit = (e) => {
    setEdit({ ...edit, [e.target.name]: e.target.value });
  };
  const handleEditDisplay = (e) => {
    setDisplayName(e.target.value);
  };

  if (uploading) {
    return <Loading title="Yükleniyor" />;
  }

  return (
    <div className="form-container">
      <Header>Bilgilerim</Header>
      <div className="inputContainer">
        {error ? (
          <Alert className="alert" severity="error">
            <span>{error}</span>
            <button onClick={() => setError("")}>Tamam</button>
          </Alert>
        ) : null}
        {alert ? (
          <Alert className="alert" severity="info">
            <span>{alert}</span>
            <button
              onClick={() => {
                navigate("/");
                setAlert("");
              }}
            >
              Tamam
            </button>
          </Alert>
        ) : null}
        <form onSubmit={handleSubmit}>
          <div className="imgContainer">
            {auth?.currentUser.photoURL ? (
              <img
                className="profil-photo"
                //src={auth.currentUser?.photoURL}
                src={
                  file ? URL.createObjectURL(file) : auth.currentUser?.photoURL
                }
                alt=""
              />
            ) : (
              <label htmlFor="photo" className="no-image">
                <AddPhotoAlternateIcon />
              </label>
            )}

            {auth.currentUser.photoURL && (
              <label htmlFor="photo">Değiştir</label>
            )}
            <input
              onChange={handleChange}
              type="file"
              style={{ display: "none" }}
              id="photo"
              accept="image/*"
              aria-label="DEĞİŞTİR"
              //style={{display:"none"}}
            />
          </div>
          <div className="row">
            <div className="input">
              <label>Kullanıcı Adı</label>
              <input
                ref={nameRef}
                placeholder={
                  auth.currentUser?.displayName
                    ? auth.currentUser?.displayName
                    : "kullanıcı adı"
                }
                onChange={handleEditDisplay}
                value={displayName}
                name="displayName"
                type="text"
              />
            </div>
            <div className="input">
              <label>Telefon Numarası</label>
              <input
                placeholder={userData?.firmPhone || `telefon numarası`}
                name="phone"
                onChange={handleEdit}
                type="text"
              />
            </div>
            <div className="input">
              <label>E-Posta</label>
              <input
                className="half"
                name="email"
                disabled
                onChange={handleEdit}
                placeholder={auth.currentUser?.email}
                type="text"
              />
            </div>
          </div>
          <div className="row"></div>

          <div className="row">
            <div className="input">
              <label>Detaylı Adres</label>
              <textarea
                onChange={handleEdit}
                name="adress"
                placeholder={userData?.adress || `Detaylandırın`}
              />
            </div>
          </div>

          <div className="row">
            <div className="input">
              <label>İl</label>
              <Select
                className="select"
                placeholder={userData?.city || `il`}
                defaultValue={userData.city}
                options={Regions}
                onChange={(e) => {
                  setEdit({ ...edit, city: e.label });
                  setRegions(e.districts);
                }}
              />
            </div>
            <div className="input">
              <label>İlçe</label>
              <Select
                className="select"
                placeholder={userData?.region || `il`}
                defaultValue={userData.region}
                options={regions}
                onChange={(e) => setEdit({ ...edit, region: e.label })}
              />
            </div>
            <div className="input">
              <label>Posta Kodu</label>
              <input
                name="ZIP"
                placeholder={userData?.ZIP || `posta kodu`}
                type="text"
              />
            </div>
          </div>
          <div className="row buttons">
            <button
              onClick={() => {
                navigate("/profil");
                setEdit({});
              }}
              className="exit"
            >
              ÇIKIŞ
            </button>
            <button type="submit" className="submit">
              KAYDET
            </button>
          </div>
        </form>
        <Header>Şifre Değiştir</Header>
        <EditPassword />
      </div>
    </div>
  );
}

export default EditForm;
