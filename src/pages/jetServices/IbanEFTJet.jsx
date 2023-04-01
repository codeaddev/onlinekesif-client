import React from 'react'
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { IconButton } from '@mui/material';


const IbanEFTJet = () => {
    const bankInfo={
        account:"01010101",
        iban:"TR111122223333444455556666",
        sube:"111/NİLÜFER/BURSA",
        name:"Ömer Faruk YAMAN"
    }
  return (
    <div className='iban-havale'>
        <div className="iban">
            <div className="row-info">
                <span className='title'>IBAN</span>
                <span className='text'>{bankInfo.iban}</span>
                <IconButton
                aria-label="kopyala"
                className='icon'
                onClick={() => {navigator.clipboard.writeText(bankInfo.iban)}}
                color='primary'>
                    <ContentCopyIcon/>
                </IconButton>
            </div>
        </div>
        <div className="havale">
            <div 
            
            className="row-info">
                <span className="title">Hesap No:</span>
                <span 
                
                className="text">{bankInfo.account}</span>
                <IconButton
                aria-label="kopyala"
                className='icon'
                onClick={() => {navigator.clipboard.writeText(bankInfo.account)}}
                color='primary'>
                    <ContentCopyIcon/>
                </IconButton>
            </div>
            <div className="row-info">
                <span className="title">Şube:</span>
                <span className="text">{bankInfo.sube}</span>
                <IconButton 
                aria-label="kopyala"
                className='icon'
                onClick={() => {navigator.clipboard.writeText(bankInfo.sube)}}
                color='primary'>
                    <ContentCopyIcon/>
                </IconButton>
            </div>
            <div className="row-info">
                <span className="title">Ad Soyad/Unvan:</span>
                <span className="text">{bankInfo.name}</span>
                <IconButton 
                aria-label="kopyala"
                className='icon'
                onClick={() => {navigator.clipboard.writeText(bankInfo.name)}}
                color='primary'>
                    <ContentCopyIcon/>
                </IconButton>
            </div>
        </div>
    </div>
  )
}

export default IbanEFTJet