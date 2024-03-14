import '../style/hpSliderText.css';
import '../style/customSlider2.css';
import {homepageSecondSliderImages} from "../assets/data/homepageSliderImages";
import { GoDotFill } from "react-icons/go";

import CustomSlider2 from './CustomSlider2';

const HomepageSliderText = () => {
  return (
    <div className='slider-text-container'>
      <div className='slider-text-left'>

      <ul> 
        <li><span className='slider-text-number'>1</span> <GoDotFill className='slidet-text-dot' /> Mafsal İstavrozları</li>
        <li><span className='slider-text-number'>2</span> <GoDotFill className='slidet-text-dot' /> Endüstriyer Kardan Milleri</li>
        <li><span className='slider-text-number'>3</span> <GoDotFill className='slidet-text-dot' /> Traktör Yedek Parçaları</li>
        <li><span className='slider-text-number'>4</span> <GoDotFill className='slidet-text-dot' /> Sıcak & Soğuk Dövme</li>
      </ul>
      </div>
      <div className='slider-text-right'>
      <CustomSlider2 imagesData={homepageSecondSliderImages}>
        {homepageSecondSliderImages.map((image, index) => {
          return <div className='dk-small-slider' key={index} style={{backgroundImage: `url(${image.imgURL})`}} alt={image.imgAlt} />;
        })}
      </CustomSlider2>
      </div>
    </div>
  )
}

export default HomepageSliderText;