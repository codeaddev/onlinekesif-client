import { klimaMarkalari } from "./klimaBrands";
import {MustakilEv} from "../../components/data/svgQue/mustakilEv.svg"

export const KlimaList=[
    {id:1,
        qTitle:"MeskenTipi",
        q:"İşlem Yapılacak Mesken Tipi Nedir",type:"radio",
      nest:[{id:2,
        q:"Müstakil Ev",
        type:"radio",
        p:1,
      },
            {id:3,
              q:"Daire",
              type:"radio",
              p:1,
            },
            {id:4,
              q:"Bina",
              type:"radio",
              p:1,
             },
            {id:5,
              q:"Ofis",
              type:"radio",
              p:1,
              },
            {id:6,
              q:"Fabrika",
              type:"radio",
              p:1,
             },]},
    {id:7,q:"Mahalde Nasıl Bir Soğutma İhtiyacı Var ?",
    qTitle:"summary",
    trigger:true,
    type:"radio",nest:[
        {id:8,q:"Yeni Klima Almak İstiyorum",type:"radio",p:1},
        {id:9,q:"Eski Klimamı Değiştirmek İstiyorum",type:"radio",
        p:1/2,
 
        nest:[{id:10,
            trigger:true,
            q:"Yeni Klima Farklı Bir Yere Takılacak ?",type:"radio",nest:[
            {id:11,q:"Evet",type:"radio",p:1/2,last:true,parent:2},
            {id:12,q:"Hayır",type:"radio",p:1/2,last:true,parent:2}
    
    ]}]},
]},        
    {id:13,
        break:true,
        q:"Hangi Odayı veya Odaları Soğutmak İstiyorusunuz ?", type:"selectMany",nest:[
        {id:14,q:"Oturma Odası",type:"selectMany",p:1},
        {id:15,q:"Yatak Odası",type:"selectMany",p:1},
        {id:16,q:"Salon",type:"selectMany",p:1},
        {id:17,q:"Mutfak",type:"selectMany",p:1},
        {id:18,q:"Oda",type:"selectMany",p:1},
        {id:19,q:"Koridor",type:"selectMany",p:1},
        {id:20,q:"Spor Odası",type:"selectMany",p:1},
        {id:20.1,q:"Çocuk Odası",type:"selectMany",p:1},
        
]},        
    {id:21,q:"Oda Hangi Katta ?", type:"radio",nest:[
        {id:22,q:"Bodrum",type:"radio",p:1},
        {id:23,q:"Zemin",type:"radio",p:1},
        {id:24,q:"Ara Kat",type:"radio",p:1},
        {id:25,q:"Çatı",type:"radio",p:1},
        
]},        
    {id:26,q:"Odanın Büyüklüğü Ne Kadar ?", type:"radio",nest:[
        {id:27,q:"6-12 m2",type:"radio",p:1},
        {id:28,q:"12-23 m2",type:"radio",p:1},
        {id:29,q:"23-35 m2",type:"radio",p:1},
        {id:30,q:"35-50 m2",type:"radio",p:1},
        
]},        
    {id:31,q:"Oda Ne Kadar Güneş Alıyor ?", type:"radio",nest:[
        {id:32,q:"Az",type:"radio",p:1},
        {id:33,q:"Orta",type:"radio",p:1},
        {id:34,q:"Çok",type:"radio",p:1},
        
]},        
    {id:35,q:"Klima Hangi Duvara Takılacak ?", type:"radio",nest:[
        {id:36,q:"İç Duvar",type:"radio",p:1},
        {id:37,q:"Dış duvar",type:"radio",p:1},
        
]},        
    {id:38,q:"Dış Ünite Nereye Takılacak ?", type:"radio",nest:[
        {id:39,q:"0 - 5 metre arası",type:"radio",p:1},
        {id:40,q:"5 - 10 metre arası",type:"radio",p:1},
        {id:41,q:"10 - 15 metre arası",type:"radio",p:1},
        {id:42,q:"15 - 20 metre arası",type:"radio",p:1},
        {id:43,q:"20 - 25 metre arası",type:"radio",p:1},
        
]},        
    {id:44,q:"Bina Yalıtım Durumu Nasıl ?", type:"radio",nest:[
        {id:45,q:"Yalıtımlı",type:"radio",p:1},
        {id:46,q:"Yalıtımsız",type:"radio",p:1},

        
]}, 
{id:47,
q:"Tercih Ettiğiniz Bir Klima Markası Var mı?",
type:"select",
label:[{id:47+".1",label:"Marka",
array:klimaMarkalari,
first:true,
alt:"Tercih Ettiğiniz",
parent:47,
proceed:true,
endForm:true,p:1
}],}

]