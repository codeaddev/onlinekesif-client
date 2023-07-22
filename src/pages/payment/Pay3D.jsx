import axios from "axios";
const Pay3D = () => {
  let data =
    '<soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">\
     <soap:Body>\
     <TP_WMD_UCD xmlns="https://turkpos.com.tr/">\
     <G>\
     <CLIENT_CODE>57685</CLIENT_CODE>\
     <CLIENT_USERNAME>TP10090554</CLIENT_USERNAME>\
     <CLIENT_PASSWORD>86847DFA7D9324BD</CLIENT_PASSWORD>\
     </G>\
     <GUID>e3daeb88-cad1-44e9-a359-7cfd9ffee22d</GUID>\
     <KK_Sahibi>FARUK KESKİNSOY</KK_Sahibi>\
     <KK_No>5213781510018580</KK_No>\
     <KK_SK_Ay>01</KK_SK_Ay>\
     <KK_SK_Yil>2028</KK_SK_Yil>\
     <KK_CVC>480</KK_CVC>\
     <KK_Sahibi_GSM>5308652184</KK_Sahibi_GSM>\
     <Hata_URL>http://localhost/error</Hata_URL>\
     <Basarili_URL>http://localhost/success</Basarili_URL>\
     <Siparis_ID>1</Siparis_ID>\
     <Siparis_Aciklama>Acıklama</Siparis_Aciklama>\
     <Taksit>1</Taksit>\
     <Islem_Tutar>10,00</Islem_Tutar>\
     <Toplam_Tutar>11,00</Toplam_Tutar>\
     <Islem_Hash>{{Islem_Hash}}</Islem_Hash>\
     <Islem_Guvenlik_Tip>3D</Islem_Guvenlik_Tip>\
     <Islem_ID>3</Islem_ID>\
     <IPAdr>78.173.66.222</IPAdr>\
     <Ref_URL></Ref_URL>\
     </TP_WMD_UCD>\
     </soap:Body>\
     </soap:Envelope>';

  let config = {
    method: "post",
    maxBodyLength: Infinity,
    url: "https://posws.param.com.tr/turkpos.ws/service_turkpos_prod.asmx",
    data: data,
    headers: {
      "Content-Type": "text/xml",
    },
  };

  axios
    .post(
      "https://posws.param.com.tr/turkpos.ws/service_turkpos_prod.asmx",
      data,
      {
        headers: {
          "Content-Type": "text/xml",
        },
      }
    )
    .then((response) => {
      console.log(JSON.stringify(response.data));
    })
    .catch((error) => {
      console.log(error);
    });
};

export default Pay3D;
