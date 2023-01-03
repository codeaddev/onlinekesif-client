import React, { useEffect, useState } from 'react'
import { useRef } from 'react';

function AnyIcon({
    className,
    child,
    percent

}) {

const [state,setState]=useState(false)
const [lastChild,setLastChild]=useState("")
  

  const svg=useRef(null)

  var parser = new DOMParser();
  var doc = parser.parseFromString(child,"text/xml");
  var last=doc.firstChild;

  useEffect(()=>{ 
    let localRefOther=null;
    localRefOther=svg;
    if(svg.current){
        
        svg.current.innerHTML="";
        svg.current.appendChild(last)
         
      }
      return () => {
        setState((pre)=>!pre); // localRef works here!
     }
  
  }, [percent]);

  return (
    <div
    id='div' 
    className={className}
    ref={svg}/>
  )
}

export default AnyIcon