
import { FaArrowRightLong } from "react-icons/fa6";


import { FaAward } from "react-icons/fa6";
import { FaCircleInfo } from "react-icons/fa6";
import { FaBookBookmark } from "react-icons/fa6";

import '../style/hpAboutQuality.css';

const HomepageAboutQuality = () => {
  return (
    <div className='aqk-container'>
        <div className='aqk-each'>
            <FaCircleInfo className="aqk-icons"/>
            <h2>HAKKIMIZDA</h2>
            <p>Şirketimizin tarihi Türkiye'de otomotiv sektörünün de yedek parça
                tedariği sıkıntısının görüldüğü 1960'lı yıllara dayanır. Kurucumuz rahmetli
                Bilal DEMİREL'in öncülüğünde 1960'lı yılların ortalarında Demiraller Makina-tEKSTİL
                San ve Tic. A.Ş. ...
            </p>
            <a className="aqk-link" href={`/anasayfa`}>DAHA FAZLA  </a>  
        
        </div>

        <div className='aqk-each'>
            <FaAward className="aqk-icons aqk-icons-award"/>
            <h2>KALİTE</h2>
            <p>Şirketimizin tarihi Türkiye'de otomotiv sektörünün de yedek parça
                tedariği sıkıntısının görüldüğü 1960'lı yıllara dayanır. Kurucumuz rahmetli
                Bilal DEMİREL'in öncülüğünde 1960'lı yılların ortalarında Demiraller Makina-tEKSTİL
                San ve Tic. A.Ş. ...
            </p>
            <a className="aqk-link" href={`/anasayfa`}>DAHA FAZLA  </a>  
        
        </div>

        <div className='aqk-each'>
            <FaBookBookmark className="aqk-icons"/>
            <h2>KATALOGLAR & BROŞÜRLER</h2>
            <p>Şirketimizin tarihi Türkiye'de otomotiv sektörünün de yedek parça
                tedariği sıkıntısının görüldüğü 1960'lı yıllara dayanır. Kurucumuz rahmetli
                Bilal DEMİREL'in öncülüğünde 1960'lı yılların ortalarında Demiraller Makina-tEKSTİL
                San ve Tic. A.Ş. ...
            </p>
            <a className="aqk-link" href={`/anasayfa`}>DAHA FAZLA  </a>  
        
        </div>
        

    </div>
  )
}

export default HomepageAboutQuality;