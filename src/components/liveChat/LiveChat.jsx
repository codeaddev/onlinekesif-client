import { addDoc, collection, doc, onSnapshot, orderBy, query, setDoc, Timestamp, where } from 'firebase/firestore'
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage'
import React, { useEffect, useRef } from 'react'
import { useState } from 'react'
import { auth, db, storage } from '../../firebase/firebase.config'
import "./liveChat.scss"
import Logo from "./logo.svg"
import Attach from "./attachment.svg"
import LiveLogo from "./liveLogo.svg"
import Message from './Message'
import CloseIcon from '@mui/icons-material/Close';
import { useContext } from 'react'
import { AuthenticationContext } from '../../context/authentication'
import { signInAnonymously } from 'firebase/auth'
import Bell from "./message.mp3"
import SouthEastIcon from '@mui/icons-material/SouthEast';

const LiveChat = () => {
  const [className, setClassName] = useState("hideBox")
  const [chat, setChat] = useState("")
  const [text, setText] = useState("")
  const [img, setImg] = useState("")
  const [messages, setMessages] = useState([])
  const [anonim, setAnonim] = useState("Anonim")
  const [sending, setSending] = useState(false)
  const [counter, setCounter] = useState(false)
  const { user } = useContext(AuthenticationContext)
  /*adds click event to trigger the animations by adding or removing classes*/
  const audioPlayer = useRef(null);
  function playAudio() {
    audioPlayer.current.play();
  }

  const user2 = "Online_Keşif";

  const getMessages = () => {



  }





  useEffect(() => {
    const user1 = user ? auth.currentUser.uid : anonim
    const user2 = "Online_Keşif";
    const id = user1 > user2 ? `${user1 + user2}` : `${user2 + user1}`;
    const msgRef = collection(db, "messages", id, "chat")
    const q = query(msgRef, orderBy("createdAt", "asc"))

    const listenData = onSnapshot(q, querySnapshot => {
      let msgs = []
      querySnapshot.forEach(doc => {
        msgs.push(doc.data())
      })
      if (msgs.length>0&&msgs[msgs.length - 1].from === "Online_Keşif") {
        playAudio()
        setCounter(true)
      }
      setMessages(msgs)
    })

    return () => listenData()

  }, [sending])


  const handleSubmit = async (e) => {
    e.preventDefault();
    const user1 = user ? auth.currentUser.uid : anonim
    const user2 = "Online_Keşif";
    const id = user1 > user2 ? `${user1 + user2}` : `${user2 + user1}`

    let url;
    if (img) {
      const imgRef = ref(storage, `chat/${new Date().getTime()}`)
      const snap = await uploadBytes(imgRef, img)
      const dlurl = await getDownloadURL(ref(storage, snap.ref.fullPath))
      url = dlurl;

    }

    await addDoc(collection(db, "messages", id, "chat"), {
      text: text,
      from: user1,
      to: user2,
      createdAt: Timestamp.fromDate(new Date()),
      media: url || "",
      active: true
    }).catch(e => alert(e.message))


    await setDoc(doc(db, "lastMsg", id), {
      text: text,
      from: user1,
      to: user2,
      createdAt: Timestamp.fromDate(new Date()),
      media: url || "",
      unread: true,
    })
      .then(() => setText(""))
      .then(() => setImg(""))
      .then(() => setSending(pre => !pre))
  }

  const handleEnding = async () => {
    const user1 = user ? auth.currentUser.uid : anonim
    const user2 = "Online_Keşif";
    const id = user1 + user2

    await addDoc(collection(db, "messages", id, "chat"), {
      text: "",
      from: user1,
      to: user2,
      createdAt: Timestamp.fromDate(new Date()),
      media: "",
      active: false
    })
  }
  const handleFinish = (e) => {
    e.preventDefault();
    setClassName("hideBox")
  }


  const signAnonym = async () => {
    const anonim = await signInAnonymously(auth)

    setDoc(doc(db, "Users", anonim.user.uid), {
      userid: anonim.user.uid,
      userName: "Anonim",
      provider: "anonim",
      createdAt: new Date(),
      userUnique: new Date().valueOf().toString().substring(6),
      lastLogin: new Date()
    })



  }



  return (
    <div className='btn-wrapper'>

      <audio ref={audioPlayer} src={Bell} />
      <div
        onClick={(event) => {
          if (!user) {

            signAnonym()

          }
          event.preventDefault()
          setCounter(false)
          setClassName(pre => pre === "hideBox" ? "showBox" : "hideBox")
        }}
        className={`buton ${className === "showBox" ? "hide" : "show"}`}
      >
        <img className='icon' src={LiveLogo} alt="" />
        {counter ? <div
          className='notify-circle'
        ></div> : null}
      </div>
      <div className={`chatBox ${className}`}>
        <div
        className='finish-chat'
          onClick={handleFinish}
        ><button><SouthEastIcon/></button>
        
        </div>
        <div
          className='chatcontainer'
        >
          <div className="chat-top">
            <div className="chat-top-left">
              <img src={LiveLogo} alt="" id='chat-logo' className='top-logo' />

            </div>
            <div className="chat-top-right"

            >
              Canlı Destek
            </div>
          </div>
          <div className="chat-center messages">

            {messages.length > 0 ? messages.map((i, index) => {
              return (
                <Message message={i} key={index} />
                // <div className={isMe(i)?"isent":"incoming"}>
                //   {isMe(i)?<SentBox key={index}>{i.text}</SentBox>:<InComeBox key={index}>{i.text}</InComeBox>}
                //   <span>{timeCalc(i.time)}</span>
                // </div>
              )
            }) : null}
          </div>
          <div className="chat-bottom">
            <form onSubmit={handleSubmit}>
              {img ? <div className='img-box'>
                <small>
                  {img.name}
                </small>
                <CloseIcon
                  onClick={() => setImg("")}
                  className='icon' />
              </div> : null}
              <input
                className='chat-input'
                placeholder='mesajınızı yazın..'
                value={text}
                type="text"
                autoFocus
                onChange={(e) => setText(e.target.value)}
              />
              <div className="addFile">
                <label htmlFor='img'>
                  <img src={Attach} 
                  style={{cursor:'pointer'}}
                  alt="" />
                </label>
                <input
                  onChange={(e) => {
                    setImg(e.target.files[0])

                  }

                  }
                  type="file" id="img" accept='image/*' style={{ display: "none" }} />
              </div>
              <button
                disabled={!text && !img ? true : false}
                style={{cursor:"pointer"}}
                className={`send-chat ${text || img ? `ready` : `empty`}`}
                type='submit'>GÖNDER</button>

            </form>
          </div>
        </div>

      </div>
      {/*
            ayrımm
            */}


    </div>
  )
}

export default LiveChat