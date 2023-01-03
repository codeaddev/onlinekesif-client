import React from 'react'
import "../tedarikci-aydınlatma-ve-gizlilik-taahhutnamesi/Tagt.scss"
import { WORD_FILE_BASE64 } from './tedarikci-sozlesmesi';
import FileSaver from 'file-saver';
function TagtPage() {
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
          "tedarikci-sozlesmesi.docx"
        );
      };

   

    return (
        <div className='tedarikci-page'>
            <div className='tedarikci-container'>
            <h1>ONLİNE KEŞİF TEDARİKÇİ SÖZLEŞMESİ</h1><br />

            <ol>
                <li><a href="#giris">GİRİŞ</a></li> 
                <li><a href="#tanimlar">TANIMLAR</a></li>
                <li><a href="#kapsam-ve-amac">KAPSAM VE AMAÇ</a></li>
                <li><a href="#online-kesif-tarafindan-sunulan-hizmet-modelleri">ONLİNE KEŞİF TARAFINDAN SUNULAN HİZMET MODELLERİ</a></li> 
                <li><a href="#tedarikci-profili-olusturma">TEDARİKÇİ PROFİLİ OLUŞTURMA</a> </li>
                <li><a href="#tedarikci-tarafindan-sunulan-hizmetlere-iliskin-taraflarin-hak-ve-yukumlulukleri">TEDARİKÇİ TARAFINDAN SUNULAN HİZMETLERE İLİŞKİN TARAFLARIN HAK VE YÜKÜMLÜLÜKLERİ</a></li>
                <li><a href="#finansal-sartlar-ve-odemeler">FİNANSAL ŞARTLAR VE ÖDEMELER</a></li>  
                <li><a href="#gizlilik-ve-kisisel-verilerin-korunmasi">GİZLİLİK VE KİŞİSEL VERİLERİN KORUNMASI</a></li>  
                <li><a href="#sozlesmenin-feshi-ve-sure">SÖZLEŞMENİN FESHİ VE SÜRE</a></li> 
                <li><a href="#imza-ve-uyusmazliklarda-yetkili-merci">İMZA VE UYUŞMAZLIKLARDA YETKİLİ MERCİ</a></li> </ol> <br />
                <a href="#muvafakatname">MUVAFAKATNAME</a><br /><br />
                <a href="#ek1">EK 1: ÜÇÜNCÜ TARAF BİLGİ GÜVENLİĞİ GEREKSİNİMLERİ TAAHHÜTNAMESİ</a>
              <br /> <br />
              <ol>
                <li><a href="#tanimlarr">TANIMLAR</a></li>
                <li><a href="#sartlar">ŞARTLAR</a></li>
                <li><a href="#genel-hukumlar">GENEL HÜKÜMLER</a></li>
                <li><a href="#tanzim-yukumlulugu">TAZMİN YÜKÜMLÜLÜĞÜ</a></li>
               <li><a href="#bilgi-ve-kayitlarin-teslimi">BİLGİ VE KAYITLARIN TESLİMİ</a></li>
               <li><a href="#yetkili-mahkeme">YETKİLİ MAHKEMEYETKİLİ MAHKEME</a></li>
               <li><a href="#yururluk">YÜRÜRLÜK</a></li></ol>
           <br /><br />
           <a href="#ek2">EK 2: KİŞİSEL VERİLERİN KORUNMASINA YÖNELİK PROTOKOL</a>
           <ol><br />
            <li><a href="#taraflar">TARAFLAR</a></li>
            <li><a href="#amac-ve-kapsam">AMAÇ VE KAPSAM</a></li>
            <li><a href="#taraflarin-hak-ve-yukumlulukleri">TARAFLARIN HAK VE YÜKÜMLÜLÜKLERİ</a></li>
            <li><a href="#ozel-duzenlemeler">ÖZEL DÜZENLEMELER</a></li>
            <li><a href="#son-hukumler">SON HÜKÜMLER</a></li>
           </ol><br />
            
            <h4 id='giris'>1.GİRİŞ</h4> <br />
          <p>
          İş bu sözleşme ‘Online Keşif’ ile Tedarikçi arasında modüller çerçevesinde 
          karşılıklı sunulacak hizmetlerin şart ve koşullarına ilişkindir. 
          İş bu sözleşmede ‘’biz’’ ‘’online keşif’’ olarak anılan 
          Online Keşif’in kurucusu ……………………….Anonim Şirketi ‘’siz’’ 
          ’’tedarikçi’’ ‘’hizmet veren’’ olarak anılan ise 
          başvuruda adı geçen …………………………………………….. şirket/firmasını ifade eder.</p> <br />

          <p>Online Keşif modüllerinden birini satın aldığınızda 
            siz (kendiniz veya temsil ettiğiniz işletme adına) 
            kaydolduğunuz veya www.onlinekesif.com ile bağlantılı 
            olarak kullandığınız herhangi bir hizmete ilişkin 
            iş bu sözleşmenin şartları koşulları ile bağlı 
            olacağınızı kabul ve taahhüt etmektesiniz.</p><br />

            <h4 id='tanimlar'>2.TANIMLAR</h4> <br />

            <table>
            <tr>
                <td><span>Platform</span></td>
                <td>Mülkiyeti ve 6769 sayılı Sınai 
                Mülkiyet Kanunu ve 5846 sayılı Fikir ve Sanat Eserleri 
                Kanunu uyarınca her türlü fikri ve sınai hakları 
                Online Keşif’e ait olan ve işbu Sözleşme ile belirlenen 
                hizmet ve/veya kampanyaların sunulduğu 
                <a href="https://firma.onlinekesif.com/giris-yap" target="_blank"><u>
                www.firma.onlinekesif.com </u></a> internet sitesini ifade eder.</td> 
            </tr>

            <tr>
                <td><span>Tedarikçi</span></td>
                <td>Online Keşif ile arasında olan ayrı bir 
                    sözleşmesel ilişkiye dayanarak oluşturduğu 
                    hesap üzerinden Online Keşif’in <a href="https://onlinekesif.com/" target="_blank"> 
                    <u> www.onlinekesif.com </u></a> 
                    adlı internet sitesinde yayınladığı teklifler 
                    aracılığıyla çeşitli mal ve/veya hizmetleri 
                    satışa arz eden tüzel/gerçek kişi Üye’yi ifade eder.</td>
            </tr>

            <tr>
                <td><span>Teklif Paneli (“Panel”)</span></td>
                <td>Tedarikçi’nin 
                kendisinden talep edilen firma/kişisel bilgilerini 
                girdiği, kendisin Tedarikçi’ye özel sanal sayfayı ifade eder.</td>
            </tr>
            </table><br />

            <h4 id='kapsam-ve-amac'>3.KAPSAM VE AMAÇ</h4><br />
            <p>Online Keşif, teknik sektörler özelinde, kullanıcıların 
                uzmanlık gerektiren işlerde, firmalardan teklif alabileceği, 
                firmaların memnuniyet puanını görebileceği ve 
                uygun olması durumunda tedarikçi ile kullanıcıyı 
                buluşturan; Tedarikçilerin ise, kullanıcıların 
                talep ettiği ürün listelerine kullanıcıların 
                kimliklerini görmeden fiyat girerek teklif 
                verdiği bir online bir platformdur. Online Keşif 
                aynı zamanda firmaların CRM yönetimi yapabildiği, 
                platform harici müşterilerine de teklif hazırlayabileceği , 
                kendi iş akış sistemlerini takip edebildiği, sektörüne 
                özel hesaplayıcıları kullanabildiği, teknik dokümanların 
                stoklandığı kütüphanelerinin olduğu ve teknik blog 
                içerikleri ile kullanıcılara doğru kaynaktan bilgi 
                sunmayı amaçlamaktadır. </p><br />

                <h4 id='online-kesif-tarafindan-sunulan-hizmet-modelleri'>4.ONLİNE KEŞİF TARAFINDAN SUNULAN HİZMET MODELLERİ</h4><br />
                <p>İş bu sözleşme kapsamında Online Keşif tarafından 
                    siz Tedarikçilerimizin hakları korunmakta olup 
                    platform üzerinden sunulan hizmetlerin sahibi 
                    veya sağlayıcısı değildir. Biz sistemin 
                    sorumluluğunun yanı sıra , kullanıcılar (tüketici) 
                    tarafından oluşturulan taleplerin/projelerin  size 
                    ulaşmasını sağlamak ve teklif verme aşamasından 
                    sonra kullanıcının arzusuna sunmayı sağlamaktayız. 
                    Kullanıcıların istek, görüş ve önerilerini takip etmek, 
                    tedarikçilerin verdiği teklifleri denetlemek sistemin görevleri 
                    içerisindedir. Bununla birlikte Online Keşif iki 
                    tarafın çıkarlarını korumak ve kollamaktan imtina etmez.</p> <br />
                    <ul>
                    <h4>4.1 CRM Hizmetleri</h4>
                    <p>Firmalar için cari kartlarının kaydedilebildiği 
                    ve bu cariler için teklif hazırlayabileceği bir 
                    paneldir. CRM paneli her sektör için özelleştirilmiştir. 
                    Firmanın sektörü ve çalıştığı ürün grubu 
                    eklenebilir. Firmalar müşterilerini iş 
                    bittikten sonrada takip edebilecek ve rapor edebileceklerdir.</p><br />


                    <h4>4.2 İş Akış Programı</h4>
                    <p>Firmaların işlerini, ekiplerini 
                    ve müşterilerini yönetebileceği her sektör 
                    özelinde yapılmış programdır. Bu program ile 
                    ekiplere görev açılabilir, bu görevleri birbirine 
                    bağlayarak iş sırası oluşturulabilir ve bu görev ilgiliye 
                    atanabilir. Görev üzerine dışarıdan aldıkları hizmetler ve 
                    süreçler eklenerek iş akışı bütünüyle yönetilir.</p><br />

                    <h4>4.3 Mobil Uygulamalar</h4>
                    <p>Online Keşif’in tüm app platformlarında
                    mobil ve tablet versiyonları bulunmaktadır.
                    Firmaların CRM ve İş Akış Programlarının 
                    kullanılabildiği, sadece sisteme kayıtlı 
                    firmalar tarafından erişim sağlanabilmesi için 
                    geliştirilmiş mobil uygulamalar paketi bulunmaktadır.</p><br />

                    <h4>4.4 VIP Hizmetleri</h4>
                    <p>Tüketici VIP hizmet paketini satın 
                    aldığında Online Keşif ekipleri müşteri 
                    ile iletişime geçerek adrese ekip gönderecektir 
                    ve yerinde inceleme yaparak ihtiyaç listesini 
                    çıkaracak ve müşteriyi bilgilendirerek listeyi 
                    firmalara servis edecektir. Bu hizmet ile, 
                    yapılan iş Online Keşif tarafından sonucu   
                    fiziki yada online denetim ile kullanıcı güvenceye 
                    alınır. Tüketici keşif işlemlerini tamamlayıp bir 
                    firma ile anlaştıktan sonra hizmet süreci sistem ve 
                    onu kontrol eden ekip tarafından takip edilmektedir. 
                    Hayata geçirilen talep Online Keşif mühendisleri 
                    tarafından kontrol edilir ve sonuçlanan işlem, 
                    anlaşma şartlarına uygun ise tüketiciye ödemeyi 
                    onaylayabileceği bilgisi verilir.</p><br />
                    <p>Sanayi tüketicileri için online keşif endüstri 
                    ekibi, fabrika ile talepler ve öneriler üzerine 
                    bir toplantı gerçekleştirecektir. 
                    Toplantı sonucunda verilen kararlar 
                    doğrultusunda ürün/iş listeleri oluşturulup 
                    fabrika onayına sunulacaktır. Fabrikanın onayı 
                    aldıktan sonra ürün/iş listeleri tekliflendirilmek 
                    üzere B2B paneli üzerinden firmalara servis edilecektir. 
                    Firmaların teklif talepleri de B2B panel üzerinden 
                    fabrikaya sunulacaktır.</p><br />
                    
                    <h4>4.5 Garantörlük Hizmeti</h4>

                    <p>Bu hizmet ile,  ödeme Online Keşif tarafında bekletilerek, 
                    sistem tarafından projeye atanan bir mühendisin yönetiminde; 
                    kullanıcı; tedarikçi firma ile süreç esnasında görüşmeden 
                    tamamen Online Keşif garantisinde süreci yürütebilir. 
                    Tüketici keşif işlemlerini tamamlayıp firma ile 
                    anlaştığında Online Keşif tarafından bir mühendis 
                    ilgili işe atanır. Ödeme Online Keşif tarafından 
                    alınarak süreç sonucunda ve şartlar tamamen 
                    karşılandığında firma hesabına 15 iş günü içerisinde 
                    geçecektir. Süreç başlamadan önce firma ile 
                    Online Keşif irtibat kurarak, her maddeyi 
                    netleştirir. İş bitiminde Online Keşif ekipleri 
                    işi kontrol eder ve iş tesliminde kullanıcıyı bilgilendirir. 
                    Eğer iş firmadan kaynaklı bir sebep ile riske girer 
                    veya yapılmaz ise Online Keşif kendi teknik ekipleri 
                    ile işi %100 tamamlayarak tüketiciye teslim etmenin 
                    garantisini verir.</p><br />

                    <h4>4.6 Reklam Hizmetleri</h4>

                    <p>Ürün sayfalarının altında ve blog 
                    içeriklerinde reklam bölümleri bulunmaktadır. 
                    Firmalar bu alanlarda reklamlarını sunabilirler. 
                    Reklamlar, firmaların sadece portfolyo siteleri 
                    ve e-ticaret sitelerini içerebilir. Başka pazar 
                    yerlerinde ürün satan firmalar bu alanların 
                    reklamını platformda veremeyecektir.</p></ul><br />

                    <h4 id='tedarikci-profili-olusturma'>5.TEDARİKÇİ PROFİLİ OLUŞTURMA</h4><br />

                    <ul> <span>5.1</span>  İş bu sözleşmenin imzalanması halinde üyelik 
                    modeli belirlenen Tedarikçi ilk iş olarak Online Keşif 
                    platformu üzerinden üyelik işlemlerini tamamlaması gerekmektedir.</ul><br />
                    <ul> <span>5.2</span>  Üye olma sürecine başlamak için, 
                    bir veya daha fazla hizmete ilişkin olarak kayıt sürecini 
                    tamamlamanız, Online Keşif çalışanlarının sözlü veya 
                    yazılı şekilde yaptıkları beyanlara dayanarak hareket 
                    etmediğinizi ve bu hizmeti kendinizin yapmış olduğu 
                    araştırma ve değerlendirmelere dayanarak tercih 
                    ettiğinizi teyit etmiş olursunuz. Tarafların Hizmetlerden 
                    faydalanabilmesi, geçerli mevzuat uyarınca tarafların hukuka 
                    uygun şekilde sözleşme akdedebilmelerine ve sözleşmenin tarafı 
                    olabilmelerine bağlıdır. Başvurunuzda kendinizin 
                    (veya işletmenizin) adını, adresini, telefonunu ve e-posta 
                    adres bilgileri ile talep edeceğimiz diğer bilgileri sunmanız 
                    gerekmektedir. Temin ettiğiniz kişisel verileriniz Online 
                    Keşif’in Gizlilik Bildirimi uyarınca işlenecektir.</ul><br />
                    <ul> <span>5.3</span>  İş bu sözleşme uyarınca üyelik işlemi 
                    tamamlanan Tedarikçi kendi haklarını ve şifrelerini başka 
                    bir tedarikçiye devredemez. Tedarikçi şifre ve platform 
                    kullanımının güvenliğini kendisi sağlamaktadır. Tedarikçi, 
                    kusurundan dolayı kötü ve yanlış kullanımlardan kendisi sorumludur. </ul><br />
                    <ul> <span>5.4</span>  Üyelik işlemleri oluşturulurken 
                    Tedarikçiden alınan firma adı , soyadı, ünvanı, TCKN/Vergi 
                    numarası, Uzmanlık Alanları, Firma Tipi, Adres , 
                    e- posta, telefonu vb. verilerinin eksiksiz ve güncel 
                    olması gerekmektedir. Talep edilen verilerin yanlış 
                    ve eksik olmasından kaynaklı Kullanıcıların veya 3. 
                    Şahısların uğrayacağı zararlardan Online Keşif 
                    Sorumlu değildir.</ul><br />
                    <ul> <span>5.5</span>  Tedarikçi , profilini oluşturması 
                    ile üyelik modeline göre eklemeler yapabilir ve profilini 
                    geliştirebilir. Üyelik modeli Tedarikçisinin aylık cirosu 
                    veya talep üzerine değiştirilebilir. Tedarikçi üyelik 
                    modelinin iptali edilmesini talep etmesi halinde bu 
                    durumu Online Keşif’e derhal bildirmekle yükümlüdür.</ul><br />

                    <h4 id='tedarikci-tarafindan-sunulan-hizmetlere-iliskin-taraflarin-hak-ve-yukumlulukleri'>
                        6. TEDARİKÇİ TARAFINDAN SUNULAN HİZMETLERE İLİŞKİN TARAFLARIN HAK VE YÜKÜMLÜLÜKLERİ</h4><br />

                    <ul><span>6.1</span> Online Keşif münhasıran kendi takdirinde olmak üzere Tedarikçi’nin Platform’daki herhangi 
                    bir ürün ve/veya kampanyasına ilişkin ilanı sebep göstermeksizin kapatma hak ve yetkisine sahiptir.</ul><br />
                    <ul><span>6.2</span> Tedarikçi, Platform üzerinden sunmak istediği teklife ilişkin bilgileri 
                    Online Keşif’e tam ve doğru bir şekilde ileteceğini, tekliflerin ve/veya hizmetlerin mevzuata 
                    uygun olduğunu, bu teklif ve/veya hizmetlere ilişkin bilgileri değiştirmek yahut kaldırmak 
                    istediğinde bu durumu derhal Online Keşif’e bildireceğini kabul, beyan ve taahhüt eder. 
                    Tedarikçi’nin bu maddeye aykırı davranarak bilgileri tam ve/veya doğru bir şekilde iletmediği 
                    ve/veya Platform’da güncelleme gerektiren bilgiyi derhal Online Keşif’e bildirmediği 
                    takdirde meydana gelebilecek her türlü zarardan sorumludur. Tedarikçi’nin işbu maddeden 
                    doğan yükümlülüklerini gereği gibi yahut hiç yerine getirmemesi ile sebebiyle Online 
                    Keşif’in ödemek zorunda kalacağı her türlü uğradığı kar kaybı ve adli ve/veya idari 
                    para cezaları dahil ancak bununla sınırlı olmamak üzere tüm zararlarını, üçüncü kişi 
                    taleplerinden doğan tazminat borcu dahil ancak bunlarla sınırlı olmamak üzere yaptığı 
                    veya ileride yapacağı tüm ödemeleri ve masrafları (mahkeme masrafları, para cezaları, 
                    vergi, resim, harç dahil fakat bunlarla sınırlı olmamak üzere her türlü giderler) Online 
                    Keşif’in ilk talebinde herhangi bir mahkeme kararı ve/veya 3. Kişilerin onayına gerek 
                    kalmaksızın nakden ve defaten ödemeyi kabul, beyan ve taahhüt eder.</ul><br />
                    <ul><span>6.3</span> Kullanıcı hizmet almak istediği alana ilişkin kendi profili üzerinden 
                    platformun ‘Teklif Al’’ panelinden teklifin hazırlanması için Online Keşif tespit 
                    yönergesine uyarak gerekli olan bilgileri doğru şekilde bildirir.</ul><br />
                    <ul><span>6.4</span> Online Keşif teklif paneli üzerinden sağlanan  hizmet talepleri, 
                    yine Online Keşif tarafından Kullanıcı’nın hizmet talebi doğrultusunda malzeme ve iş 
                    listesini belirler. Belirlenen malzeme ve iş listesini Tedarikçilere sunarak Kullanıcı’nın 
                    en doğru teklifi almasına yardımcı olur. Tekliflere ilişkin tüm sorumluluk Tedarikçi ve 
                    Kullanıcı’ya ait olup Online Keşif’in hiçbir sorumluluğu bulunmamaktadır. Tedarikçi 
                    Platform’da yayınladığı tekliflere ilişkin görsel eklemek istediği takdirde bu 
                    görsellerin 5846 sayılı Fikir ve Sanat Eserleri Kanunu (“FSEK”) uyarınca eser 
                    niteliğini haiz olması halinde FSEK’in 21. maddesindeki işleme, 22. maddesindeki 
                    çoğaltma, 23. maddesindeki yayma, 24. maddesindeki temsil, 25. maddesindeki işaret, ses 
                    ve/veya görüntü nakline yarayan araçlarla umuma iletim hakkı Sözleşme süresiyle sınırlı 
                    olarak herhangi bir mecra ve ülke sınırlaması olmaksızın Online Keşif’e 3. kişilere de 
                    kullanılabilecek şekilde basit ruhsat verdiğini/vereceğini kabul, beyan ve taahhüt eder.</ul><br />
                    <ul><span>6.5</span> Tedarikçi, teklifini hazırlarken Kdv ve yasal vergileri dahil eder ve 
                    Kullanıcının hizmet talebini cevaplar. Online Keşif yapılan işten sorumlu olmadığı gibi 
                    sunulan tekliflerdeki Kdv ve yasal vergilerden de sorumlu değildir.</ul><br />
                    <ul><span>6.6</span> Kullanıcının teklifi onaylaması halinde aralarında bağlayıcı yasal bir 
                    anlaşma kurulduğu anlamına gelmektedir. Teklifin onaylanması ile Tedarikçi ve Kullanıcı’nın 
                    bilgi ekranları birbirine açılır ve taraflar iletişime açık hale gelir. 6698 sayılı Kişisel 
                    Verilerin Korunması Kanunu (“KVKK”) uyarınca, kimliği belirli ya da belirlenebilir gerçek 
                    kişiye ilişkin her türlü veri “Kişisel Veri” olarak tanımlanmıştır. Taraflar, kanunun 
                    emredici hükümleri gereğince verileri hukuka uygun işlemekle yükümlüdür.</ul><br />
                    <ul><span>6.7</span> Tedarikçi’nin, Panel’i yönetmeye başladığı ve bu sebeple Kullanıcı’nın 
                    verilerine ulaştığı takdirde bu verileri hiçbir şekilde işbu sözleşmenin kapsamı ve amacı 
                    dışında kullanmayacağını kabul, beyan ve taahhüt eder. İşbu maddenin ihlali sebebiyle 
                    Online Keşif’in ödemek zorunda kalacağı her türlü uğradığı kar kaybı ve adli ve/veya 
                    idari para cezaları dahil ancak bununla sınırlı olmamak üzere tüm zararlarını, üçüncü 
                    kişi taleplerinden doğan tazminat borcu dahil ancak bunlarla sınırlı olmamak üzere 
                    yaptığı veya ileride yapacağı tüm ödemeleri ve masrafları (mahkeme masrafları, 
                    para cezaları, vergi, resim, harç dahil fakat bunlarla sınırlı olmamak üzere her 
                    türlü giderler) Online Keşif’in ilk talebinde herhangi bir mahkeme kararı ve/veya 
                    3. Kişilerin onayına gerek kalmaksızın nakden ve defaten ödemeyi kabul, beyan ve taahhüt eder.</ul><br />
                    <ul><span>6.8</span> Online Keşif, Platform’da yer alacak herhangi bir Tedarikçi’nin tekliflerinin 
                    sıralaması konusunda hiçbir şekilde iltimas suretiyle kayırmayacağını kabul, beyan 
                    ve taahhüt eder. Ancak Tedarikçi’nin memnuniyet puanı bu sıralamaya  etki edecek 
                    olup memnuniyet puanına önem verilmelidir.</ul><br />
                    <ul><span>6.9</span> Online Keşif, Kullanıcının hizmeti almaktan vazgeçmesi sonucu 
                    Tedarikçinin zararından sorumlu değildir. Ayrıca Tedarikçi onayladığı 
                    teklifi geri çekmesi söz konusu değildir. Onaylanan teklif miktarı 
                    Tedarikçi’nin cirosuna eklenecektir.</ul><br />
                    <ul><span>6.10</span> Online keşif sadece Tedarikçi ve Kullanıcı/Tüketicileri buluşturan 
                    bir platform olup ek paket alınmadığı hallerde işin sorumluluğunu almamaktadır.</ul><br />
                    <ul><span>6.11</span> Hizmet Talepleri ve Teklifler ve taraflarca verilen bilgi, belge ve 
                    beyanlar (a) herhangi bir üçüncü kişinin, telif hakkı, patent, marka gibi fikri 
                    mülkiyet haklarını veya diğer haklarını ihlal etmeyecek; (b) yürürlükteki hiçbir 
                    kanun veya ikincil mevzuatı (ihracat denetimi, tüketici koruma, haksız rekabet 
                    veya yanıltıcı reklama ilişkin olanlar vb.) ihlal etmeyecek; (c) genel ahlak ve 
                    kamu düzenine aykırı, dürüst ve doğru olmayan, aldatıcı, yanıltıcı veya üçüncü 
                    kişilerin tecrübe ve bilgi noksanlıklarını istismar edici, can ve mal güvenliğini 
                    tehlikeye düşürücü, kamu sağlığını bozucu, hastaları, yaşlıları, çocukları ve özürlüleri 
                    istismar edici beyan ve tanıtım ifadeleri içermeyecek; (d) onur kırıcı, karalayıcı, 
                    tehditkâr veya taciz edici nitelikte olmayacak; (e) müstehcen olmayacak veya çocuk 
                    pornografisi içermeyecek ve (f) virüs, Truva atı gibi zararlı yazılımları veya 
                    herhangi bir sistem, veri veya kişisel bilgiye zarar vermeyi amaçlayan, zarar 
                    veren bilgisayar programcılığı uygulamalarını içermemesi gerekir. Aksi halde Online 
                    Keşif ’nin sorumluluğu bulunmayıp söz konusu sorumluluk Tedarikçi ve Kullanıcı’ya aittir.</ul><br />
                    <ul><span>6.12</span> Tedarikçi’nin tekliflere ilişkin Platform’da 
                    yayınladığı ilanlarda yer alan ve/veya sahibi ve/veya hak sahibi 
                    olduğu tüm markaların Sözleşme kapsamında her türlü pazarlama ve 
                    satış faaliyetinde herhangi bir mecra, baskı ve/veya kopya sayısı 
                    ve süre sınırlaması olmaksızın, işbu sözleşmeye ek herhangi bir ek 
                    bedel olmaksızın Online Keşif tarafından kullanılmasına muvafakat 
                    ettiğini, Online Keşif’in işbu markaları kullanımının marka sahibinin 
                    başta 6769 sayılı Sınai Mülkiyet Kanunu olmak üzere anılan markalar ve 
                    bunların kullanımı üzerindeki haklarını ihlal etmediğini kabul, beyan 
                    ve taahhüt eder.</ul><br />
                    <ul><span>6.13</span> Online Keşif Web sitesinin kullanılması ile oluşacak 
                    tüm verilerin fikri haklarına sahiptir. Söz konusu bilgileri Kullanıcı ve 
                    Tedarikçi bilgileri açıklamaksızın demografik bilgiler içeren raporlar 
                    düzenleyebilir. Bu tarz bilgileri veya raporları  kendisi kullanabilir 
                    veya iş ortakları ile üçüncü kişilere bedelli veya bedelsiz paylaşabilir. 
                    Bu husus gizlilik politikası hükümlerine aykırılık teşkil etmez. Online 
                    Keşif, Fikri haklarının ihlaline ilişkin uyuşmazlıklarda , uğradığı 
                    zararı ilk talebinde herhangi bir mahkeme kararı ve/veya 3. Kişilerin 
                    onayına gerek kalmaksızın nakden ve defaten ödemeyi kabul, beyan ve taahhüt eder.</ul><br />
                    <ul><span>6.14</span> Online Keşif, Tedarikçi ile Kullanıcı arasındaki indirim ve 
                    iade gibi konulara karışmamakta olup muhatap değildir. Online Keşif, Kullanıcı’nın  
                    onay verdiği teklif miktarını tedarikçi cirosuna kaydeder.</ul><br />
                    <ul><span>6.15</span> Online Keşif Tedarikçi ile Kullanıcı arasındaki teklif, 
                    kabul, sözleşme, icap ve ödeme aşamalarında herhangi bir sorumluluğu bulunmadığı 
                    gibi işin istenen zaman ve yerde eksiksiz yapılacağına yada Kullanıcının hizmet 
                    talep ettiği işin ödemesini yapacağını garanti etmez. Taraflar haklarında gerekli 
                    araştırmayı kendileri yapar. Tedarikçi ile Online Keşif arasında herhangi 
                    bir iş ortaklığı bulunmamaktadır.</ul><br />
                    <ul><span>6.16</span> Online Keşif işin tamamlanmasını ya da kalitesini garanti etmez. 
                    Online Keşif tarafından geliştirilen “Kalite’’ sisteminde Kullanıcıların yaptıkları 
                    yorumlar , puanlamalar ve firmanın kümülatif hacmi gibi kriterler belirlenerek 
                    Tedarikçi’nin memnuniyet puanı ortaya çıkar. Tedarikçi bu puana göre öne çıkar 
                    ve kendi hacminde hizmet talepleri yönlendirilir. Bu sayede Tedarikçi iş 
                    hacmini sürekli geliştirmiş ve büyütmüş olacaktır.</ul><br />
                    <ul><span>6.17</span> Online Keşif , Tedarikçi firmalara yapılan yorumlar ve puan 
                    değerlendirmelerini düzenler ve Tedarikçinin Kalite Puanını bu doğrultuda oluşturur.</ul><br />
                    <ul><span>6.18</span> Online Keşif , verilen hizmet ve yapılan işten Tedarikçi ve Kullanıcıların 
                    maksimum verimi alması için gerekli özeni gösterecektir. Her iki tarafa da bu 
                    konuda yardımcı olacak ancak Tedarikçilerin yetkinliği, hizmetin zamanında 
                    yapılması güvenli ve hatasız olması, Kullanıcı’nın memnuniyeti vb. konularda 
                    hiçbir garanti ve taahhütte bulunmamaktadır.</ul><br />
                    <ul><span>6.19</span> Tedarikçi profilinde belirttiği sektör ve verdiği 
                    hizmete ilişkin bilgi ve beyanların doğruluğundan kendi sorumludur. 
                    Bu hizmetlerin mevzuat kapsamında temin etmesi gereken her türlü izin, 
                    onay, kontrol belgesi, ruhsat vb. belgeye ilişkin sorumluluk kendisine 
                    aittir. Online keşif aksi takdirde bu durumlardan dolayı doğabilecek 
                    her türlü idari, hukuki ve cezai sonuçtan sorumlu değildir. Kullanıcı 
                    onaylamış olduğu teklif sonucu işin sonuçlanmayacağı kanaatine varır 
                    ise iptal eder ve bu iptale bağlı doğacak zararlardan Online Keşif 
                    sorumlu değildir.</ul><br />
                    <ul><span>6.20</span> Kullanıcı’nın profilinde belirttiği kimlik ve 
                    iletişim bilgileri gibi Tedarikçinin hizmet ilişkisi kurabilmesi için 
                    alması gereken bilgilerin doğruluğundan kendisi sorumludur. Ayrıca hizmet 
                    talebinde alacağı hizmete ilişkin belirttiği teknik bilgilerin hatalı ve 
                    eksik olmasından kaynaklı Tedarikçinin uğrayacağı zarardan Online Keşif 
                    sorumlu değildir. Böyle bir durumun yaşanması halinde Tedarikçi teklifi 
                    güncelleyemez , kabul edilen teklif miktarı cirosuna kaydedilir.</ul><br />
                    <ul><span>6.21</span> Tedarikçi ile Kullanıcı arasında yapılacak olan hizmet 
                    sözleşmelerinden doğan vergi resmi harç ve ödeme gibi benzeri 
                    yükümlülüklerden taraflar kendileri sorumludurlar. Online 
                    Keşif bu sözleşmelerin tarafı değildir. Tedarikçi , almış 
                    olduğu hizmetlere ilişkin tüm vergilerden , Online Keşif’in 
                    gelirine bağlı oluşan vergiler hariç olmak üzere sorumludur.</ul><br />
                    <ul><span>6.22</span> Online Keşif , teklifin onaylanması sonrası 
                    Tedarikçi ile Kullanıcı iletişime geçebilmesi adına tarafların 
                    beyan ettiği bilgileri karşılıklı görünür hale getirmektedir. 
                    Tarafların iletişime geçmesi sonrası ortaya çıkabilecek sorunlardan Online 
                    Keşif sorumlu değildir. Bu bilgi aktarımı hizmetin sorunsuz ve hızlı sağlanmasını 
                    amaçlamaktadır. </ul><br />
                    <ul><span>6.23</span> Tedarikçi’nin işbu Sözleşme ve/veya eklerindeki herhangi 
                    bir yükümlülüğünü tam ve/veya hiç yerine getirememesi halinde Online 
                    Keşif işbu Sözleşme’yi ve eklerini derhal herhangi bir bildirim 
                    gerekmeksizin feshederek Tedarikçi’den herhangi bir ihtara veya 
                    mahkeme emrine veya üçüncü kişilerin onayına gerek olmaksızın, uğradığı 
                    kar kaybı ve adli ve/veya idari para cezaları dahil ancak bununla sınırlı 
                    olmamak üzere tüm zararlarını, üçüncü kişi taleplerinden doğan tazminat 
                    borcu dahil ancak bunlarla sınırlı olmamak üzere yaptığı veya ileride 
                    yapacağı tüm ödemeleri ve masrafları (mahkeme masrafları, para cezaları, 
                    vergi, resim, harç dahil fakat bunlarla sınırlı olmamak üzere her türlü giderler) 
                    talep edebilecektir.</ul><br />
                    <ul><span>6.24</span> Online Keşif yaptığı duyuru ile, işbu Sözleşme’deki 
                    herhangi bir maddeyi tek taraflı değiştirebileceği gibi, Sözleşme’ye yeni 
                    madde/maddeler de ekleyebilir. İşbu Sözleşme’nin değişen ve/veya yeni eklenen 
                    hükümleri, ilan edildikleri tarihte geçerlilik kazanacak, geri kalan hükümler 
                    aynen yürürlükte kalarak hüküm ve sonuçlarını doğurmaya devam edecektir. 
                    Şu kadar ki bu değişiklikleri kabul etmemesi halinde Tedarikçi 15 (on beş) 
                    gün önceden yazılı bildirimde bulunmak kaydıyla işbu Sözleşme’yi herhangi 
                    bir tazminat ödemeksizin feshetme hakkına sahiptir.</ul><br />
                    <ul><span>6.25</span> Online Keşif, Tedarikçinin sisteme belirtmiş olduğu 
                    telefon ve e-posta iletişim araçlarına bilgilendirme veya reklam amaçlı iletiler gönderilebilir.</ul><br />
                    <ul><span>6.26</span> Tedarikçi, Online Keşif platformu üzerinden aldığı iş 
                    görevlendirmelerinde; ekibinde çalışan personeli sigortalı olacak, çalışanın 
                    yabancı uyruklu olması halinde çalışma izni olacak,  görevlendirmelere 
                    atanan personelin sabıka kaydı olmayacak ve taşeron firma ile yapılması 
                    halinde bu kurallar geçerli olacaktır. Kuralların ihlali halinde Tedarikçi 
                    firma 50.000 USD tutarında bir cezai şartı nakden ve defaten ödemeyi 
                    kabul ve taahhüt eder. Şirket, işbu maddede belirtilen cezai şart 
                    meblağının (i) adil ve hakkaniyete uygun olduğunu; (ii) iptalini ve 
                    tenkisini talep etmeyeceğini ve (iii) taraflar arasında karşılıklı 
                    olarak kabul edilmiş olması nedeniyle fahiş olduğu gerekçesiyle iptal 
                    ve tenkisini talep etme hakkından peşinen feragat ettiğini açıkça kabul, 
                    beyan ve taahhüt ederler.  Online Keşif’in, işbu maddede belirtilen 
                    tutarları Şirket’e yapacağı ödemelerden mahsup hakkı saklıdır.</ul><br />

                    <h4 id='finansal-sartlar-ve-odemeler'>7.	FİNANSAL ŞARTLAR VE ÖDEMELER</h4><br />

                    <ul><span>7.1</span> Kullanıcı standart hizmetlerden ücretsiz olarak faydalanacaktır. 
                    Tedarikçilerden anlaşmış olduğu işin ciro bedeli üzerinden komisyon alınacaktır. 
                    Bu cirolar toplanarak aynı ay içerisinde bir sonraki alacağı işten ödeyeceği 
                    komisyonun kademesi belirlenecektir. Aralıklarda belirlenen bedeller ay sonunda 
                    faturalandırılacaktır. Tüketici, tedarikçinin teklifini onaylaması ile 
                    teklif tutarı tedarikçinin cirosuna eklenecektir. </ul><br />
                    <ul><span>7.2</span> Kullanıcı teklifi kabul etmesi ile teklif bedeli Onlin Keşif’in 
                    ödeme yöntemleri ile tahsil edilecek olup 3 iş günü içerisinde Tedarikçi’nin hesabına 
                    aktarılacaktır.</ul><br />
                    <ul><span>7.3</span> Online Keşif verdiği ücretsiz hizmetleri ileride ücretli hale 
                    getirebilir ya da tamamen kaldırabilir. Bu husus Online Keşif’in inisiyatifindedir.</ul><br />

                    <h4 id='gizlilik-ve-kisisel-verilerin-korunmasi'>8. GİZLİLİK VE KİŞİSEL VERİLERİN KORUNMASI</h4><br />

                    <ul><span>8.1</span> Taraflar’a ait her türlü mali tablo, rapor, 
                    finansal ve hukuksal bilgiler, marka, üyelik bilgileri, ticari 
                    sır ya da diğer yasal korumaya konu olan ya da olmayan her türlü bilgi, 
                    söz konusu ticari ilişki esnasında tarafların ve çalışanlarının 
                    öğrenecekleri yazılı ve/veya sözlü tüm ticari, mali, teknik bilgiler,
                    müşteri ve piyasa bilgileri ve diğer bilgi ve veriler “Gizli Bilgi” 
                    olarak kabul edilir. İşbu Sözleşme ihlal edilmeksizin hukuki ve meşru 
                    yollarla genel kamunun bilgisi dâhilinde olan ve tarafların gizli olmadığını 
                    açıkça ve yazılı olarak belirttiği bilgiler Gizli Bilgi kapsamında 
                    değerlendirilmeyecektir. Taraflar yürürlükte olan bir kanun veya 
                    diğer düzenleme ya da verilmiş olan bir mahkeme kararı veya idari emir 
                    gereğince bu bilgileri açıklayabilir. Bu durumda birbirlerine bu 
                    hususta derhal ve her halde 2 (iki) iş günü içerisinde bilgi 
                    vereceklerdir. Taraflar bu madde kapsamında değerlendirilebilecek 
                    her türlü bilgi ve veriyi korumayı, her ne suretle olursa olsun 
                    3. Kişilerle doğrudan/dolaylı olarak paylaşmamayı ve ticari 
                    ilişkinin amaçları dışında kullanmamayı taahhüt ederler.</ul><br />
                    <ul><span>8.2</span> Taraflar, zorunlu hallerde ve işin doğası gereği 
                    çalışanlarına ve danışmanlarına bu bilgileri vermeleri halinde bilginin 
                    gizliliği hususunda da çalışanlarını ve danışmanlarını da uyarmak 
                    yükümlülüğündedir. Aksi takdirde Taraflar, çalışanlarının ve 
                    danışmanlarının işbu Sözleşme yükümlülüklerine aykırı davranmaları 
                    halinde doğrudan sorumlu olacaklarını gayrikabili rücu peşinen kabul 
                    ve taahhüt ederler. İşbu madde, Sözleşme süresi sona erdiğinde dahi 
                    Taraflar arasında geçerli olmaya devam edecektir.</ul><br />
                    <ul><span>8.3</span> 6698 sayılı Kişisel Verilerin Korunması Kanunu 
                    (“KVKK”) uyarınca, kimliği belirli ya da belirlenebilir gerçek kişiye 
                    ilişkin her türlü veri “Kişisel Veri” olarak tanımlanmıştır. Taraflar, 
                    kişisel verilerin işlenmesi süreci kapsamındaki yükümlülüklerini yerine 
                    getirirken, KVKK ile birlikte yürürlükte bulunan kişisel verilerin 
                    korunmasına ilişkin uygulanabilir uluslararası sözleşmeler, ilgili 
                    kanun ve düzenlemeler, Kişisel Verileri Koruma Kurulu kararları, 
                    Kişisel Verileri Koruma Kurumu rehberleri, sair düzenleyici ve 
                    denetleyici otorite, mahkeme ve diğer resmi makam kararları/talimatları 
                    ile ileride yürürlüğe girebilecek olan kişisel verilerin korunması 
                    alanındaki tüm düzenlemelere uymakla yükümlüdür. Tedarikçi, sözleşmenin 
                    ifasıyla ilgili olarak Online Keşif tarafından gelen soruları mümkün 
                    olan en kısa sürede usulüne uygun olarak cevaplandıracağını, Online 
                    Keşif’e gerekli tüm bilgi, belge ve desteği ek bir bedel talep 
                    etmeksizin sağlayacağını; etkin şekilde iş birliğinde bulunacağını 
                    kabul, beyan ve taahhüt eder.</ul><br />
                    <ul><span>8.4</span> Tarafların karşılıklı hak ve yükümlülüklerini belirleyebilmek 
                    amacıyla Taraflar arasında işbu Sözleşme’nin ayrılmaz bir parçası olarak 
                    ekte yer alan “Kişisel Verilerin Korunmasına Yönelik Protokol”
                    düzenlenmiştir.</ul><br />
                    <p>İşbu madde Sözleşme herhangi bir sebeple sona erse dahi yürürlükte kalmaya devam edecektir.</p><br />

                    <h4 id='sozlesmenin-feshi-ve-sure'>9.SÖZLEŞMENİN FESHİ VE SÜRE</h4><br />

                    <ul><span>9.1</span> İşbu Sözleşme imza tarihinden itibaren 1 (bir) 
                    yıl süre ile geçerlidir. Taraflar Sözleşme’nin sona erme tarihinden 
                    1 (bir) ay önce diğer Taraf’a noter kanalı ile ihtarda bulunarak 
                    Sözleşme’yi fesh etmediği sürece Sözleşme her yıl aynı şartlarla 
                    yenilenmiş kabul edilir.</ul><br />
                    <ul><span>9.2</span> Taraflar, her zaman 1 (bir) ay önceden yazılı fesih ihbarında 
                    bulunmak kaydıyla işbu Sözleşme’yi gerekçesiz ve tazminatsız feshetme hakkına sahiptir. 
                    Sözleşme’nin feshi durumunda, işbu Sözleşme’deki gizlilik ve fikri mülkiyet hükümleri 
                    bağlayıcılığını koruyacaktır.</ul><br />
                    <ul><span>9.3</span> Hizmetleri kullanmanızı şu hallerde derhal askıya alabilir veya sonlandırabiliriz: <ul><br />
                         
                    <p><span> (a) </span>Sözleşmeyi esaslı bir şekilde ihlal etmiş ve bu ihlalin 
                    telafisini talep eden bildirimi aldıktan sonraki 7 
                    gün içerisinde bu ihlali telafi etmemiş olmanız halinde; 
                    ancak bu ihlalin bizim üçüncü kişilere karşı sorumlu olmamıza 
                    neden olması halinde, yukarıda belirttiğimiz 7 günlük telafi 
                    süresini kendi makul takdirimizle kısaltabilir veya kaldırabiliriz; <br />
                  <span> (b)</span> hesabınızın aldatıcı, hileli veya yasadışı faaliyetler için kullanılmış olması 
                   veya kontrollerimizin söz konusu faaliyetler için kullanılabileceğini tespit etmesi halinde, veya <br />
                  <span> (c) </span>Hizmetleri kullanmanızın diğer Tedarikçilere son kullanıcılara veya Online Keşif’in 
                   yasal menfaatlerine zarar vermesi veya kontrollerimizin söz konusu zararın verilebileceğini 
                   tespit etmesi halinde. Böyle bir sonlandırma veya askıya alma durumunda; bu bilginin 
                   incelemeyi veya aldatıcı, hileli veya yasadışı faaliyeti önlemeyi tehlikeye düşüreceğine 
                   veya emniyet tedbirlerimizi aşmanıza sebep olacağına inandığımız haller haricinde; 
                   size Çağrı Merkezi dâhil olmak üzere, e-postayla veya benzer yöntemlerle derhal 
                   bildirimde bulunacak, bu durumun nedenlerini ve buna itiraz etme seçeneklerini 
                   açıklayacağız. Bu Sözleşme'nin feshedilmesi halinde, aksi açıkça belirtilmediği 
                   takdirde, işbu Sözleşme altındaki tüm ilgili haklar ve borçlar derhal sona erecektir, ancak <br />
                  <span> (d)</span> fesihten önce yaptığınız işlemlerle ve fesihten önce veya feshin bir sonucu 
                   olarak tahakkuk eden borçlarla bağlantılı olan tüm borçlarınızı ifa 
                   etmekten sorumlu olacaksınız.</p></ul></ul><br />
                    <ul><span>9.4</span> Tedarikçi, işbu Sözleşme’den doğabilecek 
                    ihtilaflarda Online Keşif’in resmi defter ve ticari kayıtlarıyla, 
                    kendi veri tabanında, sunucularında tuttuğu elektronik bilgilerin 
                    ve bilgisayar kayıtlarının, bağlayıcı, kesin ve münhasır delil 
                    teşkil edeceğini ve bu maddenin Hukuk Muhakemeleri Kanunu’nun 
                    193. maddesi anlamında delil sözleşmesi niteliğinde olduğunu 
                    kabul, beyan ve taahhüt eder.</ul><br />
                    <ul><span>9.5</span> İşbu Sözleşme ekleriyle birlikte bir bütün 
                    teşkil etmekte olup; Sözleşme’nin herhangi bir hükmünün veya
                    Sözleşme’de yer alan herhangi bir ifadenin geçersizliği, 
                    yasaya aykırılığı ve uygulanamaz olması, Sözleşme’nin 
                    geri kalan hükümlerinin yürürlüğünü ve geçerliliğini 
                    etkilemeyecektir.</ul><br />
                    <ul><span>9.6</span> Tedarikçi ve Online Keşif’in, Tedarikçi’nin  
                    Panel’e üye olurken bildirdiği e-posta/kayıtlı elektronik 
                    posta adresi vasıtasıyla veya fiziki posta adreslerine iadeli taahhütlü 
                    posta ile gönderilecek bildirimler aracılığıyla iletişim kuracaklardır. ,
                    Kanunda belirtilen zorunlu haller istisna olup, Tedarikçi’nin Panel’e 
                    kayıtlı adresine eposta gönderimi yazılı iletişim olarak kabul edilecek olup, 
                    Tedarikçi’nin e-posta/kayıtlı elektronik posta adresini düzenli olarak güncel 
                    tutma yükümlülüğü olacaktır.
                    İşbu Sözleşmeden kaynaklanan Damga Vergisi ve sair tüm vergiler ile harçlar  
                    Tedarikçi tarafından karşılanacaktır.</ul><br />
                    <ul><span>9.7</span> İş bu sözleşme hükümlerini ihlal edilmesi 
                    sonucunda doğacak olan zararlardan Tedarikçi bizzat sorumlu 
                    olup Online Keşif’in hiçbir sorumluluğu bulunmamaktadır. 
                    Sözleşmenin ihlal edildiğini Online Keşif tespit ettiği 
                    an Tedarikçinin hesaba erişimini engelleyebilir.</ul><br />

                    <h4 id='imza-ve-uyusmazliklarda-yetkili-merci'>10.İMZA VE UYUŞMAZLIKLARDA YETKİLİ MERCİ</h4><br />
                    <ul><span>10.1</span> İşbu Sözleşme, Tedarikçi tarafından okunarak 
                    elektronik ortamda onaylandığı takdirde tüm hüküm ve 
                    koşullarıyla yürürlüğe girecektir. Tedarikçi tarafından ıslak 
                    imza ve/veya elektronik ortamda onaylanmak suretiyle akdedilmiş ve 
                    onaylandığı tarihte geçerli olacak şekilde yürürlüğe girmiştir. 
                    Ekler işbu Sözleşme’nin ayrılmaz bir parçasını teşkil eder.</ul><br />
                    <ul><span>10.2</span> İşbu sözleşme hükümlerinden doğacak ihtilaflarda 
                    Bursa Mahkemeleri ve İcra Daireleri yetkilidir.</ul><br />

                    <div className='table-container'>
                     <table>
                        <tr>
                        <td></td>
                        <td></td>
                        </tr>
                        <tr className='high'>
                        <td></td>
                        <td></td>
                        </tr>
                     </table>
                     </div><br /> <br />
              
                     <h4 id='muvafakatname'>MUVAFAKATNAME</h4><br />
                     <p>Online Keşif Tedarikçi Sözleşmesi’nde yer alan genel 
                        işlem şartları tarafımızca detaylı olarak incelenmiş, 
                        avukatlarımıza/danışmanlarımıza incelettirilmiş ve 
                        karşılıklı müzakere edilerek kabul edilmiştir.  
                        Özellikle anılan sözleşmede yer alan genel işlem 
                        şartları hakkında bilgilendirilmiş, anlamlarını, 
                        aleyhimizde doğurabileceği sonuçlarını ayrıntıları 
                        ile incelemiş, teknik hususları alanında uzman 
                        kişilerle de görüşüp değerlendirmiş bulunmaktayız. 
                        Bu hükümler çerçevesinde Şirketiniz ile anılan 
                        sözleşmeyi imzalamayı ve sözleşme hükümlerinin 
                        uygulanmasını kabul ederim/ederiz. </p><br />

                        <h4 id='ek1'>EK 1: ÜÇÜNCÜ TARAF BİLGİ GÜVENLİĞİ GEREKSİNİMLERİ TAAHHÜTNAMESİ</h4><br />

                        <h4>GİRİŞ</h4><br />
                        <p>İşbu Üçüncü Taraf Bilgi Güvenliği Gereksinimleri 
                            Taahhütnamesi (<span>“Taahhütname</span>”) aşağıda imzası 
                            bulunan ______________________
                            adresinde bulunan _____________________’nın 
                            (“<span>Üçüncü Taraf</span> ”) Online Keşif ile gerçekleştirdiği veya 
                            gerçekleştireceği işbirliği ya da sözleşme ile 
                            üstlendiği işin yapılması çerçevesinde öğrendiği veya 
                            Online Keşif tarafından paylaşılacak gizli olarak 
                            işaretlenip işaretlenmemesinden bağımsız her türlü 
                            veriye ilişkin Üçüncü Taraf’ın  bilgiyi amacı dışında 
                            kullanmasını ve herhangi bir biçimde üçüncü şahıslara 
                            açıklamasını veya vermesini önlemek ve bu şekilde gizliliğin 
                            sağlanmasını temin etmek için imzalanmaktadır.</p><br />

                            <h4 id='tanimlarr'>1. TANIMLAR</h4><br />
                            <p>Bu dokümanda bahsedilen; </p><br /> 
                           <span>Personel: Üçüncü Taraf</span> personelini,<br /><br />
                           <span>BGYS:</span> Bilgi Güvenliği Yönetim Sistemi’ni,<br /><br />
                           <span>Veri: Online Keşif</span> içerisinde dijital veya fiziksel ortamlarda tutulan verileri,<br /><br />
                           <span>Veri Varlığı: Online Keşif</span> bünyesinde işlenen her türlü veri, doküman vb. unsurları,<br /><br />
                           <span>Bilgi Güvenliği: Online Keşif</span> bilgi varlıklarının gizlilik, 
                           bütünlük ve erişilebilirlik açılarından korunmasını,<br /><br />
                           <span>Güvenlik Olayı:</span> BGYS’ ye ait tüm esaslar, prosedür, talimat ve 
                           anlaşmalara uyulmama veya ters düşme durumunu,<br /><br />
                           <span>Bilmesi Gerektiği Kadar Prensibi:</span> Herhangi bir konu veya işi, 
                           ancak görev ve sorumlulukları gereği öğrenmekle, incelemekle, gereğini 
                           yerine getirmekle ve korumakla sorumlu bulunanların yetkisi düzeyinde 
                           bilgi sahibi olmasını ifade eder.<br /><br />
                           <span>Gizli Bilginin Tanımı:</span> şbu Taahhütname çerçevesinde, 
                           Platform’a ilişkin olarak mevcut ya da gelecekte ortaya çıkabilecek 
                           teknolojilerle oluşabilecek yöntemler dahil ancak bunlarla sınırlı 
                           olmamak üzere; yazılı, sözlü, elektronik ya da diğer maddi 
                           biçimlerde Taraflar’dan birinin diğer Taraf’a açıklayacakları 
                           gizli olarak işaretlenip işaretlenmemesinden bağımsız olarak 
                           “<span>Gizli Bilgi</span>” aşağıdaki ve bunlarla sınırlı kalmamak üzere 
                           Online Keşif tarafından paylaşılan tüm bilgileri içerir:<br /><br />

                           <p>
                            <span>1.1 Online Keşif</span> mevzuat, yönetmelik, bilgi güvenliği politika 
                            ve prosedürlerine göre belirlenen “ÇOK GİZLİ, GİZLİ ve HİZMETE ÖZEL” 
                            gizlilik derecesindeki her türlü veri, bilgi ve belge.<br /><br />
                            <span>1.2 Online Keşif</span> tarafından işlenen (24/03/2016 tarihli ve 
                            6698 sayılı Kişisel Verilerin Korunması Kanunu ile tanımlanan) kişisel veriler<br /> <br />
                            <span>1.3 Online Keşif</span> veya hizmet sunulan ilgili birime ait özel sırlar, 
                            mali bilgiler, çalışan bilgileri, sistem bilgileri ve çalışılan süre 
                            içinde derlenen tüm bilgiler, materyaller, programlar ve dokümanlar, 
                            bilgisayar sistemleri içerisinde saklanan veriler, donanım/yazılım 
                            ve tüm diğer düzenleme ve uygulamalar ile personelin çalışma 
                            süresi içerisinde yapmış olduğu işler.<br /> <br />
                            <span>1.4 Online Keşif</span> Açıklanması halinde kişi ve kurumlara maddi 
                            veya manevi zarar verme ya da herhangi bir kişi veya kuruma haksız yarar 
                            sağlama ihtimali bulunan her türlü bilgi ve belge
                           </p><br />

                           <h4 id='sartlar'>2. ŞARTLAR</h4><br />
                           <p>
                            <span>2.1 Üçüncü Taraf Yükümlülük ve Sorumlulukları</span> <br /><br />
                            <span>2.1.1  Üçüncü Taraf;</span> kendi gizli bilgilerini korumakta 
                            gösterdiği özenin aynısını,<span> Online Keşif</span>’in gizli bilgisini korumakta 
                            da gösterecek, sadece zorunlu hallerde ve işin gereği bu bilgiyi 
                            öğrenmesi gereken çalışanlarına işin yürütülmesi için gereken 
                            nispette ve bilginin korunması için her türlü azami önlemi alarak 
                            verebileceğini, taraflar arasında akdedilmiş gizlilik düzenlemelerinin
                            Üçüncü Taraf’ın personeli için de geçerli olacağını; çalışanlarının 
                            bilginin gizliliği hususunda bu sözleşmeye ilgili gizlilik 
                            düzenlemelerindeki yükümlülüklerine aykırı davranmayacaklarını ve 
                            böyle davranmaları halinde doğrudan taraflarının sorumlu olacağını 
                            kabul ve taahhüt etmektedir.<br /><br />
                            <span>2.1.2</span> Çalışma kapsamında edinilen ve üretilen her 
                            türlü bilgi varlığı “Gizli” olarak nitelendirilecektir. 
                            Bu bilgi varlığı kapsamına, herhangi bir sınırlama olmaksızın, 
                            herhangi bir evrak, elektronik dosya, elektronik posta, yazılım 
                            programı, algoritma, yazılım modülü, formül, program kaynak kodu, 
                            bilgisayar ve/veya iletişim sisteminin tarifi veya ayrıntıları, 
                            envanter bilgileri, teknik özellikler, keşif ve icatlar, 
                            çizim ve tasarımlar, endüstriyel tasarımlar, ürün planları 
                            ve teknolojileri, yazılım kullanıcı kitapçıkları, ticari 
                            markalar veya ticari marka önerileri, kontakt listeleri, 
                            çalışanlara ait bilgiler, stratejik değerlendirmeler, finansal 
                            raporlar, finansal planlar, finansal tahminler, fiyat listeleri, 
                            fiyatlandırma yöntemleri, sözleşme hükümleri, kayıtlar, dosyalar, 
                            işletme planları,<span>Online Keşif</span> ’e ait gizli ticari ve stratejik 
                            sırlar ve <span>Online Keşif</span> ’in işi ve işleyişi ile ilgili bütün bilgi 
                            ve malzemeler dahildir. Bu madde ile sayılan bilgi varlığı tahdidi 
                            olmayıp, ister sözlü yapılsın, ister elektronik ortamda veya 
                            yazılı ya da başka bir araçla yapılsın,<span>Online Keşif</span> ’in 
                            kamuya açıklamadığı ve gizli bilgi saydığı her türlü bilgi 
                            bu kapsama dâhildir.<br /><br />

                            <span>2.1.3 Üçüncü Taraf,</span> hizmeti verirken edineceği her türlü 
                            (yazılı, görsel, sözlü, elektronik, manyetik vb.) bilgi ve üretilen 
                            her türlü bilgi varlığının “Gizli” olduğunu kabul etmekte ve <span> 
                                Online Keşif</span>’ten önceden alınmış yazılı izin olmadan 
                                “Gizli Bilgi” kapsamındaki bilgi varlıklarını değiştirmeyeceğini, 
                                amacına ters bir şekilde üretmeyeceğini, parçalara ayırmayacağını, 
                                başka işler yaratmakta kullanmayacağını veya sistemden 
                                kaldırmayacağını kabul ve taahhüt etmektedir.<br /><br />
                            <span>2.1.4 Üçüncü Taraf</span> <br /><br />
                            <span></span>  adına hizmet veren sistem ve ağ yöneticileri, 
                            yazılım geliştiriciler, sistem güvenlik yöneticilerine verilen 
                            sistem yönetici haklarının hassasiyeti nedeni ile kurum 
                            personeli sorumluluklarına sahiptir. Bu çerçevede <span>Üçüncü 
                            Taraf</span>  çalışanları ilgili yasa ve mevzuatın gerektirdiği 
                            sorumlulukları kabul etmiş sayılırlar.<br /><br />
                            <span>2.1.5 Online Keşif’in Mülkiyet Hakkı</span> <br /><br />
                            <span>2.1.5.1 Üçüncü Taraf,</span> <br /><br />
                            <span></span>  çalışma kapsamında edinilen ve üretilen her 
                            türlü bilgi varlığının fikri mülkiyet hakkının <span>Online 
                            Keşif</span> ’e ait olduğunu, bunların kendisine verilmesi 
                            nedeniyle, kendisinin tasarruf hakkı dâhil hiçbir 
                            hak ve avantaj elde etmediğini işbu taahhütname 
                            ile gayri kabili rücu olarak kabul ve taahhüt etmektedir.<br /><br />
                            <span>2.1.6 Üçüncü Taraf’ın Sır Saklama Yükümlülüğü</span> <br /><br />
                            <span>2.1.6.1 Üçüncü Taraf, Online Keşif</span>’in  <br /><br />
                            <span></span> mülkiyeti altındaki bilgiler üzerindeki haklarını 
                            tanımakta ve kabul etmekte olup, işbu taahhütname ile 
                            aşağıda yazılı olanları sağlamak için gerekli önlemleri 
                            almayı kabul ve taahhüt etmektedir:<br /><br />
                            <span>2.1.6.1.1</span> Bu bilgileri sır olarak saklamak.<br /><br />
                            <span>2.1.6.1.2 Online Keşif</span>’e ait bilgilerin korunması hususunda gereken özeni göstermek.<br /><br />
                            <span>2.1.6.1.3 Bu bilgileri, Online Keşif</span>’in faaliyet ve projelerinin 
                            dışında başka bir maksatla kullanmamak.<br /><br />
                            <span>2.1.6.1.4</span> Gerçekleştirdiği çalışma sırasında 
                            ya da herhangi bir şekilde <span> Online Keşif</span> tarafından edindiği 
                            bilgiler hakkında her ne sebeple olursa olsun hiçbir surette 
                            sözlü, yazılı ve görsel basına açıklama yapmamak; <span> Online Keşif</span>’in 
                            yazılı izni olmadıkça, bu bilgiler hakkında fotoğraf, yazı, makale, 
                            tebliğ, rapor gibi yazılı belge yayınlamamak; seminer, panel 
                            gibi toplantılarda konuşmacı olmamak.<br /><br />
                            <span>2.1.6.1.5 Online Keşif</span> tarafından temin edilen gizli 
                            bilgilerin bu Taahhütnameye aykırı biçimde açıklandığından haberdar 
                            olunduğunda, derhal ve yazılı olarak <span>Online Keşif</span> ’e 
                            durumu bildirmekle yükümlü olmak.<br /><br />
                            <span>Üçüncü Taraf,</span> işbu Taahhütname uyarınca, yasalara 
                            uygun davranmasından, kasten veya sehven de olsa <span>Online Keşif</span> ’e  
                            vereceği zararlardan sorumludur. Bu sorumluluğu başkalarına 
                            devredemez, başkaları ile paylaşamaz; aksi takdirde doğacak 
                            tüm kanuni ve hukuki sorumluluğu kabul eder.<br /><br />

                            <span>2.2 Bilgilerin Açıklanabileceği Haller</span> <br /><br />
                            <span>2.2.1 Üçüncü Taraf,</span> yukarıda sayılan nitelikteki 
                            gizli ya da özel bilgilerin yargı organlarınca veya 
                            yetkili mercilerce yasal usullere uyularak istenmesi 
                            halinde, uygun koruyucu tedbirlerin alınmasını teminen 
                            durumu, yazılı olarak <span>Online Keşif</span> ‘e bildirmeden, 
                            herhangi bir işlem yapmayacağını kabul, beyan ve taahhüt eder.<br /><br />   </p>

                            <h4 id='genel-hukumlar'>3. GENEL HÜKÜMLER</h4><br />
                            <span>3.1</span> İşbu Taahhütname hükümlerinden biri veya birkaçı, 
                            herhangi bir kanun veya düzenleme altında, geçersiz, yasadışı ve 
                            uygulanamaz ilan edilirse, geride kalan hükümlerin geçerliliği, 
                            yasallığı ve uygulanabilirliği hiçbir şekilde etkilenmez veya zarar görmez.<br /><br />
                            <span>3.2</span> Taraflar arasında mevcut olan ve konuyla 
                            ilgili olmayan diğer sözleşmeler ve/veya taahhütnameler 
                            işbu Taahhütname herhangi bir şekilde etkilemez.<br /><br />
                            <span>3.3</span> İşbu Taahhütname belirtilen verilmesi gerekli her 
                            türlü izin, talep, istek ve diğer bildirimler yazılı olarak yapılır. 
                            Bildirimler Üçüncü Taraf’ın ya da Online Keşif’in işbu Taahhütname’nin 
                            giriş kısmında belirtilen adreslerine ya da KEP adreslerine 
                            yapılacaktır. İşbu Taahhütname’de belirtilen adresler kanuni 
                            ikametgâhı olup, bu adreslere yapılacak tebligatlar 
                            muhatabına ulaşmış kabul edilir.<br /><br />

                            <h4 id='tanzim-yukumlulugu'>4. TAZMİN YÜKÜMLÜLÜĞÜ</h4><br />
                            <span>4.1 Üçüncü Taraf,</span> yukarıda belirtilen maddelere uyulmaması 
                            ve/veya çıkar karşılığında ya da çıkar olmaksızın gizli ya da özel 
                            bilgilerin yöneticileri, çalışanları ve/veya temsilcileri tarafından, 
                            amacı dışında kullanılması, üçüncü kişilere duyurulması, kamuya 
                            yayılacak biçimde sözlü veya yazılı basın organlarına açıklanması 
                            ya da gizliliğin herhangi bir biçimde ihlali halinde,<span> Online Keşif </span>‘in 
                            bu ihlalden ötürü uğrayacağı tüm zararı ödemeyi kabul, beyan ve 
                            taahhüt eder.<br /><br />
                            <span>4.2 Üçüncü Taraf,</span> tazmin yükümlülüğünün, gizlilik esasına 
                            uyulmaması ya da bilgilerin amacı dışında kullanılması nedeniyle üçüncü 
                            kişilerin uğradığı/uğrayacağı zararlar nedeniyle Online Keşif tarafından 
                            talep edilecek her türlü zarar için de geçerli olacağını ayrıca kabul, 
                            beyan ve taahhüt eder.<br /><br />

                            <h4 id='bilgi-ve-kayitlarin-teslimi'>5. BİLGİ VE KAYITLARIN TESLİMİ</h4><br />
                            <span>5.1 Üçüncü Taraf</span> herhangi bir sebeple <span> Online Keşif </span>
                            ile çalışmasının veya işbirliğinin sona ermesi durumunda, 
                            elinde bulunan kopyalar, özet ve analizler dâhil olmak üzere 
                            tüm bilgi ve belgeleri masrafları taraflarına ait olmak üzere 
                           <span> Online Keşif</span>’e teslim edeceğini kabul, beyan ve taahhüt eder.<br /><br />

                            <h4 id='yetkili-mahkeme'>6. YETKİLİ MAHKEME</h4><br />
                            <span>6.1 Üçüncü Taraf </span> personeli, işbu taahhütnamenin uygulanmasından 
                            doğacak her türlü ihtilafta Bursa Mahkemeleri ve İcra Dairelerinin 
                            yetkili olacağını kabul, beyan ve taahhüt eder.<br /><br />

                            <h4 id='yururluk'>7. YÜRÜRLÜK</h4><br />
                            <p>7 (yedi) maddeden ibaret bu işbu taahhütname Üçüncü Taraf’ça okunarak 
                                imzalanmış ve __/__/____ tarihinden itibaren geçerli 
                                olacak şekilde yürürlüğe girmiştir. Ekler işbu 
                                taahhütnamenin ayrılmaz bir parçasını teşkil eder.</p><br />

                                <h4>EKLER</h4>
                                <span>EK:1</span> İmza sirküleri <br /><br />

                                <h4 id='ek2'>EK 2: KİŞİSEL VERİLERİN KORUNMASINA YÖNELİK PROTOKOL</h4><br />
                                <h4 id='taraflar'>1. TARAFLAR</h4>
                                <p>İşbu Ek Protokol (“Protokol”), ………………………………… A.Ş. (“<span>Online Keşif</span> ”) 
                                    ile Online Keşif Tedarikçi Sözleşmesi’nin (“<span>Ana Sözleşme</span> ”) 
                                    tarafı olan Şirket arasında imzalanmıştır. İşbu Protokol 
                                    onaylandığı tarih itibarıyla Ana Sözleşmenin eki ve 
                                    ayrılmaz bir parçasıdır. Online Keşif ve Şirket ayrı ayrı 
                                    “Taraf”, birlikte “Taraflar” olarak anılacaktır.</p><br />
                                <h4 id='amac-ve-kapsam'>2. AMAÇ VE KAPSAM</h4>
                                <p>İşbu Protokol,  Taraflar arasında imzalanan Ana Sözleşme’nin 
                                    kurulması ve ifası kapsamında işlenen kişisel verilere 
                                    ilişkin olarak, 6698 sayılı Kişisel Verilerin Korunması 
                                    Kanunu (“KVKK”) başta olmak üzere ilgili sair mevzuata 
                                    uygun olarak işlenme, aktarılma ve muhafaza şartlarının 
                                    düzenlenmesi ve tarafların hak ve yükümlülüklerinin 
                                    belirlenmesi amacıyla Ana Sözleşme’nin ayrılmaz bir 
                                    parçası olarak düzenlenmiştir. Taraflar, işbu 
                                    Protokol’de yer alan terimleri, KVKK’da tanımlandığı 
                                    şekilde kabul edip, uygulayacaklardır.<br /><br />
                                    Ana Sözleşme hükümleri ile işbu Protokol hükümleri 
                                    arasında herhangi bir uyuşmazlık/çelişki olması halinde, 
                                    kişisel veriler bakımından işbu Protokol hükümleri öncelikli olarak uygulanacaktır.</p><br />


                                <h4 id='taraflarin-hak-ve-yukumlulukleri'>3. TARAFLARIN HAK VE YÜKÜMLÜLÜKLERİ</h4>
                                <span>3.1.</span> Şirket, kişisel verilerin işlenmesi süreci kapsamındaki 
                                yükümlülüklerini yerine getirirken, işbu Protokol ile sınırlı olmaksızın 
                                KVKK ile birlikte yürürlükte bulunan kişisel verilerin korunmasına 
                                ilişkin uygulanabilir uluslararası sözleşmeler, ilgili kanun ve düzenlemeler, 
                                Kişisel Verileri Koruma Kurulu karar ve görüşleri, Kişisel Verileri Koruma 
                                Kurumu rehberleri, sair düzenleyici ve denetleyici otorite, mahkeme ve 
                                diğer resmi makam kararları/talimatları ile ileride yürürlüğe 
                                girebilecek olan kişisel verilerin korunması alanındaki tüm 
                                düzenlemelerin ve bunlarda yapılacak değişikliklerin 
                                (“<span> KVK Düzenlemeleri”) </span>
                                öngördüğü tüm yükümlülüklere uymak 
                                zorundadır. KVK Düzenlemeleri kapsamında meydana gelebilecek 
                                herhangi bir değişiklik veya güncelleme nedeniyle Şirket'in 
                                süreçlerinde bir değişiklik gerekmesi halinde, Şirket söz 
                                konusu değişikliği en geç ilgili yeni/güncel düzenleme 
                                yürürlüğe girmeden evvel tamamlamakla yükümlüdür.<br /><br />
                                <span>3.2.</span> Şirket, Ana Sözleşme’de belirtilen yükümlülükleri 
                                yerine getirmesi sırasında elde ettiği kişisel verileri, 
                                yalnızca Ana Sözleşme’de belirtilen hizmetin sunulması 
                                amacı ile işleme ve aktarma hakkına sahiptir. Şirket, 
                                kişisel verilerin anılan kapsamın dışında kullanımından 
                                veya üçüncü kişiler tarafından bu şekilde kullanılmasına 
                                yol açabilecek her türlü işlemden, davranıştan, 
                                hareketsizlik halinden veya faaliyetten kaçınmakla yükümlüdür. <br /><br />
                                <span>3.3.</span> Şirket, Ana Sözleşme’nin ifası kapsamında kişisel 
                                verileri üçüncü bir taraf ile paylaşması halinde, veri 
                                aktarımının güvenli bir şekilde sağlanmasından bizzat 
                                sorumludur. Bu bağlamda Şirket, kişisel verileri 
                                paylaştığı üçüncü kişiyle asgari olarak işbu Protokol’de 
                                yer alan hükümleri içerecek şekilde bir sözleşme akdetmeyi 
                                ve bu hükümlerin eksiksiz şekilde uygulanmasını gözetmeyi taahhüt eder.<br /><br />
                                <span>3.4.</span> Şirket, işbu Protokolden doğan yükümlülüklerini 
                                yerine getirebilecek idari ve teknik yeterliliğe sahip olduğunu 
                                kabul, beyan ve taahhüt eder. Şirket, kişisel verileri işleyen, 
                                kişisel verilere erişim yetkisi olan ya da kişisel verilerin 
                                paylaşıldığı çalışanları, iş ortakları, iş birliği içerisinde 
                                olduğu tüm üçüncü tarafları işbu Protokolde yer alan 
                                yükümlülükler hakkında bilgilendirmekle ve mezkur 
                                yükümlülüklere uyulmasını temin etmekle yükümlüdür. 
                                Bahsi geçen kişilerin, Protokol veya mevzuatta yer alan 
                                düzenlemelere aykırı davranması halinde oluşacak zararlardan 
                                münhasıran Şirket sorumlu olacaktır. <br /><br />
                                <span>3.5.</span> Şirket, işlenen veya aktarılan kişisel 
                                verilerin kanuni olmayan yollarla veya her türlü hukuka 
                                aykırı şekilde başkaları tarafından elde edilmesi hâlinde 
                                veya fiziksel veya bilişim altyapısında herhangi bir 
                                bilgi güvenliği ihlali veya riski doğması durumunda, 
                                hukuka aykırılığın veya riskin ortadan kaldırılması 
                                için gerekli teknik ve idari tedbirleri gecikmeksizin 
                                alacağını ve ihlalin veya riskin öğrenilmesi anından 
                                itibaren en geç 48 saat içerisinde konuya yönelik 
                                Online Keşif ‘e kapsamlı şekilde bilgi vereceğini kabul, 
                                beyan ve taahhüt eder.<br /><br />
                                <span>3.6.</span> Şirket, Şirket tarafından Online Keşif’e 
                                aktarılan her türlü kişisel veriye ilişkin hiçbir hukuki, 
                                idari, cezai veya mali ihtilafın olmadığını ve bu verilere 
                                ilişkin uygulanabilir tüm mevzuattan kaynaklanan hukuki 
                                tüm gerekliliklerin yerine getirildiğini kabul, beyan ve 
                                taahhüt eder. Şirket, aktardığı veya erişime açtığı 
                                veriler üzerinde mutlak bir tasarruf hakkını haiz olduğunu, 
                                üçüncü kişilerin işbu kişisel verilerin tümü ya da bir 
                                bölümü üzerinde herhangi bir hukuku sebebe dayalı olarak 
                                bir hak iddia etmesi durumunda bundan doğabilecek tazminat 
                                ve diğer yasal sorumlulukların kendisine ait olacağını; 
                                Online Keşif’in bu durumda uğrayabileceği her türlü 
                                zararı derhal ve nakden tazmin edeceğini ve Online Keşif’in 
                                bu nedenle Ana Sözleşme’yi tek yanlı olarak feshetme 
                                yetkisinin bulunduğunu kabul, beyan ve taahhüt eder.<br /><br />
                                <span>3.7.</span> Şirket, Ana Sözleşme’nin feshedilmesi veya 
                                yürürlük süresinin sona ermesi halinde veya kişisel 
                                verilerin silinmesi veya yok edilmesini gerektiren 
                                bir durumun ortaya çıkması durumunda veya ilgili 
                                kişilerin verilerin silinmesini veya yok edilmesini 
                                içeren bir talebinin yerine getirilmesi gereken 
                                durumlarda veya herhangi bir gerekçe göstermeksizin 
                                Online Keşif’in bu yönde bir talepte bulunması 
                                durumunda, tamamen Online Keşif 'in tercihine bağlı 
                                olarak, aktarıma konu kişisel verileri yedekleri ile 
                                birlikte Online Keşif 'e geri göndereceğini ya da Online
                                Keşif’in tercihine bağlı olarak kişisel verileri kendi 
                                sistemindeki asıl ve yedekleri ile fiziksel kayıtları geri 
                                dönüştürülemez şekilde sileceğini ve yok edeceğini, 
                                mevzuatta bu yükümlülüğü yerine getirmesini engelleyen 
                                hükümler varsa, aktarıma konu kişisel verilerin gizliliğini 
                                güvence altına almak için gerekli idari ve teknik 
                                tedbirleri alacağını, tüm bu işlemleri bir denetim raporu 
                                ile Online Keşif 'e sunacağını ve veri işleme faaliyetini 
                                durduracağını kabul eder.<br /><br />
                                <span>3.8.</span> Şirket, Ana Sözleşme ve işbu Protokol 
                                kapsamında yürüttüğü süreçlerle ilgili ve bağlantılı her 
                                türlü uyuşmazlığı, davayı ve kendisine bu verilerle ilgili 
                                yöneltilmiş olan tüm talepleri, yapılan denetimleri veya 
                                incelemeleri (ilgili kişilerin kişisel verileri ile ilgili 
                                talepleri, adli veya idari makamlar tarafından iletilen 
                                talepler veya talimatlar dahil olmak üzere) Online Keşif 'e 
                                ispat edilebilir şekilde ve derhal bildirmekle yükümlüdür. 
                                Şirket, Sözleşmenin ve işbu Protokolün ifasıyla ilgili olarak 
                                Online Keşif tarafından gelen soruları mümkün olan en kısa 
                                sürede usulüne uygun olarak cevaplandıracağını, Şirket'e 
                                gerekli tüm bilgi, belge ve desteği ek bir bedel talep 
                                etmeksizin sağlayacağını; etkin şekilde iş birliğinde 
                                bulunacağını kabul, beyan ve taahhüt eder. İşbu madde 
                                kapsamındaki taleplere yönelik olarak mevzuattan doğan yükümlülükler 
                                hariç olmak üzere Online Keşif tarafından yazılı onay ya da 
                                herhangi bir yazılı talimat verilmediği takdirde Şirket, 
                                herhangi bir talebe ilişkin olarak bir işlem yapmamayı 
                                kabul, beyan ve taahhüt eder.<br /><br />
                                <span>3.9.</span> Şirket, Online Keşif tarafından kendisine iletilmesi 
                                halinde ilgili kişi taleplerini derhal yerine getirmekle yükümlüdür. 
                                Herhangi bir nedenle aynı gün içerisinde yerine getirilemeyen talepler, 
                                nedeni yazılı olarak bildirilerek takip eden iş günü içerisinde 
                                yerine getirilecektir. İlgili kişiler tarafından, Ana Sözleşme 
                                ile ilişkili olabilecek kişisel verilerine yönelik bir talebin 
                                doğrudan Şirket'e iletilmesi halinde söz konusu talebe ilişkin 
                                olarak derhal (her halükarda ertesi iş günü) Online Keşif ‘e 
                                yazılı bildirimde bulunulacak ve Online Keşif’in talep ve 
                                talimatları doğrultusunda aksiyon alınacaktır.<br /><br />
                                <span>3.10.</span> Online Keşif, Şirket'in işbu Protokol kapsamındaki 
                                taahhüt ve yükümlülüklerini yerine getirip getirmediğine 
                                ilişkin her zaman denetim yapma ve yaptırma yetkisini haizdir. 
                                Şirket, işbu Protokole uygunluğun denetimi bağlamında ilgili tüm 
                                iş ortamlarını, teçhizatını, belge ve elektronik verilerini 
                                denetleme için Online Keşif’e veya yetkilendirdiği denetçiye/
                                danışmana erişilebilir kılacağını ve hem Online Keşif’e hem de 
                                Online Keşif tarafından görevlendirilecek kişilere tüm bu süreçlerde 
                                gerekli kolaylığı sağlayacağını kabul, beyan ve taahhüt eder. Söz 
                                konusu denetimler neticesinde Şirket'in kişisel verilere ilişkin 
                                yükümlülüklerine aykırı davrandığının tespit edilmesi halinde, 
                                ilgili denetim masrafları Şirket tarafından üstlenilecek olup, 
                                Online Keşif’in bu tutarları Şirket'e yapılacak 
                                ödemelerden mahsup hakkı saklıdır.<br /><br />

                                <h4 id='ozel-duzenlemeler'>4. ÖZEL DÜZENLEMELER</h4>
                                <span>4.1</span> KVK Düzenlemeleri’ne uygun davranma yükümlülüğünün yanı 
                                sıra Şirket, Ana Sözleşme’nin ifası kapsamında elde ettiği kişisel verileri; <br /><br />
                                <ul>
                                    <li>iletişime geçme amacıyla kullanması halinde, tüm iletişimlerin 
                                        Online Keşif aracılığıyla ve/veya yalnızca Ana 
                                        Sözleşme’nin ifası için gerekli olduğu ölçüde yapılması gerektiğini,</li>
                                    <li>kendisine ya da başka bir kişiye ait veri tabanı, kayıt veya 
                                        rehber yaratmak, kontrol etmek, güncellemek, değiştirmek, 
                                        ilgili kişiye ait farklı kişisel bilgilerine erişmek ve kendi 
                                        sistemine indirmek amacıyla işlemeyeceğini,kabul beyan ve taahhüt eder. 
                                        Şirket tarafından işbu madde hükmüne aykırı fiillerde bulunulması 
                                        işbu Protokol’e aykırılık teşkil edecek olup,  Online Keşif’in 
                                        bu kullanımlar sebebiyle doğacak zararlara karşı talep, dava ve takip hakları saklıdır.</li>
                                </ul><br /><br />
                                <span>4.2</span> Şirket, işbu Protokol’ün özel düzenlemeler başlığı altında 
                                yer alan kişisel verilere ilişkin hükümlerini ihlal etmesi halinde, 
                                Online Keşif ‘e 100.000 USD tutarında bir cezai şartı nakden ve defaten 
                                ödemeyi kabul ve taahhüt eder. Şirket, işbu maddede belirtilen cezai 
                                şart meblağının (i) adil ve hakkaniyete uygun olduğunu; (ii) iptalini 
                                ve tenkisini talep etmeyeceğini ve (iii) taraflar arasında karşılıklı 
                                olarak kabul edilmiş olması nedeniyle fahiş olduğu gerekçesiyle iptal 
                                ve tenkisini talep etme hakkından peşinen feragat ettiğini açıkça kabul, 
                                beyan ve taahhüt ederler.  Online Keşif’in, işbu maddede belirtilen 
                                tutarları Şirket’e yapacağı ödemelerden mahsup hakkı saklıdır.<br /><br />

                                <h4 id='son-hukumler'>5. SON HÜKÜMLER</h4>
                                <span>5.1</span> Şirket, Online Keşif’in işbu Protokolün tamamını veya 
                                bir kısmını tek taraflı olarak askıya alma veya feshetme hakkına 
                                sahip olduğunu kabul, beyan ve taahhüt eder. Şirket'in herhangi 
                                bir gerekçe göstermeksizin veri aktarımını durdurma ve kişisel 
                                verilerin silinmesini talep etme hakkı saklıdır.<br /><br />
                                <span>5.2</span> Online Keşif’in, işbu Protokol kapsamındaki haklarından 
                                veya yetkilerinden herhangi birini kullanmayı geciktirmesi ve/veya 
                                kullanmaması, bu haklardan veya yetkilerden feragat ettiği anlamına 
                                gelmeyecektir. Bunun gibi, Şirket'in işbu Protokol’den kaynaklanan 
                                herhangi bir yükümlülüğünü yerine getirmemesi ya da eksik yerine 
                                getirmesi, bu durumun Şirket tarafından kabul edildiği ya da 
                                anılan yükümlülüklerin yerine getirilmesinden feragat edildiği anlamına gelmez.<br /><br />
                                <span>5.3</span> Online Keşif, Ana Sözleşmenin kurulması sürecinde işlediği 
                                kişisel verilere yönelik veri sorumlusu olarak aydınlatma yükümlülüğünü 
                                işbu madde ile yerine getirmektedir. Ana Sözleşmenin müzakere ve imza 
                                sürecinde Tedarikçi tarafından bizzat paylaşılan ve sözleşmenin 
                                imzalanması için yetkilendirilen kişilere ait olan kişisel 
                                verileri, sözleşme müzakere süreçlerinin yürütülmesi, hukuki 
                                değerlendirmelerin yapılabilmesi, sözleşmenin imzalanması ve 
                                hukuki bir ihtilaf olması halinde yasal süreçlerin yürütülmesi 
                                amaçlarıyla sözleşmenin kurulması ve ifası için gerekli olması 
                                ve bir hakkın tesisi, kullanılması veya korunması için zorunlu 
                                olması hukuki sebeplerine dayanarak elektronik ve fiziki ortamda 
                                otomatik olmayan yollarla işlemektedir. İşbu madde kapsamında 
                                belirtilen kişisel veriler yalnızca yukarıda yer alan amaç ve 
                                hukuki sebepler kapsamında gerekli olması halinde tedarikçi, 
                                topluluk şirketi, iş ortağı ya da hukuki bir ihtilaf olması 
                                halinde yetkili kurum veya kuruluşlarla paylaşılabilecektir. <br /><br />
                                <span>5.4</span> Online Keşif; işbu Protokol hükümlerinin ihlali de 
                                dahil olmak üzere Şirket’ten doğrudan veya dolaylı olarak 
                                kaynaklanan nedenlerle Online Keşif’in bir zarara uğraması 
                                ya da yasal, idari veya cezai bir yaptırıma tabi tutulması 
                                halinde söz konusu tutarları Şirket’e rücu edecek ve Şirket 
                                bu tutarları tüm ferileri ile birlikte ilk yazılı talepte 
                                Online Keşif’e ödeyecektir.<br /><br />
                                <span>5.5</span> İşbu Protokol, Ana Sözleşme’nin imza tarihinden 
                                itibaren geçerli olup; Protokol’de düzenlenen yükümlülükler 
                                süresiz olarak devam edecektir.<br /><br /> 
                                <div className='table-cont'>
                                <table >
                                    <tr >
                                        <th className='short'></th>
                                        <th>ŞİRKET</th>
                                    </tr>
                                    <tr className='witd'>
                                        <td className='short'></td>
                                        <td>Şahıs şirketi: Ad-soyad, TCKN, yetkili imza
                                             Diğer şirket türleri: Kaşe, yetkili imza
                                        </td>
                                    </tr>
                                </table> 
                                </div> <br />
                            
                            Tedarikçi Sözleşmesini<button style={{border:"none", background:"white" ,cursor: "pointer"}}
                                onClick={handleDownload}><h3>buradan</h3></button> indirebilirsiniz.  
        </div>
        </div>
        
    )
}

export default TagtPage