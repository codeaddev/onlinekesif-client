import React from 'react'
import { WORD_FILE_BASE64 } from './basvuru-form';
import FileSaver from 'file-saver';
import "./styles/style.scss"

function KvkkPage() {
    const handleDownload = () => {
        let sliceSize = 1024;
        let byteCharacters = atob(WORD_FILE_BASE64);
        let bytesLength = byteCharacters.length;
        let slicesCount = Math.ceil(bytesLength / sliceSize);
        let byteArrays = new Array(slicesCount);
        for (let sliceIndex = 0; sliceIndex < slicesCount; ++sliceIndex) {
          let begin = sliceIndex * sliceSize;
          let end = Math.min(begin + sliceSize, bytesLength);
          let bytes = new Array(end - begin);
          for (var offset = begin, i = 0; offset < end; ++i, ++offset) {
            bytes[i] = byteCharacters[offset].charCodeAt(0);
          }
          byteArrays[sliceIndex] = new Uint8Array(bytes);
        }
        FileSaver.saveAs(
          new Blob(byteArrays, { type: "application/vnd.ms-word" }),
          "onlinekesifbasvruformu.docx"
        );
      };

    return (
        <div className='kvsi-page'>
            <div className="kvsi-container">
            <h1 style={{textAlign: "center",fontSize:"25px"}}>
                <h4>ONLİNE KEŞİF</h4>
             KİŞİSEL VERİLERİN İŞLENMESİ VE  KORUNMASI  POLİTİKASI
            </h1>
           
           
            <ol>
                <li><a href="#amac">AMAÇ</a></li> 
                <li><a href="#kapsami-ve-kisisel-veri-sahipleri">KAPSAMI VE KİŞİSEL VERİ SAHİPLERİ</a></li>
                <li><a href="#tanimlar">TANIMLAR</a></li>
                <li><a href="#kisisel-verilerin-islenmesinde-genel-ilkeler">KİŞİSEL VERİLERİN İŞLENMESİNDE GENEL İLKELER</a></li>
                <li><a href="#kisisel-verilerin-islenme-sartlari">KİŞİSEL VERİLERİN İŞLENME ŞARTLARI</a> </li>
                   <ul><li><a href="#ek1">Kanunlarda Açıkça Öngörülmesi</a></li>
                   <li><a href="#ek2">Fiili İmkansızlık Nedeniyle İlgilinin Açık Rızasının Alınamaması</a></li>
                   <li><a href="#ek3">Bir Sözleşmenin Kurulması veya İfasıyla Doğrudan Doğruya İlgili Olması</a></li> 
                   <li><a href="#ek4">Şirketin (Veri Sorumlusu) Hukuki Yükümlülüğünü Yerine Getirmesi İçin Zorunlu Olması</a></li> 
                   <li><a href="#ek5">Kişisel Verinin Veri Sahibinin Kendisi Tarafından Alenileştirilmiş Olması</a></li>
                   <li><a href="#ek6">Bir Hakkın Tesisi veya Korunması için Veri İşlemenin Zorunlu Olması</a></li> 
                   <li><a href="#ek7">Veri Sahibinin Temel Hak ve Özgürlüklerine Zarar Vermemek Kaydıyla Şirketimizin Meşru Menfaatleri için Veri İşlenmesinin Zorunlu Olması</a></li></ul> <br />
                <li><a href="#ozel-nitelikte-kisisel-verilerin-islenmesi">ÖZEL NİTELİKTE KİŞİSEL VERİLERİN İŞLENMESİ</a></li>
                <li><a href="#kisisel-veri-sahiplerin-aydınlatılması">KİŞİSEL VERİ SAHİPLERİNİN AYDINLATILMASI</a></li>
                <ul><li><a href="#kisisel-verilerin-yurt-icinde-aktarilmasi">Kişisel Verilerin Yurt içinde Aktarılması</a></li>
                   <li><a href="#kisisel-verilerin-yurt-disina-aktarilmasi">Kişisel Verilerin Yurt Dışına Aktarılması</a></li>
                   <li><a href="#kisisel-verilerin-aktarilabilecegi-ucuncu-kisiler">Kişisel Verilerin Aktarılabileceği Üçüncü Kişiler</a></li> </ul><br />
             
                <li><a href="#kisisel-verilerinizi-islenme-amaclari">KİŞİSEL VERİLERİNİZİN İŞLENME AMAÇLARI, İŞLEDİĞİMİZ KİŞİSEL VERİLERİNİZ, TOPLAMA YÖNTEMLERİ VE HUKUKİ SEBEPLERİ</a></li>
                <ul><li><a href="#islenme-amaclari">İşlenme Amaçları</a></li>
                   <li><a href="#islenen-kisisel-veriler">İşlenen Kişisel Veriler</a></li>
                   <li><a href="#kisisel-verilerinizin-toplanma-yontemleri">Kişisel Verilerinizin Toplanma Yöntemleri </a></li> 
                   <li><a href="#kisisel-veri-islemenin-hukiki-sebepleri">Kişisel Veri İşlemenin Hukuki Sebepleri</a></li> </ul><br />
                <li><a href="#ilgi-kisinin-haklari-cercevesinde-basvuru-yontemi">İLGİ KİŞİNİN HAKLARI ÇERÇEVESİNDE BAŞVURU YÖNTEMLERİ</a></li>
            </ol><br />
            

            
            <h3 style={{fontSize:"20px"}}>KİŞİSEL VERİLERİN KORUNMASI VE İŞLENMESİ POLİTİKASI</h3> <br />

            <ol>
            <li id="amac">
              AMAÇ
                    <p> <br />
                    Kişisel Verileri İşlenmesi ve Korunması Politikası (Politika), 
                    Online Keşif Mühendislik ve Danışmanlık Anonim Şirketi 
                    (bundan böyle Online Keşif olarak anılacaktır.) olarak veri 
                    sorumlusu sıfatıyla elimizde bulundurduğumuz kişisel verilerin
                     6698 sayılı Kişisel Verilerin Korunması Kanunu ve sair mevzuat
                     uyarınca gerçekleştirilmekte olan saklama ve imha faaliyetlerine
                     ilişkin iş ve işlemler konusunda usul ve esasları belirlemek amacıyla hazırlanmıştır. <br /> <br />

                    Online Keşif; misyon, vizyon ve temel ilkeleri doğrultusunda;
                    Online Keşif, hizmet alanları, çalışanları, çalışan adayları, hizmet sağlayıcıları, 
                    tedarikçileri, üyeleri, ziyaretçiler ve diğer üçüncü kişilere ait kişisel verilerin T.C.
                    Anayasası, uluslararası sözleşmeler, 6698 sayılı Kişisel Verilerin Korunması Kanunu
                    ve diğer ilgili mevzuata uygun olarak işlenmesini ve ilgili kişilerin haklarını etkin
                    bir şekilde kullanmasının sağlanmasını öncelik olarak belirlemiştir. <br /><br />

                    Kişisel verilerin saklanması ve imhasına ilişkin iş ve işlemler, Online Keşif tarafından
                    bu doğrultuda hazırlanmış olan Politikaya uygun olarak gerçekleştirilir. <br /> <br />    

                    </p>
                   
                </li> 
            
                <li id="kapsami-ve-kisisel-veri-sahipleri">
                KAPSAMI VE KİŞİSEL VERİ SAHİPLERİ <br /><br />
                            Bu Politika; otomatik olan ya da herhangi bir veri kayıt sisteminin parçası olmak kaydıyla otomatik 
                            olmayan yollarla, Çalışan, Çalışan Adayı, Alıcı, Kullanıcı, Tedarikçi, Üye, 
                            Ziyaretçi, Gerçek Kişi İş Ortağı, Yetkilisi ve Çalışanı, Üçüncü Kişiler başta olmak 
                            üzere kişisel verileri Şirketimiz tarafından işlenen kişiler için hazırlanmıştır ve bu belirtilen kişiler kapsamında uygulanacaktır. <br /><br />
                            
                            <ol>
                      <span> Kişisel Veri Sahipleri ( İlgili Kişiler)</span> 
                            <table>
                                <tr>
                                    <td>Çalışan</td>
                                    <td>
                                    Şirket bünyesinde çalışan gerçek kişilerdir.
                                    </td>
                                </tr>

                                <tr>
                                    <td>Çalışan Adayı</td>
                                        <td>Şirkete herhangi bir yolla iş başvurusunda bulunmuş ya da özgeçmiş ve ilgili bilgilerini
                                             Şirket’in	incelemesine açmış	olan gerçek kişilerdir.</td>
                                </tr>

                                <tr>
                                    <td>Kullanıcı, Üye </td>
                                        <td>Online Keşif’in sağladığı hizmetlerden yararlanan kişi, tüzel kişi ise yetkilileri ve bunların çalışanlarıdır.</td>
                                </tr>

                                <tr>
                                    <td>Tedarikçi</td>
                                    <td>Online Keşif portalında teklif veren hizmet sağlayan kişi, tüzel kişi ise yetkilileri ve bunların çalışanlarıdır.</td>
                                </tr>

                                <tr>
                                    <td>Ziyaretçi</td>
                                    <td>Şirket’in sahip olduğu fiziksel yerleşkelere çeşitli amaçlarla giren veya internet sitelerini herhangi
                                        bir amaç ile ziyaret eden tüm gerçek kişilerdir.</td>
                                </tr>

                                <tr>
                                    <td>Gerçek Kişi İş Ortağı, Yetkilisi, Çalışanı</td>
                                    <td>Şirketin her türlü iş ilişkisinde bulunduğu gerçek
                                     kişiler, tüzel kişi ise yetkilileri ve bunların çalışanlarıdır.</td>
                                </tr>

                                <tr>
                                    <td>Üçüncü Kişi</td>
                                    <td>İşbu Kişisel Verilerin Korunması ve İşlenmesi Politikası kapsamına ve bu Politikada 
                                        herhangi bir kişisel veri sahibi kategorisine girmeyen diğergerçek kişilerdir.</td>
                                </tr>
                            </table>
                             </ol>
                            </li>

                            <li id='tanimlar'>
                            TANIMLAR <br /> <br />
                            <ol>
                      <span> İşbu Politikada yer verilen kavramlar aşağıda belirtilen anlamları ifade eder:</span> 
                            <table>
                                <tr>
                                    <td>Şirket/Şirketimiz</td>
                                    <td>
                                    Barış Mah. Defne  Sok. Kaya İş Merkezi No:12 Ofis 10 (Beşevler metro İstansyonu Karşısı) Nilüfer/BURSA
                                    adresinde mukim Online Keşif  anonym Şirketi ‘ni ifade eder.
                                    </td>
                                </tr>

                                <tr>
                                    <td>Veri Sahibi/İlgili Kişi</td>
                                        <td>Kişisel verisi işlenen gerçek kişi.</td>
                                </tr>

                                <tr>
                                    <td>Veri Sorumlusu</td>
                                        <td>Kişisel verilerin işleme amaçlarını ve vasıtalarını belirleyen, veri kayıt sisteminin kurulmasından ve yönetilmesinden sorumlu
                                             olan gerçek veya tüzel kişi.
                                             </td>
                                 </tr>

                                <tr>
                                    <td>Kişisel Veri/Veriler</td>
                                    <td>Kimliği belirli veya belirlenebilir gerçek kişiye ilişkin her türlü bilgidir.     
                                    </td>
                                </tr>

                                <tr>
                                    <td>Özel Nitelikli Kişisel Veri/Veriler</td>
                                    <td>Irk, etnik köken, siyasi düşünce, felsefi inanç, din, mezhep veya diğer inançlar, 
                                        kılık kıyafet, dernek vakıf ya da sendika üyeliği, sağlık, cinsel hayat, ceza 
                                        mahkûmiyeti ve güvenlik tedbirleriyle ilgili veriler ile biyometrik vegenetik verilerdir
                                    </td>
                                </tr>

                                <tr>
                                    <td>Kişisel Verilerin İşlenmesi</td>
                                    <td>Kişisel verilerin tamamen veya kısmen otomatik olan ya da herhangi 
                                        bir veri kayıt sisteminin parçası olmak kaydıyla otomatik olmayan yollarla elde edilmesi,
                                         kaydedilmesi, depolanması,	muhafaza	edilmesi, değiştirilmesi, yeniden düzenlenmesi, açıklanması, 
                                         aktarılması, devralınması, elde edilebilir hâle getirilmesi, sınıflandırılması ya da 
                                         kullanılmasının engellenmesi gibi veriler
                                         üzerinde gerçekleştirilen her türlü işlem.
                                </td>
                                </tr>

                                <tr>
                                    <td>Kurul</td>
                                    <td>İKişisel Verileri Koruma Kurulu.</td>
                                </tr>

                                <tr>
                                    <td>Kanun/KVKK</td>
                                    <td>7 Nisan 2016 tarihli ve 29677 sayılı Resmi Gazete ’de yayımlanan, 24 Mart 2016 tarihli ve
                                         6698 sayılı Kişisel Verilerin Korunması Kanunu.
                                    </td>
                                </tr>

                                <tr>
                                    <td>Politika</td>
                                    <td>Şirket tarafından oluşturulan kişisel veri işlenmesi ve koruma politikası.
                                </td>
                                </tr>

                                <tr>
                                     <td>Veri İşleyen</td>
                                     <td>Veri sorumlusunun verdiği yetkiye dayanarak
                                     onun adına kişisel verileri işleyen gerçek veya tüzel kişi
                                </td>
                                </tr>
                                
                                <tr>
                                    <td>Veri Kayıt Sistemi</td>
                                    <td>Kişisel	verilerin	belirli	kriterlere	göre
                                         yapılandırılarak işlendiği kayıt sistemi.
                                </td>
                                </tr>

                                <tr>
                                    <td>İlgili Kullanıcı</td>
                                    <td>Verilerin teknik olarak depolanması, korunması ve yedeklenmesinden sorumlu olan 
                                        kişi ya da birim hariç olmak üzere veri sorumlusu organizasyonu içerisinde veya veri 
                                        sorumlusundan  aldığı yetki  ve    talimat
                                         doğrultusunda kişisel verileri işleyen kişilerdir.
                                </td>
                                </tr>

                                <tr>
                                    <td>Çerez (Cookie)</td>
                                    <td>Kullanıcıların bilgisayarlarına yahut mobil cihazlarına kaydedilen 
                                        ve ziyaret ettikleri web sayfalarındaki tercihleri ve diğer bilgileri
                                        depolamaya yardımcı olan küçük dosyalardır.
                                </td>
                                </tr>

                                <tr>
                                    <td>Açık Rıza</td>
                                    <td>Belirli   bir   konuya   ilişkin,   bilgilendirilmeye
                                         dayanan   ve  özgür   iradeyle   açıklanan rızayı
                                        ifade eder.
                                </td>
                                </tr>

                                <tr>
                                    <td>İmha</td>
                                    <td>Kişisel verilerin silinmesi, yok edilmesi veya
                                         anonim hale getirilmesi.
                                </td>
                                </tr>

                                <tr>
                                    <td>İrtibat Kişisi</td>
                                    <td>Veri sorumlusu Şirketimizin Kanun ve bu Kanuna dayalı olarak çıkarılacak ikincil düzenlemeler
                                        kapsamındaki yükümlülükleriyle ilgili olarak, Kurum ile kurulacak iletişim için veri sorumlusu 
                                        tarafından Sicile kayıt esnasında bildirilen gerçek kişi. (İrtibat kişisi Veri Sorumlusunu temsile yetkili değildir. 
                                        Adından anlaşılacağı üzere yalnızca veri sorumlusu ile ilgili kişilerin ve Kurumun iletişimini “irtibatı” sağlamak
                                        üzere görevlendirilen kişidir.)
                                </td>
                                </tr>

                                <tr>
                                    <td>Kayıt Ortamı</td>
                                    <td>Tamamen veya kısmen otomatik olan ya da herhangi bir veri kayıt sisteminin parçası
                                         olmak kaydıyla otomatik olmayan yollarla işlenen kişisel verilerin bulunduğu her türlü ortam.
                                    </td>
                                </tr>
                            </table>
                            </ol>
                            </li>

                            <li id='kisisel-verilerin-islenmesinde-genel-ilkeler'>
                            KİŞİSEL VERİLERİN İŞLENMESİNDE GENEL İLKELER <br /><br />
                            <p>Şirket tarafından Kişisel Veriler, Kanunda ve bu Politikada öngörülen usul ve esaslara uygun olarak işlenir. 
                                Şirket, Kişisel Verileri işlerken aşağıdaki ilkelerle hareket eder:</p>

                                <ul>
                                    <li>Kişisel Veriler, ilgili hukuk kurallarına ve dürüstlük kuralının gereklerine uygun olarak işlenir.</li>
                                    <li>Kişisel Verilerin doğru ve güncel olması sağlanır. Bu kapsamda verilerin elde edildiği kaynakların 
                                        belirli olması, doğruluğunun teyit edilmesi, güncellenmesi gerekip gerekmediğinin değerlendirilmesi 
                                        gibi hususlar özenle dikkate alınır.</li>
                                    <li>Kişisel Veriler; belirli, açık ve meşru amaçlarla işlenir. Amacın meşru olması, Şirketin işlediği 
                                        Kişisel Verilerin, yapmış olduğu iş veya sunmuş olduğu hizmetle bağlantılı ve bunlar için gerekli
                                         olması anlamına gelir.</li>
                                    <li>Kişisel Veriler, Şirket tarafından belirlenen amaçların gerçekleştirilebilmesi için amaçla bağlantılı olup,
                                         amacın gerçekleştirilmesiyle ilgili olmayan veya ihtiyaç duyulmayan kişisel verilerin işlenmesinden kaçınılır.
                                          İşlenen veriyi, sadece amacın gerçekleştirilmesi için gerekli olanla sınırlı tutar. Bu kapsamda işlenen kişisel veriler,
                                           işlendikleri amaçla bağlantılı, sınırlı ve ölçülüdür.</li>
                                    <li>İlgili mevzuatta verilerin saklanması için öngörülen bir süre bulunması halinde bu sürelere uyum gösterir; 
                                        aksi durumda kişisel verileri, ancak işlendikleri amaç için gerekli olan süre kadar muhafaza kişisel verinin
                                         daha fazla muhafaza edilmesi için geçerli bir sebep kalmaması durumunda, söz konusu veri silinir, yok edilir veya anonim hale getirilir.</li>
                                </ul>

                            </li><br />

                            <li id='kisisel-verilerin-islenme-sartlari'>KİŞİSEL VERİLERİN İŞLENME ŞARTLARI</li>
                            <p>Kişisel veriler, kanunun 5. Maddesi uyarınca Veri Sahibi’ nin açık rızası olmaksızın işlenemez. 
                                Ancak yine aynı maddede yer alan düzenleme gereği; aşağıda yer alan şartlardan birinin varlığı
                                 halinde Veri Sahibinin açık rızası aranmaksızın kişisel veriler işlenecektir.</p><br />

                           <span id='ek1'>-Kanunlarda Açıkça Öngörülmesi</span>
                           <p>Veri sahibinin kişisel verileri, kanunda açıkça öngörülmekte ise diğer bir ifade ile ilgili 
                            kanunda kişisel verilerin işlenmesine ilişkin açıkça bir hüküm olması halinde işbu veri işleme şartının varlığından söz edilebilecektir. </p><br />

                            <span id='ek2'>-Fiili İmkansızlık Nedeniyle İlgilinin Açık Rızasının Alınamaması</span>
                            <p>Fiili imkansızlık nedeniyle rızasını açıklayamayacak durumda olan veya rızasına geçerlilik tanınmayacak 
                                olan kişinin kendisinin ya da başka bir kişinin hayatı veya beden bütünlüğünü korumak amacıyla kişisel 
                                verinin işlenmesinin zorunlu olması halinde veri sahibinin kişisel verileri işlenebilecektir.</p><br />

                            <span id='ek3'>-Bir Sözleşmenin Kurulması veya İfasıyla Doğrudan Doğruya İlgili Olması</span>
                            <p>Bir sözleşmenin kurulması veya ifasıyla doğrudan doğruya ilgili olması kaydıyla, 
                            sözleşmenin taraflarına ait kişisel verilerin işlenmesinin gerekli olması halinde kişisel 
                            veriler veri öznelerinin açık rızaları olmadan şirket tarafından işlenebilir.</p><br />    

                            <span id='ek4'>-Şirketin (Veri Sorumlusu) Hukuki Yükümlülüğünü Yerine Getirmesi İçin Zorunlu Olması</span>
                            <p>Şirketimizin hukuki yükümlülüklerini yerine getirmesi için işlemenin zorunlu olduğu durumlarda veri sahibinin kişisel verileri işlenebilecektir. </p><br />    

                            <span id='ek5'>-Kişisel Verinin Veri Sahibinin Kendisi Tarafından Alenileştirilmiş Olması</span>
                            <p>Veri sahibinin, kişisel verisini alenileştirmesi durumunda, alenileştirme amacı ile sınırlı olmak kaydıyla kişisel veri şirketimizce işlenebilecektir.</p><br />    

                            <span id='ek6'>-Bir Hakkın Tesisi veya Korunması için Veri İşlemenin Zorunlu Olması</span>
                            <p>Bir hakkın tesisi, kullanılması veya korunması için veri işlemenin zorunlu olması halinde veri sahibinin kişisel verileri işlenebilecektir. </p><br />    

                            <span id='ek7'>-Veri Sahibinin Temel Hak ve Özgürlüklerine Zarar Vermemek Kaydıyla Şirketimizin Meşru Menfaatleri için Veri İşlenmesinin Zorunlu Olması</span>
                            <p>Kişisel veri sahibinin temel hak ve özgürlüklerine zarar vermemek kaydıyla Şirketimizin meşru menfaatleri için veri işlemesinin zorunlu olması halinde 
                                veri sahibinin kişisel verileri işlenebilecektir. Örn: çalışanların temel hak ve özgürlüklerine zarar vermemek kaydıyla, onların terfileri, maaş zamları
                                 veya sosyal haklarının düzenlenmesinde ya da işletmenin yeniden yapılandırılması sürecinde görev ve rol dağıtımında esas alınmak üzere çalışanların kişisel
                            verilerinin işlenmes</p><br />    

                            <li id='ozel-nitelikte-kisisel-verilerin-islenmesi'>ÖZEL NİTELİKTE KİŞİSEL VERİLERİN İŞLENMESİ</li>

                            <p>
                            Kişilerin ırkı, etnik kökeni, siyasi düşüncesi, felsefi inancı, dini, mezhebi veya diğer inançları,
                             kılık ve kıyafeti, dernek, vakıf ya da sendika üyeliği, sağlığı, cinsel hayatı, ceza mahkûmiyeti 
                             ve güvenlik tedbirleriyle ilgili verileri ile biyometrik ve genetik verileri özel nitelikli kişisel veridir. <br /> <br />
                             Kanun’un 6. Maddesi uyarınca özel nitelikli kişisel veriler, veri sahibinin açık rızası alınmadan işlenemez. 
                             Ancak kişilerin cinsel hayatı ve sağlığı dışındaki özel nitelikli kişisel veriler kanunlarda öngörülen 
                             durumlarda veri sahibinin açık rızası alınmaksızın işlenebilecektir. <br /> <br />
                             Sağlık ve cinsel hayata ilişkin kişisel veriler ise ancak kamu sağlığının korunması, koruyucu hekimlik, 
                             tıbbi teşhis, tedavi ve bakım hizmetlerinin yürütülmesi, sağlık hizmetleri ile finansmanın planlanması ve
                              yönetimi amacıyla, sır saklama yükümlülüğü altında bulunan kişiler veya yetkili kurum veya kuruluşlar 
                              tarafından ilgilinin açık rızası aranmaksızın işlenebilir. <br /> <br />
                             Bütün durumlarda, özel nitelikli kişisel verilerin işlenmesinde ayrıca kurul 
                             (Kişisel Verileri Koruma Kurulu) tarafından belirlenen yeterli önlemlerin alınması şarttır. 
                            </p><br />

                            <li id='kisisel-veri-sahiplerin-aydınlatılması'>KİŞİSEL VERİ SAHİPLERİNİN AYDINLATILMASI</li>

                            <p>Şirketimiz, Kanun’un 10. Maddesine uygun olarak, Kişisel Veri işlenmesinden önce veri sahiplerini aydınlatır. 
                                Bu kapsamda Şirketimiz, kişisel verilerin elde edilmesi sırasında Aydınlatma Yükümlülüğü’ nü yerine getirir. 
                                Aydınlatma yükümlülüğü kapsamında ise Veri Sahiplerine yapılacak bildirim şu unsurları içerir.</p> <br />

                                <ul>
                                    <li>Veri Sorumlusunun ve varsa temsilcisinin kimliği</li>
                                    <li>Kişisel verilerin hangi amaçla işleneceği</li>
                                    <li>İşlenen kişisel verilerin kimlere ve hangi amaçla aktarılabileceği</li>
                                    <li>Kişisel veri toplamanın yöntemi ve hukuki sebebi</li>
                                    <li>Veri sahiplerinin KVKK Madde 11’de sayılan hakları</li>
                                </ul> <br />

                                <p>Şirketimiz, Anayasa’nın 20. Ve KVKK’ nın 11. Maddesine uygun bir şekilde veri sahibinin bilgi talep
                                    etmesi halinde gerekli bilgilendirmeyi yapar.</p> <br />

                                    7. KİŞİSEL VERİLERİN AKTARILMASI <br /><br />

                                    <span id='kisisel-verilerin-yurt-icinde-aktarilmasi'>- Kişisel Verilerin Yurt içinde Aktarılması</span> 

                                    <p>
                                    Kanun’un 8. maddesi uyarınca Kişisel Veriler kural olarak, Veri Sahibinin açık rızası olmaksızın üçüncü kişilere aktarılamaz. <br /> <br />
                                    Ancak işbu Politika’ nın 4. maddesinde sayılan, Veri Sahibinin açık rızası aranmayacak hallerden birinin mevcut olması halinde
                                     Kişisel Verilerin, Veri Sahibinin açık rızası olmaksızın yurt içinde üçüncü kişilere aktarımı mümkündür. <br /> <br />

                                    Özel Nitelikli Kişisel Veriler bakımından ise yeterli önlemler alınmak kaydıyla Kanun’un 6. Maddesinin
                                    3. Fıkrasında belirtilen şartlardan birinin mevcudiyeti halinde veri sahibinin açık rızası aranmaksızın 
                                    veri aktarımı yapılması mümkündür.
                                    </p> <br />

                                    <span id='kisisel-verilerin-yurt-disina-aktarilmasi'>- Kişisel Verilerin Yurt Dışına içinde Aktarılması</span> 

                                    <p>Kanun’un 9. maddesi uyarınca Kişisel Veriler kural olarak, Veri Sahibinin açık rızası olmaksızın yurt dışına aktarılamaz.
                                       Ancak aşağıda belirtilen hallerden birinin mevcut olması durumunda Kişisel Verilerin, Veri Sahibinin açık rızası aranmaksızın
                                        yurt dışında üçüncü kişilere aktarımı mümkündür:</p> <br />
                                        <ul>
                                            <li>Bu Politika’ nın 4. ve 5. maddelerinde belirtilen, Veri Sahibi’ nin rızasının aranmayacağının belirtildiği hallerden birinin mevcut olması</li>
                                            <li>Kişisel Verilerin aktarılacağı yabancı ülkede yeterli korumanın bulunması</li>
                                            <li>Yeterli korumanın bulunmaması durumunda Türkiye’deki ve ilgili yabancı ülkedeki veri sorumlularının yeterli bir korumayı yazılı olarak taahhüt 
                                            etmeleri ve Kurulun izninin bulunması</li>
                                        </ul> <br />

                                    <p>
                                    Yeterli korumanın bulunduğu ülkeler Kurulca belirlenerek ilan edilir. <br /> <br />
                                    Kişisel Veriler, uluslararası sözleşme hükümleri saklı kalmak üzere, Türkiye’nin 
                                    veya Veri Sahibinin menfaatinin ciddi bir şekilde zarar göreceği durumlarda, ancak 
                                    ilgili kamu kurum veya kuruluşunun görüşü alınarak Kurulun izniyle yurt dışına aktarılabilir. 
                                    </p><br />


                                    <span id='kisisel-verilerin-aktarilabilecegi-ucuncu-kisiler'>- Kişisel Verilerin Yurt Dışına içinde Aktarılması</span>  

                                    <p>
                                    Şirketimiz, Kişisel Verileri bu Politika’ da belirtilen amaçlarını gerçekleştirmek için, 
                                    Kanun’un 8. ve 9. maddelerine uygun olarak, yurt içinde veya yurtdışındaki, gerçek veya tüzel
                                     kişi olabilecek, aşağıda belirtilen üçüncü kişilere aktarabilmektedir: <br />
                                    </p> <br />

                                    <ul>
                                        <li>Tedarikçiler</li>
                                        <li>Denetim Firmaları</li>
                                        <li>Hizmet Alınan Firmalar</li>
                                        <li>İşbirliği Yapılan Firmalar</li>
                                        <li>Kullanıcılar</li>
                                        <li>Müşteriler</li>
                                        <li>Pay Sahipleri</li>
                                        <li>Bankalar ve Finans Kuruluşları</li>
                                        <li>Yargısal Merciler ve Kamu Otoriteleri</li>
                                    </ul> <br />

                                    <li id='kisisel-verilerinizi-islenme-amaclari'>KİŞİSEL VERİLERİNİZİN İŞLENME AMAÇLARI, İŞLEDİĞİMİZ KİŞİSEL 
                                     VERİLERİNİZ, TOPLAMA YÖNTEMLERİ VE HUKUKİ SEBEPLERİ</li> <br />

                                     <span id='islenme-amaclari'>- İşlenme Amaçları</span> <br />
                                     <p>Kişisel verileriniz KVKK’ da öngörülen sınırlara riayet edilerek Şirket mevzuatında gösterilen
                                         amaçları gerçekleştirmek için kullanılacaktır. İşleme amaçlar şunlardır;</p><br />

                                         <p>1. Bilgi güvenliği süreçlerinin yürütülmesi,</p>
                                         <p>2. Sözleşmenin kurulması ve ifasına yönelik süreçlerin yürütülmesi,</p>
                                         <p>3. Finans ve muhasebe süreçlerinin yürütülmesi ve denetimi,</p>
                                         <p>4. Şirketin iş faaliyetlerinin yürütülmesi ve denetimi,</p>
                                         <p>5. Faturalandırma süreçlerinin yürütülmesi,</p>
                                         <p>6. İnternet sitesi/mobil uygulamalar üzerinden hizmet alım işlerinin gerçekleşmesi ve işlem yapanın kimlik bilgilerinin teyit edilmesi,</p>
                                         <p>7. Açık rızanın bulunması halinde, çeşitli pazarlama ve reklam faaliyetlerinde kullanabilmesi, tercihlerinize uygun teklif ve 
                                            hizmetlerin tarafınıza sunulması başta olmak üzere sizlere daha iyi bir hizmet deneyiminin sağlanması ve memnuniyetinizin arttırılmasına yönelik faaliyetlerin yürütülmesi,</p>
                                         <p>8. Müşteri memnuniyetini arttırmak, platformda teklif arayan müşterilerimizi tanıyabilmek ve müşteri çevresi analizinde kullanabilmek, Şirketimizin sunduğu ürün ve 
                                            hizmetlerin geliştirilmesi ve iyileştirilmesine yönelik faaliyetlerin yürütülmesi,</p>
                                         <p>9. İletişim faaliyetlerinin yürütülmesi, </p>
                                         <p>10. Stratejik analiz çalışmalarının yürütülmesi,</p>
                                         <p>11. İlgi alanlarınızı dikkate alarak ilgilenebileceğiniz sektör ve hizmetlerin sunulması,</p>
                                         <p>12. Açık rızanın bulunması halinde, Online Keşif nezdindeki gelişmeler, fırsatlar ve yenilikler hakkında tarafınıza bilgi verilmesi,</p>
                                         <p>13. İnternet sitesi ve/veya mobil uygulamalardan anket çalışmalarının yapılması,</p>
                                         <p>14. Ürün ve hizmetlerimize ilişkin talep, şikayet ve önerilerinizin değerlendirilmesi</p>
                                         <p>15. Hizmetlere yönelik bilgi almanızın sağlanması,</p>
                                         <p>16. Mal ve Hizmetlerin satış sonrası destek hizmetlerinin yürütülmesi,</p>
                                         <p>17. Faaliyetlerin mezbuata uyhun yürütülmesi,</p>
                                         <p>18. Online Keşif platformuna ilişkin olarak operasyonların güvenliğinin sağlanması,</p>
                                         <p>19. Hukuk işlerinin takibi ve yürütülmesi,</p>
                                         <p>20. Çalışan adayı/ stajyer seçme ve yerleştirme süreçlerinin yürütülmesi ve İnsan kaynakları politikalarının en iyi şekilde planlanması ve uygulanması,</p>
                                         <p>21. Şirketimiz tarafından sunulan hizmetlerden yararlanmanız için gereken çalışmaların ilgili birimlerce yapılması,</p>
                                         <p>22. www.onlinekesif.com internet sitesi Destek ile ya da diğer iletişim yollarıyla tarafımızla iletişime geçmeniz halinde,
                                                 sizlere satın alma desteği ya da teknik destek sağlayabilmek,</p>
                                         <p>23. Şirketin ihtiyaç duyduğu alanlarda personel temini, 4857 sayılı İş Kanunu, 6331 sayılı İş Sağlığı ve Güvenliği Kanunu ve 5510 sayılı
                                             Sosyal Sigortalar ve Genel Sağlık Sigortası Kanunu başta gelmek üzere iş hayatını düzenleyen mevzuat kapsamında hak ve yükümlülüklerin yerine getirilmesi,</p>
                                         <p>24. Şirket hukuk işlerinin icrası/takibi, Yetkili kamu kurum ve kuruluşları ile adli ve yargı makamlarına kanunlarda gösterilen haller dahilinde bilgi-belge temini,</p>
                                         <p>25. Finansal raporlama ve risk yönetimi işlemlerinin icrası/takibi,</p>
                                         <p>26. İş ortakları veya tedarikçilerle olan ilişkilerin yönetimi,</p>
                                         <p>27. Şirketteki organizasyon ve etkinlik (seminer, konferans, toplantı, eğitim, sempozyum vb.) yönetimi süreçlerinin işlerliğinin sağlanarak 
                                                 kamuoyuna duyurulması,</p>
                                         <p>28. Şirketin kamuoyunda bilinirliğinin sağlanması ve güncelliğinin korunabilmesi için internet sayfası ve sosyal medya hesaplarının güncel verilerle sürekliliğinin sağlanması, 
                                                 tanıtım ve reklam süreçlerinin yönetilmesi,</p>
                                         <p>29. Online Keşif içeriklerinden, Kişisel Veri Sahipleri’nin en iyi şekilde faydalandırılması ve onların talep, ihtiyaç ve isteklerine göre özel hale getirilerek önerilmesi,</p>
                                         <p>30. Şirkete talep ve şikayetlerini ileten Kişisel veri Sahipleri ile iletişime geçilmesi ve talep/şikayet yönetiminin sağlanması,</p>
                                         <p>31. İnternet sitesinde sunulan hizmetlerin geliştirilmesi ve sitede oluşan hataların giderilmesi,</p>
                                         <p>32. Saklama ve arşiv faaliyetlerinin yürütülebilmesi ve yıllık birim faaliyet raporlarının oluşturulabilmesi amacıyla 
                                                  mevzuatta gösterilen usullerle arşiv tutulması,</p>
                                         <p>33. Ziyaretçi kayıtlarının oluşturulması ve takibi,</p>
                                         <p>34. Bina, personel ve ziyaretçi güvenliğinin temini,</p>
                                         <p>35. Verilerin anonim hale getirilerek araştırma amacıyla istatistiki faaliyetlerde kullanılabilmesi,</p>
                                         <p>36. Şirket adına Strateji Geliştirme Daire Başkanlığı öncülüğünde yeni stratejilerin geliştirilebilmesi, 
                                            eski stratejilerin güncellenebilmesi ve gerekli analizlerin yapılması,</p>
                                         <p>37. KVKK kapsamında yapılacak ilgili kişi başvurularının alınması ve yanıtlanabilmesi
                                             amaçlarıyla sınırlı olarak Kanun’un 5. ve 6. maddelerinde belirtilen kişisel veri işleme şartları kapsamında işlenir. 
                                             Bahsi geçen amaçlarla gerçekleştirilen işleme faaliyetinin, Kanun kapsamında öngörülen şartlardan herhangi birini 
                                             karşılamıyor olması halinde, ilgili işleme sürecine ilişkin olarak Şirket tarafından açık rızanız temin edilmektedir.</p> <br />

                                             <span id='islenen-kisisel-veriler'>- İşlenen Kişisel Veriler</span>
                                             
                                             <p><br />
                                            <span>Kimlik Bilgileri:</span> İsim, soy isim, T.C. kimlik no, anne adı, baba adı, doğum yeri ve tarihi, 
                                            cinsiyet, nüfus cüzdanı, SGK numarası bilgileri. <br /> <br />
                                            <span>İletişim Bilgileri:</span> İkamet adresi, telefon numarası ve e-posta adresi, 
                                            KEP adresi, Şirkete tarafınızla iletişim kurulması için bildirilen telefon numarası, 
                                            faks numarası veya ulaşılabilmek için rıza ile Şirkete bildirilen tüm diğer iletişim yollarına ilişkin bilgiler. <br /> <br />
                                            <span>Çalışma ve Eğitim Bilgileri:</span> Şirket’e iş başvurusu için doldurulan başvuru formu, 
                                            kayıt evrakı kapsamında ve/veya Şirket resmi e-posta adresi olan www.onlinekesif.com  adresine gönderilen iş 
                                            başvuru formlarında ya da fiziki başka başvuru usulleri kullanılmak suretiyle edinilen kimlik bilgileri, 
                                            ilgili kişinin iş durumuna ait bilgiler, iletişim bilgileri ile eğitim durumuna ait 
                                            (“Üniversite mezunu, yüksek lisans mezunu, fizik bölümü mezunu” gibi) bilgiler ve geçmiş mezuniyet bilgileri, 
                                            katılım sağlanan kurs/seminer bilgileri, sertifika bilgileri ile ulusal yahut uluslararası sınav sonuçları. <br /> <br />

                                            <span>Finansal/Mali Bilgileri:</span>Maaş ve yan hakların ödenmesi, fazla ve yersiz alınan ödemelerin iadesi, 
                                            döner sermayeden yapılacak ödemelerin gerçekleştirilebilmesi, Şirket dışı görevlendirmelerde ödemelerin yapılabilmesi
                                             amacıyla edinilen; banka isim ve şube bilgisi, banka hesap no bilgisi, IBAN no bilgisi. <br /> <br />
                                            <span>Görsel/İşitsel Bilgiler:</span>Şirket’in düzenlediği konferans, seminer, tiyatro gösterisi, 
                                            sergi, münazara ve benzeri etkinliklerde etkinlikle ilgili olarak; etkinliği tanıtmak, duyurmak, 
                                            yaygınlaşmasını sağlamak gibi amaçlar için etkinliğin gerçekleştiği yerin ve katılanların durağan veya akan 
                                            görüntüleri ve/veya sesleri ile Şirket merkez, şube ve temsilciliklerinde güvenliği sağlamak için kurulmuş 
                                            olan kameraların sağladığı görsel/işitsel bilgiler. Söz konusu etkinliklerde elde edilen görsel/işitsel 
                                            bilgiler Şirket faaliyetlerini aşmayacak ve etkinliğin amacı ile sınırlı olacak şekilde Şirket’in internet sitesinde, 
                                            Şirket tarafından kullanılan sosyal paylaşım platformlarında, Şirket tarafından basılan eserlerde kullanılabilecektir. 
                                            Yahut Şirket’in izniyle ve kontrolü altında basılmak/yayınlanmak üzere 3. kişilere 
                                            (basımevi, yayıncı, kurum, kuruluş…) gönderilebilecektir. Bu kullanım usulü güvenlik kamera görüntülerini kapsamayacak olup, 
                                            ilgili görsel/işitsel kişisel veriler kullanılmadan önce katılımcılara ayrıca bilgilendirme yapılacak olup, açık rızaları alınacaktır. <br /> <br />
                                            <span>Özel Nitelikli Kişisel Veriler: </span> Şirket bünyesinde mevzuat kaynaklı çalıştırma
                                             yükümlülüklerini yerine getirebilmek amacıyla çalıştırılan engelli ve hakkında mahkumiyet kararı 
                                             verilmiş ve/veya güvenlik tedbiri uygulanmış kişilere ilişkin sağlık, ceza 
                                             mahkumiyeti ve güvenlik tedbirlerine ilişkin özel nitelikli kişisel veriler işlenmektedir. <br /> <br />
                                            Şirket’nin bu amaçlar haricinde başka herhangi bir doğrudan özel nitelikli kişisel veri işleme amacı 
                                            olmamakla birlikte Şirket’e sunmuş olduğunuz kimlik belgesi, fotoğraflar yahut etkinlikler kapsamında 
                                            durağan/akan görüntülerden elde edilen veriler kapsamında dolaylı olarak edinilme ihtimali olan din, 
                                            kılık-kıyafet, felsefi inanç, siyasi düşünce ve sağlık verileriniz (örneğin fotoğraftan anlaşılan kıyafet, 
                                            cihaz ve protezler veya görüntülü görüşme esnasında kişinin kendi rızası ile dile getirdiği sağlık problemleri) 
                                            ile Şirket tarafından sağlanan bir evrakta ihtiyari olarak belirttiğiniz özel nitelikli sair bilgiler. 
                                             </p><br />

                                             <span id='kisisel-verilerinizin-toplanma-yontemleri'>Kişisel Verilerinizin Toplanma Yöntemleri</span><br />
                                             <p>Kişisel verileriniz;</p><br />
                                             <ul>
                                                <li>Web Sitesi, Uygulamalar, e posta, işe alım portalları dahil üçüncü şahıslara ait dijital mecralar veya bir yazılım üzerinden,</li>
                                                <li>Sözleşmeler, başvurular, formlar, çağrı merkezi, uzaktan destek, satış ve pazarlama birimi, Web sitesindeki çerezler 
                                                    (Web sitesinde kullanılan çerezler belirlenebilir kılmamaktadır, detaylı bilgi için aşağıda yer alan Çerez Hakkında 
                                                    Bilgilendirme isimli kısmı inceleyiniz), telefon gibi vasıtalar aracılığı ile</li>
                                                <li>İlgili Kişi ile yüz yüze yapılan görüşmeler aracılığı ile</li>
                                                <li>Kayıt formu, internet üzerinden doldurulan kayıt/başvuru formları, alındı ve harcama belgeleri, 
                                                    etkinliklerde kullanılan görüntü ve ses kayıt cihazları, güvenlik kamera kayıtları ile</li>
                                                <li>İnternet sitesinde yer alan 
                                                    <a href="https://api.whatsapp.com/send/?phone=08502420573&text&type=phone_number&app_absent=0" target="_blank">
                                                        <u> 0850 242 05 73</u></a> numaralı WhatsApp hattı ile tarafımızla iletişime geçilmesi sırasında, Üçevler Mahallesi Tanay Cad. 
                                                        No: 19 Kat: 2 D: 4 Nilüfer – BURSA 
                                                    adresine ya da herhangi bir mail adresine, kişisel veri gönderilmesi durumunda</li>
                                             </ul>
                                             <p>toplanmaktadır.</p> <br />

                                             <p>
                                             Kişisel verileriniz ayrıca otomatik yollarla <a href="https://www.onlinekesif.com" target="_blnak"> <u> www.onlinekesif.com</u> </a>   
                                             adresi ve uzantılarında kullanılan çerezler 
                                             (cookie) vasıtasıyla da toplanmaktadır. Söz konusu çerezler, yalnızca ziyaretçinin siteyi 
                                             tam verimlilikte kullanabilmesi için gerekli çerezler olup ziyaretçinin tercihlerini hatırlamak amacıyla 
                                             kullanılmakta ve başka bir kişisel veri temin etmemektedir. 
                                             </p> <br />

                                             <span id='kisisel-veri-islemenin-hukiki-sebepleri'>- Kişisel Veri İşlemenin Hukuki Sebepleri</span> <br />

                                             <p>KVKK, kişisel verilerin işlenme şartlarını 5. maddesinin 2. fıkrasında listelemektedir. 
                                                Eğer bir veri sorumlusu tarafından kişisel verilerin işlenme amaçları, KVKK’ da listelenmiş 
                                                olan kişisel veri işleme şartları çerçevesinde değerlendirilebiliyorsa, o veri 
                                                sorumlusu kişisel verileri hukuka uygun olarak işleyebilmektedir. 
                                                Bu kapsamda Şirket tarafından da güdülmekte olan kişisel veri işleme amaçlarının, KVKK’ da 
                                                düzenlenen kişisel veri işleme şartları kapsamında değerlendirilebildiği durumlarda 
                                                Şirket tarafından kişisel veri işleme faaliyetleri gerçekleştirilmektedir. 
                                                Şirket kişisel veri işleme şartları kapsamına girmeyen herhangi bir kişisel 
                                                veri işleme faaliyetinde bulunmamaktadır. <br /> <br />
                                                KVKK’da yer alan kişisel veri işleme şartları şunlardır;</p>

                                                <ul>
                                                    <li>İlgili kişinin açık rızasının bulunması,</li>
                                                    <li>Kanunlarda açıkça öngörülmesi,</li>
                                                    <li>Fiili imkânsızlık nedeniyle rızasını açıklayamayacak durumda bulunan
                                                         veya rızasına hukuki geçerlilik tanınmayan kişinin kendisinin ya da bir 
                                                         başkasının hayatı veya beden bütünlüğünün korunması için zorunlu olması,</li>
                                                    <li>Bir sözleşmenin kurulması veya ifasıyla doğrudan doğruya ilgili olması 
                                                        kaydıyla sözleşmenin taraflarına ait kişisel verilerin işlenmesinin gerekli olması,</li>
                                                    <li>Veri sorumlusunun hukuki yükümlülüğünü yerine getirebilmesi için zorunlu olması,</li>
                                                    <li>Veri sahibinin kendisi tarafından alenileştirilmiş olması,</li>
                                                    <li>Bir hakkın tesisi, kullanılması veya korunması için veri işlemenin zorunlu olması,
                                                        Veri sahibinin temel hak ve özgürlüklerine zarar vermemek kaydıyla, 
                                                        veri sorumlusunun meşru menfaatleri için veri işlenmesinin zorunlu olması.</li><br />
                                                        <p>Özel nitelikli kişisel veriler için de temel işleme şartı açık rızadır ve 
                                                            Şirket temelde özel nitelikli kişisel veri işleme amacı gütmemektedir. 
                                                            Ancak faaliyetimiz gereği işlememiz gereken veya açık rızanız ile onay 
                                                            verdiğiniz özel nitelikli kişisel verileriniz de mevzuat dahilinde ölçülü olarak işlenmektedir.</p> 
                                                </ul><br />

                                                <p>KVKK’da özel nitelikli kişisel verilerin işlenebilmesi için sayılan şartlar şunlardır;</p> 
                                                <ul>
                                                    <li>İlgili kişinin açık rızasının bulunması,</li>
                                                    <li>Sağlık ve cinsel hayat dışındaki özel nitelikli kişisel veriler için kanunlarda açıkça öngörülmesi,</li>
                                                    <li>Sağlık ve cinsel hayata ilişkin kişisel veriler ise ancak; kamu sağlığının korunması, 
                                                        koruyucu hekimlik, tıbbî teşhis, tedavi ve bakım hizmetlerinin yürütülmesi, 
                                                        sağlık hizmetleri ile finansmanının planlanması ve yönetimi amacıyla, 
                                                        sır saklama yükümlülüğü altında bulunan kişiler veya yetkili 
                                                        kurum ve kuruluşlar tarafından ilgilinin açık rızası aranmaksızın işlenebilir.</li>
                                                </ul><br />
                                                <p>Bir kişisel veri işleme faaliyetini hukuka uygun kılan bir veya birden fazla kişisel veri işleme şartı aynı
                                                      anda bulunabilmektedir. <br /><br />
                                                    Söz konusu amaçlarımızı gerçekleştirebilmek için yukarıda belirttiğimiz verilerinizin işlenmesi gereği hasıl olmaktadır. 
                                                    Şirketimize, kimlik bilgileri aktarılırken aslında işleme amaçlarımız dahilinde olmayan veriler de tarafımıza aktarılabilmektedir. 
                                                    İdari ve teknik tedbirler dahilinde söz konusu verileri mevzuatta öngörülen süreler sonunda siliyor ve/veya 
                                                    anonim hale getiriyoruz ancak her koşulda bu durumu temin etmek mümkün olmamaktadır. 
                                                    Bu halde, söz konusu verilerin işlenmesi amacıyla açık rızanıza başvurmak gerekmektedir.</p><br />

                                              <li id='ilgi-kisinin-haklari-cercevesinde-basvuru-yontemi'> İLGİ KİŞİNİN HAKLARI ÇERÇEVESİNDE BAŞVURU YÖNTEMLERİ</li> 
                                              <p>Kişisel Verilerin Korunması Kanunu 13. maddesi gereğince, yukarıda belirtilen haklarınızı kullanmak 
                                                ile ilgili talebinizi, Veri Sorumlusuna Başvuru Usul ve Esasları Hakkında Tebliğ’de belirtilen 
                                                yöntemlerle mektup veya kargo ile ıslak imzanızı taşıyan dilekçe ile veya 5070 Sayılı Elektronik 
                                                İmza Kanununda tanımlı olan «Güvenli Elektronik İmza» ile başvuru  Üçevler Mahallesi Tanay Cad. 
                                                        No: 19 Kat: 2 D: 4 Nilüfer – BURSA adresimize başvuru yapabilirsiniz.</p><br />

                                                        Yukarıda belirtilen haklarınız ile ilgili <button style={{border:"none", background:"white" ,cursor: "pointer"}}
                                                         onClick={handleDownload}> <span> başvuru formumuzu </span> </button> ise  buradan indirebilirsiniz.
                                         </ol>
            </div>
            
        </div>
                        )
}

                        export default KvkkPage