import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination, Navigation } from "swiper/modules";
import NetaGT from "../../assets/images/slider/netag.png";
import NetaS from "../../assets/images/slider/netas.png";
import NetaU from "../../assets/images/slider/netau.png";
import NetaV from "../../assets/images/slider/netav.png";
import "swiper/css/navigation";
import PrevIcon from "../../assets/images/slider/left.png";
import NextIcon from "../../assets/images/slider/right.png";
import PaginationLogo1 from "../../assets/images/slider/logo1.png";
import PaginationLogo2 from "../../assets/images/slider/logo2.png";
import PaginationLogo3 from "../../assets/images/slider/logo3.png";
import PaginationLogo4 from "../../assets/images/slider/logo4.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import useMobileDetect from "use-mobile-detect-hook";

export default function Slider() {
  const detectMobile = useMobileDetect();

    const {t} = useTranslation()
    const navigate = useNavigate()
    const az = t("mainLang") === "az";
const {data} = useSelector((state) => state.home)
  const paginationLogos = [
    PaginationLogo1,
    PaginationLogo2,
    PaginationLogo3,
    PaginationLogo4,
  ];
  const [car, setCar] = useState("neta-gt");

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
      <Title>            {az ? data[0].az : data[0].en}
</Title>

      <div className="pagination-wrapper">
        <div className="swiper-pagination"></div>
      </div>
      <Swiper
        modules={[Pagination, Navigation]}
        scrollbar={{ draggable: true }}
        pagination={pagination}
        speed={1500}
        spaceBetween={30}
        onActiveIndexChange={(swiper) => {
          if (swiper.activeIndex === 0) {
            setCar("neta-gt");
          } else if (swiper.activeIndex === 1) {
            setCar("neta-s");
          } else if (swiper.activeIndex === 2) {
            setCar("neta-u");
          } else if (swiper.activeIndex === 3) {
            setCar("neta-v");
          }
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        loop={true}
        slidesPerView={1}
        style={{ width: "100%" }}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={NetaGT} alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <img src={NetaS} alt="" />

        </SwiperSlide>
        <SwiperSlide>
        <img src={NetaU} alt="" />

        </SwiperSlide>
        <SwiperSlide>
          <img src={NetaV} alt="" />
        </SwiperSlide>
      </Swiper>


{!detectMobile.isMobile() && <> <div className="swiper-button-prev">
        <img src={PrevIcon} alt="Prev" />
      </div>
      <div className="swiper-button-next">
        <img src={NextIcon} alt="Next" />
      </div></> }
     

      <div
        className="c-button c-button-dark swiper_but"
        style={{ bottom: detectMobile.isMobile() ?"40px":"100px",transform:"translate(-50%,-50%)",left:"50%" }}
        onClick={()=>navigate("/"+car)}
      >
                  {t("learnMore")}

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
  padding-top: 7vw !important;
  background: #fff;
  padding-bottom: 200px !important;
  
  @media (max-width: 768px) {
    padding-bottom: 35.604vw !important;

      padding-top: 25vw !important;


  }
  .swiper-wrapper {
    margin-top: 130px !important;
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

  @media (max-width: 768px) {
    .c-button{
  width: 120px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
}
      }

  .swiper-slide {
    display: flex;
    justify-content: center;
    img{
      @media (max-width: 768px) {
        width: 90vw !important;
        height: auto;
      }
    }
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
  @media (max-width: 768px) {
    font-size: 5.333vw;
  }
`;
