import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image1 from "../../assets/images/neta-gt/1.png";
import Image2 from "../../assets/images/neta-gt/2.png";
import Image3 from "../../assets/images/neta-gt/3.png";
import Image4 from "../../assets/images/neta-gt/4.png";
import Image5 from "../../assets/images/neta-gt/5.png";
import Image6 from "../../assets/images/neta-gt/6.png";
import Color1 from "../../assets/images/neta-gt/Color1.png";
import Color2 from "../../assets/images/neta-gt/Color2.png";
import Color3 from "../../assets/images/neta-gt/Color3.png";
import Color4 from "../../assets/images/neta-gt/Color4.png";
import Color5 from "../../assets/images/neta-gt/Color5.png";
import Color6 from "../../assets/images/neta-gt/Color6.png";
import ModelColorSelectMobile from "../ModelColorSelectMobile";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";



export default function Mobile() {
  const {data} = useSelector((state)=>state.netaGt)
const {t} = useTranslation()

    const Title = () => (
        <div
          className="title dd animate__animated animate__fadeInUp"
          style={{ opacity: 1 }}
        >
          {data[14][t("mainLang")]}
        </div>
      );
  return (
    <div className="mobile-gt">
      <div className="dom11">
        <div className="dom11_min">
          <div className="min_color" >
            <div className="topFirst">
              <img
                src="https://www.netaauto.az/files/upload/03c35c9d-acf1-4043-8ced-39b7dd5500bf_mobileGtMp4.gif"
                className="videoNew-mobile"
              />
              <img
                src="https://www.netaauto.az/files/upload/8ddca649-a88f-4c0d-8be8-e03f03ad78e1_2 (4).png"
                alt=""
                className="one1-m"
              />
              <div className="one_text-m">
              {data[0][t("mainLang")]}
              </div>
              <div className="productadd">
              {data[1][t("mainLang")]}
              </div>
            </div>
          </div>
          <div className="min_color">
            <div className="twoimg-gt">
              <div className="tbox">
               
                <div className="tt2">
                  <p>{data[2][t("mainLang")]}</p>
                </div>
              </div>
              <img
                src="https://www.netaauto.az/files/upload/de25e7ce-0c25-4163-adb0-26a6ab50c843_Group 48096948.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      <div className="tre-m">
        <div className="swiper-container-mobile swiper-container-horizontal swiper-container-ios">
          <div className="swiper-wrapper mobileSwiper">
            <Swiper
              modules={[Navigation]}
              scrollbar={{ draggable: true }}
              speed={1000}
              spaceBetween={10}
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
                <img
                  src="https://www.netaauto.az/files/upload/703b0dc3-8611-426a-a954-25ba63dcb5f6_gtm32.jpg"
                  className="mobile-swiper"
                />
                <div className="swiper-bottom-text-m">
                  <div>{data[4][t("mainLang")]}</div>
                 
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="https://www.netaauto.az/files/upload/785cc7f6-12c2-4fc0-8b3f-6c26562f2a76_aaa.jpg"
                  className="mobile-swiper"
                />
                <div
                  className="swiper-bottom-text-m dd animate__animated animate__fadeInUp"
                  style={{ opacity: 1 }}
                >
                  <div>{data[3][t("mainLang")]}</div>
       
                </div>
              </SwiperSlide>
          
            </Swiper>

         
          </div>
        </div>
      </div>

      <div className="carInfo">
        <div className="carBox">
          <img
            src="https://www.netaauto.az/files/upload/ba8f76cd-66a6-4891-91b0-8512b95a1c75_4.png"
            alt=""
          />
          <div
            className="info dd animate__animated animate__fadeInUp"
            style={{ opacity: 1 }}
          >
            <div className="ak">
            {data[5][t("mainLang")]}
            </div>
            <div className="ak2">
              <p>
              {data[6][t("mainLang")]}
              </p>
            </div>
          </div>
        </div>

        <div className="swiper-containerD  swiper-container-ios">
          <div
            className="swiper-wrapper"
            style={{
              width: "100vw",
              transitionDuration: "0ms",
              transform: "translate3d(20px, 0px, 0px)",
            }}
          >
            <Swiper
              modules={[Navigation]}
              scrollbar={{ draggable: true }}
              speed={1000}
              spaceBetween={10}
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }}
              loop={false}
              slidesPerView={1}
            //   style={{ width: "100%" }}
              className="mySwiper"
              onReachEnd={(swiper) => {
                swiper.slideTo(0);  // Go back to the first slide
              }}
            >
              <SwiperSlide>
               
                  <div>
                    <img
                      src="https://www.netaauto.az/files/upload/5c99c383-0ec3-429c-b8d2-e284295e9527_Group 48096878.jpg"
                      alt=""
                      className="bottomImg"
                    />
                    <div
                      className="contentX dd animate__animated animate__fadeInUp"
                      style={{ opacity: 1 }}
                    >
                      <div>{data[7][t("mainLang")]}</div>
                    </div>
                  </div>
              </SwiperSlide>
              <SwiperSlide>
              
                  <div>
                    <img
                      src="https://www.netaauto.az/files/upload/796eac9e-f268-4c68-be54-f650bc3c682e_移动端.png"
                      alt=""
                      className="bottomImg"
                    />
                    <div
                      className="contentX dd animate__animated animate__fadeInUp"
                      style={{ opacity: 1 }}
                    >
                      {data[8][t("mainLang")]}
                    </div>
                  </div>
              </SwiperSlide>
              <SwiperSlide>
               
                  <div>
                    <img
                      src="https://www.netaauto.az/files/upload/d3a4519d-57e1-4756-8960-d20fd0bbe16f_23.png"
                      alt=""
                      className="bottomImg"
                    />
                    <div className="contentX">{data[9][t("mainLang")]}</div>
                  </div>
              </SwiperSlide>
              <SwiperSlide>
               
                  <div>
                    <img
                      src="https://www.netaauto.az/files/upload/2a997f7c-759b-4583-abc8-02491aa5569f_24 (2).png"
                      alt=""
                      className="bottomImg"
                    />
                    <div className="contentX">
                      <div>{data[10][t("mainLang")]}</div>
                     
                    </div>
                  </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>


      <div className="bottomSwiper" style={{padding:"30px 20px 0 20px"}}>
   
      <div className="swiper-containerC swiper-container-horizontal swiper-container-ios" style={{height:"auto"}}>
          
          
          
      <Swiper
        modules={[Navigation]}
        scrollbar={{ draggable: true }}
        speed={1000}
        spaceBetween={20}
       
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        loop={true}
        slidesPerView={1}
        style={{ width: "100%" }}
        className="mySwiper"
      >


        <SwiperSlide >
              <img
                src="https://www.netaauto.az/files/upload/370e7bee-07d7-4b19-9ab4-f85ec573a15b_1 3.png"
                alt=""
                srcSet=""
                className="bottomImg"
                style={{witdh:"100%"}}
              />
              <div className="qstop dd animate__animated animate__fadeInUp" style={{ opacity: 1 }}>
                <div className="qst1">3.7</div>
                <div className="qst2">{t("second")}</div>
                <div className="qst3">0-100{t("k-h")}</div>
              </div>
        </SwiperSlide>
        <SwiperSlide >
              <img
                src="https://www.netaauto.az/files/upload/fcb8e48f-d50b-439c-8737-73c74b378431_Group 48097012.jpg"
                alt=""
                srcSet=""
                className="bottomImg"
                style={{witdh:"100%"}}

              />
              <div className="qstop dd animate__animated animate__fadeInUp" style={{ opacity: 1 }}>
                <div className="qst1">32</div>
                <div className="qst2">{t("minute")}</div>
                <div className="qst3">100-0{t("k-h")}</div>
              </div>
        </SwiperSlide>


      
      </Swiper>
          
       
      </div>
    </div>


    <div className="for-m-gt">
      <img
        src="https://www.netaauto.az/files/upload/74ccff37-93dc-4152-bfb8-b17d5d5c7b03_gt6.png"
        alt=""
        className="forimg-m"
      />
      <div className="ty"></div>
    </div>


    <div className="sevebox dd animate__animated animate__fadeInUp" style={{ opacity: 1 }}>
      <div className="t1">{data[11][t("mainLang")]}</div>
      <div className="t2">
        <p>
        {data[12][t("mainLang")]}
        </p>
        <p><br /></p>
      </div>
    </div>

    <ModelColorSelectMobile
          images={[Image1, Image2, Image3, Image4, Image5, Image6]}
          paginationLogos={[Color1, Color2, Color3, Color4, Color5, Color6]}
          title={<Title />} />


<div className="b1Box">
      <img
        src="https://www.netaauto.az/files/upload/6148964c-bfb6-49b5-bbb6-330bbd27dc80_m10.png"
        alt=""
        srcSet=""
      />
      <div className="t1 dd animate__animated animate__fadeInUp" style={{ opacity: 1 }}>
      {data[15][t("mainLang")]}
      </div>
      <div className="t2 dd animate__animated animate__fadeInUp" style={{ opacity: 1 }}>
        <p>
        {data[16][t("mainLang")]}
        </p>
      </div>
    </div>


    <div className="b2Box">
      <img
        src="https://www.netaauto.az/files/upload/d093fe52-11aa-4684-b417-f591c27a4226_m11.png"
        alt=""
        srcSet=""
      />
      <div className="dd animate__animated animate__fadeInUp" style={{ opacity: 1 }}>
        <div className="t1">{data[17][t("mainLang")]}</div>
        <div className="t2">
          <p>
          {data[18][t("mainLang")]}
          </p>
        </div>
      </div>
    </div>

    </div>
  );
}
