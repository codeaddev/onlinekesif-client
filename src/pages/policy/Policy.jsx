import React, { useEffect } from 'react'
import "../detail.scss"

function Policy() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className='page-container'>Policy</div>
  )
}

export default Policy