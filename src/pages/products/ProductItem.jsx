import React from 'react'
import CommentIcon from "./svg/comment.svg"
import LikeIcon from "./svg/like.svg"
import LikedIcon from "./svg/liked.svg"
import EmptyUser from "../../components/sidelinks/svg/user.svg"
import Moment from 'react-moment'
import trLocale from 'moment/locale/tr';
import moment from 'moment';
import Example from "./svg/buderus-logomax-plus-gb172i.png"
import { useState } from 'react'
import { useRef } from 'react'
import { arrayRemove, arrayUnion, doc, updateDoc } from 'firebase/firestore'
import { auth, db } from '../../firebase/firebase.config'
import { useContext } from 'react'
import { AuthenticationContext } from '../../context/authentication'


const ProductItem = ({item}) => {

    const [commentCount,setCommentCount]=useState(1)
    const [liked,setLiked]=useState(false)
    const [showEmptyText,setShowEmptyText]=useState(false)
    const [commentText,setCommentText]=useState("")
    const [commenting,setCommenting]=useState(false)
    const {userData,user}=useContext(AuthenticationContext)
    const inputRef=useRef()

    const handleShow=(item)=>{
        inputRef.current.focus()
        if(item.comments.length>1){
          setCommentCount(pre=>pre===1?item.comments.length:1)
        }else{
          setShowEmptyText((pre)=>!pre)
        }
        
    }

    const handleLike=async(e)=>{
        e.preventDefault()
        await updateDoc(doc(db,"Products",item.doc),{likes:arrayUnion(
          {id:new Date().valueOf().toString().substring(8),
          userid:auth.currentUser.uid,
          time:new Date(),
          })})
          await updateDoc(doc(db,"Users",auth.currentUser.uid),{
            point:arrayUnion({
              id:new Date().valueOf().toString().substring(8),
              type:"like",
              score:2,
              time:new Date()  
            })
          })

    }
    const handleDisLike=async(e)=>{
        e.preventDefault()
        
        var myRow=item.likes.filter(i=>i.userid===auth.currentUser.uid)
        await updateDoc(doc(db,"Products",item.doc),{likes:arrayRemove(
          myRow[0]
          )})
          await updateDoc(doc(db,"Users",auth.currentUser.uid),{
            point:arrayUnion({
              id:new Date().valueOf().toString().substring(8),
              type:"dislike",
              score:-1,
              time:new Date()  
            })
          })

    }
    const handleComment=async(e)=>{
        e.preventDefault()
        inputRef.current.disabled=true
        await updateDoc(doc(db,"Products",item.doc),{comments:arrayUnion(
          {id:new Date().valueOf().toString().substring(8),
          userid:auth.currentUser.uid,
          userName:user.displayName?user.displayName:userData.userName,
          avatar:userData.logo,
          time:new Date(),
          text:commentText,
          }
          )})
          .then(()=>inputRef.current.disabled=false)
          .catch((e)=>{alert(e.message)
          inputRef.current.disabled=false}
          )
          .finally(()=>setCommentText(""))

        await updateDoc(doc(db,"Users",auth.currentUser.uid),{
          point:arrayUnion({
            id:new Date().valueOf().toString().substring(8),
            type:"comment",
            score:2,
            time:new Date()  
          })
        })
    }
    
    const didILikedIt=(item)=>{
      return item.likes.map(i=>i.userid).includes(auth.currentUser.uid)
    }

   return (
    <div className="card">
        <div className="top">
          <div className="top-left">
            <div className="top-left-top">
              <h1>{item?.title}</h1>
              <h6>{item?.desc}</h6>
              <ul>
              {item.features?.map(i=>{
                return(
                  <li key={i} >{i}</li>
                )
              })}
              </ul>
            </div>
            <div className="top-left-bottom">

            </div>
            
            
          </div>
          <div className="top-right">
            <img 
            className='pro-img'
            src={item.img?item.img:Example} alt="" 
            
            />
          </div>
        </div>    
        <div className="bottom">
          <div className="bottom-top">
            
            <label
            onClick={()=>handleShow(item)}
            
            >
            <img 
            src={CommentIcon} alt="" />
            {item.comments?.length} Yorum
            
            </label>
            <label
            onClick={(e)=>{
              if(didILikedIt(item)){
                handleDisLike(e)
              }else{
                handleLike(e)}}
              }
            
            >
            <img 
            className='heart'
            src={didILikedIt(item)?LikedIcon:LikeIcon} alt="" />
            {item?.likes?.length} Beğeni
          
            </label>
            </div>  
          <div className="bottom-bottom">
            
                {item?.comments.length>0
                ?item.comments.sort((a,b)=>{return new Date(b.time.seconds*1000).getTime()-new Date(a.time.seconds*1000).getTime()}).slice(0,commentCount).map(i=>{
                    return(
                        <div
                        key={i.id}
                        className='comment-card'>
                            <div className="comment-top">
                            <label>
                                <img src={i.avatar?i.avatar:EmptyUser} className="avatar" />
                                {i.userName}
                            </label>
                                <Moment className='time' fromNow>{new Date(i.time.seconds*1000)}</Moment>
                            </div>
                            <div className="comment-bottom">
                                {i.text}
                            </div>
                            
                        </div>

                    )
                })
              :null}
            
            <div
            className="input-row"
            >
              <form
              onSubmit={handleComment}
              
              >
                <input
                
                ref={inputRef}
                type="text"
                value={commentText}
                onChange={(e)=>setCommentText(e.target.value)}
                placeholder='buraya yazın..'
                />
                <button
                disabled={commentText?false:true}
                type='submit'
                >Gönder</button>
              </form>
            </div>
        </div>
        </div>
      </div>
  )
}

export default ProductItem