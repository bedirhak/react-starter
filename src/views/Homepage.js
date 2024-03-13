import React from 'react'
import {homepageTopSliderImages} from "../assets/data/homepageSliderImages";

import CustomSlider from "../components/CustomSlider";
import HomepageAboutQuality from '../components/HomepageAboutQuality';
import HomepageSliderText from '../components/HomepageSliderText';
import HomepageCollage from '../components/HomepageCollage';

const Homepage = () => {
  return (
    <>
     <CustomSlider>
        {homepageTopSliderImages.map((image, index) => {
          return <img key={index} src={image.imgURL} alt={image.imgAlt} />;
        })}
      </CustomSlider>

      <HomepageSliderText />
      <HomepageAboutQuality />
      <HomepageCollage />

      
    </>
  )
}

export default Homepage;