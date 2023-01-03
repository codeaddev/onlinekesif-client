import React from 'react'
import { useLocation } from 'react-router-dom'

const SingleProductAlt = () => {
    const {state}=useLocation()
  return (
    <div>{state}</div>
  )
}

export default SingleProductAlt