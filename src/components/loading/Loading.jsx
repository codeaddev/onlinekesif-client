import React from 'react'
import "./loading.scss"
import CircularProgress from '@mui/material/CircularProgress';

function Loading({title}) {
  return (
    <div className='loading'>
        <CircularProgress />
        <p>{title}</p>
    </div>
  )
}

export default Loading