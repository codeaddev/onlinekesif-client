//testPayment
const axios = require('axios');
const CryptoJS=require("crypto-js")

async function payment3DConfirm(param) {

let data =
`<soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">\
 <soap:Body>\
 <TP_WMD_Pay xmlns="https://turkpos.com.tr/">\
 <G>\
 <GUID>${param.GUID}</GUID>\
 </G>\

 <UCD_MD>${param.UCD_MD}</UCD_MD>\
 <Islem_GUID>${param.Islem_GUID}</Islem_GUID>\
 <Siparis_ID>${param.Siparis_ID}</Siparis_ID>\
 </TP_WMD_Pay>\
 </soap:Body>\
 </soap:Envelope>`;

     let config = {
        method: 'post',
        maxBodyLength: Infinity,
        //url: 'https://posws.param.com.tr/turkpos.ws/service_turkpos_prod.asmx',
        //url: 'https://posws.param.com.tr/turkpos.ws/service_turkpos_prod.asmx',
        headers: { 
            'Content-Type': 'text/xml', 
            'Cookie': 'cookiesession1=678A3E0DOPQRSTUVWXYZABCDESTU345B'
        },
        data : data
        };
  try {
    const response = await axios("https://posws.param.com.tr/turkpos.ws/service_turkpos_prod.asmx",config);
    // Handle the response here
    console.log('Response:', response.data);
    return response.data;
  } catch (error) {
    // Handle any errors here
    console.error(error);
    throw error;
  }
}

module.exports = {
  payment3DConfirm
};
