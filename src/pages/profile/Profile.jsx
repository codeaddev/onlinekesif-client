import React, { useContext } from "react";
import "./profile.scss";
import Widgets from "../../components/Widgets/Widgets";
import Column from "./columns/Column";
import { CloudContext } from "../../context/cloudContext";
import SideLinks from "../../components/sidelinks/SideLinks";

function Profile({ setMainList }) {
  const { myJobs } = useContext(CloudContext);

  const data = [
    {
      id: "01",
      headBar: "Teklif Bekleyen",
      data: myJobs?.filter((i) => i.Offers.length < 1),
      svg: "AnyIcon",
      add: true,
      emptyMessage: "Henüz teklif bekleyen hizmet talebiniz bulunmamaktadır.",
    },
    {
      id: "02",
      headBar: "Açık Keşifler",
      data: myJobs?.filter((i) => i.Offers.length > 0 && !i.completed),
      svg: "AnyIcon",
      add: true,
      emptyMessage: "Henüz açık hizmet talebiniz bulunmamaktadır.",
      setState: "",
    },
    {
      id: "03",
      headBar: "Tamamlandı",
      data: myJobs?.filter((i) => i.completed || i.expired),
      svg: "AnyIcon",
      emptyMessage: "Henüz tamamlanan hizmetiniz bulunmamaktadır.",
    },
    { id: "04", headBar: "DUYURULAR", data: [], svg: "AnyIcon" },
  ];

  const pages = [{ id: "01", label: "Profil", route: "/profil", link: true }];
  return (
    <div className="profile">
      <SideLinks />
      <div className="profile-container">
        {/* <Hidden/> */}
        <div className="profile-inner-container">
          {/* <BreadCrumb pages={pages}/> */}
          <div className="top">
            <Widgets myJobs={myJobs} />
          </div>

          <div className="bottom">
            {data.map((i) => {
              return <Column key={i.id} item={i} setMainList={setMainList} />;
            })}
          </div>
          {/* <div 
          onClick={()=>sendMail("Faruk","farukkeskinsoy88@gmail.com","Deneme Başlık","Deneme içerik")}
          className="sendEmail">
            E-Posta gönder
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Profile;
