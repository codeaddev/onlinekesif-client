import React, { useEffect } from "react";
import "../detail.scss";

function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const explainList = [
    {
      id: "01",
      left: "year",
      right: "text",
      year: "2017",
      h3: "Fikrin ilk ortaya çıkışı",
      p: "Hizmet sektörünün içinde yer alan biri tarafından Online Keşif fikri 2017 yılında ortaya çıkmaya başladı. Sektördeki ürünlerin ve hizmetlerin fiyatlarının günden güne arttığını gördük. Bu durumun da hizmet kalitesini ve firmaların profesyonelleşerek büyümesini zorlaştırdığını fark ettik.Olumsuz koşulların son tüketiciyi uzun ömürlü kaliteli işlerden uzaklaştırdığını ve ülke ekonomisine direk etki ettiğini fark ettik. Öyle bir sistem geliştirmeliydik ki hem tüketici aldatmasının önüne geçebilsin hem de firmaların keşif ile vakit kaybetmeden daha fazla teklif verebilsin",
      full: "white",
    },
    {
      id: "02",
      left: "text",
      right: "year",
      year: "2018",
      h3: "Projenin ana hatları çizildi",
      p: "Sektörde yer alan birçok firmanın aynı problemleri yaşadığının anlaşılması üzerine projede nelerin olması gerektiği üzerine detaylı araştırmalar yapıldı. Birçok firma ile görüşüldü, sektördeki sorunlar ve çözüm önerileri dinlendi. Bu sorunlar son tüketicilere sorularak son tüketicinin beklentisi belirlendi. Proje dosyası oluşturduk ve ardında yurtdışındaki firmalar ile son tüketiciler aynı sorunları yaşıyorlar mı diyerek bir yolculuğa çıktık. Amerika, Avrupa, Asya ve Avustralya kıtalarında 1 yıl geçirerek tüketici araştırmaları gerçekleştirdik.",
      full: "black",
    },
    {
      id: "03",
      left: "year",
      right: "text",
      year: "2019",
      h3: "Kitle analizi yapılmaya başlandı",
      p: "Belirlediğimiz sorun ve çözümleri ülkemiz şartlarına göre geliştirdik. Hitap edilecek olan kitle ve sektörlerin katlandıkları zorluklar doğrultusunda sorular sorulmaya başlayarak çözüm algoritmaları yazmaya başladık. Ardından bu sistemleri test etmeye başladık. A/B testleri ve anket çalışmaları gerçekleştirdik. Çözümlerin her şehir için farklılık gösterdiğini fark ettik ve çalışmalarımızı daha derinleştirdik.",
      full: "black",
    },
    {
      id: "04",
      left: "text",
      right: "year",
      year: "2020",
      h3: "Firmaların ve kullanıcıların sorunları belirlendi.",
      p: "Hizmet sektöründe yer alan firmaların uzun süren işlemlerinin, firma nezdinde doğurduğu olumsuzluklar belirlendi. Aynı zamanda tüketicilerin aradıkları hizmete ulaşmak konusunda yaşadıkları zorluklar raporlandı. Sektörde şartlarının günden güne zorlaşması ile beraber yeni kurulan firma sayısının arttığını ve freelance iş yapan kişi ve ustaların arttığını gördük. Ancak bu durum son tüketici için fiyat avantajı sağlarken riskleri de arttırmış olduğunu fark ettik ve çözümlerimizin daha  saydam olması gerektiğine karar verdik.  Ve online keşif teknik ekibini kurmaya başladık.",
      full: "black",
    },
    {
      id: "05",
      left: "year",
      right: "text",
      year: "2021",
      h3: "Detaylı pazar araştırması yapıldı.",
      p: "Dünyamızda enerji sektörü her geçen gün büyümekte ve önemli bir hal almaktaydı. Enerji tasarrufunun ve kullanımının iyileşmesi uzun vadede büyük katkılar sağlayacağı için iklimlendirme sektöründen başlamaya karar verdik. Ülkemizde ısıtma ve soğutma sektöründe hizmet veren firmaların sistemde yer aldıkları takdirde edecekleri tasarruf miktarı detaylı bir şekilde araştırıldı. Sistem içerisinde oldukları süre zarfında firmaların gelişim süreçlerinde olumlu sonuçlar tespit edildi.",
      full: "black",
    },
    {
      id: "06",
      left: "text",
      right: "year",
      year: "2022",
      h3: "Ekip kuruldu ve projenin ilk hali ortaya çıktı. ",
      p: "Kendi alanında işinde en iyi olan insanlarla bir araya gelinerek projenin ilk hali şekillendi. Site yayına açılarak kullanıcıların ulaşabileceği ve faydalanabileceği bir hale geldi. Projemiz ilk versiyonu ile karşınızda. Gelişim süreci hiç bir zaman bitmeyecek sektörlere ve kullanıcıya, maksimum  faydayı sağlamak  ilk hedefimiz olacaktır.",
      full: "orange",
    },
  ];
  return (
    <div className="page-container">
      <div className="about">
        <div className="top">
          <h1>Hakkımızda</h1>
          <p>
            Online Keşif fikri sektörde var olan problemlere bir çözüm yolu
            olarak 2017'de ortaya çıkmıştır. Gelişim süreci 5 yıl süren proje
            2022 yılında yayına alınarak firmalara ve kullanıcılarına hizmet
            vermeye başlamıştır. Online Keşif olarak amacımız eşit ve tarafsız
            bir ortamda firmalar ile müşterileri buluşturarak daha az
            maliyetlerle hizmetlerini sunmalarını sağlamaktır. Bu doğrultuda
            çıktığımız yolda emin adımlarla ilerlemek ana hedefimizdir.
          </p>
        </div>
        <div className="bottom">
          {explainList.map((i) => {
            const Content = ({ direction }) => {
              if (direction === "year") {
                return <label key={i.id}>{i.year}</label>;
              } else {
                return (
                  <div key={i.id}>
                    <h3>{i.h3}</h3>
                    <p className="content-text">{i.p}</p>
                  </div>
                );
              }
            };
            return (
              <div className="row">
                <div className="left">
                  <Content direction={i.left} />
                </div>
                <div className={`circle ${i.full}`}></div>
                <div className="right">
                  <Content direction={i.right} />
                </div>
              </div>
            );
          })}

          {/* <div className="center"></div> */}
        </div>
      </div>
    </div>
  );
}

export default About;
