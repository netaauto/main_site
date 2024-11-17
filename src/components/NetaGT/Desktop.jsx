import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ModelColorSelectSlider from "../ModelColorSelectSlider";
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
import '../../assets/style/v.css'
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

export default function Desktop() {

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
    <div className="pc-gt">
      <div className="dom11">
        <div className="dom11_min">
          <div className="min_color">
            <div className="topFirst">
              <video
                id="myVideo"
                poster="https://www.netaauto.az/files/upload/3549a8d5-ad25-414f-a10c-de88d085203b_预告_无logo.mp4"
                muted="muted"
                loop="loop"
                autoPlay="autoPlay"
                className="videoNew"
              >
                <source
                  src="https://www.netaauto.az/files/upload/3549a8d5-ad25-414f-a10c-de88d085203b_预告_无logo.mp4"
                  type="video/mp4"
                />
              </video>
              <div className="animate__animated animate__fadeInDown videoImg">
                <img
                  src="https://www.netaauto.az/files/upload/5beaa979-582e-4b8c-906d-1f55a2239e2d_2 (3).png"
                  alt=""
                  className="iconPc"
                />
                <div className="one_bt">
                 {data[0][t("mainLang")]}
                </div>
              </div>
              <div className="botxt">
              {data[1][t("mainLang")]}
              </div>
            </div>
          </div>
          <div className="min_color">
            <div className="twoimg-gt">
              <img
                src="https://www.netaauto.az/files/upload/dab58520-cfd9-442a-8767-12408a735bf0_057106bf-e2b9-4147-b079-612f3e46b14f_Group 48096782.png"
                alt=""
                srcSet=""
              />
              <div className="twoText-gt">
                <div>
                {data[2][t("mainLang")]}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="threeLunbo">
        <div className="threeBottom">
          <div className="slider">
            <div className="swiper-container swiper-container-horizontal">
              <div className="swiper-wrapper">
                <Swiper
                  modules={[Navigation]}
                  scrollbar={{ draggable: true }}
                  speed={1000}
                  spaceBetween={30}
                  loop={true}
                  slidesPerView={1}
                  style={{ width: "100%" }}
                  className="mySwiper"
                >
                  <SwiperSlide>
                    <img src="https://www.netaauto.az/files/upload/026ebe95-2a1b-48e3-b00c-2b63718b831e_otb_img_main@2x (1).jpg" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src="https://www.netaauto.az/files/upload/7f74c001-eb86-4557-9d4f-189956bfe79a_girl.jpg" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src="https://www.netaauto.az/files/upload/026ebe95-2a1b-48e3-b00c-2b63718b831e_otb_img_main@2x (1).jpg" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src="https://www.netaauto.az/files/upload/7f74c001-eb86-4557-9d4f-189956bfe79a_girl.jpg" />
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
            <div className="slider_media">
              <div className="page_center media_text">
                <ul>
                  <li className="">
                    <span>{data[3][t("mainLang")]}</span>
                  </li>
                  <li className="swiperShowActive">
                    <span>{data[4][t("mainLang")]}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="fiv">
        <div className="imgBox">
          <img
            src="https://www.netaauto.az/files/upload/775b70dd-f1a3-4ff1-9fb9-7b13dccc6325_Group 48096877 (1).jpg"
            alt=""
          />
          <div
            className="content1 dd animate__animated animate__fadeInUp"
            style={{ opacity: 1 }}
          >
            {data[5][t("mainLang")]}
          </div>
          <div
            className="content2 dd animate__animated animate__fadeInUp"
            style={{ opacity: 1 }}
          >
            <div className="tn">
              <p>
              {data[6][t("mainLang")]}
              </p>
              <p>
                <br />
              </p>
            </div>
          </div>
        </div>
        <div className="bottomBox">
          <div className="box">
            <div className="imgbox">
              <div className="image-container">
                <img src="https://www.netaauto.az/files/upload/b5f0ae83-bd46-43bc-94c0-82946392e467_21.png" />
              </div>
              <div
                className="containerBox dd animate__animated animate__fadeInUp"
                style={{ opacity: 1 }}
              >
                <div>{data[7][t("mainLang")]}</div>
              </div>
            </div>
            <div className="imgbox">
              <div className="image-container">
                <img src="https://www.netaauto.az/files/upload/1694d5c5-75e7-4aa9-bbae-1d48f5b31fe0_PC端.png" />
              </div>
              <div
                className="containerBox dd animate__animated animate__fadeInUp"
                style={{ opacity: 1 }}
              >
                <div>{data[8][t("mainLang")]}</div>
              </div>
            </div>
            <div className="imgbox">
              <div className="image-container">
                <img src="https://www.netaauto.az/files/upload/224bf0fa-5b74-472d-bb5e-708cc4e4e5b1_23 (2).png" />
              </div>
              <div
                className="containerBox dd animate__animated animate__fadeInUp"
                style={{ opacity: 1 }}
              >
                <div className="t1p">{data[9][t("mainLang")]}</div>
              </div>
            </div>
            <div className="imgbox">
              <div className="image-container">
                <img src="https://www.netaauto.az/files/upload/13440994-8bc1-48ec-99a3-879522600f54_24.png" />
              </div>
              <div
                className="containerBox dd animate__animated animate__fadeInUp"
                style={{ opacity: 1 }}
              >
                <div>{data[10][t("mainLang")]}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="for">
        <div
          className="top1 dd animate__animated animate__fadeInUp"
          style={{ opacity: 1 }}
        >
         
         {data[11][t("mainLang")]}
        </div>
        <div className="btBox">
          <div className="box1 box1ntr" style={{ zIndex: 100 }}>
            <div className="add addno">
              <div className="lefImg">
                <div className="limg">
                  <div className="gtbox">
                    <div className="a1">
                      <div className="aa1">3.7</div>
                      <div className="aa2">{t("second")}</div>
                    </div>
                    <div className="a2">0-100{t("k-h")}</div>
                  </div>
                </div>
              </div>
              <img
                src="https://www.netaauto.az/files/upload/3766caac-9799-4777-918a-6604c15c248a_Group 48096874.jpg"
                alt=""
                className="rimg"
              />
              <div id="front" className="front">
                3.7{t("second")}
              </div>
              <img
                id="fontImg"
                src="https://www.netaauto.co//template/1/website/static/images/pc/s/67.png"
                alt=""
                className="fontImg"
              />
            </div>
          </div>
          <div className="box2 n1-box2-x">
            <div className="add2 n1-add-x">
              <img
                src="https://www.netaauto.az/files/upload/4de0bc4c-df55-4029-b4a1-b525c23351c4_Group 48096875.png"
                alt=""
                className="rimg"
              />
              <div className="lefImg">
                <div className="limg">
                  <div className="gtbox">
                    <div className="a1">
                      <div className="aa1">32</div>
                      <div className="aa2">{t("minute")}</div>
                    </div>
                    <div className="a2">100-0{t("k-h")}</div>
                  </div>
                </div>
              </div>
              <div id="front2" className="front">
                32{t("minute")}
              </div>
              <img
                id="fontImg2"
                src="https://www.netaauto.co//template/1/website/static/images/pc/s/67.png"
                alt=""
                className="fontImg"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="six">
        <img src="https://www.netaauto.az/files/upload/79ce68ab-0236-4c33-8eb9-966eeb8bb5d6_jump.jpg" />
        <div className="contentBox">
          <div
            className="t1 dd animate__animated animate__fadeInUp"
            style={{ opacity: 1 }}
          >
           {data[12][t("mainLang")]}
          </div>
          <div
            className="t2 dd animate__animated animate__fadeInUp"
            style={{ opacity: 1 }}
          >
            <p>
            {data[13][t("mainLang")]}
            </p>
            <p>
              <br />
            </p>
          </div>
        </div>
      </div>

      <div className="swiperBox">
        <ModelColorSelectSlider
          images={[Image1, Image2, Image3, Image4, Image5, Image6]}
          paginationLogos={[Color1, Color2, Color3, Color4, Color5, Color6]}
          title={<Title />}
        />
      </div>

      <div className="susBox">
        <img
          src="https://www.netaauto.az/files/upload/062b03ca-ff61-45ac-944d-8ef9e24dffbc_Group 48096781 (1).png"
          alt=""
        />
        <div className="tBox">
          <div
            className="t1 dd animate__animated animate__fadeInUp"
            style={{ opacity: 1 }}
          >
            {data[15][t("mainLang")]}
          </div>
          <div
            className="t2 dd animate__animated animate__fadeInUp"
            style={{ opacity: 1 }}
          >
            <p>
            {data[16][t("mainLang")]}
            </p>
            <p>
              <br />
            </p>
          </div>
        </div>
      </div>

      <div className="susBox2">
        <div className="tBox">
          <div
            className="t1 dd animate__animated animate__fadeInUp"
            style={{ opacity: 1 }}
          >
            {data[17][t("mainLang")]}
          </div>
          <div
            className="t2 dd animate__animated animate__fadeInUp"
            style={{ opacity: 1 }}
          >
            <p>
            {data[18][t("mainLang")]}
            </p>
            <p>
              <br />
            </p>
          </div>
        </div>
        <img
          src="https://www.netaauto.az/files/upload/3b10c923-ecb2-4add-8806-54f90bdcce87_Group 48096781.png"
          alt=""
        />
      </div>
    </div>
  );
}
