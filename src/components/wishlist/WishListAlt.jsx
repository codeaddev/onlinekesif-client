import React,{useContext, useRef, useState} from 'react'
import { KombiList } from '../data/questions'
import "./wishlist.scss"
import Select from 'react-select'
import { AuthenticationContext } from '../../context/authentication'
import { auth, db, storage } from '../../firebase/firebase.config'
import { addDoc, arrayUnion, collection, doc, getDoc, increment, setDoc, updateDoc } from 'firebase/firestore'
import { Navigate, useNavigate } from 'react-router-dom'
import Loading from '../loading/Loading'
import ProcessBar from '../processBar/ProcessBar'
import { KazanList } from '../data/KazanList'
import { useEffect } from 'react'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import BoxView from './views/BoxView'
import Question from './views/Question'
import SelectBox from './views/Select'
import InputView from './views/InputView'
import SelectMany from './views/SelectMany'
import EndForm from './views/EndForm'
import BackButton from './views/BackButton'
import { AppModal } from '../Modal/Modal'

import FileInputView from './views/FileInputView'
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage'
import { Beforeunload } from 'react-beforeunload';
import emailjs from '@emailjs/browser';



function WishListAlt({
  mainList,
  setMainList,
  changed,

})
{
  //mail grup
    const form = useRef();//yeni hizmet talebi
    const newForm = useRef();//yeni hizmet talebi
    const otherform = useRef();//Keşif Tamamlandı
    const compform = useRef ();//Teklif yapıldı
    const oppform = useRef ();//yeni iş fırsatı
    const cancelform = useRef();//iptal edildi
    const cancelbyFirmform = useRef();//firma tarafından iptal edildi

    const [defaultName,setDefaultName]=useState("Faruk KESKİNSOY")
    const [defaultEmail,setDefaultEmail]=useState("f.keskinsoy@codead.com.tr")
    const [defaultSubject,setDefaultsubject]=useState("Yeni Hizmet")
    const [defaultMessage,setDefaultMessage]=useState("Yeni Hizmet talebiniz alınmıştır")


  const handleUnload=(e)=>{
    e.preventDefault()
    if(auth.currentUser&&!auth.currentUser.isAnonymous){
      updateDoc(doc(db,"Users",auth.currentUser.uid),{isOnline:false})
    }else {return}
  }

  const {userData,user,register,popuplogin,getUserData,gettingUser}=useContext(AuthenticationContext)
  //render edilmeden önceki bilgiler
  const ekstra="Ekstra Açıklama ve Talepler";
  var today=new Date()
  var after=new Date()
  var publish=new Date()

  //stateler
  const [wishDetail,setWishDetail]=useState({[ekstra]:{q:"",a:"",id:""}})
  const [selectedItems,setSelectedItems]=useState([])
  const [questionData,setQuestionData]=useState({
    list:mainList.list,
    current:0,
    percent:[],
    preQuestion:[],
    preQuestionIndex:[],
  })
  const [endForm,setEndForm]=useState(false)
  const [uploading,setUploading]=useState(false)
  const [secondArray,setSecondArray]=useState([])
  const [thirdArray,setThirdArray]=useState([])
  const [text,setText]=useState("")
  const [basicInfo,setBasicInfo]=useState({
        city:"Bursa",
        region:userData?userData.region:"",
        name:userData?userData.userName||userData.userNameAuth:"",
        phone:userData?userData.phone:"",
        email:userData?userData.email:"",
        adress:userData?userData.adress:"",
    })

    // authentication stateleri
    const [popUpRegMail,setPopUpRegMail]=useState("")
    const [popUpRegPass,setPopUpRegPass]=useState("")
    const [popUpLoginMail,setPopUpLoginMail]=useState("")
    const [popUpLoginPass,setPopUpLoginPass]=useState("")
    const [file,setFile]=useState("")
    //modal stateleri

    const [alertMessage,setAlertMessage]=useState({
      infoText:"",
      visible:false,
      isInfo:true,
      isError:false,
      title:"",
      route:"",
      handleFunction:"",
      functionText:""
    })
    //render edildikten sonra çalışacak fonksiyonlar
    //navbar dan soru değiştirme  
    useEffect(()=>{
      setQuestionData({
        list:mainList.list,
        current:0,
        percent:[],
        preQuestion:[],
        preQuestionIndex:[],
      })
      setWishDetail({})
    },[changed])
    useEffect(() => {
      window.scrollTo(0, 0)
    }, [wishDetail,questionData])
      //user ve anonim değilse bilgileri çekme
      useEffect(()=>{
        if(user&&!auth.currentUser.isAnonymous){
          getUserData()
        }
      },[endForm])


      //fonksiyonlar
  
  const isSelected=(item)=>{
    var array=Object.values(wishDetail).filter(i=>i.id===item)
    if(array.length>0){
      return "selected"
    }
  }
  const isSelectedinArray=(item)=>{
    var array=Object.values(selectedItems).filter(i=>i.id===item)
   return array.length>0
  }


  const [docid,setDocId]=useState("")

  const sendEmailtoUser = () => {


    emailjs.sendForm('onlinekesif_support', 'template_fd5d0vb', form.current, 'az39-SQ3JNFE4N2sA')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.taget.reset()
  };
  const sendEmailtoOnlineKesif = () => {


    emailjs.sendForm('onlinekesif_support', 'template_fd5d0vb', newForm.current, 'az39-SQ3JNFE4N2sA')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.taget.reset()
  };
  

  const handleSubmitDirect=async()=>{
    if(!basicInfo.city|!basicInfo.region){
      alert("Lütfen il ilçe bilgisini giriniz")
     }else{
    const isThereRec=async(col,id)=>{
      const docRef = doc(db, col, id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        return true
      } else {
        return false
      }
    }
    setUploading(true)
    let url;
            if(file){
                const imgRef=ref(storage,`clientFiles/${new Date().getTime()}`)
                const snap=await uploadBytes(imgRef,file)
                const dlurl=await getDownloadURL(ref(storage,snap.ref.fullPath))
                url=dlurl;
        
            }
    let b,c,d,e,f,g;


        if(auth.currentUser.uid){
          
            try{
              c= await addDoc(collection(db,"Jobs"),{
                id:Math.random().toString(16).substring(2,9),
                  userid:auth.currentUser.uid,
                  createdAt:new Date(),
                  ...basicInfo,
                  termin:new Date(after.setDate(today.getDate()+2)),
                  adminned:false,
                  interestedFirms:[],
                  relatedProducts:[],
                  statue:0,
                  doc:"",
                  publishRemaining:new Date(publish.setDate(today.getDate()+7)),
                  wishDetail:wishDetail,
                  statueMap:[],
                  Offers:[],
                  mainWish:mainList.mainWish,
                  completed:false,
                  expired:false,
                  media:url||"",
              })
             
            }
            catch(error){
              setUploading(error)
              setAlertMessage({title:"Uyarı",
                          infoText:"Servis Talebinizi kaydetme işlemi sırasında bir hata meydana geldi. "+error.message.replace("Firebase: Error"," "),
                          isError:true,
                          isInfo:true,
                          route:"",
                          visible:true,
                          handleFunction:"",
                          functionText:"",})
            }
          
         setDocId(c.id)
          try{
            d=await updateDoc(doc(db,"Jobs",c.id),{doc:c.id}) 
                .then(()=>setWishDetail({}))
                .then(()=>setUploading(false))
                .then(()=>setAlertMessage({
                  handleFunction:"",
                  functionText:"",
                  isError:false,
                  title:"Tamamdır",
                  route:"/",
                  isInfo:true,
                  infoText:"Bilgilerinizi aldık, keşif ekibimiz iş başında! Profil sayfasından hizmet talebinizi takip edebilirsiniz.",
                  visible:true}))
          }catch(error){
            setUploading(false)
            setAlertMessage({title:"Uyarı",
                        infoText:"Servis Talebinizin kayıt işlemi sırasında bir hata meydana geldi. "+error.message.replace("Firebase: Error"," "),
                        isError:true,
                        isInfo:true,
                        route:"",
                        visible:true,
                        handleFunction:"",
                        functionText:"",})
          }
          try{
              e= await updateDoc(doc(db,"Users",auth.currentUser.uid),{
                  virgin:false,
                  orders:increment(1),
                  isOnline:true,
                  point:arrayUnion({
                  id:new Date().valueOf().toString().substring(8),
                  type:"wish",
                  time:new Date(),
                  score:10,
              })
            })
              
          }
          catch (error) {
            setUploading(false)
          }
          try{
              f= sendEmailtoUser()
              
          }
          catch (error) {
            setUploading(false)
          }
          try{
              g= sendEmailtoOnlineKesif()
              
          }
          catch (error) {
            setUploading(false)
          }
        }
        
        return b + c + d +e + f + g
      }
      }


  const handleSubmitWithLogin=async()=>{
    if(!basicInfo.city|!basicInfo.region){
      alert("Lütfen il ilçe bilgisini giriniz")
     }else{
    const isThereRec=async(col,id)=>{
      const docRef = doc(db, col, id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        return true
      } else {
        return false
      }
    }
    setUploading(true)
    let url;
    if(file){
        const imgRef=ref(storage,`clientFiles/${new Date().getTime()}`)
        const snap=await uploadBytes(imgRef,file)
        const dlurl=await getDownloadURL(ref(storage,snap.ref.fullPath))
        url=dlurl;

    }
    let a,c,d,e,f,g;
        try {
          a = await signInWithEmailAndPassword(auth,popUpLoginMail,popUpLoginPass);
        } catch(error) {
          setUploading(false)
          setAlertMessage({title:"Uyarı",
                        infoText:"Giriş işlemi sırasında bir hata meydana geldi. "+error.message.replace("Firebase: Error"," "),
                        isError:true,
                        isInfo:true,
                        route:"",
                        visible:true,
                        handleFunction:"",
                        functionText:"",})
        }

        if(a.user.uid){
          
            try{
              c= await addDoc(collection(db,"Jobs"),{
                id:Math.random().toString(16).substring(2,9),
                  userid:a.user.uid,
                  createdAt:new Date(),
                  ...basicInfo,
                  termin:new Date(after.setDate(today.getDate()+2)),
                  adminned:false,
                  interestedFirms:[],
                  relatedProducts:[],
                  statue:0,
                  doc:"",
                  publishRemaining:new Date(publish.setDate(today.getDate()+7)),
                  wishDetail:wishDetail,
                  statueMap:[],
                  Offers:[],
                  mainWish:mainList.mainWish,
                  completed:false,
                  expired:false,
                  media:url||"",
              })
            }
            catch(error){
              setUploading(error)
              setAlertMessage({title:"Uyarı",
                          infoText:"Servis Talebinizi kaydetme işlemi sırasında bir hata meydana geldi. "+error.message.replace("Firebase: Error"," "),
                          isError:true,
                          isInfo:true,
                          route:"",
                          visible:true,
                          handleFunction:"",
                          functionText:"",})
            }
          
         
          try{
            d=await updateDoc(doc(db,"Jobs",c.id),{doc:c.id}) 
                .then(()=>setWishDetail({}))
                .then(()=>setUploading(false))
                .then(()=>setAlertMessage({
                  handleFunction:"",
                  functionText:"",
                  isError:false,
                  title:"Tamamdır",
                  route:"/",
                  isInfo:true,
                  infoText:"Bilgilerinizi aldık, keşif ekibimiz iş başında! Profil sayfasından hizmet talebinizi takip edebilirsiniz.",
                  visible:true}))
          }catch(error){
            setUploading(false)
            setAlertMessage({title:"Uyarı",
                        infoText:"Servis Talebinizin kayıt işlemi sırasında bir hata meydana geldi. "+error.message.replace("Firebase: Error"," "),
                        isError:true,
                        isInfo:true,
                        route:"",
                        visible:true,
                        handleFunction:"",
                        functionText:"",})
          }
          try{
              e= await updateDoc(doc(db,"Users",a.user.uid),{
                  virgin:false,
                  orders:increment(1),
                  isOnline:true,
                  point:arrayUnion({
                  id:new Date().valueOf().toString().substring(8),
                  type:"wish",
                  time:new Date(),
                  score:10 
              })
            })
              
          }
          catch (error) {
            setUploading(false)
          }
          try{
            f= sendEmailtoUser()
            
        }
        catch (error) {
          setUploading(false)
        }
        try{
            g= sendEmailtoOnlineKesif()
            
        }
        catch (error) {
          setUploading(false)
        }
        }
        
        return a + c + d +e +f +g
      }
      }
  const handleSubmitWithReg=async(event)=>{
    event.preventDefault();
    const isThereRec=async(col,id)=>{
      const docRef = doc(db, col, id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        return true
      } else {
        return false
      }
    }
    setUploading(true)
    let url;
    if(file){
      const imgRef=ref(storage,`clientFiles/${new Date().getTime()}`)
      const snap=await uploadBytes(imgRef,file)
      const dlurl=await getDownloadURL(ref(storage,snap.ref.fullPath))
      url=dlurl;

  }
    let a, b,c,d,e,f,g;
        try {
          a = await createUserWithEmailAndPassword(auth,popUpRegMail,popUpRegPass);
        } catch(error) {
          setUploading(false)
          setAlertMessage({title:"Uyarı",
                        infoText:"Kayıt işlemi sırasında bir hata meydana geldi. "+error.message.replace("Firebase: Error"," "),
                        isError:true,
                        isInfo:true,
                        route:"",
                        visible:true,
                        handleFunction:"",
                        functionText:"",})
        }

        if(a.user.uid){
          try {
            b = await setDoc(doc(db,"Users",a.user.uid),{
                        userid:a.user.uid,
                        userName:basicInfo.name,
                        lastName:"",
                        phone:basicInfo.phone,
                        email:a.user.email,
                        provider:a.operationType,
                        city:basicInfo.city,
                        region:basicInfo.region,
                        adress:basicInfo.adress,
                        createdAt:new Date(),
                        notification:false,
                        virgin:true,
                        isOnline:true,
                        firm:false,
                        client:true,
                        logo:"",
                        userUnique:new Date().valueOf().toString().substring(6),
                        updatedAt:"",
                        ZIP:"",
                        point:[],
                        orders:0,
                        lastLogin:new Date()

            
                      })
            
                  
          } catch(error) {
            setUploading(false)
            setAlertMessage({title:"Uyarı",
                        infoText:"Bilgileri kaydetme işlemi sırasında bir hata meydana geldi. "+error.message.replace("Firebase: Error"," "),
                        isError:true,
                        isInfo:true,
                        route:"",
                        visible:true,
                        handleFunction:"",
                        functionText:"",})
          }
          if(isThereRec("Users",a.user.uid)){
            try{
              c= await addDoc(collection(db,"Jobs"),{
                id:Math.random().toString(16).substring(2,9),
                  userid:a.user.uid,
                  createdAt:new Date(),
                  ...basicInfo,
                  termin:new Date(after.setDate(today.getDate()+2)),
                  adminned:false,
                  interestedFirms:[],
                  relatedProducts:[],
                  statue:0,
                  doc:"",
                  publishRemaining:new Date(publish.setDate(today.getDate()+7)),
                  wishDetail:wishDetail,
                  statueMap:[],
                  Offers:[],
                  mainWish:mainList.mainWish,
                  completed:false,
                  expired:false,
                  media:url||"",
              })
            }
            catch(error){
              setUploading(error)
              setAlertMessage({title:"Uyarı",
                          infoText:"Servis Talebinizi kaydetme işlemi sırasında bir hata meydana geldi. "+error.message.replace("Firebase: Error"," "),
                          isError:true,
                          isInfo:true,
                          route:"",
                          visible:true,
                          handleFunction:"",
                          functionText:"",})
            }
          }
         
          try{
            d=await updateDoc(doc(db,"Jobs",c.id),{doc:c.id}) 
                .then(()=>setWishDetail({}))
                .then(()=>setUploading(false))
                .then(()=>setAlertMessage({
                  handleFunction:"",
                  functionText:"",
                  isError:false,
                  title:"Tamamdır",
                  route:"/",
                  isInfo:true,
                  infoText:"Bilgilerinizi aldık, keşif ekibimiz iş başında! Profil sayfasından hizmet talebinizi takip edebilirsiniz.",
                  visible:true}))
          }catch(error){
            setUploading(false)
            setAlertMessage({title:"Uyarı",
                        infoText:"Servis Talebinizin kayıt işlemi sırasında bir hata meydana geldi. "+error.message.replace("Firebase: Error"," "),
                        isError:true,
                        isInfo:true,
                        route:"",
                        visible:true,
                        handleFunction:"",
                        functionText:"",})
          }
          try{
              e= await updateDoc(doc(db,"Users",a.user.uid),{
                  virgin:false,
                  orders:increment(1),
                  isOnline:true,
                  point:arrayUnion({
                  id:new Date().valueOf().toString().substring(8),
                  type:"wish",
                  time:new Date(),
                  score:10
              })
            })
              
          }
          catch (error) {
            setUploading(false)
          }
          try{
            f= sendEmailtoUser()
            
        }
        catch (error) {
          setUploading(false)
        }
        try{
            g= sendEmailtoOnlineKesif()
            
        }
        catch (error) {
          setUploading(false)
        }
        }
        
        return a + b + c + d +e+f+g
  }

 


  const onClick=(i)=>{
    var Question=questionData.list?.[questionData.current]
    const newPercentArray=[...questionData.percent,i.p]
    
    if(i.endForm){
      setEndForm(true)
      setQuestionData({...questionData,percent:newPercentArray})
      
    }
    
    else{
      if(i.passive){
        return null
      }else{
        if(i.type==="button"&&!i.layerLast){
          setQuestionData({...questionData,current:questionData.current+1,percent:newPercentArray})
          setText("")
        }else{
          setWishDetail({...wishDetail,[Question.qTitle?Question.qTitle:Question.id]:Question.subq?{id:i.id,q:Question.subq,a:i.q}:{id:i.id,q:Question.q,a:i.q,}})
          // setWishDetail({...wishDetail,[questionData.list[questionData.current].subq?questionData.list[questionData.current].id+"."+questionData.list[questionData.current].label[0].alt+"."+questionData.list[questionData.current].subq:questionData.list[questionData.current].id+"."+questionData.list[questionData.current].q]:i.q})
          
          if(questionData.list[questionData.current].trigger){
            
            setQuestionData({...questionData,
              preQuestion:questionData.preQuestion.push(questionData.list),
              preQuestionIndex:questionData.preQuestionIndex.push(questionData.list.findIndex(i=>i.trigger)),
              percent:newPercentArray,
            })
          }
          
          if(i.last){
            setQuestionData({...questionData,list:mainList.list,
              current:i.parent,percent:newPercentArray})
            }else{
  
              if(i.nest){
                setQuestionData({...questionData,list:i.nest,current:0,percent:newPercentArray})
              
              }else if(i.layerLast){
                
                setQuestionData({...questionData,list:questionData.preQuestion[questionData.preQuestion.length-1],
                 current:i.parent,percent:newPercentArray})
                
              }
              
              else{
                setQuestionData({...questionData,current:questionData.current+1,percent:newPercentArray})
              }
            }
          }
      }
      
      }
    }
const inputRef=useRef("")

const MainCom=[{id:"1",label:"Kazan",array:KazanList},{id:"2",label:"Kombi",array:KombiList}]

if(!endForm&&!questionData.list){

  return <Navigate to="/" />
}



  return (
    <div className='wish'>
      <form 
        style={{display:"none"}}
        ref={form}> 
        <input type="text" placeholder='İsim Soyisim' name='user_name' value={"bilgi@onlinekesif.com"}required />             
        <input type="text" placeholder='Konu' value={"Hizmet Talebiniz Hakkında"}name='subject' required />
        <input type="email" placeholder='Email' value={auth?.currentUser?.email}name='user_email' required />
        <input type="tel" placeholder='tel' value={"08502420573"}name='user_tel' required />
        <textarea name="message" placeholder='Mesajınız'  value={`${mainList.mainWish} hizmet talebinizi aldık. Mühendis ekibimiz en kısa sürede teklif oluşturarak firmalarla paylaşıcaktır.`} cols="30" rows="10"></textarea>
      </form>
      <form 
        style={{display:"none"}}
        ref={newForm}> 
        <input type="text" placeholder='İsim Soyisim' name='user_name' value={auth?.currentUser?.email?auth.currentUser.email:"bilinmiyor"}required />             
        <input type="text" placeholder='Konu' value={"Yeni Bir Talep Var !"}name='subject' required />
        <input type="email" placeholder='Email' value={"onlinekesif.com@gmail.com"}name='user_email' required />
        <textarea name="message" placeholder='Mesajınız'  value={`${auth?.currentUser?.email||"bilinmeyen"} kullanıcısı tarafından ${mainList.mainWish} talebi geldi.`} cols="30" rows="10"></textarea>
      </form>
<Beforeunload onBeforeunload={(e)=>handleUnload(e)}>
        {mainList.mainWish!=="Doğalgaz Tesisatı"&&<ProcessBar percent={questionData.percent} total={mainList.list?mainList.list.length:1} />}
        <div className="wishContainer">
          <AppModal
          open={alertMessage.visible} 
          setOpen={setAlertMessage}
          isInfo={alertMessage.isInfo}
          isError={alertMessage.isError}
          title={alertMessage.title}
          route={alertMessage.route}
          infoText={alertMessage.infoText}
          handleFunction={alertMessage.handleFunction}
          functionText={alertMessage.functionText}
          />
        {uploading?
        <Loading title={"Formlar Gönderiliyor.."} />
        :
        <div className="form">
        
            {!endForm
            &&questionData.list?.[questionData.current]
            ?
           <div className='question-wrapper'>
             <BackButton
                  setMainList={setMainList}
                  questionData={questionData}
                  wishDetail={wishDetail}
                  setQuestionData={setQuestionData}
                  mainList={mainList}
                />
            <div className='question'>
              
              
              <Question questionData={questionData} />
              {questionData.list?.[questionData.current].sTitle&&
              <p className='alt-title'>{questionData.list?.[questionData.current].sTitle}</p>
              }
              {questionData.list?.[questionData.current].hasImg&&
              <img 
              className='thumb'
              src={questionData.list?.[questionData.current].hasImg} alt="" />
              }
              

              {questionData.list?.[questionData.current].type==="select"?
              
                  <SelectBox
                  questionData={questionData}
                  wishDetail={wishDetail}
                  secondArray={secondArray}
                  thirdArray={thirdArray}
                  setWishDetail={setWishDetail}
                  setQuestionData={setQuestionData}
                  setEndForm={setEndForm}
                  setSecondArray={setSecondArray}
                  setThirdArray={setThirdArray}
                  />
              :null}

              {questionData.list?.[questionData.current].type==="text"?
          
                  <InputView
                  inputRef={inputRef}
                  questionData={questionData}
                  text={text}
                  setText={setText}
                  wishDetail={wishDetail}
                  setWishDetail={setWishDetail}
                  />
              :null}
              {questionData.list?.[questionData.current].type==="file"?
          <>
                  <FileInputView
                  inputRef={inputRef}
                  questionData={questionData}
                  text={text}
                  setText={setText}
                  wishDetail={wishDetail}
                  setFile={setFile}
                  setWishDetail={setWishDetail}
                  />
              {file&&<small>{file.name}</small>}
            </>      
              :null}
              {questionData.list?.[questionData.current].subq?<span>{questionData.list[questionData.current].subq}</span>:null}
            
              <div className='row'>
                  {questionData.list[questionData.current].type!=="selectMany"?questionData.list[questionData.current].nest?.map(i=>{

                    var lengthofanswers=questionData.list[questionData.current].nest?.length
                    return(
                      
                  <BoxView 
                  onClick={onClick}
                  isSelected={isSelected}
                  item={i}
                  questionData={questionData}
                  lengthofanswers={lengthofanswers}
                  />     
                    )
                  }):null}
              </div>

            {questionData.list?.[questionData.current].type==="selectMany"? 
            
                  <SelectMany
                  questionData={questionData}
                  setQuestionData={setQuestionData}
                  wishDetail={wishDetail}
                  setWishDetail={setWishDetail}
                  isSelectedinArray={isSelectedinArray}
                  selectedItems={selectedItems}
                  setSelectedItems={setSelectedItems}
                  />
                    :null}
                  
            </div>
           
            </div>
          
            :
            endForm?
                  <EndForm
                  questionData={questionData}
                  setQuestionData={setQuestionData}
                  mainList={mainList}
                  ekstra={ekstra}
                  setEndForm={setEndForm}
                  wishDetail={wishDetail}
                  setWishDetail={setWishDetail}
                  basicInfo={basicInfo}
                  setBasicInfo={setBasicInfo}
                  handleSubmitDirect={handleSubmitDirect}
                  handleSubmitWithLogin={handleSubmitWithLogin}
                  handleSubmitWithReg={handleSubmitWithReg}
                  popUpLoginMail={popUpLoginMail}
                  popUpLoginPass={popUpLoginPass}
                  popUpRegMail={popUpRegMail}
                  popUpRegPass={popUpRegPass}
                  setPopUpLoginMail={setPopUpLoginMail}
                  setPopUpLoginPass={setPopUpLoginPass}
                  setPopUpRegMail={setPopUpRegMail}
                  setPopUpRegPass={setPopUpRegPass}
                  userData={userData}
                  user={user}

                />
              
                :<Select 
                onChange={(e)=>setMainList({mainWish:e.label,list:e.array})}
                options={MainCom} />
            }

        </div>}

        </div>
        </Beforeunload>
    </div>
  )
}

export default WishListAlt