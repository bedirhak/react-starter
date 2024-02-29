
import '../style/footer.css';


const Footer = () => {
  return (
    <div className='dk-footer-outer-container'>
        <div className='dk-footer-container'>
            <div className='dk-footer-logo'>

            </div>
            <div className='dk-footer-contact'>
                <h6 className='dk-footer-contact-heading'>İletişim:</h6>
                <p>Hanlı Merkez Mahallesi D-100 Karayolu Caddesi No: 444 Arifiye 54080 Sakarya / Türkiye</p>
                <div className='dk-footer-contact-phones'>
                    <p>Telefon +90 (264) 666 1911</p>
                    <p>Telefon +90 (264) 275 1244</p>
                    <p>Fax: +90 (264) 275 1538</p>
                    <p>E-Posta: <span className='dk-footer-email'>info@demirellerkardan.com.tr</span></p>
                </div>
            </div>
            <div className='dk-footer-products'>
                <h6 className='dk-footer-products-heading'>Ürünler:</h6>
                <ul className='dk-footer-products-links'>
                    <li><a  href={`/anasayfa`}>Mafsal İstavrozları</a></li>
                    <li><a  href={`/anasayfa`}>Endüstriyel Kardan Miller</a></li>
                    <li><a  href={`/anasayfa`}>TraktörYedek Parçaları</a></li>
                    <li><a  href={`/anasayfa`}>Sıcak & Soğuk Dövme</a></li>
                </ul>
            </div>
            <div className='footer-social-media'>

            </div>
        </div>
    </div>
  )
}

export default Footer;