import { useContext, useState } from "react";
import axios from "axios";
import { AuthenticationContext } from "../../context/authentication";
import { auth } from "../../firebase/firebase.config";

const useForm = () => {
  const { userData } = useContext(AuthenticationContext);
  const [errors, setErrors] = useState({});
  const [modalinner,setModalinner]=useState({
    open:false,
    content:null
  })
  const handleOpen = () => setModalinner({...modalinner,open:true});
  const handleClose = () => setModalinner({...modalinner,open:false});
  const [values, setValues] = useState({
    cardName: "",
    cardNumber: "",
    cardType: "",
    cardExpiration: "",
    cardSecurityCode: "",
    cardPostalCode: "",
    focus: "",
  });
   ////////////////////T  E  S  T//////////////////////////////////////
  const testFirm={
    CLIENT_CODE:"10738",
    CLIENT_USERNAME:"Test",
    CLIENT_PASSWORD:"Test",
    GUID:"0c13d406-873b-403b-9c09-a5766840d98c",
    SanalPOS_ID:"1029",
    Hata_URL:"http://localhost:3000/odeme",
    Basarili_URL:"http://localhost:3000/odeme"
  }
  const testUser={
    KK_Sahibi:"BEYTULLAH TAŞKIN",
    KK_No:"4508034508034509",
    KK_SK_Ay:"12",
    KK_SK_Yil:"2026",
    KK_CVC:"000",
    KK_Sahibi_GSM:""
  }
  const [testProduct, setTestProduct] = useState({
    Taksit:"1",
    Islem_Tutar:"10,00",
    Toplam_Tutar:"11,00",
    Siparis_ID:"1"
  });
  const handleLoadTestCard = (e) => {
    const { name, value } = e.target;
    setCard(testUser);
    setProduct({...product,Toplam_Tutar:"11,00"})
  };
  const handleSubmitTestPayment = async(e) => {
    e.preventDefault();
    const objectParam = { ...testFirm,...testUser,...testProduct }; // Replace with the actual object parameter
    try {
      const response = await axios.post('https://devop.onlinekesif.com/odeme/3D', objectParam);
      const result = response.data.result;
      // Handle the result here
      console.log(result)
      window.open(JSON.parse(JSON.stringify(result)).split("<UCD_URL>")[1].split("</UCD_URL>")[0])
    } catch (error) {
      // Handle any errors here
      console.error(error);
    }
  }
  ///////////////////T  E  S  T   B  İ  T  İ  Ş///////////////////////////////
  const realFirm={
    CLIENT_CODE:process.env.REACT_APP_CLIENT_CODE,
    CLIENT_USERNAME:process.env.REACT_APP_CLIENT_USERNAME,
    CLIENT_PASSWORD:process.env.REACT_APP_CLIENT_PASSWORD,
    GUID:process.env.REACT_APP_GUID,
    Hata_URL:process.env.REACT_APP_Hata_URL,
    Basarili_URL:process.env.REACT_APP_Basarili_URL
  }
  const realTestUser={
    KK_Sahibi:process.env.REACT_APP_KK_Sahibi,
    KK_No:process.env.REACT_APP_KK_No,
    KK_SK_Ay:process.env.REACT_APP_KK_SK_Ay,
    KK_SK_Yil:process.env.REACT_APP_KK_SK_Yil,
    KK_CVC:process.env.REACT_APP_KK_CVC,
    KK_Sahibi_GSM:process.env.REACT_APP_KK_Sahibi_GSM
  }
  const [product, setProduct] = useState({
    Taksit:"1",
    Islem_Tutar:"10,00",
    Toplam_Tutar:"11,00",
    Siparis_ID:"1"
  });
  const [user, setUser] = useState({
    FIRST_NAME: auth?.currentUser?.displayName,
    LAST_NAME: userData?.lastName,
    MAIL: auth?.currentUser?.email,
    PHONE: userData?.phone,
    CITY: "Bursa",
    STATE: "",
    ADDRESS: userData?.address,
    CLIENT_IP: "191.101.231.155",
  });
  const [card, setCard] = useState({
    KK_Sahibi:"",
    KK_No:"",
    KK_SK_Ay:"",
    KK_SK_Yil:"",
    KK_CVC:"",
    KK_Sahibi_GSM:""
  });

  


  const handleFocus = (e) => {
    setValues({
      ...values,
      focus: e.target.name === "CC_CVV" ? "cvc" : e.target.name,
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };
  
  const handleChangeUser = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };
  const handleChangeCard = (e) => {
    const { name, value } = e.target;
    setCard({
      ...card,
      [name]: value,
    });
  };
  
  const handleLoadRealTestCard = (e) => {
    const { name, value } = e.target;
    setCard(realTestUser);
    setProduct({...product,Toplam_Tutar:"11,00"})

  };
  const handleChangeProduct = (e) => {
    const { name, value } = e.target;
    setProduct({
      ...product,
      [name]: value,
    });
  };
  const handleLoadProductFromState=(state)=>{
    setProduct({...product,Toplam_Tutar:String(state.totalPrice)+",00"})
  }
  const handleLoadTestProduct=()=>{
    setProduct({...product,Toplam_Tutar:"11,00"})
  }


  
  const handleSubmitPayment =async (e) => {
    e.preventDefault();
    const objectParam = { ...realFirm,...realTestUser,...product }; // Replace with the actual object parameter
    
    try {
      const response = await axios.post('https://devop.onlinekesif.com/odeme/3DPay', objectParam);

      const result = response.data.result;
      // Handle the result here
      console.log(result)
      console.log((JSON.parse(JSON.stringify(result)).split("<UCD_HTML>")[1].split("</UCD_HTML>")[0]).replaceAll("&lt;","<").replaceAll("&gt;",">"))
      const stringifiedHTML=(JSON.parse(JSON.stringify(result)).split("<UCD_HTML>")[1].split("</UCD_HTML>")[0]).replaceAll("&lt;","<").replaceAll("&gt;",">")
      
      setModalinner({
        open:true,
        content:stringifiedHTML
      })
      // Access the HTML content
      var width = 600;
      var height = 400;
      var left = (screen.width - width) / 2;
      var top = (screen.height - height) / 2;
      var newTab = window.open("", "_blank", "width=" + width + ", height=" + height + ", left=" + left + ", top=" + top);
      newTab.document.write(stringifiedHTML);
      newTab.document.close();
     
    } catch (error) {
      // Handle any errors here
      console.error(error);
    }
  }

  return {
    handleChange,
    handleFocus,
    values,
    user,
    card,
    product,
    handleChangeUser,
    handleChangeCard,
    handleChangeProduct,
    errors,
    product,
    handleLoadTestCard,
    handleSubmitTestPayment,
    handleLoadProductFromState,
    handleSubmitPayment,
    handleLoadRealTestCard,
    handleLoadTestProduct,
    modalinner,
    handleClose

  };
};

export default useForm;
