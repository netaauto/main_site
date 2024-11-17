import ModelSlider from "../ModelSlider";
import Image1 from "../../assets/images/neta-v/1.png";
import Image2 from "../../assets/images/neta-v/2.png";
import Image3 from "../../assets/images/neta-v/3.png";
import ModelColorSelectSlider from "../ModelColorSelectSlider";
import GlazeCvan from '../../assets/images/neta-v/Glaze_Cyan.png'
import StormWhite from '../../assets/images/neta-v/Storm_White.png'
import MidnightGray from '../../assets/images/neta-v/Midnight_Gray.png'
import SakuraPink from '../../assets/images/neta-v/Sakura_Pink.png'
import SkyBlue from '../../assets/images/neta-v/Sky_Blue.png'
import Color1 from '../../assets/images/neta-v/Color1.png'
import Color2 from '../../assets/images/neta-v/Color2.png'
import Color3 from '../../assets/images/neta-v/Color3.png'
import Color4 from '../../assets/images/neta-v/Color4.png'
import Color5 from '../../assets/images/neta-v/Color5.png'
// import '../../assets/style/v.css'
import styled from "styled-components";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";



export default function Desktop() {

  const {data} = useSelector((state)=>state.netaV)
  const {t} = useTranslation()





  return (
    <Wrapper className="pc-v">
      <div className="dom11">
        <div className="dom11_min">
          <div className="min_color">
            <div className="topFirst">
              <img
                src="https://www.netaauto.az/files/upload/dc11697e-281a-4c9f-97f2-e5ee93d3dd88_bj.jpg"
                alt=""
                className="oneImg"
              />
              <img
                src="https://www.netaauto.az/files/upload/8f95c2c4-2c0a-4827-afd3-d5de00a1a168_NetaV.png"
                alt=""
                className="wenziImg"
              />
              <div className="topFirstText">{data[0][t("mainLang")]}</div>
              <div className="botxt">
              {data[1][t("mainLang")]}
              </div>
            </div>
          </div>
          <div className="min_color" style={{ height: "870px" }}>
            <div className="twoimg">
              <img
                src="https://www.netaauto.az/files/upload/451fdc72-9a6e-4ab3-9dbe-0c68be858c35_Group 48096783.png"
                alt=""
              />
              <div
                className="twoText-v dd animate__animated animate__fadeInUp"
                style={{ opacity: 1 }}
              >
                <div>{data[2][t("mainLang")]}</div>
                <div>{data[39][t("mainLang")]}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="threeLunbo">
        <ModelSlider images={[Image1, Image2, Image3]} />
      </div>

      <div className="fourImgText">
        <div className="fourImg">
          <img
            src="https://www.netaauto.az/files/upload/fca72ade-acc5-47a5-83a5-655d7f7a6069_Group 48096781.jpg"
            alt=""
            srcSet=""
          />
        </div>
        <div className="fourDetailLi">
          <div
            className="fourDetail dd animate__animated animate__fadeInUp"
            style={{ opacity: 1 }}
          >
            <span>{data[13][t("mainLang")]}</span>
            <span>{data[14][t("mainLang")]}</span>
          </div>
          <div
            className="tabulation dd animate__animated animate__fadeInUp"
            style={{ opacity: 1 }}
          >
            <ul>
              <li>
                <img
                  src="https://www.netaauto.az/files/upload/172431db-60f2-4fef-b929-b5319e628d78_blackCircle.png"
                  alt=""
                  srcSet=""
                  className="blackCircle"
                />
                {data[15][t("mainLang")]}
              </li>
              <li>
                <img
                  src="https://www.netaauto.az/files/upload/172431db-60f2-4fef-b929-b5319e628d78_blackCircle.png"
                  alt=""
                  srcSet=""
                  className="blackCircle"
                />
                {data[40][t("mainLang")]}
              </li>
              <li>
                <img
                  src="https://www.netaauto.az/files/upload/172431db-60f2-4fef-b929-b5319e628d78_blackCircle.png"
                  alt=""
                  srcSet=""
                  className="blackCircle"
                />
               {data[16][t("mainLang")]}
              </li>
              <li>
                <img
                  src="https://www.netaauto.az/files/upload/172431db-60f2-4fef-b929-b5319e628d78_blackCircle.png"
                  alt=""
                  srcSet=""
                  className="blackCircle"
                />
                {data[17][t("mainLang")]}
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="fiveImgText">
        <div className="fiveLeftText">
          <div
            className="fourDetail dd animate__animated animate__fadeInUp"
            style={{ opacity: 1 }}
          >
            <span>{data[43][t("mainLang")]}</span>
            <span>{data[18][t("mainLang")]}</span>
          </div>
          <div
            className="fiveTextLeft dd animate__animated animate__fadeInUp"
            style={{ opacity: 1 }}
          >
            <div className="fiveTextLeftTOP">
              <span className="unit">{data[19][t("mainLang")]}</span>
              <div className="numbersLeft">
                <span className="numbers">4070</span>
                <span className="units">mm</span>
              </div>
            </div>
            <div className="fiveTextLeftTOPD">
              <span className="unit">{data[20][t("mainLang")]}</span>
              <div className="numbersLeft">
                <span className="numbers">2420</span>
                <span className="units">mm</span>
              </div>
            </div>
            <div className="fiveTextLeftTOPD">
              <span className="unit">{data[21][t("mainLang")]}</span>
              <div className="numbersLeft">
                <span className="numbers">1540</span>
                <span className="units">mm</span>
              </div>
            </div>
          </div>
        </div>
        <div className="fiveRightImg">
          <img
            src="https://www.netaauto.az/files/upload/0f581bd1-2d3e-42e3-817b-0094558789b5_car.jpg"
            alt=""
            srcSet=""
          />
        </div>
      </div>

      <div className="sixTextImg">
        <img
          src="https://www.netaauto.az/files/upload/6cd8c0ac-559a-43ff-be74-567cb8f0a279_Group 48096782.jpg"
          alt=""
          srcSet=""
          style={{transform:"scaleX(-1)"}}
        />
        <div
          className="sixTittle animate__animated animate__fadeInUp"
          style={{ opacity: 1 }}
        >
          {data[22][t("mainLang")]}
        </div>
        <div
          className="sixtabulation  animate__animated animate__fadeInUp"
          style={{ opacity: 1 }}
        >
          <ul>
            <li>
              <img
                src="https://www.netaauto.az/files/upload/0702f336-9ac9-4720-b9e1-b4c361485dc4_whiteCircle.png"
                alt=""
                srcSet=""
                className="blackCircle"
              />
              {data[23][t("mainLang")]}
            </li>
            <li>
              <img
                src="https://www.netaauto.az/files/upload/16a58843-ecbe-482b-a1cd-9f15b48778e8_whiteCircle.png"
                alt=""
                srcSet=""
                className="blackCircle"
              />
              {data[24][t("mainLang")]}
            </li>
          </ul>
        </div>
      </div>

      <div className="sevenTextImgs">
        <div className="sevenLeft">
          <img
            src="https://www.netaauto.az/files/upload/767d7d2a-94ad-4f1e-b867-91ecd647c65c_seven01.png"
            alt=""
            srcSet=""
            className="sevenimgs"
          />
          <div
            className="sevenimgsTittle dd animate__animated animate__fadeInUp"
            style={{ opacity: 1 }}
          >
            {data[25][t("mainLang")]}
          </div>
          <div
            className="sevenimgsDetail dd animate__animated animate__fadeInUp"
            style={{ opacity: 1 }}
          >
            <p>{data[26][t("mainLang")]}</p>
            <p>{data[27][t("mainLang")]}</p>
          </div>
        </div>
        <div className="sevenRight">
          <div
            className="rightTittle dd animate__animated animate__fadeInUp"
            style={{ opacity: 1 }}
          >
            {data[28][t("mainLang")]}
          </div>
          <div
            className="rightDetail dd animate__animated animate__fadeInUp"
            style={{ opacity: 1 }}
          ></div>
          <div className="sevenimg02">
            <img
              src="https://www.netaauto.az/files/upload/61015b24-3349-4970-9329-280fb873aa90_Group 48096768.jpg"
              alt=""
              srcSet=""
              className="sevenimgs"
            />
          </div>
        </div>
      </div>

      <div className="eightTextImg">
        <div className="carLeft">
          <img
            src="https://www.netaauto.az/files/upload/cfeb9660-1e36-49a3-b49f-a886cca4613a_car.png"
            alt=""
            srcSet=""
          />
        </div>
        <div className="eightRightText">
          <div
            className="rightEightT dd animate__animated animate__fadeInUp"
            style={{ opacity: 1 }}
          >
            <span>{data[29][t("mainLang")]}</span>
            <span>{data[42][t("mainLang")]}</span>
          </div>
          <div
            className="tabulation dd animate__animated animate__fadeInUp"
            style={{ opacity: 1 }}
          >
            <ul>
              <li>
                <img
                  src="https://www.netaauto.az/files/upload/dbfa50a9-8610-411a-a974-b80efc5d41aa_blackCircle.png"
                  alt=""
                  srcSet=""
                  className="blackCircle"
                />
                {data[30][t("mainLang")]}
              </li>
              <li>
                <img
                  src="https://www.netaauto.az/files/upload/1053d04a-0394-4a51-868d-1711b4d420a8_blackCircle.png"
                  alt=""
                  srcSet=""
                  className="blackCircle"
                />
                {data[31][t("mainLang")]}
              </li>
              <li>
                <img
                  src="https://www.netaauto.az/files/upload/2ccd1009-d6b2-48cc-94a3-91ad8b1c5a66_blackCircle.png"
                  alt=""
                  srcSet=""
                  className="blackCircle"
                />
                {data[32][t("mainLang")]}
              </li>
            </ul>
          </div>
        </div>
      </div>



      <ModelColorSelectSlider images ={[GlazeCvan,StormWhite,MidnightGray,SakuraPink,SkyBlue]} paginationLogos={[Color1,Color2,Color3,Color4,Color5]} />
      <div className="tenTextImg">
      <div className="tenTopText dd animate__animated animate__fadeInUp" style={{ opacity: 1 }}>
        <span>{data[33][t("mainLang")]}</span>
        <span>{data[34][t("mainLang")]}</span>
      </div>
      <div className="tenTopDtail dd animate__animated animate__fadeInUp" style={{ opacity: 1 }}>
        <span>
          <p>{data[35][t("mainLang")]}</p>
          <p>{data[36][t("mainLang")]}</p>
        </span>
      </div>
      <div className="tenImg">
        <img
          src="https://www.netaauto.az/files/upload/a3a17466-28d0-4a3d-b367-224b08c26329_Group 48096780.jpg"
          alt=""
          srcSet=""
        />
        <div className="tentextLine dd animate__animated animate__fadeInUp" style={{ opacity: 1 }}>
          <div className="tennumbers tennumbers01">
            <div className="numberDw">
              <span className="tenS">3.9</span>
              <span className="tenunit">{t("second")}</span>
            </div>
            <span className="tenkm">0-50{t("k-h")}</span>
          </div>
          <div className="tenline"></div>
          <div className="tennumbers tennumbers02">
            <div className="numberDw">
              <span className="tenS">380</span>
              <span className="tenunit">km</span>
            </div>
            <span className="tenkm">{data[37][t("mainLang")]}</span>
          </div>
          <div className="tenline"></div>
          <div className="tennumbers tennumbers03">
            <div className="numberDw">
              <span className="sign">≥</span>
              <span className="tenS">100</span>
              <span className="tenunit">{t("k-h")}</span>
            </div>
            <span className="tenkm">{data[38][t("mainLang")]}</span>
          </div>
        </div>
      </div>
    </div>

    </Wrapper>
  );
}


const Wrapper = styled.div`
  




  .dom11 {
    position: relative;
    height: 200vh;
    width: 100%;
  }
  .mobile-v .dom11 {
    position: relative;
    height: 160vh;
    width: 100%;
  }
  .dom11_min {
    width: 100%;
    height: 100vh;
    /* position: sticky; */
    top: 0;
  }
  .mobile-v .dom11_min .min_color {
    /* position: absolute; */
    top: 0;
    width: 100%;
    /* height: 100vh; */
    overflow: hidden;
  }
  .dom11_min .min_color:nth-of-type(1) {
    z-index: 7;
  }
  .dom11_min .min_color:nth-of-type(2) {
    z-index: 6;
  }
  .dom11_min .min_color:nth-of-type(3) {
    z-index: 5;
  }
  .dom11_min .min_color:nth-of-type(4) {
    z-index: 4;
  }
  .dom11_min .min_color:nth-of-type(5) {
    z-index: 3;
  }
  .dom11_min .min_color:nth-of-type(6) {
    z-index: 2;
  }
  .dom11_min .min_color:nth-of-type(7) {
    z-index: 1;
  }
  .dom11_min .min_color:nth-of-type(1) {
    position: relative;
  }
  .dom11_min .min_color img {
    /* width: 100%;
      height: 100vh;
      object-fit: cover; */
  }
  /* 交互效果结束 */
  .slider {
    width: 100%;
    max-width: 1920px;
    min-width: 900px;
    margin: auto;
    min-height: 300px;
  }
  .swiper-container {
    width: 100%;
    height: 100%;
  }
  /* .swiper-slide{
      width: 75vw !important;
  } */
  .swiper-slide img {
    width: 75vw;
    margin: auto;
    /*height: 706px;*/
  }
  .page_center {
    width: 75vw;
    margin: auto;
    position: relative;
    /* opacity: 0.45; */
    /* border-bottom: 1px solid #666666; */
  }
  a {
    text-decoration: none;
    color: #000;
  }
  a:focus {
    outline: none;
  }
  .slider .swiper-pagination {
    right: 0;
    top: 0;
  }
  .slider .swiper-pagination-bullet {
    margin-left: 12px;
  }
  .swiper-wrapper {
    width: 75vw;
  }
  .swiper-button-next,
  .swiper-container-rtl .swiper-button-prev {
    background-image: url(right.png);
    background-size: 100%;
    width: 3.02vw;
    height: 3.02vw;
    right: 6.56vw;
  }
  .swiper-button-prev,
  .swiper-container-rtl .swiper-button-next {
    background-image: url(left.png);
    background-size: 100%;
    width: 3.02vw;
    height: 3.02vw;
    left: 6.56vw;
  }
  .swiper-button-next,
  .swiper-button-prev {
    margin-top: -1.56vw;
  }
  .pc-v .topFirst {
    position: relative;
    width: 100%;
    height: 100vh;
    object-fit: cover;
  }
  img {
    width: 100%;
    display: block;
  }
  .texts {
    position: absolute;
    bottom: 7.39vw;
    left: 5.57vw;
  }
  .wenziImg {
    position: absolute;
    width: 18.177vw;
    height: 4.68vw;
    bottom: 9.84vw;
    left: 6.042vw;
  }
  .topFirstText {
    position: absolute;
    font-family: "Prompt-Light";
    font-style: normal;
    font-weight: 300;
    font-size: 1.77vw;
    line-height: 1.77vw;
    text-align: center;
    color: #ffffff;
    /* margin-top: 0.67vw; */
    bottom: 7.39vw;
    left: 6.667vw;
  }
  .twoimg {
    position: relative;
    width: 100%;
    height: 100vh;
    object-fit: cover;
  }
  .twoText-v {
    position: absolute;
    top: 24.792vw;
    width: 100vw;
    font-family: "Prompt-Light";
    font-style: normal;
    font-weight: 300;
    font-size: 2.29vw;
    line-height: 2.91vw;
    text-align: center;
    color: #000000;
  }
  .threeLunbo {
    /* padding-top: 8.54vw; */
    /* padding-bottom: 8.95vw; */
  }
  .threeTopTItle {
    /* position: absolute;
  left: 37.29vw; */
    font-family: "Prompt-Regular";
    font-style: normal;
    width: 100vw;
    text-align: center;
    font-weight: 400;
    font-size: 2.29vw;
    line-height: 1.77vw;
    /* text-align: center; */
    color: #000000;
  }
  .threeTopDetail {
    /* margin-left: 42.5vw; */
    font-family: "Prompt-Light";
    font-style: normal;
    font-weight: 300;
    font-size: 1.15vw;
    line-height: 1.56vw;
    /* text-align: center; */
    color: #000000;
    margin-top: 0.93vw;
    width: 16.563vw;
    display: flex;
    justify-content: space-between;
  }
  .threeBottom {
    margin-top: 2.91vw;
    margin-bottom: 9.167vw;
  }
  .media_text ul li {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 25vw;
    padding-top: 3.333vw;
    padding-bottom: 1.042vw;
    border-bottom: 1px solid #bababa;
    cursor: pointer;
  }
  .media_text ul {
    display: flex;
    flex-direction: row;
  }
  .media_text ul li {
    font-family: "Prompt-Regular";
    font-style: normal;
    font-weight: 400;
    font-size: 1.15vw;
    line-height: 1.46vw;
    text-align: center;
    color: #666666;
  }
  .swiperShowActive {
    font-family: "Prompt-Regular";
    font-style: normal;
    font-weight: 400;
    font-size: 1.04vw;
    /* line-height: 1.04vw; */
    text-align: center;
    color: #000000 !important;
    border-bottom: 1px solid #f65a11 !important;
  }
  .swiperShowActive span {
    font-style: normal;
    font-weight: 400;
    font-size: 1.146vw;
    line-height: 1.458vw;
    text-align: center;
    color: #000000;
  }
  .fourImg {
    width: 55.88vw;
    height: 35.46vw;
    margin-left: 6.56vw;
  }
  .fourImgText {
    display: flex;
    flex-direction: row;
  }
  .fourDetail {
    display: flex;
    flex-direction: column;
  }
  .fourDetail span {
    font-family: "Prompt-Regular";
    font-style: normal;
    font-weight: 400;
    font-size: 1.77vw;
    line-height: 1.77vw;
  }
  .tabulation ul li {
    font-family: "Prompt-Light";
    font-style: normal;
    font-weight: 300;
    font-size: 1.04vw;
    line-height: 1.77vw;
    color: #000000;
    list-style-type: none;
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .fourDetailLi {
    margin-left: 5.31vw;
    margin-top: 9.4vw;
  }
  .tabulation{ 
    margin-top: 1.56vw;
  }
  .blackCircle {
    width: 0.42vw;
    height: 0.42vw;
    margin-right: 0.62vw;
  }
  .fiveImgText {
    padding-top: 5.833vw;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-right: 6.56vw;
    padding-bottom: 9.792vw;
  }
  .fiveLeftText {
    margin-left: 6.56vw;
    margin-top: 4.68vw;
  }
  .unit {
    font-family: "Prompt-Regular";
    font-style: normal;
    font-weight: 400;
    font-size: 1.04vw;
    line-height: 1.04vw;
    color: #000000;
  }
  .numbers {
    font-family: "Prompt-Regular";
    font-style: normal;
    font-weight: 400;
    font-size: 2.81vw;
    line-height: 2.81vw;
  }
  .fiveTextLeft {
    margin-top: 2.39vw;
  }
  .fiveTextLeftTOP {
    margin-top: 3.33vw;
  }
  .fiveTextLeftTOPD {
    margin-top: 2.5vw;
  }
  .numbersLeft {
    margin-top: 0.83vw;
  }
  .units {
    font-family: "Prompt-Regular";
    font-style: normal;
    font-size: 1vw;
    margin-left: -0.3vw;
  }
  .fiveRightImg {
    width: 57.81vw;
  }
  .sixTextImg {
    position: relative;
  }
  .sixTittle {
    position: absolute;
    bottom: 7.29vw;
    left: 6.56vw;
    font-family: "Prompt-Regular";
    font-style: normal;
    font-weight: 400;
    font-size: 1.77vw;
    line-height: 1.87vw;
    color: white;
  }
  .sixtabulation {
    position: absolute;
    left: 6.56vw;
    bottom: 4.06vw;
    line-height: 1.56vw;
    margin-top: 0.1vw;
    font-family: "Prompt-Light";
  }
  .sixtabulation ul li {
    list-style-type: none;
    display: flex;
    flex-direction: row;
    align-items: center;
    font-family: "Prompt-Light";
    font-style: normal;
    font-weight: 300;
    font-size: 1.04vw;
    color: white;
  }
  .sevenTextImgs {
    display: flex;
    flex-direction: row;
    padding-top: 9.06vw;
    padding-bottom: 13.6vw;
  }
  .sevenimgs {
    /* width: 37.5vw;
  height: 62.5vw; */
  }
  .sevenLeft {
    margin-left: 10.833vw;
  }
  .sevenLeft img {
    width: 37.5vw;
  }
  .sevenimgsTittle {
    font-family: "Prompt-Regular";
    font-style: normal;
    font-weight: 400;
    font-size: 1.77vw;
    line-height: 1.77vw;
    margin-top: 3.33vw;
  }
  .sevenimgsDetail {
    display: flex;
    flex-direction: column;
    font-family: "Prompt-Light";
    font-style: normal;
    font-weight: 300;
    font-size: 1.04vw;
    line-height: 1.45vw;
    margin-top: 0.83vw;
  }
  .sevenRight {
    margin-top: 13.75vw;
    margin-left: 3.33vw;
  }
  .rightTittle {
    font-family: "Prompt-Regular";
    font-style: normal;
    font-weight: 400;
    font-size: 1.77vw;
    line-height: 1.77vw;
  }
  .rightDetail {
    font-family: "Prompt-Light";
    font-style: normal;
    font-weight: 300;
    font-size: 1.04vw;
    line-height: 1.04vw;
    margin-top: 0.83vw;
  }
  .sevenimg02 {
    margin-top: 3.12vw;
    width: 37.5vw;
    height: 62.5vw;
  }
  .eightTextImg {
    padding-left: 6.563vw;
    display: flex;
    flex-direction: row;
    position: relative;
  }
  .chooseCar {
    position: relative;
  }
  .imgText {
    display: flex;
    flex-direction: column;
    text-align: center;
  }
  .imgTextS {
    position: absolute;
    top: 7.292vw;
    left: 29.479vw;
    font-family: "Prompt-Regular";
    font-style: normal;
    font-weight: 400;
    font-size: 2.29vw;
    line-height: 3.49vw;
  }
  .carBgText {
    /* margin-top: 3.281vw; */
  }
  .nineSkyBlue {
    position: absolute;
    top: 15.9vw;
    left: 27.031vw;
    width: 45.938vw;
  }
  .nineGreenCyan {
    position: absolute;
    top: 15.9vw;
    width: 45.625vw;
    left: 27.552vw;
  }
  .ninewhite {
    position: absolute;
    top: 15.9vw;
    left: 24.896vw;
    width: 50.208vw;
  }
  .nineGrey {
    position: absolute;
    top: 15.9vw;
    left: 21.302vw;
    width: 57.448vw;
  }
  .nineSkypink {
    position: absolute;
    top: 15.9vw;
    width: 47.917vw;
    left: 26.042vw;
  }
  .carsWidth {
    width: 56.771vw;
    /* height: 21.324vw; */
    position: absolute;
    top: 13.073vw;
    left: 19.792vw;
  }
  .colorCircle {
    width: 2.5vw;
    height: 2.5vw;
  }
  .imgactive {
    width: 2.813vw;
    height: 2.813vw;
  }
  .fiveCircle {
    position: absolute;
    bottom: 6.823vw;
    left: 36.979vw;
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .fiveCircles {
    width: 3.333vw;
    height: 3.333vw;
    border-radius: 50%;
    /* opacity: 0; */
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .fiveCircles:not(:first-child) {
    margin-left: 1.917vw;
  }
  .carLeft {
    width: 66.1vw;
  }
  .rightEightT {
    font-family: "Prompt-Regular";
    font-style: normal;
    font-weight: 400;
    font-size: 1.771vw;
    line-height: 1.771vw;
    display: flex;
    flex-direction: column;
  }
  .eightRightText {
    position: absolute;
    top: 9.219vw;
    left: 62.969vw;
  }
  .tenTopText {
    font-family: "Prompt-Regular";
    font-style: normal;
    font-weight: 400;
    font-size: 1.771vw;
    line-height: 1.771vw;
    text-align: center;
    color: #000000;
    display: flex;
    flex-direction: column;
  }
  .tenTextImg {
    padding-top: 8.333vw;
  }
  .tenTopDtail {
    font-family: "Prompt-Light";
    font-style: normal;
    font-weight: 300;
    font-size: 1.042vw;
    line-height: 1.563vw;
    text-align: center;
    color: #000000;
    display: flex;
    flex-direction: column;
    margin-top: 0.938vw;
  }
  .tenImg {
    padding-left: 6.563vw;
    padding-right: 6.563vw;
    margin-top: 2.917vw;
    position: relative;
    padding-bottom: 10.208vw;
  }
  .tentextLine {
    flex-direction: row;
    position: absolute;
    bottom: 15.469vw;
    left: 27.135vw;
    display: flex;
    align-items: center;
  }
  .tennumbers {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .tennumbers01 {
    width: 5.26vw;
  }
  .tennumbers02 {
    width: 7.76vw;
  }
  .tennumbers03 {
    width: 10.26vw;
  }
  .tenS {
    font-family: "Prompt-Regular";
    font-style: normal;
    font-weight: 400;
    font-size: 2.813vw;
    line-height: 2.813vw;
    color: #ffffff;
  }
  .tenkm {
    font-family: "Prompt-Light";
    font-style: normal;
    font-weight: 300;
    font-size: 1.042vw;
    line-height: 1.042vw;
    color: #ffffff;
    margin-top: 0.521vw;
  }
  .numberDw {
    display: flex;
    flex-direction: row;
    align-items: baseline;
    color: #ffffff;
  }
  .sign {
    font-size: 1.771vw;
  }
  .tenunit {
    font-family: "Prompt-Regular";
    font-size: 1.771vw;
  }
  .tenline {
    border: 1px solid #ffffff;
    height: 3.281vw;
    margin-right: 5vw;
    margin-left: 5vw;
    margin-top: 0.469vw;
    /* transform: rotate(90deg); */
  }
  .elevenTextImg {
    padding-top: 10.208vw;
    padding-bottom: 10.208vw;
    display: flex;
    flex-direction: row;
  }
  .leftImg {
    width: 59.063vw;
    height: 38.958vw;
  }
  .f-inputN {
    display: flex;
    flex-direction: row;
    border-bottom: 1px solid #ededed;
    width: 11.979vw;
    align-items: center;
    padding-bottom: 1.042vw;
  }
  .inputT {
    font-family: "Prompt-Regular";
    font-style: normal;
    font-weight: 400;
    font-size: 0.938vw;
    line-height: 1.406vw;
    text-align: center;
    color: #878080;
  }
  .f-input {
    display: flex;
    flex-direction: row;
  }
  .f-input:not(:first-child) {
    margin-top: 1.4vw;
  }
  .rightForm {
    margin-left: 6.719vw;
    margin-top: 8.854vw;
  }
  .f-inputN:not(:first-child) {
    margin-left: 3.021vw;
  }
  .el-input__inner {
    border: none;
  }
  .el-select .el-input .el-select__caret {
    color: #878080;
    font-size: 1.198vw;
  }
  .el-input__icon {
    width: 2.031vw;
  }
  .f-inputT {
    width: 27.135vw;
  }
  .f-inputT .el-select {
    width: 100%;
  }
  .f-inputT .el-select .el-input__inner::placeholder {
    font-family: "Prompt-Regular";
    font-style: normal;
    font-weight: 400;
    font-size: 0.938vw;
    line-height: 1.406vw;
    /* text-align: center; */
    color: #878080;
  }
  .f-inputT .el-input--suffix .el-input__inner {
    padding-left: 0 !important;
  }
  .agree {
    margin-top: 1.4vw;
    margin-left: 0.208vw;
  }
  .agreeText {
    font-family: "Prompt-Regular";
    font-style: normal;
    font-weight: 400;
    font-size: 0.729vw;
    line-height: 1.094vw;
    text-align: center;
    color: #1e1e1e;
    opacity: 0.8;
  }
  .el-checkbox__inner {
    border-radius: 20px;
    border: 1px solid #000000;
  }
  .el-checkbox__input.is-checked .el-checkbox__inner,
  .el-checkbox__input.is-indeterminate .el-checkbox__inner {
    background-color: #000000;
    border-color: #000000;
  }
  .submit {
    width: 9.375vw;
    height: 2.5vw;
    background-color: white;
    font-family: "Prompt-Light";
    font-style: normal;
    font-weight: 300;
    font-size: 0.938vw;
    line-height: 1.406vw;
    text-align: center;
    color: #000000;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #000000;
    margin: auto;
    margin-top: 2.24vw;
  }
  .nineimg {
    margin-top: 1.51vw;
  }
  .oneImg {
    object-fit: cover;
    object-position: center;
    width: 100vw;
    height: 100vh;
  }
  .botxt {
    font-family: "Prompt-Light";
    position: absolute;
    height: 1.25vw;
    left: 69.531vw;
    bottom: 2.5vw;
    font-style: normal;
    font-weight: 300;
    font-size: 0.833vw;
    line-height: 1.25vw;
    text-align: center;
    color: #ffffff;
    z-index: 100;
  }
  .mbotxt {
    font-family: "Prompt-Light";
    position: absolute;
    height: 1.25vw;
    bottom: 2.5vw;
    font-style: normal;
    font-weight: 300;
    font-size: 0.833vw;
    line-height: 1.25vw;
    text-align: center;
    color: #ffffff;
    z-index: 100;
  }
  ::-webkit-scrollbar {
    display: none;
  }
  .twoimg img {
    width: 100%;
    height: 100%;
  }
  .oneBox-m {
    position: relative;
    width: 100%;
  }
  .oneBox-m .oneImg-m {
    display: block;
    width: 100vw;
    left: 0px;
  }
  .oneBox-m .one1-m {
    position: absolute;
    z-index: 100;
    width: 52.267vw;
    height: 14.133vw;
    left: 9.067vw;
    top: 135.867vw;
    border-radius: 0px;
  }
  .oneBox-m .one_text-m {
    font-style: normal;
    font-weight: 300;
    height: 5.6vw;
    font-size: 5.333vw;
    position: absolute;
    left: 9.067vw;
    top: 149.813vw;
    color: #ffffff;
    font-family: "Prompt-Light";
  }
  .oneBox-m .productadd {
    font-style: normal;
    font-weight: 400;
    font-size: 2.4vw;
    line-height: 3.2vw;
    font-family: "Prompt-Regular";
    left: 8.533vw;
    bottom: 10.667vw;
    color: #ffffff;
    position: absolute;
  }
  .oneBox-m .buimg-m {
    position: absolute;
    height: 7.733vw;
    width: 23.467vw;
    left: 9.067vw;
    top: 147.733vw;
    border-radius: 0px;
    z-index: 100;
  }
  .twoBox-m {
    position: relative;
  }
  .twoBox-m .twoImg-m {
    display: block;
    width: 100vw;
  }
  .twoBox-m .twot-m {
    font-family: "Prompt-Light";
    width: 100vw;
    position: absolute;
    z-index: 100;
    top: 80.267vw;
    font-style: normal;
    font-weight: 300;
    font-size: 5.333vw;
    line-height: 8.8vw;
    /* or 165% */
    text-align: center;
    color: #000000;
  }
  .tre-m {
    margin-top: 21.333vw;
  }
  .tre-m .title-m {
    font-family: "Prompt-Regular";
    font-style: normal;
    font-weight: 400;
    font-size: 5.333vw;
    line-height: 2.933vw;
    height: 3.2vw;
    text-align: center;
    color: #000000;
  }
  .tre-m .info-m {
    font-family: "Prompt-Light";
    display: flex;
    justify-content: space-between;
    width: 57.867vw;
    /* margin-left: 21.333vw; */
    margin-top: 2.667vw;
    /* margin-bottom: 10.667vw; */
  }
  .swiper-container-mobile {
    width: 100vw;
    overflow: hidden;
  }
  .swiper-container-mobile .mobileSwiper {
    width: 89.333vw !important;
  }
  .swiper-container-mobile .mobile-swiper {
    width: 89.333vw !important;
  }
  .swiper-container-mobile .swiper-bottom-text-m {
    font-family: "Prompt-Regular";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 12px;
    /* identical to box height, or 80% */
    color: #000000;
    margin-top: 4vw;
    padding: 0vw 5.333vw;
  }
  .swiper-container-mobile .swiper-pagination-m {
    width: 21.333vw;
    margin-left: 36.8vw;
    display: flex;
    justify-content: space-between;
    margin-top: 15.224vw;
    margin-bottom: 22.667vw;
  }
  .swiper-container-mobile .swiper-pagination-m .swd {
    width: 4.267vw;
    height: 0.267vw;
    top: 465.357vw;
    opacity: 0.45;
    background-color: #666666;
  }
  .swiper-container-mobile .swiper-pagination-m .activeSwd {
    width: 10.667vw !important;
    background-color: #f65a11 !important;
  }
  .for-m .forimg-m {
    width: 89.333vw;
    margin-left: 5.333vw;
  }
  .for-m .forcontent-m {
    height: 35.733vw;
    margin-left: 5.333vw;
    margin-top: 8.533vw;
  }
  .for-m .forcontent-m .t1 {
    font-family: "Prompt-Regular";
    font-style: normal;
    font-weight: 400;
    font-size: 5.33vw;
    line-height: 108%;
    text-align: left;
  }
  .for-m .forcontent-m .t2 {
    margin-top: 2.667vw;
    margin-bottom: 14.933vw;
  }
  .for-m .forcontent-m .t2 .solid_round {
    width: 1.067vw;
    height: 1.067vw;
    border-radius: 50%;
    background-color: black;
    margin-right: 2.091vw;
    font-size: 4vw;
  }
  .for-m .forcontent-m .t2 div {
    font-family: "Prompt-Light";
    font-style: normal;
    font-weight: 300;
    font-size: 4vw;
    line-height: 5.333vw;
    color: #000000;
    display: flex;
    align-items: center;
  }
  .five-m {
    position: relative;
    margin-top: 14.933vw;
  }
  .five-m .fiveimg-m {
    width: 100vw;
  }
  .five-m .fiveOne-m {
    font-family: "Prompt-Regular";
    font-style: normal;
    font-weight: 400;
    font-size: 5.333vw;
    position: absolute;
    height: 10.667vw;
    left: 5.333vw;
    top: 5.333vw;
    line-height: 5.333vw;
    color: white;
  }
  .five-m .fiveTwo-m {
    position: absolute;
    width: 81.867vw;
    height: 8.533vw;
    left: 9.066vw;
    bottom: 5.424vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .five-m .fiveTwo-m .five-info .fiv-top-m {
    font-style: normal;
    font-weight: 400;
    font-size: 2.133vw;
    line-height: 2.133vw;
    font-family: "Prompt-Regular";
    color: #ffffff;
  }
  .five-m .fiveTwo-m .five-info .fivebot-m {
    font-style: normal;
    font-weight: 400;
    font-size: 5.333vw;
    line-height: 5.333vw;
    height: 5.333vw;
    font-family: "Prompt-Regular";
    color: white;
    margin-top: 1.067vw;
  }
  .five-m .vertical-bar-m {
    height: 6.755vw;
    width: 0.267vw;
    background-color: white;
  }
  .seve .seveimg-m {
    width: 89.333vw;
    margin-left: 5.333vw;
    margin-top: 14.933vw;
    margin-bottom: 8.533vw;
  }
  .seve .forcontent-m {
    margin-left: 5.333vw;
    margin-top: 8.533vw;
  }
  .seve .forcontent-m .t1 {
    font-family: "Prompt-Regular";
    font-style: normal;
    font-weight: 400;
    font-size: 5.333vw;
    line-height: 108%;
    text-align: left;
  }
  .seve .forcontent-m .t2 {
    width: 76.267vw;
    margin-top: 2.667vw;
    margin-bottom: 14.933vw;
  }
  .seve .forcontent-m .t2 .solid_round {
    width: 1.067vw;
    height: 1.067vw;
    border-radius: 50%;
    background-color: black;
    margin-right: 2.091vw;
  }
  .seve .forcontent-m .t2 div {
    font-family: "Prompt-Light";
    font-style: normal;
    font-weight: 300;
    font-size: 4vw;
    line-height: 120%;
    color: #000000;
    display: flex;
    align-items: center;
  }
  .swiper-container-mobile-bottom {
    width: 100vw;
    overflow: hidden;
  }
  .swiper-container-mobile-bottom .swiper-wrapper .swiper-slide {
    width: 100vw;
    overflow: hidden;
  }
  .swiper-container-mobile-bottom .swiper-wrapper .swiper-slide .mobile-swiper {
    width: 89.333vw;
    margin-left: 5.333vw;
  }
  .swiper-container-mobile-bottom .swiper-pagination-m {
    width: 59.733vw;
    margin-left: 20.187vw;
    margin-top: 6.968vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .swiper-container-mobile-bottom .swiper-pagination-m .imgsrc {
    width: 8.533vw !important;
    height: 8.533vw !important;
  }
  .swiper-container-mobile-bottom .swiper-pagination-m .imgsrc-r {
    width: 8.533vw !important;
    height: 8.533vw !important;
  }
  .sevebox {
    position: relative;
    margin-top: 14.933vw;
  }
  .sevebox .fiveimg-m {
    width: 100vw;
  }
  .sevebox .fiveOne-m {
    font-family: "Prompt-Regular";
    font-style: normal;
    font-weight: 400;
    font-size: 5.333vw;
    position: absolute;
    height: 10.667vw;
    left: 5.333vw;
    top: 5.333vw;
    line-height: 5.333vw;
    color: white;
  }
  .sevebox .fiveTwo-m {
    position: absolute;
    width: 75.995vw;
    height: 8.533vw;
    left: 12vw;
    bottom: 5.333vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .sevebox .fiveTwo-m .five-info .fiv-top-m {
    font-style: normal;
    font-weight: 400;
    font-size: 5.333vw;
    line-height: 5.333vw;
    font-family: "Prompt-Regular";
    color: white;
  }
  .sevebox .fiveTwo-m .five-info .fivebot-m {
    font-style: normal;
    font-weight: 300;
    font-size: 2.133vw;
    line-height: 2.133vw;
    color: #ffffff;
    font-family: "Prompt-Regular";
    margin-top: 1.067vw;
  }
  .sevebox .vertical-bar-m {
    height: 6.755vw;
    width: 0.267vw;
    background-color: white;
  }
  .eight {
    width: 100vw;
    padding: 0vw 5.333vw;
    padding-bottom: 21.333vw;
  }
  .eight .title {
    height: 11.733vw;
    margin-top: 8.267vw;
    margin-bottom: 2.667vw;
    font-family: "Prompt-Regular";
    font-style: normal;
    font-weight: 400;
    font-size: 5.333vw;
    line-height: 108%;
    color: #000000;
  }
  .eight div {
    font-family: "Prompt-Light";
    font-style: normal;
    font-weight: 300;
    font-size: 15px;
    line-height: 120%;
    color: #000000;
  }
  



`