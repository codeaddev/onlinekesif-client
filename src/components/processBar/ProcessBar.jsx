import React from 'react'
import "./process.scss"

function ProcessBar({percent,total}) {

    var sum=percent?.reduce((a,b)=>{return a+b},0)
    var percentage=(sum/total)*100
    return (
    <div
    className='process'
    >
        <div 
        className='processed'
        style={{width:`${percentage}%`}}
        ></div>

    </div>
  )
}

export default ProcessBar