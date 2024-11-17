import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";

import "swiper/css/navigation";
import PrevIcon from "../../assets/images/slider/left.png";
import NextIcon from "../../assets/images/slider/right.png";

import { useTranslation } from "react-i18next";
import { useRef, useState } from "react";

export default function ModelSlider({images,data}) {

  const { t } = useTranslation();
  const az = t("mainLang") === "az";

  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.realIndex);
  };
  const swiperRef = useRef(null);

  const handleItemClick = (index) => {
    if (swiperRef.current) {
      swiperRef.current.slideToLoop(index);
    }
  };

  return (
    <Wrapper>
     
      <Swiper
        modules={[Navigation]}
        scrollbar={{ draggable: true }}
        speed={1000}
        spaceBetween={30}
        onSlideChange={handleSlideChange}
        onSwiper={(swiper) => (swiperRef.current = swiper)}

        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        loop={true}
        slidesPerView={1}
        style={{ width: "100%" }}
        className="mySwiper"
      >


{images.map((image,index)=>{
    return (

        <SwiperSlide key={index}>
          <img src={image} alt="" />
        </SwiperSlide>
    )
})}

      
      </Swiper>

      <div className="swiper-button-prev">
        <img src={PrevIcon} alt="Prev" />
      </div>
      <div className="swiper-button-next">
        <img src={NextIcon} alt="Next" />
      </div>

      <div className="slider_media">
                <div
                  className="page_center media_text dd animate__animated animate__fadeInUp"
                  style={{ opacity: 1 }}
                >
                  <ul>
                  <li className={activeIndex === 0 ? "swiperShowActive" : ""} onClick={() => handleItemClick(0)}>
                      <span>{data[4][t("mainLang")]}</span>
                      <span>{data[5][t("mainLang")]}</span>
                    </li>
                    <li className={activeIndex === 1 ? "swiperShowActive" : ""} onClick={() => handleItemClick(1)}>
                      <span>{data[6][t("mainLang")]}</span>
                      <span>{data[7][t("mainLang")]}</span>
                    </li>
                  </ul>
                </div>
              </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
      padding-bottom: 100px;

  /* padding-top: 5.729vw; */
  background: #fff;
  /* padding-bottom: 0px; */
  .swiper-wrapper {
    /* margin-top: 130px !important; */
    /* margin-bottom: 48px !important; */
    /* padding-bottom: 200px; */
  }

  .pagination-wrapper {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px; /* Pagination ve slider arasında boşluk bırakmak için */
  }

  .swiper-pagination {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 60px;
    top: 60px;
    position: absolute;
    /* top: -10px; */
    transform: translate(50%, -50%);
    /* height: 50px; */
    z-index: 999999999;
    right: 50%;
    @media (max-width: 768px) {
      gap: 20px;
    }
  }

  .swiper-pagination-bullet {
    filter: grayscale(100%) opacity(0.1);
    height: 35px;
    cursor: pointer;
    img {
      height: 35px;
      width: 165px;
      @media (max-width: 768px) {
        width: 70px;
        height: auto;
      }
    }
  }

  .swiper-pagination-bullet-active {
    filter: grayscale(0%) opacity(1);
  }

  .swiper-slide {
    display: flex;
    justify-content: center;
  }

  .swiper-button-next {
    right: 5vw !important;
    img {
      width: 58px;
    }
    &::after {
      display: none;
    }
  }

  .swiper-button-prev {
    left: 5vw !important;
    img {
      width: 58px;
    }
    &::after {
      display: none;
    }
  }

  img {
    width: 66.146vw;
  }

  .swiper-button-prev,
  .swiper-button-next {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 10;
    cursor: pointer;
  }

  .swiper-button-prev {
    left: 10px;
  }

  .swiper-button-next {
    right: 10px;
  }
`;

const Title = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 1.77vw;
  line-height: 1.77vw;
  color: #000000;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9;
`;
