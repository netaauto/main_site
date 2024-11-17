import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination, Navigation } from "swiper/modules";

import "swiper/css/navigation";


import { useTranslation } from "react-i18next";


export default function ModelColorSelectMobile({ images,paginationLogos,title }) {

  const { t } = useTranslation();



  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return `<span class="${className}"><img src="${
        paginationLogos[index]
      }" alt="Pagination Logo ${index + 1}" /></span>`;
    },
  };

  return (
    <Wrapper>
      {title}
   
      <Swiper
        modules={[Pagination, Navigation]}
        scrollbar={{ draggable: true }}
        pagination={pagination}
            // spaceBetween={30}
        // onActiveIndexChange={(swiper) => {
        //   if (swiper.activeIndex === 0) {
        //     setCar("neta-gt");
        //   } else if (swiper.activeIndex === 1) {
        //     setCar("neta-s");
        //   } else if (swiper.activeIndex === 2) {
        //     setCar("neta-u");
        //   } else if (swiper.activeIndex === 3) {
        //     setCar("neta-v");
        //   }
        // }}
       
        loop={true}
        slidesPerView={1}
        style={{ width: "100%" }}
        className="mySwiper"
      >
        {images.map((e, index) => {
          return (
            <SwiperSlide key={index}>
              <img src={e} alt=""  className="car-img" />
            </SwiperSlide>
          );
        })}
      </Swiper>

     
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  padding-top: 5.729vw;
  background: #fff;
  padding-bottom: 11.604vw;
  padding-top: 13.333vw;

  .car-img{
    width: 80VW;
    /* height: 21.324vw; */
    /* position: absolute; */
    /* top: 13.073vw; */
    /* left: 19.792vw; */


  }
  .swiper-wrapper {
    /* margin-top: 130px !important; */
    margin-bottom: 48px !important;
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
    /* top: -10px; */
    /* height: 50px; */
    z-index: 999999999;
    right: 50%;
    @media (max-width: 768px) {
    
    height:8.53vw
}


    .swiper-pagination-bullet {
    /* filter: grayscale(100%) opacity(0.1); */
    height: 8.53vw;
    @media (max-width: 768px) {
        height: 5.53vw;
         width: 5.53vw;
      }
    cursor: pointer;
    img {
        height: 5.53vw;
      width: 5.53vw;
            @media (max-width: 768px) {
        height: 5.53vw;
         width: 5.53vw;
      }
    }
  }

  .swiper-pagination-bullet-active  {
    /* filter: grayscale(0%) opacity(1); */
    /* width: 3.333vw;
    height: 3.333vw; */
    border: 0.104vw solid rgb(204, 208, 215);
    padding: 0.052vw;
    border-radius: 50%;
   width: 6.083vw;
    height: 6.083vw; 
    display: flex;
    align-items: center;
    justify-content: center;
    @media (max-width: 768px) {
        height: 6.53vw;
         width: 6.53vw;
      }
  }


    @media (max-width: 768px) {
      gap: 20px;
    }
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
