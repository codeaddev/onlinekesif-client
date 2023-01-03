import React, { useContext } from 'react'
import { Navigate, NavLink, useNavigate } from 'react-router-dom'
import { CloudContext } from '../../context/cloudContext'
import "./blog.scss"
import Eye from "./svg/eye.svg"
import Time from "./svg/time.svg"
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";


function Blog() {

  const blogs=[
    {id:"01",
    mainSubject:"KASKAD",
    readed:50,
    filter:"Kombi",
    createdAt:new Date(),
    readTime:5,
    author:"Ömer Faruk Yaman",
    summary:{title:"Kaskad Sistemi Nedir ve Nasıl Çalışır ?",
    subtitle:"Mühendis olsun olmasın ısıtma tesisatıyla ilgilenen herkesin merak ettiği konulardan biri kaskad sistemidir. Kaskad sistemi nedir sorusuyla sık sık karşılaşmaktayız. Bu konuyla alakalı olarak size kaskad sistemi ve çalışma prensipleriyle ilgili bir blog hazırladık.",
    img:"https://www.bursay.com.tr/wp-content/uploads/2022/04/kaskad-sistemi-nedir-giris-02.jpg",
    imgAlt:"kaskad-sistemi-nedir"
  },
    subjects:[
      {id:"01",
      title:"Kaskad Sistemlerinde Öne Çıkan Başlıklar",
      order:["li"],
      liType:"unordered",
      li:["Kaskad sistem bir çok kazanın birleşimi ile ihtiyaç duyulan kapasiteyi yakalayarak ısıtma sağlayan sistemlerdir.","Kazanların kaskad olarak bağlandığı sistemlerde alt ekipmanlar çok önemlidir, sistem performansını alt ekipmanlar belirler.","Bu sistemlerde kollektör, denge kabı, hava ayırıcı ve pislik tortu ayırıcıların çapları doğru olmalıdır. Su hızı 0,3 m/s'yi geçmemesine özen gösterilmelidir."]
    },
    {id:"02",
    title:"Kaskad Nasıl Bir Sistemdir?",
    order:["text","img"],
    text:"Son zamanlarda kaskad sistemi nedir sorusu herkes tarafından ilgi görmektedir. Kaskad sistemi genellikle yüksek binalarda ve sitelerde merkezi ısıtma sistemi olarak kullanılmaktadır. Bu sistemin tercih edilme sebeplerinden biri tek döşeme yoğuşmalı kazan sistemine alternatif olmasıdır.",
    img:"https://www.bursay.com.tr/wp-content/uploads/2022/04/kaskad-sistemi-nasil-yapilir-05.jpg",
    imgAlt:"kaskad-sistemi-nasil-yapilir"},
    
    {id:"03",
    title:"Kaskad Sisteminde Kullanılan Parçalar",
    order:["text","li"],
    liType:"ordered",
    li:["Denge kabı","Pislik ayırıcı","Sirkülasyon pompası","Kombileri kumanda eden kontrol ünitesi","Bağlantı elemanları","Güvenlik ekipmanları"],text:"Her sistemde olduğu gibi kaskad sisteminde de olmazsa olmaz demirbaş parçalar bulunmaktadır. Kaskad sistemi nedir sorusunu anlayabilmek için bu parçalara göz atmakta fayda var. Sistemde kullanılan parçalar;"},
    {id:"04",
    title:"Kaskad Sistemi Nedir?",
    order:["li"],
    liType:"p",
    li:["Kazan dairesi kurmak çoğu zaman masraflı bir iştir. Kaskad sisteminin en çok tercih edilme sebeplerinden biri de budur. Bu sistemi kullanarak aynı zamanda doğalgaz tüketiminde de tasarruf sağlamış olursunuz.",
    "Gelelim Isıtma sistemleri ve tesisatıyla ilgilenen çoğu kişinin en çok merak ettiği soruya! Kaskad sistemi nedir ve nasıl çalışır? Öncelikle kaskad sisteminin tek ve yek bir sistem olduğunu söyleyebiliriz. Birçok kombi kontrol modülü ile birbirine bağlanır ve böylece güçlü bir sistem oluşturulur.",
    "Bu sistemde sıcak su seviyesi istenilen seviyeye gelene kadar kombiler sırasıyla çalışır. İlk çalışan kombinin ardından sıcak su seviyesi istenilen seviyeye ulaşamadığında direkt olarak diğer kombi devreye girer ve sitem böyle devam eder.",
    "Kaskad sistemi nedir sorusundan sonra diyeceksiniz ki bu sistemi için kaç kazan gerekli ? Aslında bakarsanız size sabit bir kombi sayısı vermemiz mümkün değil. Kombi sayısı sistemin büyüklüğüne göre değişecektir."]},
    {id:"05",
  title:"Kaskad Sistemi Nasıl Çalışır?",
  liType:"p",
  order:["text","img","li"],
  text:"Kaskad sistemi nedir sorusu kadar merak edilen bir diğer soru da kaskad sistemi nasıl çalışır! Kaskad sistemi aynı zamanda kaskad kazan sistemi olarak da anılmaktadır. Böyle anılmasının sebebi birçok yoğuşmalı kombinin birbirine bağlı bir şekilde çalışmasıdır.",
  li:["Kaskad sisteminde asıl amaç istenilen sıcaklığa ulaşmaktır ve bunun için önce bir kombi çalışır. Eğer tek kombi ile hedefe ulaşılamıyorsa otomatik olarak ikinci kombi devreye girer. Yine yeterli değilse sırayla diğer kombiler devreye girecektir. Durum ve şartlara göre sistem bu mantıkta ilerler.",
  "Kaskad sisteminde bütün kazan bacalarının birbirine bağlanması şart değildir, isteğe ve duruma göre kazanlar ayrı bacalara bağlanabilir. Peki kaskad sisteminde en az ve en fazla kaç kombi bulundurulabilir? Kaskad için en az 2 kombi gerekir. Kaskad sisteminde kombi sayısı sistemin büyüklüğüne göre değişecektir fakat en fazla 25 kombi ile çalışabilir. "
],
  img:"https://www.bursay.com.tr/wp-content/uploads/2022/04/kaskad-isitma-sistemi-nedir-03.jpg"},
  {id:"06",
  title:"Kaskad Kazan Ne İşe Yarar ?",
  liType:"p",
  order:["li","img"],
  li:["Kaskad sistemi nedir, kaskad kazan sistemi nasıl yapılır gibi soruların yanında kaskad kazan sistemi ne işe yarar konusu da merak edilmektedir.  Kaskad kazanlar, yanma sonucu baca gazında ortaya çıkan su buharını yoğunlaştırmaktadır. Buharın içinde yer alan suyu da ısıtma sistemine aktarır. Böylece yakıt tasarrufu sağlanmış olur.","Ayrıca şunu belirtmeliyiz ki kaskad kazan, akıllı kumanda panelleriyle kontrol edilmektedir. Bahsedilen bu kumanda panelleri, anlık ısıtma ihtiyacını takip etmektedir. Bu ihtiyaç doğrultusunda, kazan kapasitesi ve çıkış suyu hesaplanarak işletim yapılmaktadır. Kaskad sistemi nedir gibi temel bir soruyu cevapladıktan sonra kumanda panellerinin ne işe yaradığına değinebiliriz. Bu cihazlar, kazanları belirli bir mantığa göre sıralar ve işletime alır. Aynı zamanda ısıtma yükünü hesaplarken dış hava sıcaklığını muhakkak dikkate alır. Kumanda panellerinin bu denli sistematik oluşu kaskad sisteminin verimli bir şekilde çalışmasını sağlar."],img:"https://www.bursay.com.tr/wp-content/uploads/2022/04/kaskad-kazan-sistemi-nedir-04.jpg"},
  {id:"07",
  title:"Kaskad Sistemi Kullanmanın Faydaları",
  order:["li"],
  liType:"p",
  li:["Kaskad sistemi nedir sorusuna verdiğimiz derin ve uzun cevaplara baktığımızda sistemin avantajlarını da apaçık görebilmekteyiz. Öncelikle diğer ısıtma sistemlerine kıyasla daha fazla tasarruf sağladığını belirmiştik.","Her sistemde muhakkak bir arızalanma yaşanır. Problemsiz bir sistemden bahsetmek mümkün değil maalesef ki. Fakat önemli olan herhangi bir problemle karşılaştığımızda en az hasar ve krizle atlatabilmektir.","Kaskad sisteminde herhangi bir arıza durumu meydana geldiğinde ısıtma tamamen durmaz. Bazı sistemlerde bu durum ısının düşmesine sebep olurken kaskadda diğer kombi devreye girerek ısının düşmesine mani olur.","Kaskad sistemi genellikle diğer kazan sistemleriyle sık sık karşılaştırılmaktadır. Mesela kazan sistemini çalıştırdığınızda yaşam alanlarınızın oldukça yavaş çalıştığını görmeniz mümkündür. Fakat kaskad sisteminde bu durum tam tersidir. Sistem çalıştırılır çalıştırılmaz hemen ısıtma sağlar.","Hem düşük maliyetli, hem tasarruflu hem de sıcacık bir yaşam alanı vaad eden bu sisteme kim hayır diyebilir ki."]},
  {id:"08",
  title:"Kaskad Sistemi ve Tasarruf",
  order:["li"],
  liType:"p",
  li:["Hepimizin bildiği üzere çok çeşitli ısıtma sistemi bulunmaktadır. Her biri birbirinden farklı olan bu ısıtma sistemlerinde kullanıcılar, genellikle tasarruflu olan sistemleri daha çok tercih etmektedir. Kaskad sistemi, diğer ısıtma sistemlerine göre oldukça tasarrufludur.","Sistemin çalışma prensibine baktığımızda ihtiyaç fazlası doğalgaz tüketimi olmadığını rahatlıkla görebiliriz. Konvansiyel kazan sistemiyle ısıtma ihtiyacınızı karşılamak istediğinizde kaskad kadar ayrıntılı bir sistem olmadığı için daha fazla gaz kullanımı gerçekleşecektir.","Kaskad sisteminde baca gazı sıcaklıkları düşük olduğu için baca kayıpları da otomatik olarak minimum seviyededir. Her sistemde olduğu gibi bu sistemde de arızalar görülebilir. Bir arıza ile karşı karşıya gelindiğinde sistem tamamen durmaz, diğer cihazlar devreye girer ve çalışmaya devam eder."],},
  {id:"09",
  title:"Kaskad Sistemi ve Bakımı",
  liType:"p",
  order:["text","img","li"],
  text:"Kaskad ısıtma sistemi nedir, kaskad sistemi nasıl yapılır ve diğer temel soruların ardından bakımının da ne kadar önemli olduğuna değinmemiz gerekir. Büyük arızalar ve problemlerle karşılaşmamak için kaskad sisteminin bakımını düzenli bir şekilde yaptırmanız gerekir.",
  img:"https://www.bursay.com.tr/wp-content/uploads/2022/04/kaskad-isitma-sistemi-nedir-06.jpg",
  li:["Sistemde bakım gerektiren asıl mesele kireç ve pastır. Sistemde dolanan su bir zaman sonra kireç ve pas oluşumuna sebep olur. Personellerin kullandığı kimyasallar sayesinde temizleme işi profesyonel bir şekilde gerçekleştirilir.","Bakım yaptırırken profesyonel yardım almanız gerekir. Kaskad sistemi ve diğer ısıtma sistemleri hakkında detaylı bilgi için diğer bloglarımıza bakabilirsiniz. Ayrıca tesisat, kombi ve klima gibi konular hakkında destek almak isterseniz Bursay Mühendislik her zaman yanınızda olacaktır."]}
    ]
  },
  
  ]

  
  let navigate=useNavigate()
  const {firmAds}=useContext(CloudContext)
  return (
    <div className='blog'>
      <div className="top-banner">
      <AliceCarousel 
      disableButtonsControls
      disableDotsControls
      autoPlay
      
      autoPlayInterval="3000">
      {firmAds.concat(firmAds).filter(f=>!f.isVer).map(i=>{return(
              <a 
              key={i.id}
              href={i.url} target="_blank">
              <img
               
              className="sliderimg"
              src={i.img} alt="" />
              </a>
              
          )})}
    </AliceCarousel>
      
      
     
          <div className="top-banner-item">
          
          </div>
      </div>
      <div className="blog-page-container">
      
        <div className="blog-container">
        
        <div className="blog-main-body">
          
          <div className="blog-body">
            <h1>Haberler</h1>
            <div className="filter-bar">
              <label>Klima</label>
              <label>Kombi</label>
              <label>Doğalgaz</label>
              <label>Kazan</label>
              <label>Proje</label>
            </div>
            {blogs.concat(blogs).map(i=>{
              return(
              <div 
              key={i.id}
              className="blog-card">
              <div className="left">
                <img src={i.summary.img} alt={i.summary.imgAlt} />
              </div>
              <div className="right">
                <div className="top">
                <p className='blog-path'>HABERLER-{i.mainSubject}</p>
                <NavLink
                className="link"
                to={`/blog/${i.summary.title.split(" ").join("-").trim("-")}`}
                state={i}
                ><h1 className='blog-title'>{i.summary.title}</h1></NavLink>
                <p className='content'>{i.summary.subtitle}</p>
                
                </div>
                <div className="bottom">
                  <label><img src={Time} alt="time"/><small>tarih</small></label>
                  <label><img src={Eye} alt="time"/><small>{i.readed} Okuma</small></label>
                  <label><img src={Time} alt="time"/><small>{i.readTime} Dakika Okuma</small></label>
                </div>
              </div>
            </div>
              )
            })}
            
          </div>
          
        </div>
        </div>
        <div className="side-banner">
          <div className="banner-area">
          {firmAds.concat(firmAds).filter(f=>f.isVer).map(i=>{return(
            <div key={i.id} className="ad-banner">
                <img src={i.img} alt="" />
            </div>)})}
          </div>
        </div>
      </div>
      
      


    </div>
  )
}

export default Blog