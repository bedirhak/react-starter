import React from 'react'
import images from "../assets/data/homepageSliderImages";

import CustomSlider from "../components/CustomSlider";
import HomepageAboutQuality from '../components/HomepageAboutQuality';
import HomepageBanner from '../components/HomepageBanner';
import HomepageCollage from '../components/HomepageCollage';

const Homepage = () => {
  return (
    <>
     <CustomSlider>
        {images.map((image, index) => {
          return <img key={index} src={image.imgURL} alt={image.imgAlt} />;
        })}
      </CustomSlider>

      <HomepageAboutQuality />
      <HomepageCollage />

      
    </>
  )
}

export default Homepage;