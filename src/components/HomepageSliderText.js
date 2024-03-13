import '../style/hpSliderText.css';
import {homepageSecondSliderImages} from "../assets/data/homepageSliderImages";

import CustomSlider from './CustomSlider';

const HomepageSliderText = () => {
  return (
    <div className='slider-text-container'>
      <div className='slider-text-left'>

      <ol> 
        <li>Mafsal İstavrozları</li>
        <li>Endüstriyer Kardan Milleri</li>
        <li>Traktör Yedek Parçaları</li>
        <li>Sıcak & Soğuk Dövme</li>
      </ol>
      </div>
      <div className='slider-text-right'>
      <CustomSlider>
        {homepageSecondSliderImages.map((image, index) => {
          return <img key={index} src={image.imgURL} alt={image.imgAlt} />;
        })}
      </CustomSlider>
      </div>
    </div>
  )
}

export default HomepageSliderText;