import Mobileslide1 from "../../assets/images/neta-u/Mobileslide1.png";
import Mobileslide2 from "../../assets/images/neta-u/MobileSlide2.png";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useState } from "react";
import ModelColorSelectMobile from "./ModelColorSelectMobile";
import Image1 from "../../assets/images/neta-u/Image1.png";
import Image2 from "../../assets/images/neta-u/Image2.png";
import Image3 from "../../assets/images/neta-u/Image3.png";
import Image4 from "../../assets/images/neta-u/Image4.png";
import Color1 from "../../assets/images/neta-u/Color1.png";
import Color2 from "../../assets/images/neta-u/Color2.png";
import Color3 from "../../assets/images/neta-u/Color3.png";
import Color4 from "../../assets/images/neta-u/Color4.png";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";


export default function Mobile() {
  const [activeIndex, setActiveIndex] = useState(0);
  const {data} = useSelector((state)=>state.netaU)
  const {t} = useTranslation()

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.realIndex);
  };
  return (
    <div className="mobile-u">
      <div className="min_color">
        <div className="oneBox-m">
          <img
            src="https://www.netaauto.az/files/upload/90b856a4-6e3a-45ad-ba32-62c384a2a637_001.1.jpg"
            alt=""
            className="oneImg-m"
          />
          <img
            src="https://www.netaauto.az/files/upload/d2d69423-d47e-4a69-8fff-0eb7c0cdf552_Neta U-II (5).png"
            alt=""
            className="one1-m"
          />
          <div className="one_text-m">{data[0][t("mainLang")]}</div>
          <div className="productadd">
          {data[1][t("mainLang")]}
          </div>
        </div>
      </div>

      <div className="tre-m-u">
        <div
          className="title-m dd animate__animated animate__fadeInUp"
          style={{ opacity: 1 }}
        >
         {data[2][t("mainLang")]}
        </div>
        <div
          className="info-m dd animate__animated animate__fadeInUp"
          style={{ opacity: 1 }}
        >
          <p>{data[3][t("mainLang")]}</p>
          {/* <p>young and fascinating</p> */}
        </div>
        <div className="swiper-container-mobile swiper-container-horizontal swiper-container-ios">
          <Swiper
            modules={[Navigation]}
            scrollbar={{ draggable: true }}
            speed={1000}
            spaceBetween={30}
            loop={true}
            slidesPerView={1}
            style={{ width: "100%" }}
            className="mySwiper"
            onSlideChange={handleSlideChange}
          >
            <SwiperSlide>
              <img src={Mobileslide1} className="mobile-swiper" alt="" />
              <div
                className="swiper-bottom-text-m dd animate__animated animate__fadeInUp"
                style={{ opacity: 1 }}
              >
                {data[4][t("mainLang")]}{" "}{data[5][t("mainLang")]}

              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img src={Mobileslide2} className="mobile-swiper" alt="" />
              <div
                className="swiper-bottom-text-m dd animate__animated animate__fadeInUp"
                style={{ opacity: 1 }}
              >
                {data[6][t("mainLang")]}

              </div>
            </SwiperSlide>
          </Swiper>
          <div className="swiper-pagination-m-top">
          <div className={activeIndex === 0 ? "activeSwd swd" : "swd"}></div>
         <div className={activeIndex === 1 ? "activeSwd swd" : "swd"}></div>
          </div>


        </div>
      </div>

      <div className="addfor01 dd animate__animated animate__fadeInUp" style={{ opacity: 1 }}>
      <div className="f01">{data[8][t("mainLang")]}</div>
      <div className="f02">{data[9][t("mainLang")]}</div>
    </div>


    <div className="for-m-u">
      <img
        src="https://www.netaauto.az/files/upload/ccfbcac3-ef2c-4611-8be4-5a33609a4855_哪吒U大内饰(中控副驾侧)_3000.jpg"
        alt=""
        className="forimg-m"
      />
      <div className="forcontent-m dd animate__animated animate__fadeInUp" style={{ opacity: 1 }}>
        <div className="t1">
          <div className="raido"></div>
          <div className="addt3">{data[10][t("mainLang")]}</div>
        </div>
        <div className="t2">
          <div className="raido"></div>
          <div className="addt2">
          {data[11][t("mainLang")]}{" "}{data[12][t("mainLang")]}
          </div>
        </div>
        <div className="t3">
          <div className="raido"></div>
          <div className="addt3">{data[13][t("mainLang")]}</div>
        </div>
      </div>
    </div>


    <div className="for-m-u">
      <img
        src="https://www.netaauto.az/files/upload/214c1aae-5614-49f1-ac1b-65119123b5c6_哪吒U正车尾.png"
        alt=""
        className="addImgad"
      />
      <div className="forcontent-m dd animate__animated animate__fadeInUp" style={{ opacity: 1 }}>
        <div className="t1">{data[14][t("mainLang")]}</div>
        <div className="t1">
          <div className="raido"></div>
          <div className="addt3">{data[15][t("mainLang")]}</div>
        </div>
        <div className="t2">
          <div className="raido"></div>
          <div className="addt2">{data[16][t("mainLang")]}</div>
        </div>
        <div className="t3">
          <div className="raido"></div>
          <div className="addt3">{data[17][t("mainLang")]}</div>
        </div>
      </div>
    </div>

    <div className="five-m">
      <img
        src="https://www.netaauto.az/files/upload/547ea111-cf2d-42fe-b32a-6a3605ead2f1_10.jpg"
        alt=""
        className="fiveimg-m"
      />
      <div className="fiveOne-m dd animate__animated animate__fadeInUp" style={{ opacity: 1 }}>
      {data[18][t("mainLang")]}
        <br />
        {data[19][t("mainLang")]}
      </div>
      <div className="fiveTwo-m-u dd animate__animated animate__fadeInUp" style={{ opacity: 1 }}>
        <div className="five-info">
          <div className="fiv-top-m">{data[20][t("mainLang")]}</div>
          <div className="fivebot-m">
            4549<span style={{ fontSize: "3.467vw" }}>mm</span>
          </div>
        </div>
        <div className="vertical-bar-m"></div>
        <div className="five-info">
          <div className="fiv-top-m">{data[21][t("mainLang")]}</div>
          <div className="fivebot-m">
            2770<span style={{ fontSize: "3.467vw" }}>mm</span>
          </div>
        </div>
        <div className="vertical-bar-m"></div>
        <div className="five-info">
          <div className="fiv-top-m">{data[22][t("mainLang")]}</div>
          <div className="fivebot-m">
            1628<span style={{ fontSize: "3.467vw" }}>mm</span>
          </div>
        </div>
      </div>
    </div>


<ModelColorSelectMobile images={[Image1,Image2,Image3,Image4]} paginationLogos={[Color1,Color2,Color3,Color4]} title={""} />


<div className="sevebox">
  <img src="https://www.netaauto.az/files/upload/5086be0c-5bd8-464e-af29-b494b35fa2ce_20.jpg" alt="" className="fiveimg-m" />
  <div className="fiveTwo-m dd" style={{ opacity: 1 }}>
    <div className="five-info">
      <div className="fiv-top-m">9.5<span>{t("second")}</span></div>
      <div className="fivebot-m">0-100{t("k-h")}</div>
    </div>
    <div className="vertical-bar-m"></div>
    <div className="five-info">
      <div className="fiv-top-m">501<span>km</span></div>
      <div className="fivebot-m">{data[23][t("mainLang")]}</div>
    </div>
  </div>
</div>


    <div className="seve">
      <img
        src="https://www.netaauto.az/files/upload/8fa4c849-f76f-47f4-b946-31ba2d4874f0_哪吒U内饰(后排全景天窗).jpg"
        alt=""
        className="seveimg-m"
      />
      <div className="forcontent-m dd animate__animated animate__fadeInUp" style={{ opacity: 1 }}>
        <div className="t1">{data[24][t("mainLang")]}</div>
        <div className="t2">
          <p>
            <span style={{ whiteSpace: "pre-wrap" }}>
            {data[25][t("mainLang")]}
            </span>
          </p>
        </div>
      </div>
    </div>

    <div className="seve2">

      <img
        src="https://www.netaauto.az/files/upload/001de0ba-62f2-4fca-94a1-2401b042422c_18.jpg"
        alt=""
        className="seveimg-m"
      />
      <div className="forcontent-m dd animate__animated animate__fadeInUp" style={{ opacity: 1 }}>
        <div className="t1">{data[27][t("mainLang")]}</div>
        <div className="t2" style={{ display: "flex", alignItems: "center" }}>
          <div className="raido"></div>
          <div className="addt3">{data[28][t("mainLang")]}</div>
        </div>
        <div className="t2" style={{ display: "flex", alignItems: "center" }}>
          <div className="raido"></div>
          <div className="addt3">{data[29][t("mainLang")]}</div>
        </div>
        <div className="t2" style={{ display: "flex", alignItems: "center" }}>
          <div className="raido"></div>
          <div className="addt3">{data[30][t("mainLang")]}</div>
        </div>
      </div>
    </div>

    <div className="b1box">
      <div className="sixTextImg-add-m">
        <img
          src="https://www.netaauto.az/files/upload/9a2a4ab1-1f02-41fb-b060-22c38fa650c2_哪吒U 内饰（后排座椅）.jpg"
          alt=""
          srcSet=""
          className="i1t1"
        />
        <div className="sixTittle-add-m dd animate__animated animate__fadeInUp" style={{ opacity: 1 }}>
        {data[33][t("mainLang")]}
        </div>
      </div>
    </div>


    <div className="bt3">
      <img
        src="https://www.netaauto.az/files/upload/36300630-b5ad-4fd3-be77-6b9dc5ed14f0_16.jpg"
        alt=""
        className="i1"
      />
      <div className="title dd animate__animated animate__fadeInUp" style={{ opacity: 1 }}>
        <div className="t1">{data[34][t("mainLang")]}</div>
        <div className="t2">
          <p>{data[35][t("mainLang")]}</p>
        </div>
      </div>
    </div>


    </div>
  );
}
