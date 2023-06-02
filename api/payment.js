//testPayment
const axios = require('axios');
const CryptoJS=require("crypto-js")

async function payment3D(param) {
    var hashSha1 =  CryptoJS.SHA1(param.CLIENT_CODE+param.GUID+param.Taksit+param.Islem_Tutar+param.Toplam_Tutar+param.Siparis_ID+param.Hata_URL+param.Basarili_URL);
    var Islem_Hash = CryptoJS.enc.Base64.stringify(hashSha1);
let data =
`<soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">\
 <soap:Body>\
 <Pos_Odeme xmlns="https://turkpos.com.tr/">\
 <G>\
 <CLIENT_CODE>${param.CLIENT_CODE}</CLIENT_CODE>\
 <CLIENT_USERNAME>${param.CLIENT_USERNAME}</CLIENT_USERNAME>\
 <CLIENT_PASSWORD>${param.CLIENT_PASSWORD}</CLIENT_PASSWORD>\
 </G>\
 <GUID>${param.GUID}</GUID>\
 <KK_Sahibi>${param.KK_Sahibi}</KK_Sahibi>\
 <KK_No>${param.KK_No}</KK_No>\
 <KK_SK_Ay>${param.KK_SK_Ay}</KK_SK_Ay>\
 <KK_SK_Yil>${param.KK_SK_Yil}</KK_SK_Yil>\
 <KK_CVC>${param.KK_CVC}</KK_CVC>\
 <KK_Sahibi_GSM>${param.KK_Sahibi_GSM}</KK_Sahibi_GSM>\
 <Hata_URL>${param.Hata_URL}</Hata_URL>\
 <Basarili_URL>${param.Basarili_URL}</Basarili_URL>\
 <Siparis_ID>${param.Siparis_ID}</Siparis_ID>\
 <Siparis_Aciklama>Acıklama</Siparis_Aciklama>\
 <Taksit>${param.Taksit}</Taksit>\
 <Islem_Tutar>${param.Islem_Tutar}</Islem_Tutar>\
 <Toplam_Tutar>${param.Toplam_Tutar}</Toplam_Tutar>\
 <Islem_Hash>${Islem_Hash}</Islem_Hash>\
 <Islem_Guvenlik_Tip>3D</Islem_Guvenlik_Tip>\
 <Islem_ID>3</Islem_ID>\
 <IPAdr>78.173.66.222</IPAdr>\
 <Ref_URL>http://localhost/</Ref_URL>\
 </Pos_Odeme>\
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
  payment3D
};
