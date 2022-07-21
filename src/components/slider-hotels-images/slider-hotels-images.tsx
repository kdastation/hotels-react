import { Swiper, SwiperSlide } from "swiper/react";
import { dataSliderHotelsImage } from "../../data-components/data-slider-hotels-image";
import styles from "./slider-hotels-images.module.scss";
import "swiper/scss";
import "swiper/css/free-mode";

const SliderHotelsImages = () => {
  return (
    <div className={styles.slider}>
      <Swiper
        className="slider"
        grabCursor={true}
        freeMode={true}
        slidesPerView={3.5}
      >
        {dataSliderHotelsImage.map((image, index) => {
          return (
            <SwiperSlide key={index}>
              <div className={styles.slide}>
                <img src={image} alt="slider img" />;
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export { SliderHotelsImages };
