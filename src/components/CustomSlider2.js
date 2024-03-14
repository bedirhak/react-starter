import { useState, useEffect } from "react";
import "../style/customSlider.css";
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowLeft } from "react-icons/md";


function CustomCarousel({ imagesData, children }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [slideDone, setSlideDone] = useState(true);
  const [timeID, setTimeID] = useState(null);

  useEffect(() => {
    console.log("bedirhan");
    console.log("Hello" + imagesData[0]);
  }, [imagesData]); 

  useEffect(() => {
    if (slideDone) {
      setSlideDone(false);
      setTimeID(
        setTimeout(() => {
          slideNext();
          setSlideDone(true);
        }, 5000)
      );
    }
  }, [slideDone]);

  const slideNext = () => {
    setActiveIndex((val) => {
      if (val >= children.length - 1) {
        return 0;
      } else {
        return val + 1;
      }
    });
  };

  const slidePrev = () => {
    setActiveIndex((val) => {
      if (val <= 0) {
        return children.length - 1;
      } else {
        return val - 1;
      }
    });
  };

  const AutoPlayStop = () => {
    if (timeID > 0) {
      clearTimeout(timeID);
      setSlideDone(false);
    }
  };

  const AutoPlayStart = () => {
    if (!slideDone) {
      setSlideDone(true);
    }
  };

  return (
    <div
      className="container__slider"
      onMouseEnter={AutoPlayStop}
      onMouseLeave={AutoPlayStart}
    >
      {children.map((item, index) => {
        return (
          <div
            className={"slider__item slider__item-active-" + (activeIndex + 1)}
            key={index}
          >
            {item}
          </div>
        );
      })}

      <div className="container__slider__links">
        <div className="dk-date-slider-line"></div>
        {children.map((item, index) => {
          return (
            <div className="dk-date-slider-container">
              <button
                key={index}
                className={
                  activeIndex === index
                  ? "container__slider__links-small container__slider__links-small-active"
                  : "container__slider__links-small"
                }
                onMouseEnter={(e) => {
                  e.preventDefault();
                  setActiveIndex(index);
                }}
              ></button>
              <div className="dk-date-slider-dot">{imagesData && (imagesData[index]?.imgDate)}</div>

            </div>
          );
        })}
      </div>

        <div className="dk-date-slider-arrows-container"> 
          <div className="dk-date-slider-arrows">
            <button
              className="slider__btn-next"
              onClick={(e) => {
                e.preventDefault();
                slideNext();
              }}
              >
              {<MdKeyboardArrowRight className="dk-slider-arrows" />}
            </button>
            <button
              className="slider__btn-prev"
              onClick={(e) => {
                e.preventDefault();
                slidePrev();
              }}
              >
              {<MdKeyboardArrowLeft className="dk-slider-arrows" />}
            </button>
          </div>
        </div>
    </div>
  );
}

export default CustomCarousel;
