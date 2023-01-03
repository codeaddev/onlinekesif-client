import { Brands } from "./brandsForWish";
import HomeIcon from "../svg/homeIcon.svg"

export const KombiList=[
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
  {id:7,
    
    q:"Mahal Kaç m² ?",
    type:"radio",
    nest:[{id:8,q:"0-50 m²",type:"radio",p:1},
          {id:9,q:"50-100 m²",type:"radio",p:1},
          {id:10,q:"100-150 m²",type:"radio",p:1},
          {id:11,q:"150-200 m²",type:"radio",p:1},
          {id:12,q:"200-250 m²",type:"radio",p:1},
          {id:13,q:"250-300 m²",type:"radio",p:1},
          {id:14,q:"300-350 m²",type:"radio",p:1},
          {id:15,q:"350-400 m²",type:"radio",p:1},
          {id:16,q:"400-450 m²",type:"radio",p:1},
          {id:17,q:"500 m² +",type:"radio",p:1}]},
  {id:18,q:"Eviniz Kaç Odalı?",type:"radio",
        nest:[
          {id:19,q:"1+1",type:"radio",p:1},
          {id:20,q:"2+0",type:"radio",p:1},
          {id:21,q:"2+1",type:"radio",p:1},
          {id:22,q:"3+1",type:"radio",p:1},
          {id:23,q:"4+1",type:"radio",p:1},
          {id:24,q:"5+1",type:"radio",p:1},
          {id:25,q:"5+2",type:"radio",p:1}]},
  {id:26,q:"Evinizde Kaç Banyo Var?",type:"radio",
        nest:[
          {id:27,q:"1 Adet",type:"radio",p:1},
          {id:28,q:"2 Adet",type:"radio",p:1},
          {id:29,q:"3 Adet",type:"radio",p:1},
          {id:30,q:"4+ Adet",type:"radio",p:1}]}, 
  {id:31,type:"radio",q:"Kombi Keşif Talebiniz Hangisidir",trigger:true,qTitle:"summary",
      nest:[
          {id:32,type:"radio",q:"Mevcutta Kombi Yok, İlk Defa Alınacak",break:true,p:0,
                  nest:[{id:33,q:"Kombinizin Yeri Neresi Olacak",type:"radio",
                            nest:[
                              {id:34,q:"Balkon",type:"radio",parent:31,p:1/3,},
                              {id:35,q:"Cihaz Odası",type:"radio",parent:31,p:1/3,},
                              {id:36,q:"Mutfak",type:"radio",parent:31,p:1/3,}]},
                        {id:37,q:"Evinizde Mevcutta Yerden Isıtma veya Radyatör var mı?",type:"radio",trigger:true,
                              nest:[{id:38,q:"Evet",type:"radio",p:1/3,
                                       nest:[
                                        {id:39,q:"Evinizin Isıtma Tipi Nedir?",type:"radio",trigger:true,break:true,
                                          nest:[{id:40,q:"Radyatör",type:"radio",last:true,
        
                                          parent:5,p:1/3},
                                                {id:41,q:"Yerden Isıtma",type:"radio",last:true,parent:5,p:1/3,
                                              
                                              },
                                                {id:42,q:"İkisi de Mevcut",type:"radio",last:true,parent:5,p:1/3,}]}]},
                                    {id:43,q:"Hayır",type:"radio",p:1/3,
                                      nest:[{id:44,q:"Hangi Isıtma Tipini Yaptırmak İstiyorsunuz?",trigger:true,break:true,
                                          nest:[{id:45,q:"Radyatör",type:"radio",last:true,parent:5,p:1/3},
                                                {id:46,q:"Yerden Isıtma",type:"radio",last:true,parent:5,p:1/3}]}]}]}
                ]},
          {id:47,type:"radio",q:"Mevcutta Kombi Var, Değiştirmek İstiyorum",break:true,p:0,
                  nest:[{id:48,
                    q:"Mevcut Cihazınız Hangisi?",
                    type:"select",
                    label:[{id:48+".1",label:"Marka",array:Brands,first:true,parent:48,alt:"Mevcut Cihaz"},{alt:"Mevcut Cihaz",id:48+".2",label:"Model",array:[],second:true,parent:48},{alt:"Mevcut Cihaz",id:48+".3",label:"Kapasite",array:[],third:true,parent:48}],
                  subq:"Mevcut Kombiniz Çalışıyor mu ?",
                    nest:[{id:111,q:"Evet",type:"radio",
                  p:1/6,
                 },{id:112,q:"Hayır",type:"radio",
                p:1/6,
                }]        
                },
                        {id:50,q:"Kombi Farklı Bir Yere Taşınacak mı?",type:"radio",trigger:true,
                        
                        
                        nest:[
                          {id:51,q:"Evet",type:"radio",
                          p:1/6,
                            nest:[{id:52,q:"Kombinizin Mevcut Yeri Neresi?",type:"radio",
                                nest:[
                                  {id:53,q:"Balkon",type:"radio",p:1/6,},
                                  {id:54,q:"Cihaz Odası",type:"radio",p:1/6,},
                                  {id:55,q:"Mutfak",type:"radio",p:1/6,},
                                  {id:56,q:"Diğer",type:"radio",p:1/6,},
                              
                                  ]},
                                  {id:57,q:"Kombinizin Yeri Neresi Olacak",type:"radio",
                                nest:[
                                  {id:58,q:"Balkon",type:"radio",p:1/6,},
                                  {id:59,q:"Cihaz Odası",type:"radio",p:1/6,},
                                  {id:60,q:"Mutfak",type:"radio",p:1/6,},
                                  {id:61,q:"Diğer",type:"radio",p:1/6,},
                                ]
                                  },
                                  {id:62,q:"Evinizde Mevcutta Yerden Isıtma veya Radyatör var mı?",type:"radio",trigger:true,
                              nest:[{id:63,q:"Evet",type:"radio",p:1/6,
                                      nest:[{id:64,q:"Evinizin Isıtma Tipi Nedir?",type:"radio",trigger:true,break:true,
                                          nest:[{id:65,q:"Radyatör",type:"radio",last:true,parent:5,p:1/6,},
                                                {id:66,q:"Yerden Isıtma",type:"radio",last:true,parent:5,p:1/6,},
                                                {id:67,q:"İkisi de Mevcut",type:"radio",last:true,parent:5,p:1/6,}]}]},
                                    {id:68,q:"Hayır",type:"radio",
                                      nest:[{id:69,q:"Hangi Isıtma Tipini Yaptırmak İstiyorsunuz?",trigger:true,break:true,
                                          nest:[{id:70,q:"Radyatör",type:"radio",last:true,parent:5,p:1/6,},
                                                {id:71,q:"Yerden Isıtma",type:"radio",last:true,parent:5,p:1/6,}]}]}]}
                            
                            ]},
                            {id:72,q:"Hayır",type:"radio",
                            p:3/6,
                                nest:[
                                  {id:73,q:"Evinizde Mevcutta Yerden Isıtma veya Radyatör var mı?",type:"radio",trigger:true,
                              nest:[{id:74,q:"Evet",
                              p:1/6,
                              type:"radio",
                                      nest:[{id:75,q:"Evinizin Isıtma Tipi Nedir?",
                                      type:"radio",trigger:true,break:true,
                                          nest:[{id:76,q:"Radyatör",type:"radio",last:true,parent:5,p:1/6,},
                                                {id:77,q:"Yerden Isıtma",type:"radio",last:true,parent:5,p:1/6,},
                                                {id:78,q:"İkisi de Mevcut",type:"radio",last:true,parent:5,p:1/6,}]}]},
                                    {id:79,q:"Hayır",type:"radio",
                                    p:1/6,
                                      nest:[{id:80,q:"Hangi Isıtma Tipini Yaptırmak İstiyorsunuz?",trigger:true,break:true,
                                          nest:[{id:81,q:"Radyatör",type:"radio",last:true,parent:5,p:1/6,},
                                                {id:82,q:"Yerden Isıtma",type:"radio",last:true,parent:5,p:1/6,}]}]}]}
                                ]}
                            
                          ]}
                      ]},
          {id:83,type:"radio",q:"Merkezi Sistemden Bireysele Geçiş Yaptık",p:0,
          break:true,
          trigger:true,
          
          nest:[{id:84,q:"Kombinizin Yeri Neresi Olacak",type:"radio",
              //trigger:true,
                    nest:[
                        {id:85,q:"Balkon",type:"radio",p:1/3},
                        {id:86,q:"Cihaz Odası",type:"radio",p:1/3},
                        {id:87,q:"Mutfak",type:"radio",p:1/3},
                      ]
                    },
                    {id:88,q:"Evinizin Isıtma Tipi Nedir?",type:"radio",
                    //break:true,
                    trigger:true,
                        nest:[
                          {id:89,q:"Radyatör",type:"radio",p:1/3,
                              nest:[
                                {id:90,q:"Mevcut Radyatörlerinizin Tipini Seçer misiniz?",type:"radio",trigger:true,break:true,
                                nest:[{id:91,q:"Panel Radyatör",type:"radio",last:true,parent:5,p:1/3},
                                {id:92,q:"Döküm Radyatör",type:"radio",last:true,parent:5,p:1/3}]
                              }
                              ]},
                          {id:93,q:"Yerden Isıtma",type:"radio",last:true,parent:5,p:2/3}
                        ]}
                  ]},
          {id:94,type:"radio",q:"Soba Var, Kombiye Geçmek İstiyorum",break:true,p:0,
          nest:[{id:95,q:"Kombinizin Yeri Neresi Olacak",type:"radio",
          nest:[
              {id:96,q:"Balkon",type:"radio",p:1/2},
              {id:97,q:"Cihaz Odası",type:"radio",p:1/2},
              {id:98,q:"Mutfak",type:"radio",p:1/2},
              {id:99,q:"Oturma Odası",type:"radio",p:1/2},
            ]
          },
          {id:100,q:"Evinizin Isıtma Hangisi Olacak?",type:"radio",trigger:true,
          //trigger:true,
          //break:true,
              nest:[
                {id:101,q:"Radyatör",type:"radio",last:true,parent:5,p:1/2},
                {id:102,q:"Henüz Karar Vermedik",type:"radio",last:true,p:1/2,parent:5},
                {id:103,q:"Yerden Isıtma",type:"radio",last:true,parent:5,p:1/2}
              ]}
        ]
          },
      ]
  },
  {id:104,q:"Tercih Ettiğiniz Bir Kombi Markası Var mı?",type:"select",
  label:[{id:104+".1",label:"Marka",array:Brands,first:true,alt:"Tercih Ettiğiniz",parent:104}],
  break:true,
  nest:[{id:105,q:"Devam Et",type:"button",nest:null,p:1}]},
  {id:106,
    q:"Oda Termostatı İstiyor musunuz?",
    type:"radio",
    
    nest:[{id:107,q:"Evet",type:"radio",p:1,endForm:true},
    {id:108,q:"Hayır",type:"radio",p:1,endForm:true}],         
        },

]
