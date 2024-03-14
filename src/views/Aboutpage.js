import React from "react";
import "../style/about.css";
import CustomSlider from "../components/CustomSlider";
import { aboutTopSliderImages } from "../assets/data/homepageSliderImages";
import aboutRightImage from "../assets/images/aboutRightImage.jpg";

const Aboutpage = () => {
  return (
    <>
      <CustomSlider>
        {aboutTopSliderImages.map((image, index) => {
          return <img key={index} src={image.imgURL} alt={image.imgAlt} />;
        })}
      </CustomSlider>
      <div className="dk-about-container">
        <div className="dk-about-content">
          <p className="dk-about-content-text">
            <div className="dk-about-image-container">
              <img src={aboutRightImage} alt="image" />
              <h6>
                1970'li yıllarda rahmetli yönetim kurulu başkanımız Osman
                DEMİREL, çöp yakma fırını imalatı esnasında çalışanlarıyla
                beraber.
              </h6>
            </div>
            <p>
            Şirketimizin tarihi Türkiye'de otomotiv sektöründe yedek parça
            tedariği sikıntisinın görüldüğü 1970'li yıllara dayanır. Kurucumuz
            rahmetli Bilal DEMIREL'in öncülüğüyle 1970'li yıllarin ortalarında
            Demireller Makina-Tekstil San. ve Tic. A.S, mafsal istavrozlari ve
            traktör yedek parçalari üretmek üzere kurulmuştur.
            </p>
            
            <p>Takip eden yillarda artan tecrübeyle birlikte ticari araçlar ve endüstriyel
            uyqulamalar için kardan milleri, ve sicak & soğuk dövme parçalar
            gibi ürünler şirketimizin ürün yelpa zesine eklenmiştir. </p>
            

            <p>
            2007 yilinda, kardan milleri ve yedek parçalarinın qeliştirilmesi, üretim & pazalama faaliyetlerini
            kontrol etmek ve iç ve diş pazardaki konumunu qüçlendirmek amaciyla Demireller Kardan Milleri ve Is Mak.
            San. ve Tic. Ltd. Şti. adi altinda yeni kurulan şirket ile
            operasyonlarına devam etmistir.
            </p>
            
             Günümüzde 30'u aşkın çalişanıyla
            kardan milleri ve traktör yedek parçalari imalati konusun da ulusal
            düzeyde öncü kuruluşlardan biri olarak kabul edilen firmamiz, iç ve
            diş pazarda müs teri ihtiyaçlarina göre kaliteli ürünleri tedarik
            etmekten qurur duymaktadir. Demireller Kardan'in ortaklariyla
            sürdürdüğü uzun vadeli birliktelik, kismen qüçlü dinamik is
            iliskilerinden ve uzun yıllara dayanan işbirliğinin bir sonucu
            olarak inşa edilen quvenden kay naklanmaktadır. Sürekli bilgi ve
            deneyim alişverişi, Demireller Kardan'in yüksek kaliteli ve qü
            venilir ürünler üretmesini sağlar. Firmamiz yeni müşterilerin
            gelişimini temin etmek ve farkli teslimat koşullarmı karsilamak için
            üretim ve pazarlama operasyonlarina sürekli bir şekilde yatırim
            yapmaktadir Yedek parça üretimi için gelişmis teknoloji ile
            donatilmis uretim tesisi 5.000m2 si kapali olmak uzere 12.000m2 alan
            üzerinde Türkiye'nin Marmara bolgesinde bulunan bir sehir olan
            Sakarya linde yer almaktadir
          </p>
        </div>
      </div>
    </>
  );
};

export default Aboutpage;
