import { Brands, DoesntMatter, DontKnow } from "./brandsForWish";
import HomeIcon from "../svg/homeIcon.svg"

export const KazanList=[
  {id:1,q:"İşlem Yapılacak Mesken Tipi Nedir",
  qTitle:"MeskenTipi",
  type:"radio",trigger:true,
    nest:[{id:2,q:"Müstakil Ev",type:"radio",p:1/9,trigger:true,qTitle:"summary",
            nest:[
                {id:3,q:"Mahalde Hangi Sistem Var ?",type:"radio",trigger:true,break:true,
                nest:[
                    {id:4,q:"Tek Duvar Tipi Kazan",type:"radio",p:1/9,
                    nest:[{id:5,q:"Mevcut Cihazınız Hangisi?",type:"select",label:[{id:5+".1",label:"Marka",array:DontKnow.concat(Brands),first:true,parent:5,alt:"Mevcut Cihaz"},{alt:"Mevcut Cihaz",id:5+".2",label:"Model",array:[],second:true,parent:5},{alt:"Mevcut Cihaz",id:5+".3",label:"Kapasite",array:[],third:true,parent:5}],
                        subq:"Mevcut Cihaz Çalışıyor mu ?",
                        nest:[
                            {id:6,q:"Evet",type:"radio",p:1/9,layerLast:true,parent:1},
                            {id:7,q:"Hayır",type:"radio",p:1/9,layerLast:true,parent:1}
                    ]}]
                },
                    {id:8,q:"Kaskad Duvar Tipi Kazan",type:"radio",p:1/9,
                    nest:[{id:9,q:"Mevcut Cihazınız Hangisi?",type:"select",label:[{id:9+"1",label:"Marka",array:DontKnow.concat(Brands),first:true,parent:5,alt:"Mevcut Cihaz"},{alt:"Mevcut Cihaz",id:9+".2",label:"Model",array:[],second:true,parent:5},{alt:"Mevcut Cihaz",id:9+".3",label:"Kapasite",array:[],third:true,parent:5}],
                    subq:"Mevcut Cihaz Çalışıyor mu ?",
                    nest:[
                        {id:10,q:"Evet",type:"radio",p:1/9,layerLast:true,parent:1},
                        {id:11,q:"Hayır",type:"radio",p:1/9,layerLast:true,parent:1}
                ]}]},
                    {id:12,q:"Tek Yer Tipi Kazan",type:"radio",p:1/9,nest:[{id:13,q:"Mevcut Cihazınız Hangisi?",type:"select",label:[{id:13+".1",label:"Marka",array:DontKnow.concat(Brands),first:true,parent:5,alt:"Mevcut Cihaz"},{alt:"Mevcut Cihaz",id:13+".2",label:"Model",array:[],second:true,parent:5},{alt:"Mevcut Cihaz",id:13+".3",label:"Kapasite",array:[],third:true,parent:5}],
                    subq:"Mevcut Cihaz Çalışıyor mu ?",
                    nest:[
                        {id:14,q:"Evet",type:"radio",p:1/9,layerLast:true,parent:1},
                        {id:15,q:"Hayır",type:"radio",p:1/9,layerLast:true,parent:1}
                ]}]},
                    {id:16,q:"Kaskad Yer Tipi Kazan",type:"radio",p:1/9,nest:[{id:17,q:"Mevcut Cihazınız Hangisi?",type:"select",label:[{id:17+".1",label:"Marka",array:DontKnow.concat(Brands),first:true,parent:5,alt:"Mevcut Cihaz"},{alt:"Mevcut Cihaz",id:17+".2",label:"Model",array:[],second:true,parent:5},{alt:"Mevcut Cihaz",id:17+".3",label:"Kapasite",array:[],third:true,parent:5}],
                    subq:"Mevcut Cihaz Çalışıyor mu ?",
                    nest:[
                        {id:18,q:"Evet",type:"radio",p:1/9,layerLast:true,parent:1},
                        {id:19,q:"Hayır",type:"radio",p:1/9,layerLast:true,parent:1}
                ]}]},
                    {id:20,q:"Cihazım Yok",type:"radio",p:2/8},
                ]},
                {id:21,q:"Evinizin Isıtma Tipi Nedir ?",type:"radio",nest:[
                    {id:22,q:"Radyatör",type:"radio",p:1/9},
                    {id:23,q:"Yerden Isıtma",type:"radio",p:1/9},
                    {id:24,q:"Radyatör ve Yerden Isıtma Var",type:"radio",p:1/9},
                ]},
                {id:25,q:"Evinizde Kaç Banyo Var ?",type:"radio",nest:[
                    {id:26,q:"1 Adet",type:"radio",p:1/9},
                    {id:27,q:"2 Adet",type:"radio",p:1/9},
                    {id:28,q:"3 Adet",type:"radio",p:1/9},
                    {id:29,q:"3 Adet +",type:"radio",p:1/9},
                ]},
                {id:30,q:"Eviniz Kaç Katlı ?",type:"radio",nest:[
                    {id:31,q:"Tek Katlı",type:"radio",p:1/9},
                    {id:32,q:"2 Katlı",type:"radio",p:1/9},
                    {id:33,q:"3 Katlı",type:"radio",p:1/9},
                    {id:34,q:"4 Katlı",type:"radio",p:1/9},
                ]},
                {id:35,q:"Kaç m2 ?",type:"radio",nest:[
                    {id:36,q:"0-50 m²",type:"radio",p:1/9},
                    {id:37,q:"50-100 m²",type:"radio",p:1/9},
                    {id:38,q:"100-150 m²",type:"radio",p:1/9},
                    {id:39,q:"150-200 m²",type:"radio",p:1/9},
                    {id:40,q:"200-250 m²",type:"radio",p:1/9},
                    {id:41,q:"250-300 m²",type:"radio",p:1/9},
                    {id:42,q:"300-350 m²",type:"radio",p:1/9},
                    {id:43,q:"350-400 m²",type:"radio",p:1/9},
                    {id:44,q:"400-450 m²",type:"radio",p:1/9},
                    {id:45,q:"500 m² +",type:"radio",p:1/9}
                ]},
                {id:46,q:"Kazan Sistemi Boyler Öncelikli mi ?",type:"radio",nest:[
                    {id:47,q:"GSU'lı (ekonomik)",type:"radio",p:1/9},
                    {id:48,q:"Dengeli (konforlu)",type:"radio",p:1/9},
                ]},
                {id:49,q:"Resirkülasyon Hattı Var mı ?",type:"radio",
                
                nest:
                [{id:50,
                    q:"Evet",type:"radio",last:true,parent:1,
                p:1/9},{id:51,q:"Hayır",type:"radio",last:true,parent:1,
                p:1/9}]},
        ]},
          {id:52,q:"Bina",type:"radio",p:1/11,
          trigger:true,
          nest:[
            {id:53,q:"Mahalde Hangi Sistem Var ?",type:"radio",trigger:true,break:true,
            nest:[
                {id:54,q:"Tek Duvar Tipi Kazan",type:"radio",p:1/11,
                nest:[{id:55,q:"Mevcut Cihazınız Hangisi?",type:"select",label:[{id:55+".1",label:"Marka",array:DontKnow.concat(Brands),first:true,parent:55,alt:"Mevcut Cihaz"},{alt:"Mevcut Cihaz",id:55+".2",label:"Model",array:[],second:true,parent:55},{alt:"Mevcut Cihaz",id:55+".3",label:"Kapasite",array:[],third:true,parent:55}],
                    subq:"Mevcut Cihaz Çalışıyor mu ?",
                    nest:[
                        {id:56,q:"Evet",type:"radio",p:1/11,layerLast:true,parent:1},
                        {id:57,q:"Hayır",type:"radio",p:1/11,layerLast:true,parent:1}
                ]}]
            },
                {id:58,q:"Kaskad Duvar Tipi Kazan",type:"radio",p:1/11,nest:[{id:59,q:"Mevcut Cihazınız Hangisi?",type:"select",label:[{id:59+".1",label:"Marka",array:DontKnow.concat(Brands),first:true,parent:59,alt:"Mevcut Cihaz"},{alt:"Mevcut Cihaz",id:59+".2",label:"Model",array:[],second:true,parent:59},{alt:"Mevcut Cihaz",id:59+".3",label:"Kapasite",array:[],third:true,parent:59}],
                subq:"Mevcut Cihaz Çalışıyor mu ?",
                nest:[
                    {id:60,q:"Evet",type:"radio",p:1/11,layerLast:true,parent:1},
                    {id:61,q:"Hayır",type:"radio",p:1/11,layerLast:true,parent:1}
            ]}]},
                {id:62,q:"Tek Yer Tipi Kazan",type:"radio",p:1/11,nest:[{id:63,q:"Mevcut Cihazınız Hangisi?",type:"select",label:[{id:63+".1",label:"Marka",array:DontKnow.concat(Brands),first:true,parent:63,alt:"Mevcut Cihaz"},{alt:"Mevcut Cihaz",id:63+".2",label:"Model",array:[],second:true,parent:63},{alt:"Mevcut Cihaz",id:63+".3",label:"Kapasite",array:[],third:true,parent:63}],
                subq:"Mevcut Cihaz Çalışıyor mu ?",
                nest:[
                    {id:63,q:"Evet",type:"radio",p:1/11,layerLast:true,parent:1},
                    {id:64,q:"Hayır",type:"radio",p:1/11,layerLast:true,parent:1}
            ]}]},
                {id:65,q:"Kaskad Yer Tipi Kazan",type:"radio",p:1/11,nest:[{id:66
                    ,q:"Mevcut Cihazınız Hangisi?",type:"select",label:[{id:66+".1",label:"Marka",array:DontKnow.concat(Brands),first:true,parent:66,alt:"Mevcut Cihaz"},{alt:"Mevcut Cihaz",id:66+".2",label:"Model",array:[],second:true,parent:66},{alt:"Mevcut Cihaz",id:66+".3",label:"Kapasite",array:[],third:true,parent:66}],
                subq:"Mevcut Cihaz Çalışıyor mu ?",
                nest:[
                    {id:67,q:"Evet",type:"radio",p:1/11,layerLast:true,parent:1},
                    {id:68,q:"Hayır",type:"radio",p:1/11,layerLast:true,parent:1}
            ]}]},
                {id:69,q:"Cihazım Yok",type:"radio",p:2/11},
            ]},
            {id:70,q:"Binanın Isıtma Tipi Nedir ?",type:"radio",nest:[
                {id:71,q:"Radyatör",type:"radio",p:1/11},
                {id:72,q:"Yerden Isıtma",type:"radio",p:1/11},
            ]},
            {id:73,q:"Evlerde Kaç Banyo Var ?",type:"radio",nest:[
                {id:74,q:"1 Adet",type:"radio",p:1/11},
                {id:75,q:"2 Adet",type:"radio",p:1/11},
                {id:76,q:"3 Adet",type:"radio",p:1/11},
                
            ]},
            {id:77,q:"Bina Kaç Katlı ?",type:"text",
            required:true,
            placeHolder:"kat sayısı",
            nest:[{id:78,q:"Devam Et",type:"button",p:1/11,}]},
            {id:79,q:"Kazan Kaç Daireyi Isıtacak ?",type:"text",
            required:true,
            placeHolder:"kaç daire ısınacak",
            nest:[{id:80,q:"Devam Et",type:"button",p:1/11,}]},
            {id:81,q:"Daireler Kaç m2 ?",type:"text",
            required:true,
            placeHolder:"m2",
            nest:[{id:82,q:"Devam Et",type:"button",p:1/11,}]},
            {id:83,q:"Kazanlar Kaç Binayı Besliyor ?",type:"radio",nest:[
                {id:84,q:"1 Bina",type:"radio",p:1/11},
                {id:85,q:"2 Bina",type:"radio",p:1/11},
                {id:86,q:"3 Bina",type:"radio",p:1/11},
                {id:87,q:"4 Bina",type:"radio",p:1/11},
                {id:88,q:"4 Bina +",type:"radio",p:1/11},
      
            ]},
            {id:89,q:"Binalar Arasındaki Uzaklık Kaç m ?",type:"text",
            required:true,
            placeHolder:"mesafe",
            nest:[{id:90,q:"Devam Et",type:"button",p:1/11,}]},
      
            {id:91,q:"Kazan Dairesi Nerede ?",type:"radio",nest:[
                {id:92,q:"Binanın Bodrum Katında",type:"radio",p:1/11,last:true,parent:1},
                {id:93,q:"Binanın Ara Katında",type:"radio",p:1/11,last:true,parent:1},
                {id:94,q:"Binanın Çatı Katında",type:"radio",p:1/11,last:true,parent:1},
                {id:95,q:"Kazan Dairesi Binadan Ayrı",type:"radio",p:1/11,last:true,parent:1},
            ]},
    ]},
        ]},
  {id:96,
    q:"Yeni Kazan Markası",
    break:true,
    longBreak:true,
    type:"select",
    //p:1,
    label:[{id:97,label:"Marka",array:DoesntMatter.concat(Brands),first:true,parent:96,alt:"Yeni Kazan Olarak Tercihim",proceed:true,p:1}],
    },
  {id:98,
    q:"Sayaç Numarasını Yazar mısınız?",
    type:"text",
    required:true,
    placeHolder:"sayaç numarası",
    nest:[{id:545,q:"Devam Et",type:"button",p:1,endForm:true}]
    },
]