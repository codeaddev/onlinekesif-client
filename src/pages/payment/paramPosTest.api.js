import axios from "axios";
import CryptoJS from "crypto-js";




const firm={
    CLIENT_CODE:"57685",
    CLIENT_USERNAME:"TP10090554",
    CLIENT_PASSWORD:"86847DFA7D9324BD",
    GUID:"e3daeb88-cad1-44e9-a359-7cfd9ffee22d",
    SanalPOS_ID:"1012"
}
const testFirm={
    CLIENT_CODE:"10738",
    CLIENT_USERNAME:"Test",
    CLIENT_PASSWORD:"Test",
    GUID:"0c13d406-873b-403b-9c09-a5766840d98c",
    SanalPOS_ID:"1029",
    Hata_URL:"http://localhost:3000/odeme",
    Basarili_URL:"http://localhost:3000/odeme"
}

const user={
    KK_Sahibi:"BEYTULLAH TAŞKIN",
    KK_No:"4508034508034509",
    KK_SK_Ay:"12",
    KK_SK_Yil:"2026",
    KK_CVC:"000",
    KK_Sahibi_GSM:""
}
const product={
    Taksit:"1",
    Islem_Tutar:"10,00",
    Toplam_Tutar:"11,00",
    Siparis_ID:"1"
}

var hashSha1 =  CryptoJS.SHA1(testFirm.CLIENT_CODE+testFirm.GUID+testFirm.SanalPOS_ID+product.Taksit+"10,00"+"11,00"+product.Siparis_ID+testFirm.Hata_URL+testFirm.Basarili_URL);
var Islem_Hash = CryptoJS.enc.Base64.stringify(hashSha1);

function processXML(xmlText) {
    const parser = new DOMParser();

    const xmlDoc = parser.parseFromString(xmlText, 'application/xml');
    const htmlElement = xmlDoc.getElementsByTagName('UCD_HTML')[0]; // Assuming 'html' is the root element of the HTML code
    const htmlCode = htmlElement.outerHTML;

    // Extract the HTML code from the XML
    // You'll need to navigate the XML document based on your specific XML structure and extract the HTML content
  
    // Open the HTML page in a new window or tab
    const newWindow = window.open();
    newWindow.document.write(htmlCode);
    newWindow.document.close();
  }
function processXMLTest(xmlText) {
    const parser = new DOMParser();
    console.log(parser)
    const xmlDoc = parser.parseFromString(xmlText);
    console.log(xmlDoc)

    const htmlElement = xmlDoc.getElementsByTagName('UCD_URL')[0]; // Assuming 'html' is the root element of the HTML code
    console.log(htmlElement)
    //const htmlCode = htmlElement.outerHTML;

    // Extract the HTML code from the XML
    // You'll need to navigate the XML document based on your specific XML structure and extract the HTML content
  
    // Open the HTML page in a new window or tab
    const newWindow = window.open();
    newWindow.document.write(htmlElement);
    newWindow.document.close();
  }

export const Pay3DTest=()=>{
    let data =
    `<soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">\
     <soap:Body>\
     <TP_Islem_Odeme xmlns="https://turkpos.com.tr/">\
     <G>\
     <CLIENT_CODE>${testFirm.CLIENT_CODE}</CLIENT_CODE>\
     <CLIENT_USERNAME>${testFirm.CLIENT_USERNAME}</CLIENT_USERNAME>\
     <CLIENT_PASSWORD>${testFirm.CLIENT_PASSWORD}</CLIENT_PASSWORD>\
     </G>\
     <SanalPOS_ID>${testFirm.SanalPOS_ID}</SanalPOS_ID>\
     <GUID>${testFirm.GUID}</GUID>\
     <KK_Sahibi>${user.KK_Sahibi}</KK_Sahibi>\
     <KK_No>${user.KK_No}</KK_No>\
     <KK_SK_Ay>${user.KK_SK_Ay}</KK_SK_Ay>\
     <KK_SK_Yil>${user.KK_SK_Yil}</KK_SK_Yil>\
     <KK_CVC>${user.KK_CVC}</KK_CVC>\
     <KK_Sahibi_GSM>${user.KK_Sahibi_GSM}</KK_Sahibi_GSM>\
     <Hata_URL>${testFirm.Hata_URL}</Hata_URL>\
     <Basarili_URL>${testFirm.Basarili_URL}</Basarili_URL>\
     <Siparis_ID>${product.Siparis_ID}</Siparis_ID>\
     <Siparis_Aciklama>Acıklama</Siparis_Aciklama>\
     <Taksit>${product.Taksit}</Taksit>\
     <Islem_Tutar>${product.Islem_Tutar}</Islem_Tutar>\
     <Toplam_Tutar>${product.Toplam_Tutar}</Toplam_Tutar>\
     <Islem_Hash>${Islem_Hash}</Islem_Hash>\
     <Islem_ID>3</Islem_ID>\
     <IPAdr>78.173.66.222</IPAdr>\
     <Ref_URL>http://localhost/</Ref_URL>\
     </TP_Islem_Odeme>\
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

            //canlı--axios("/service_turkpos_prod.asmx",config)
            axios("/service_turkpos_test.asmx",config)
            .then((response) => {
            console.log(JSON.parse(JSON.stringify(response.data)).split("<UCD_URL>")[1].split("</UCD_URL>")[0]);
            window.open(JSON.parse(JSON.stringify(response.data)).split("<UCD_URL>")[1].split("</UCD_URL>")[0])
            //processXML(JSON.stringify(response.data));
            //processXMLTest(JSON.stringify(response.data));
            })
            .catch((error) => {
            console.log(error);
            });

}

//"https://test-pos.param.com.tr/3D_Secure/AkilliKart_3DPay_EST.aspx?rURL=TURKPOS_3D_TRAN&amp;SID=6006421799</UCD_URL><Sonuc>1</Sonuc><Sonuc_Str>İşlem Başarılı.</Sonuc_Str><Banka_Sonuc_Kod>0</Banka_Sonuc_Kod><Komisyon_Oran>0</Komisyon_Oran></TP_Islem_OdemeResult></TP_Islem_OdemeResponse></soap:Body></soap:Envelope>"