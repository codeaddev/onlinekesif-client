import { Fade, Hidden, Tooltip } from "@mui/material";
import React, { useContext, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import Sidebar from "../../../components/sidebar/Sidebar";
import "./kesif.scss";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { useState } from "react";
import MiniKpu from "./miniKpu.svg";
import { arrayUnion, collection, doc, getDoc, query, updateDoc, where } from "firebase/firestore";
import { auth, db } from "../../../firebase/firebase.config";
import { AppModal } from "../../../components/Modal/Modal";
import Loading from "../../../components/loading/Loading";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import emailjs from "@emailjs/browser";
import { useNavigate } from "react-router-dom";
import BreadCrumb from "../BreadCrumb";
import { CircularProgress } from "@mui/material";
import SideLinks from "../../../components/sidelinks/SideLinks";
import useForm from "../../payment/useForm";
import { CloudContext } from "../../../context/cloudContext";


function KesifSingle() {
  const { state } = useLocation();

  const { servisId } = useParams();
  const {myJobs}=useContext(CloudContext)
  const [loadingThisPage,setLoadingThisPage]=useState(true)
  const [thisPage,setThisPage]=useState({})



  useEffect(()=>{

    setLoadingThisPage(true)
    var thisID=String(servisId).split("-")[1]

    const thisDocument=doc(db,"Jobs",thisID);

    getDoc(thisDocument)
            .then((obj)=>{
            if(obj.exists()){
                setThisPage(obj.data())
              }else{
                setLoadingThisPage(false)
            }
            })
            .finally(()=>{
                setLoadingThisPage(false)})
            
   .catch((err)=>{
            console.log(err.message)
            setLoadingThisPage(false)
        })
    
   
},[])


  const {handleLoadProductFromState}=useForm()
  const [updating, setUpdating] = useState(false);

  const sendCompleteEmailToUser = () => {
    var params = {
      subject: thisPage?.mainWish + " Servis İşi",
      user_email: auth?.currentUser?.email,
      user_name: "bilgi@onlinekesif.com",
      message: `${thisPage.mainWish} Servis Talebiniz tamamlanmıştır.`,
    };

    emailjs
      .send(
        "onlinekesif_support",
        "template_fd5d0vb",
        params,
        "az39-SQ3JNFE4N2sA"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  const sendCompleteEmailToFirm = (item) => {
    var params = {
      subject: thisPage?.mainWish + " Servis Talebi İşiniz Hakkında",
      user_email: item.email,
      user_name: "bilgi@onlinekesif.com",
      message: `Müşteri ${thisPage?.id} no'lu ${thisPage.mainWish} Servis Talebi işinizi tamamladığınızı onaylamıştır. Tarafınıza ödeme yapılacaktır.`,
    };

    emailjs
      .send(
        "onlinekesif_support",
        "template_fd5d0vb",
        params,
        "az39-SQ3JNFE4N2sA"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  const sendCompleteEmailToAdmin = () => {
    var params = {
      subject: thisPage?.mainWish + " Servis Talebi İşi",
      user_email: "onlinekesif.com@gmail.com",
      user_name: "bilgi@onlinekesif.com",
      message: `Müşteri ${auth?.currentUser?.email}, ${thisPage.mainWish} Servis Talebi İşinin tamamlandığını onayladı.`,
    };

    emailjs
      .send(
        "onlinekesif_support",
        "template_fd5d0vb",
        params,
        "az39-SQ3JNFE4N2sA"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  const sendCancelEmailToUser = () => {
    var params = {
      subject: thisPage?.mainWish + " Servis Talebini İptali",
      user_email: auth?.currentUser?.email,
      user_name: "bilgi@onlinekesif.com",
      message: `${thisPage.mainWish} Servis Talebiniz iptal edilmiştir.`,
    };

    emailjs
      .send(
        "onlinekesif_support",
        "template_fd5d0vb",
        params,
        "az39-SQ3JNFE4N2sA"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  const sendCancelEmailToAdmin = () => {
    var params = {
      subject: "Servis Talebi İptali",
      user_email: "onlinekesif.com@gmail.com",
      user_name: "bilgi@onlinekesif.com",
      message: `Müşteri ${auth?.currentUser?.email}, ${thisPage.mainWish} Servis Talebini iptal etti.`,
    };

    emailjs
      .send(
        "onlinekesif_support",
        "template_fd5d0vb",
        params,
        "az39-SQ3JNFE4N2sA"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  const [alertmessage, setAlertMessage] = useState({
    visible: false,
    isInfo: false,
    title: "",
    isError: false,
    infoText: "",
    route: "/profil",
    handleFunction: "",
    functionText: "",
  });

  const [open, setOpen] = useState(false);
  function Row({ row }) {
    console.log(open);
    const handleCancel = async (e, row) => {
      e.preventDefault();
      await updateDoc(doc(db, "Jobs", thisPage.doc), {
        statue: 4,
        statueMap: {
          id: new Date().valueOf(),
          createdAt: new Date(),
          what: 4,
          for: row.firm,
          who: auth?.currentUser?.uid,
        },
      })
        .then(() => {
          setAlertMessage({
            visible: true,
            isInfo: true,
            isError: false,
            title: "Tamamdır",
            infoText: "Servis Talebiniz İptal Edildi",
            functionText: "",
            route: "/profil/kesiflerim",
            handleFunction: "",
          });
        })
        .catch((e) => {
          setAlertMessage({
            visible: true,
            isInfo: true,
            isError: true,
            title: "Uyarı",
            infoText: "Bir hata meydana geldi",
            functionText: "",
            route: "/profil/kesiflerim",
            handleFunction: "",
          });
        });
      sendCancelEmailToAdmin();
      sendCancelEmailToUser();
    };

    const handleComplete = async (e) => {
      e.preventDefault();
      await updateDoc(doc(db, "Jobs", thisPage.doc), {
        completed: true,
        completedByClient: true,
        statue: 6,
        statueMap: {
          id: new Date().valueOf(),
          createdAt: new Date(),
          what: 6,
          for: row.firm,
          who: auth?.currentUser?.uid,
        },
      })
        .then(() => {
          setAlertMessage({
            visible: true,
            isInfo: true,
            isError: false,
            title: "Tamamdır",
            infoText: "Servis Tamamlandı",
            functionText: "",
            route: "/profil/kesiflerim",
            handleFunction: "",
          });
        })
        .catch((e) => {
          setAlertMessage({
            visible: true,
            isInfo: true,
            isError: true,
            title: "Uyarı",
            infoText: "Bir hata meydana geldi",
            functionText: "",
            route: "/profil/kesiflerim",
            handleFunction: "",
          });
        });
      sendCompleteEmailToUser();
      sendCompleteEmailToFirm(row);
      sendCompleteEmailToAdmin();
    };

    let navigate = useNavigate();
    const handleAccept = async (e, row) => {
      e.preventDefault();
      // await updateDoc(doc(db,"Jobs",state.doc),{
      //   statue:3,
      //   statueMap:{id:new Date().valueOf(),createdAt:new Date(),what:3,for:row.firm,who:auth?.currentUser?.uid},
      //   Offers:[{
      //     KPU:row.KPU,
      //     accepted:true,
      //     firm:row.firm,
      //     firmName:row.firmName,
      //     id:row.id,
      //     email:row.email,
      //     logo:row.logo,
      //     refused:false,
      //     relatedProducts:row.relatedProducts,
      //     totalPrice:row.totalPrice,
      //     createdAt:new Date(row.createdAt.seconds*1000),
      //   }]
      // })
      // .then(()=>{
      //   setAlertMessage({
      //     visible:true,
      //     isInfo:true,
      //     isError:false,
      //     title:"Tamamdır",
      //     infoText:"Onayınız Firma Tarafına ve Online Keşif'e iletildi.",
      //     functionText:"",
      //     route:"/profil/kesiflerim",
      //     handleFunction:"",
      //   })
      // }).catch((e)=>{
      //   setAlertMessage({
      //     visible:true,
      //     isInfo:true,
      //     isError:true,
      //     title:"Uyarı",
      //     infoText:"Bir hata meydana geldi",
      //     functionText:"",
      //     route:"/profil/kesiflerim",
      //     handleFunction:"",
      //   })
      // })
      // sendConfirmEmailToUser()
      // sendConfirmEmailToFirm(row)
      // sendConfirmEmailToAdmin()
      handleLoadProductFromState(row)
      navigate("/odeme", { state: { ...row,doc:thisPage.doc,mainWish:thisPage.mainWish} });
    };

    const handleRefuse = async (e, row) => {
      e.preventDefault();
      setUpdating(true);

      let newArray = thisPage.Offers.filter((i) => i.id !== row.id);

      await updateDoc(doc(db, "Jobs", thisPage.doc), {
        Offers: [
          ...newArray,
          {
            KPU: row.KPU,
            accepted: false,
            firm: row.firm,
            firmName: row.firmName,
            id: row.id,
            logo: row.logo,
            refused: true,
            relatedProducts: row.relatedProducts,
            totalPrice: row.totalPrice,
            createdAt: new Date(row.createdAt.seconds * 1000),
          },
        ],
        statueMap: {
          id: new Date().valueOf(),
          createdAt: new Date(),
          what: 4,
          for: row.firm,
          who: auth?.currentUser?.uid,
        },
        //Offers:arrayUnion(newRow)
      })
        .then(() => setUpdating(false))
        .then(() =>
          setAlertMessage({
            visible: true,
            isInfo: true,
            title: "Tamamdır",
            isError: false,
            infoText: "Hizmet Talebin Kaldırıldı.",
            route: "/profil/kesiflerim",
            handleFunction: "",
            functionText: "",
          })
        )
        .catch((e) => {
          setUpdating(false);
          setAlertMessage({
            visible: true,
            isInfo: true,
            title: "Hata!",
            isError: false,
            infoText: "Bir Hata Meydana Geldi. " + e.message,
            route: "/profil/kesiflerim",
            handleFunction: "",
            functionText: "",
          });
        });
    };

    //onclicks
    const handleCancelAlert = async (e, row) => {
      e.preventDefault();
      setAlertMessage({
        visible: true,
        isInfo: false,
        isError: false,
        title: "Uyarı",
        infoText:
          "Servis Talebinizi İptal Etmek Üzeresiniz. Bu işlem geri alınamaz!",
        handleFunction: (e) => handleCancel(e, row),
        functionText: "Yine de İptal Et",
        route: "",
      });
    };
    const handleRefuseAlert = async (e, row) => {
      e.preventDefault();
      setAlertMessage({
        visible: true,
        isInfo: false,
        isError: false,
        title: "Uyarı",
        infoText:
          "Firma Teklifini Reddetmek Üzeresiniz. Bu işlem geri alınamaz!",
        handleFunction: (e) => handleRefuse(e, row),
        functionText: "Yine de Reddet",
        route: "",
      });
    };
    const handleAcceptAlert = async (e, row) => {
      e.preventDefault();
      setAlertMessage({
        visible: true,
        isInfo: false,
        isError: false,
        title: "Uyarı",
        infoText: "Firma Teklifini Kabul Etmek Üzeresiniz",
        handleFunction: (e) => handleAccept(e, row),
        functionText: "Kabul Et",
        route: "",
        force: true,
      });
    };
    const handleCompleteAlert = async (e) => {
      e.preventDefault();
      setAlertMessage({
        visible: true,
        isInfo: false,
        isError: false,
        title: "Uyarı",
        infoText: "Servis Talebinizi Tamamlamak Üzeresiniz.",
        handleFunction: (e) => handleComplete(e, row),
        functionText: "Tamamlandı",
        route: "",
      });
    };
    
    let TLLocale = Intl.NumberFormat("tr-TR");
    var othersList = thisPage.Offers.filter((i) => i.firm !== row.firm);
    var otherPrices = othersList.map((i) => {
      return { products: i.relatedProducts, firmName: i.firmName };
    });
    const ToolTipInner = ({ item }) => {
      return (
        <div>
          {otherPrices.length > 0 ? (
            otherPrices.map((i) => {
              var thisProduct = i.products.find((i) => i.id === item.id);
              return (
                <div className="row">
                  <span>{i.firmName} : </span>
                  <span>{TLLocale.format(thisProduct.unitPrice)} ₺</span>
                </div>
              );
            })
          ) : (
            <p>{item.name}</p>
          )}
        </div>
      );
    };
    const LikeToolTipInner = ({ item }) => {
      return (
        <div className="like-tooltip">
          {otherPrices.length > 0 ? (
            otherPrices.map((i) => {
              var thisProduct = i.products.find((i) => i.id === item.id);
              return (
                <div className="row">
                  <span>{i.firmName} : </span>
                  <span>{TLLocale.format(thisProduct.unitPrice)} ₺</span>
                </div>
              );
            })
          ) : (
            <p>{item.name}</p>
          )}
        </div>
      );
    };

    const handleDraw = () => {
      setOpen((pre) => !pre);
    };

    return (
      <div className="body-row">
        <TableRow
          onClick={handleDraw}
          className={`body-row-row ${row.refused ? "refused" : "alive"}`}
          sx={{ "& > *": { borderBottom: "unset" } }}
        >
          <TableCell className="row-cell first" align="left">
            {row.firmName}
          </TableCell>
          <TableCell className="row-cell first" align="right">
            <img src={MiniKpu} alt="" />
            {row.KPU} Puan
          </TableCell>
          <TableCell className="row-cell first" align="right">
            Teklif: {TLLocale.format(row.totalPrice)} ₺
          </TableCell>
          <TableCell>
            <IconButton
              aria-label="expand row"
              size="small"
              onClick={handleDraw}
            >
              {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </IconButton>
          </TableCell>
        </TableRow>
        <TableRow className="body-row-row right">
          <Collapse
            in={open}
            timeout="auto"
            className="content-collapse"
            TransitionProps={{
              mountOnEnter: true,
              unmountOnExit: true,
            }}
            mountOnEnter
            unmountOnExit
          >
            <Box className="content-box" sx={{ margin: 0, padding: 4 }}>
              {/* <Typography variant="h6" gutterBottom component="div">
                Servis Harcamaları
              </Typography> */}
              <table>
                <tr>
                  <th className="index">S.No</th>
                  <th className="name">Parça/ Hizmet Adı</th>
                  <th className="amount">Adet</th>
                  <th className="price" align="right">
                    Birim Fiyat (₺)
                  </th>
                  <th className="price" align="right">
                    Toplam Fiyat (₺)
                  </th>
                </tr>
                {row.relatedProducts.map((historyRow, index) => {
                 
                  const [showlikeTooltip, setShowLikeToolTip] = useState(false);
                  return (
                    <tr>
                      <td className="index">{index + 1}</td>
                      <td className="name">
                        <a
                          target="_blank"
                          href={`https://www.google.com/search?q=${historyRow.name}&source=lnms&tbm=shop&sa=X&ved=2ahUKEwji0LS8trr7AhX9S_EDHcj_BewQ_AUoAXoECAEQAw&biw=1646&bih=957&dpr=2`}
                        >
                          {historyRow.name}
                        </a>
                      </td>
                      <td className="amount">{historyRow.amount}</td>

                      <td
                        onBlur={() => setShowLikeToolTip(false)}
                        className="price"
                      >
                        <Tooltip
                          TransitionComponent={Fade}
                          followCursor
                          placement="right"
                          TransitionProps={{ timeout: 600 }}
                          title={<ToolTipInner item={historyRow} />}
                          arrow
                        >
                          <CompareArrowsIcon
                            onClick={() => setShowLikeToolTip((pre) => !pre)}
                            className={`icon ${
                              showlikeTooltip ? "showed" : "not-showed"
                            }`}
                          />
                        </Tooltip>
                        <span>{TLLocale.format(historyRow.unitPrice)}</span>
                      </td>
                      <td className="price last">
                        {showlikeTooltip && (
                          <LikeToolTipInner item={historyRow} arrow />
                        )}
                        {TLLocale.format(historyRow.price)}
                      </td>
                    </tr>
                  );
                })}
              </table>
              <div className="info">
                <div className="total-price">
                  <span className="text-in-row">Genel Toplam (KDV Dahil)</span>
                  <span className="price-in-row">
                    {TLLocale.format(row.totalPrice)} ₺
                  </span>
                </div>
                <p>
                  Bu bir ön keşif formudur. Uygulama esnasında ek maliyetler
                  çıkabilir.{" "}
                </p>

                {thisPage.statue !== 6 && (
                  <div className="button-area">
                    <button
                      onClick={(e) => handleCancelAlert(e, row)}
                      className="refuse"
                    >
                      İşi İptal Et
                    </button>
                    {thisPage.statue !== 3 && (
                      <button
                        onClick={(e) => handleRefuseAlert(e, row)}
                        className="refuse"
                      >
                        Teklifi Reddet
                      </button>
                    )}
                    {thisPage.statue !== 3 && (
                      <button
                        onClick={(e) => handleAcceptAlert(e, row)}
                        className="accept"
                      >
                        Teklifi Kabul Et
                      </button>
                    )}
                    {thisPage.statue === 3 && (
                      <button onClick={handleCompleteAlert} className="accept">
                        İş Tamamlandı
                      </button>
                    )}
                  </div>
                )}
              </div>
            </Box>
          </Collapse>
        </TableRow>
      </div>
    );
  }
  const wishDetail = !loadingThisPage
    ? Object.values(thisPage.wishDetail).sort((a, b) => {
        return a.id - b.id;
      })
    : {};
  const handleClick = () => {
    setIsCollapsed((pre) => (pre === "closed" ? "opened" : "closed"));
  };
  const [isCollapsed, setIsCollapsed] = useState("closed");

  const handleCancel = async (e) => {
    e.preventDefault();
    setUpdating(true);
    await updateDoc(doc(db, "Jobs", thisPage.doc), {
      statue: 5,
      cancelled: true,
      statueMap: arrayUnion({
        id: new Date().valueOf(),
        for: "all",
        refused: true,
        createdAt: new Date(),
      }),
    })
      .then(() => setUpdating(false))
      .then(() =>
        setAlertMessage({
          visible: true,
          isInfo: true,
          title: "Tamamdır",
          isError: false,
          infoText: "Hizmet Talebin Kaldırıldı.",
          route: "/profil/kesiflerim",
          handleFunction: "",
          functionText: "",
        })
      )
      .catch((e) => {
        setUpdating(false);
        setAlertMessage({
          visible: true,
          isInfo: true,
          title: "Hata!",
          isError: false,
          infoText: "Bir Hata Meydana Geldi. " + e.message,
          route: "/profil/kesiflerim",
          handleFunction: "",
          functionText: "",
        });
      });
  };
  const handleCancelAlert = async (e) => {
    e.preventDefault();
    setAlertMessage({
      visible: true,
      isInfo: false,
      isError: false,
      title: "Uyarı",
      infoText:
        "Servis Talebinizi İptal Etmek Üzeresiniz. Bu işlem geri alınamaz!",
      handleFunction: (e) => handleCancel(e, thisPage),
      functionText: "Yine de İptal Et",
      route: "",
    });
  };
  if (updating||loadingThisPage) {
    return <Loading title="Güncelleniyor" />;
  }

  if (Object.keys(thisPage.wishDetail).length < 1) {
    return <CircularProgress />;
  }
  return (
    <div className="kesif">
      <SideLinks />
      <div className="kesif-container">
        <AppModal
          open={alertmessage.visible}
          setOpen={setAlertMessage}
          isInfo={alertmessage.isInfo}
          title={alertmessage.title}
          isError={alertmessage.isError}
          infoText={alertmessage.infoText}
          handleFunction={alertmessage.handleFunction}
          functionText={alertmessage.functionText}
          alertstate={alertmessage}
          state={thisPage}
          route={alertmessage.route}
        />
        <Hidden />
        <div className="kesif-inner-container">
          <button onClick={handleClick} type="button" className="collapsible">
            Talep Detaylarınız
            {isCollapsed === "closed" ? (
              <KeyboardArrowDownIcon />
            ) : (
              <KeyboardArrowUpIcon />
            )}
          </button>

          <div id="collapsible-box" className={`content ${isCollapsed}`}>
            <p className="detail-title">Hizmet İstek Detayınız</p>
            {wishDetail?.map((i) => {
              return (
                <div key={i.id} className="detail-row">
                  <p className="question">{i.q}</p>
                  <p className="answer">{i.a}</p>
                </div>
              );
            })}
          </div>
          {thisPage?.Offers.length > 0 ? (
            <TableContainer className="table-container" component={Paper}>
              <Table
                className="collapsible-table"
                aria-label="collapsible table"
              >
                <TableHead className="table-head">
                  <TableRow className="head-row">
                    <TableCell className="head-cell first" align="center">
                      Keşif ID {thisPage.id}
                    </TableCell>
                    <TableCell className="head-cell second" align="left">
                      {thisPage.mainWish}
                    </TableCell>
                    <TableCell className="head-cell third" align="left">
                      {thisPage.adress} /{thisPage.city}
                    </TableCell>
                    <TableCell className="head-cell last" align="right">
                      {new Date(
                        thisPage.createdAt.seconds * 1000
                      ).toLocaleString()}
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody className="table-body">
                  {thisPage.Offers.map((row) => (
                    <>
                      <Row key={row.id} row={row} />
                    </>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          ) : (
            <>
              <div className="empty-case">
                {thisPage.adminned ? (
                  <p>Henüz Teklif Yapılmamıştır</p>
                ) : (
                  <p>Henüz Keşif Oluşturulmamıştır</p>
                )}
              </div>
              <button onClick={handleCancelAlert} className="button cancel">
                Teklifi İptal Et
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default KesifSingle;

/*historyRow.name.replace("ğ","g").replace("ş","s").replace("ı","i").replace("İ","I").split(" ").join("-") */
