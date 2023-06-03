import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const ValidationPage = () => {
  function handleFormSubmit(event) {
    event.preventDefault(); // Formun otomatik olarak gönderilmesini engelleyin

    // Form verilerini alın
    const formData = new FormData(event.target);

    // FormData nesnesini döngü ile gezerek verileri alabilirsiniz
    for (let pair of formData.entries()) {
      const key = pair[0];
      const value = pair[1];

      // Alınan verileri kullanmak için yapmanız gereken işlemleri burada gerçekleştirin
      console.log(key + ": " + value);
    }
  }

  // Formu dinleyen bir olay dinleyicisi ekleyin
  const form = document.querySelector('form');
  form.addEventListener('submit', handleFormSubmit);
    
  return (
    <div style={{height:200}} >
      <form action="http://localhost:3000/dogrulama" method="POST">
      </form>
    </div>
  )
}

export default ValidationPage