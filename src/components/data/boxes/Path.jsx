import React from 'react'
import { NavLink } from 'react-router-dom'

function Path({children}) {
  return (
    <div className='path'>
        {children.map((i,index)=>{
            return(
                <>
                <NavLink 
                className="link"
                key={index} to={i.to}>{i.text}</NavLink>
                {index!==children.length-1?">":null}
                </>
            )
        })}
    </div>
  )
}

export default Path