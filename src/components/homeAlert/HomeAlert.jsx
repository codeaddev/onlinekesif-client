import React from 'react'
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
const HomeAlert = ({
    successMessage,
    errorMessage,
    setErrorMessage,
    setSuccessMessage
}) => {
  return (
    <div>{successMessage||errorMessage?<Stack className="alert-box">
    {errorMessage? <Alert className="alert" severity="error">
       <div className="alert-in">
       <p>{errorMessage}</p><button
       className='error'
       onClick={()=>setErrorMessage("")}
       >Tamam</button>  
       </div>
       </Alert>:null}
     {successMessage?<Alert className="alert" severity="success"><div className="alert-in">
       <p>{successMessage}</p><button
       onClick={()=>setSuccessMessage("")}
       className='success'
       >Tamam</button>
       </div></Alert>:null}
     </Stack>:null}</div>
  )
}

export default HomeAlert