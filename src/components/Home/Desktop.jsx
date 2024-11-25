import React from "react";
import Slider from "./Slider";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import styled from "styled-components";

export default function Desktop() {
  const { t } = useTranslation();
  const {data} = useSelector((state) => state.home)
  const az = t('mainLang')==="az"

  const navigate = useNavigate();

  const turnToMoment = () => {
    navigate("/neta-moment.html");
  };

  const turnToBrand = () => {
    navigate("/brand-story.html");
  };

  const turnToStore = () => {
    navigate("/neta-space.html");
  };

  const turnToSale = () => {
    navigate("/neta-service.html");
  };

  const turnToFamily = () => {
    navigate("/neta-family.html");
  };

  const turnToContact = () => {
    navigate("/contact-us.html");
  };

  const turnToCoop = () => {
    navigate("/investment-cooperation.html");
  };

  return (
    <Wrapper className="pc-home">
      <div className="topFirst">
        <img
          src="https://www.netaauto.az/files/upload/20f06444-a2a9-4f83-a400-5e37a664e3f1_dddcf413-0b0e-432c-afcb-0bd25ab69a8d_s.png"
          alt=""
        />
        <img
          className="wenziImg"
          src="https://www.netaauto.az/files/upload/58c8c55e-ed76-4fda-94bb-382e908f5b9d_Vector.png"
          alt=""
        />
        <div className="c-button wenziImg_btn" onClick={turnToMoment}>
          {t("learnMore")}
        </div>
      </div>
      <Slider />

      <div className="iconBox">
        <img
          src="https://www.netaauto.az/files/upload/a3ddb976-1fbd-4236-9793-6dffd98cdb79_Group%2048096704.jpg"
          alt=""
          className="bgimg"
        />
        <img
          src="https://www.netaauto.az/files/upload/cbfc7199-0524-4b14-954f-3423bbb8ce51_logo.png"
          alt=""
          className="bgimg_icon dd"
        />
        <div className="content dd">
          <div className="content_1">{az? data[1].az:data[1].en}</div>
          <div className="content_2">{az? data[2].az:data[2].en}</div>
        </div>
        <div className="c-button content_but dd" onClick={turnToBrand}>
          {t("learnMore")}
        </div>
      </div>
      <div className="spacBox">
        <div className="spacBoxText dd hidden">
          <img
            src="https://www.netaauto.az/files/upload/56c1bd4c-57d5-4d76-918b-950ddabd6bd8_13.png"
            className="spacImg dd"
            alt=""
          />
          <span className="spacBoxDetail dd">
          {az? data[3].az:data[3].en}
          </span>
        </div>
        <div className="newBox">
          <div className="leftNewBox">
            <img
              style={{ cursor: "pointer" }}
              className="topLeftImgnew dd"
              src="https://www.netaauto.az/files/upload/78582407-9a2c-4c96-bad8-bfa077cbfa8f_Group%2048096860.png"
              alt=""
              onClick={turnToStore}
            />
            <div className="dd">
              <div className="topLeftTittlenew" onClick={turnToStore}>
              {az? data[6].az:data[6].en}
              </div>
              <div className="newtopLeftTittleD">
                <p>
                {az? data[7].az:data[7].en}
                </p>
              </div>
              <div className="more-btn newSadd1" onClick={turnToStore}>
                {t("readMore")}
                <div className="arrow">></div>
              </div>
            </div>
          </div>
          <div className="rightBoxnew">
            <img
              src="https://www.netaauto.az/files/upload/92e21a0b-97d1-4a00-ba1a-a31e3a4fe404_Group%2048096861.png"
              alt=""
              className="new1 dd"
              onClick={turnToSale}
            />
            <div className="dd">
              <div className="top1new" onClick={turnToSale}>
              {az? data[5].az:data[5].en}
              </div>
              <div className="more-btn newSaddnew" onClick={turnToSale}>
                {t("readMore")}
                <div className="arrow">></div>
              </div>
            </div>
            <img
              src="https://www.netaauto.az/files/upload/09db5ffe-1560-4925-960f-ace7b5ae3762_Group%2048096862.png"
              alt=""
              className="new2new dd"
              onClick={turnToFamily}
            />
            <div className="dd">
              <div className="top2new" onClick={turnToFamily}>
              {az? data[12].az:data[12].en}
              </div>
              <div className="more-btn newSadd2" onClick={turnToFamily}>
                {t("readMore")}
                <div className="arrow">></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="forBox" id="hh">
        <div className="for_1">
          <div className="forImg01 dd">
            <img
              src="https://www.netaauto.az/files/upload/9dc7d7b0-a0ca-4e38-97b6-f66591ffca61_Group%2048096767.png"
              className="addImgC hvr-grow"
              alt=""
              onClick={turnToContact}
            />
          </div>
          <div className="dd">
            <div className="leftTitle" onClick={turnToContact}>
            {az? data[10].az:data[10].en}
            </div>
            <div className="forleft">
              <div className="for01">
              {az? data[11].az:data[11].en}

              </div>
            </div>
            <div className="more-btn forImg02" onClick={turnToContact}>
              {t("readMore")}
              <div className="arrow">></div>
            </div>
          </div>
        </div>
        <div className="for_22">
          <div className="dd">
            <div className="leftTitle2" onClick={turnToCoop}>
            {az? data[8].az:data[8].en}
            </div>
            <div className="forRight2">
              <div className="for012">
                <div className="for012">
                {az? data[9].az:data[9].en}
                </div>
              </div>
              <div className="for022"></div>
            </div>
            <div className="more-btn forImg022" onClick={turnToCoop}>
              {t("readMore")}
              <div className="arrow">></div>
            </div>
          </div>
          <div className="forImg112 dd">
            <img
              src="https://www.netaauto.az/files/upload/b64b4077-f407-4375-b694-3bdbad61cc3b_20230628-120901.jpg"
              className="forImg112 hvr-grow"
              alt=""
              onClick={turnToCoop}
            />
          </div>
        </div>
      </div>
    </Wrapper>
  );
}



const Wrapper = styled.div`
  
  .cadd .six {
  width: 28.8vw;
  height: 9.067vw;
  margin-top: 14.933vw;
  font-size: 4vw;
}

.cadd .contentX {
  width: 81.867vw;
  height: 8.533vw;
  margin-top: 2.667vw;
  font-family: "Prompt-Light";
  font-style: normal;
  font-weight: 300;
  font-size: 4vw;
  line-height: 120%;
  color: #666666;
}

.newBox {
  margin-top: 5vw;
  width: 91.667vw;
  /* margin-left: 3.125vw; */
  display: flex;
}
.leftNewBox {
  width: 60.73vw;
}
.topLeftTittlenew {
  font-style: normal;
  font-weight: 500;
  font-size: 1.771vw;
  margin-top: 2.083vw;
  margin-bottom: 1.042vw;
  font-family: "Prompt-Medium";
  line-height: 108%;
  color: #050505;
  cursor: pointer;
}
.topLeftTittlenew:hover {
  font-weight: bold;
}
.newSadd1 {
  width: 6.5vw;
  margin-top: 1.667vw;
  cursor: pointer;
}
.rightBoxnew {
  width: 28.445vw;
  margin-left: 2.493vw;
}
.top1new {
  font-style: normal;
  font-weight: 500;
  margin-top: 2.083vw;
  font-family: "Prompt-Medium";
  margin-bottom: 1.25vw;
  font-size: 1.771vw;
  line-height: 108%;
  letter-spacing: -0.02em;
  color: #000000;
  cursor: pointer;
}
.top1new:hover {
  font-weight: bold;
}
.new1 {
  width: 100%;
  cursor: pointer;
}
.new2new {
  width: 100%;
  cursor: pointer;
}
.newSadd2 {
  margin-top: 1.302vw;
  width: 6.5vw;
  cursor: pointer;
}
.top2new {
  font-family: "Prompt-Medium";
  font-style: normal;
  font-weight: 500;
  font-size: 1.771vw;
  line-height: 108%;
  margin-top: 2.083vw;
  color: #000000;
  cursor: pointer;
}
.top2new:hover {
  font-weight: bold;
}
.newSaddnew {
  width: 6.5vw;
  margin-bottom: 2.604vw;
}

.newtopLeftTittleD {
  font-style: normal;
  font-weight: 300;
  font-size: 1.563vw;
  line-height: 120%;
  /* or 36px */
  font-family: "Prompt-Light";

  width: 56.927vw;
  color: #666666;
}

.bottomImg {
  width: 84vw;
  height: 84vw;
}

.bottomSwiper {
  overflow: hidden;
  padding-top: 10.667vw;
  background: #f5f5f5;
}

.swiper-containerC {
  width: 98vw;
  height: 165.6vw;
  overflow: hidden;
}

.cadd {
  width: 84vw !important;
}



.sevtex .med {
  font-family: "Prompt-Medium";
  margin-top: 8.533vw;
  margin-bottom: 4.267vw;
  margin-left: 5.333vw;
  font-style: normal;
  font-weight: 500;
  font-size: 5.333vw;
  line-height: 108%;
  letter-spacing: -0.02em;
  color: #000000;
}

.sevtex .m-more-btn {
  margin-left: 5.333vw;
  margin-bottom: 14.933vw;
}

.sevtex .butad {
  width: 19.523vw;
  height: 3.733vw;
  margin-left: 5.333vw;
  margin-bottom: 14.933vw;
}

.sev img {
  height: 59.733vw;
  width: 89.333vw;
  margin-left: 5.333vw;
  display: block;
}

.sixbox {
  width: 100vw;
  /* height: 54.4vw; */
  padding-bottom: 14.933vw;
}

.sixbox .box {
  width: 66.667vw;
  height: 30.936vw;
  margin-left: 9.6vw;
}

.sixbox .box .box1 {
  font-family: "Prompt-Medium";
  font-style: normal;
  font-weight: 500;
  font-size: 5.333vw;
  line-height: 108%;
  margin-top: 8.533vw;
  /* identical to box height, or 22px */

  color: #050505;
}

.sixbox .box .box2 {
  white-space: pre-line;
  font-family: "Prompt-Light";
  font-style: normal;
  font-weight: 300;
  font-size: 4vw;
  line-height: 120%;
  margin-top: 2.667vw;
  /* or 18px */

  color: #666666;
}

.sixbox .box .box3 .m-more-btn {
  margin-top: 4.267vw;
}

.one1 {
  font-family: "Prompt-Medium";
}

.one2 {
  font-family: "Prompt-Light";
}

.fivImg {
  width: 100vw;
}

.fr {
  width: 100vw;
  height: 47.2vw;
}

.fr .tex {
  width: 71.733vw;
  height: 13.067vw;
  margin-left: 14.133vw;
  padding-top: 21.333vw;
}

.tex .one {
  text-align: center;
  font-family: "Prompt-Light";
  font-style: normal;
  font-weight: 500;
  font-size: 1.042vw;
  line-height: 108%;
  color: #050505;
}

.tex .two {
  margin-top: 2.4vw;
  text-align: center;
  font-family: "Prompt-Light";
  font-style: normal;
  font-weight: 300;
  font-size: 4vw;
  line-height: 120%;
  color: #666666;
}

.three {
  position: relative;
}

.three .but {
  height: 8vw;
  width: 29.6vw;
  left: 35.2vw;
  top: 118.667vw;
  position: absolute;
  font-size: 4vw;
}

.three .box {
  height: 28.533vw;
  width: 63.733vw;
  left: 18.133vw;
  top: 66.133vw;
  font-family: "Prompt-Light";
  font-style: normal;
  font-weight: 400;
  font-size: 5.333vw;
  line-height: 6.4vw;
  position: absolute;
  /* or 120% */

  text-align: center;
  white-space: pre-line;
  color: #ffffff;
}

.three .logo {
  position: absolute;
  height: 21.204vw;
  width: 26.133vw;
  left: 37.067vw;
  top: 37.037vw;
}

.threeImg {
  width: 100vw;
}

.slider_media {
  padding-left: 36.533vw;
}

.slbut {
  margin-top: 19.467vw;
  margin-bottom: 25.867vw;
}

.slbut div {
  height: 9.067vw;
  width: 28.8vw;
  font-size: 4vw;
  margin-left: 35.733vw;
}



.acarM {
  width: 100vw;
}

.mobile-w {
  overflow: hidden;
  margin-bottom: 34.133vw;
}

.swiperOne1 {
  height: 5.6vw;
  width: 26.24vw;
}

.swiperOne2 {
  height: 5.6vw;
  width: 21.839vw;
}

.swiperOne3 {
  height: 5.6vw;
  width: 19.04vw;
}

.swiperOne4 {
  height: 5.6vw;
  width: 20.099vw;
}



.swiper-containerA {
  /* width: 100%; */
  overflow: hidden;
  /* height: 300px; */
  margin: 0vw 6vw;
}

.swiper-slideA {
  text-align: center;
  font-size: 0.938vw;
  background: #fff;
  width: 60%;

  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}

.swiper-slideA:nth-child(2n) {
  width: 40%;
}

.swiper-slideA:nth-child(3n) {
  width: 20%;
}

.tw_title {
  /* font-family: Prompt; */
  font-family: "Prompt-Light";
  font-size: 5.333vw;
  font-weight: 400;
  line-height: 5.333vw;
  letter-spacing: 0em;
  margin-top: 21.333vw;
  margin-bottom: 10.667vw;
  /* margin-left: 13.6vw; */
  text-align: center;
}


.bt_m {
  height: 7.733vw;
  width: 23.467vw;
  left: 11.467vw;
  top: 166.4vw;
  position: absolute;
}

.tw_m {
  height: 21.404vw;
  width: 52.267vw;
  left: 8.533vw;
  top: 140.533vw;
  position: absolute;
}

.one_m {
  width: 100vw;
  display: block;
}

.ombBox {
  position: relative;
}

.spacImg {
  width: 20.469vw;
  /* height: 2.848vw; */
  margin: auto;
  margin-bottom: 1.146vw;
}

.pc-home .topFirst {
  position: relative;
}
.swiper-slide{
  img{
    width: 66.146vw;
    margin: auto;
  }
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

.pc-home .wenziImg {
  position: absolute;
  width: 16.042vw;
  top: 43.99vw;
  left: 4.115vw;
}

.wenziImg_btn {
  position: absolute;
  top: 48.526vw;
  left: 46.667vw;
  cursor: pointer;
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
  left: 6.19vw;
}

.twoimg {
  position: relative;
}

.twoText {
  position: absolute;
  top: 26.66vw;
  left: 26.56vw;
  font-family: "Prompt-Light";
  font-style: normal;
  font-weight: 300;
  font-size: 1.77vw;
  line-height: 2.91vw;
  text-align: center;
  color: #000000;
}

@keyframes fade-in {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}



.addaum {
  animation-name: fade-in;
  animation-duration: 2s;
  /* 动画持续时间 */
  /* animation-delay: 1s; */
  /* 延迟一段时间后开始执行动画 */
  animation-fill-mode: forwards;
  /* 动画结束后保留最后一帧的状态 */
}

.threeTopTItle {
  /* position: absolute;
left: 37.29vw; */
  margin-left: 37.29vw;
  font-family: "Prompt-Regular";
  font-style: normal;
  font-weight: 400;
  font-size: 1.77vw;
  line-height: 1.77vw;
  /* text-align: center; */
  color: #000000;
}

.threeTopDetail {
  margin-left: 42.5vw;
  font-family: "Prompt-Light";
  font-style: normal;
  font-weight: 300;
  font-size: 1.04vw;
  line-height: 1.56vw;
  /* text-align: center; */
  color: #000000;
  margin-top: 0.93vw;
}

.threeBottom {
  margin-top: 5.625vw;
  position: relative;
}

.threeBottomMobile {
  position: relative;
  overflow: hidden;
}

.media_text ul li {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 4.267vw;
  padding-top: 8.267vw;
  margin-right: 1.067vw;
  /* padding-bottom: 1.45vw; */
  border-bottom: 0.052vw solid rgb(186, 186, 186);
}

.media_text ul {
  display: flex;
  flex-direction: row;
}

.media_text ul li {
  font-family: "Prompt-Regular";
  font-style: normal;
  font-weight: 400;
  font-size: 1.04vw;
  line-height: 1.04vw;
  text-align: center;
  color: #666666;
}

.swiperShowActive {
  font-family: "Prompt-Regular";
  font-style: normal;
  font-weight: 400;
  width: 10.667vw !important;
  font-size: 1.04vw;
  line-height: 1.04vw;
  text-align: center;
  color: #000000 !important;
  border-bottom: 0.052vw solid #f65a11 !important;
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

.tabulation {
  margin-top: 1.56vw;
}

.blackCircle {
  width: 0.42vw;
  height: 0.42vw;
  margin-right: 0.62vw;
}

.fiveImgText {
  padding-top: 5.93vw;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-right: 6.56vw;
  padding-bottom: 10.2vw;
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
  height: 39.06vw;
}

.spacBox {
  padding-top: 5.802vw;
  padding-left: 4.479vw;
  padding-right: 3.958vw;
  background: #f6f6f6;
  padding-bottom: 6.33vw;
}

.spacBoxDetail {
  font-family: "Prompt-Light";
  font-style: normal;
  font-weight: 300;
  font-size: 1.563vw;
  line-height: 120%;
  color: #666666;
  margin-top: 1.002vw;
}

.spacBoxText {
  margin: auto;
  text-align: center;
}

.topLeft {
  display: flex;
  flex-direction: row;
  height: 24.632vw;
  margin-top: 4.536vw;
}

.topLeftDetail {
  display: flex;
  flex-direction: column;
  width: 30.938vw;
  background: #ffffff;
  padding-left: 2.552vw;
  padding-top: 2.743vw;
}

.topLeftTittle {
  font-family: "Prompt-Medium";
  font-style: normal;
  font-weight: 500;
  font-size: 1.667vw;
  line-height: 108%;
  color: #050505;
  height: 2.966vw;
}

.topLeftTittleD {
  display: flex;
  flex-direction: column;
  font-family: "Prompt-Light";
  font-style: normal;
  font-weight: 300;
  font-size: 1.563vw;
  line-height: 120%;
  color: #666666;
}

.seeMore {
  width: 6.302vw;
  height: 1.266vw;
  margin-top: 2.11vw;
}


.topLeftImg {
  width: 60.625vw;
  height: 24.632vw;
}

.communbottom {
  height: 16.615vw;
  width: 28.854vw;
}

.communbottomName {
  font-family: "Prompt-Medium";
  font-style: normal;
  font-weight: 500;
  font-size: 1.667vw;
  line-height: 108%;
  color: #000000;
  margin-top: 1.319vw;
}

.threeSeeMore {
  margin-top: 0.633vw;
}

.topRightF:not(:first-child) {
  margin-left: 2.5vw;
}

.topRight {
  display: flex;
  flex-direction: row;
  margin-top: 1.899vw;
}
* {
  margin: 0;
  padding: 0;
}

html,
body {
  position: relative;
  height: 100%;
}

#scroll-box {
  width: 100%;
  height: 100vh;
  overflow-x: hidden;
  overflow-y: auto;
}

#scroll-box::-webkit-scrollbar {
  display: none;
}

.slider {
  width: 100%;
  max-width: 100vw;
  min-width: 46.875vw;
  margin: auto;
  min-height: 15.625vw;
}

.swiper-container {
  width: 100%;
  height: 100%;
}

/* .swiper-slide{
    width: 75vw !important;
} */
/* .swiper-slide img {
    width: 66.146vw;
    margin: auto;
} */
.pcswiperImg {
  width: 66.146vw;
  margin: auto;
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
  margin-left: 0.625vw;
}

.swiper-wrapper {
  width: 75vw;
}

.swiper-button-next,
.swiper-container-rtl .swiper-button-prev {
  background-image: url(../static/images/pc/v/right.png);
  background-size: 100%;
  width: 3.02vw;
  height: 3.02vw;
  right: 6.56vw;
}

.swiper-button-prev,
.swiper-container-rtl .swiper-button-next {
  background-image: url(../static/images/pc/v/left.png);
  background-size: 100%;
  width: 3.02vw;
  height: 3.02vw;
  left: 6.56vw;
}

.swiper-button-next,
.swiper-button-prev {
  margin-top: -1.56vw;
}

.serImg {
  /* height: 1.823vw; */
  /* width: 8.542vw; */
  cursor: pointer;
  height: 1.823vw;
  width: auto;
  margin-right: 3.75vw;
}

.bgimg {
  width: 100vw;
}

.bgimg_icon {
  position: absolute;
  width: 11.719vw;
  height: 9.583vw;
  left: 44.115vw;
  top: 13.958vw;
}

.iconBox {
  position: relative;
}

.content_but {
  position: absolute;
  top: 37.865vw;
  left: 46.667vw;
  cursor: pointer;
}

.content {
  position: absolute;
  width: 33.177vw;
  height: 5.504vw;
  left: 33.385vw;
  top: 25.93vw;
}

.content_1 {
  font-family: "Prompt-Medium";
  font-style: normal;
  font-weight: 500;
  font-size: 1.771vw;
  color: #ffffff;
  width: 33.177vw;
  height: 2.656vw;
  left: 33.438vw;
  text-align: center;
  line-height: 2.656vw;
}

.content_2 {
  font-family: "Prompt-Medium";
  font-style: normal;
  font-weight: 500;
  color: #ffffff;
  font-size: 1.771vw;
  line-height: 2.656vw;
  text-align: center;
}

.swiper_but {
  position: absolute;
  left: 46.667vw;
  margin-top: 1.458vw;
  cursor: pointer;
}

.forBox {
  display: flex;
}

.for_22 {
  margin-left: 2.5vw;
  margin-top: 10.521vw;
}

.for_1 {
  margin-left: 4.427vw;
}

.forImg11 {
  width: 856px;
  height: 620px;
}

.forImg01 {
  width: 44.531vw;
  height: 32.292vw;
  cursor: pointer;
  overflow: hidden;
  margin-top: 8.75vw;
  cursor: pointer;
}

.forImg01 .addImgC {
  width: 44.531vw;
  height: 32.292vw;
}

.forImg02 {
  width: 6.5vw;
  margin-top: 2.083vw;
  margin-bottom: 9.427vw;
}

.forImg022 {
  width: 6.5vw;
  margin-bottom: 2.24vw;
}

.forImg112 {
  cursor: pointer;
  width: 44.583vw;
  height: 32.292vw;
  overflow: hidden;
}

.forRight2 {
  width: 36.583vw;
  height: 3.49vw;
  margin-top: 1.25vw;
  margin-bottom: 2.083vw;
  font-family: "Prompt-Light";
  font-style: normal;
  font-weight: 300;
  font-size: 1.563vw;
  line-height: 120%;
  /* or 36px */

  color: #666666;
}

.forleft {
  width: 34.583vw;
  height: 3.49vw;
  font-family: "Prompt-Light";
  font-style: normal;
  font-weight: 300;
  font-size: 1.563vw;
  line-height: 120%;

  color: #666666;
}



.leftTitle {
  /* width: 8.802vw; */
  height: 1.823vw;
  margin-top: 2.083vw;
  margin-bottom: 1.25vw;
  font-weight: 500;
  font-size: 1.667vw;
  line-height: 108%;
  color: #050505;
  font-family: "Prompt-Medium";
  cursor: pointer;
}
.leftTitle:hover {
  font-weight: bold;
}

.leftTitle2 {
  /* width: 23.021vw; */
  height: 1.823vw;
  font-family: "Prompt-Medium";
  font-style: normal;
  font-weight: 500;
  font-size: 1.667vw;
  line-height: 108%;
  color: #050505;
  cursor: pointer;
}
.leftTitle2:hover {
  font-weight: bold;
}

.cadd .six {
  width: 28.8vw;
  height: 9.067vw;
  margin-top: 14.933vw;
}

.cadd .title {
  font-family: "Prompt-Medium";
  margin-top: 8.533vw;
  height: 5.867vw;
  font-style: normal;
  font-weight: 500;
  font-size: 5.333vw;
  line-height: 108%;
  color: #050505;
}

.bottomImg {
  width: 84vw;
  height: 84vw;
}

.cadd {
  width: 84vw !important;
}



.sevtex .med {
  font-family: "Prompt-Medium";
  margin-top: 8.533vw;
  margin-bottom: 4.267vw;
  margin-left: 5.333vw;
  font-style: normal;
  font-weight: 500;
  font-size: 5.333vw;
  line-height: 108%;
  letter-spacing: -0.02em;
  color: #000000;
}

.sevtex .but {
  width: 19.523vw;
  height: 3.733vw;
  margin-left: 5.333vw;
  margin-bottom: 14.933vw;
}

.sevtex .butad {
  width: 19.523vw;
  height: 3.733vw;
  margin-left: 5.333vw;
  margin-bottom: 14.933vw;
}

.sev img {
  height: 59.733vw;
  width: 89.333vw;
  margin-left: 5.333vw;
  display: block;
}

.sixbox {
  width: 100vw;
}

.sixbox .box {
  width: 66.667vw;
  height: 30.936vw;
  margin-left: 9.6vw;
}

.sixbox .box .box1 {
  font-family: "Prompt-Medium";
  font-style: normal;
  font-weight: 500;
  font-size: 5.333vw;
  line-height: 108%;
  margin-top: 8.533vw;
  /* identical to box height, or 22px */

  color: #050505;
}

.sixbox .box .box2 {
  white-space: pre-line;
  font-family: "Prompt-Light";
  font-style: normal;
  font-weight: 300;
  font-size: 4vw;
  line-height: 120%;
  margin-top: 2.667vw;
  /* or 18px */

  color: #666666;
}

.sixbox .box .box3 img {
  width: 19.248vw;
  height: 3.469vw;
  margin-top: 4.267vw;
}

.one1 {
  font-family: "Prompt-Medium";
}

.one2 {
  font-family: "Prompt-Light";
}

.fivImg {
  width: 100vw;
}

.fr {
  width: 100vw;
  height: 47.2vw;
}

.fr .tex {
  width: 71.733vw;
  height: 13.067vw;
  margin-left: 14.133vw;
  padding-top: 21.333vw;
}

.tex .one {
  text-align: center;
  font-family: "Prompt-Light";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 108%;
  color: #050505;
}

.tex .two {
  margin-top: 2.4vw;
  text-align: center;
  font-family: "Prompt-Light";
  font-style: normal;
  font-weight: 300;
  font-size: 4vw;
  line-height: 120%;
  color: #666666;
}

.three {
  position: relative;
}

.three .but {
  height: 8vw;
  width: 29.6vw;
  left: 35.2vw;
  top: 118.667vw;
  position: absolute;
}

.three .box {
  height: 28.533vw;
  width: 63.733vw;
  left: 18.133vw;
  top: 66.133vw;
  font-family: "Prompt-Light";
  font-style: normal;
  font-weight: 400;
  font-size: 5.333vw;
  line-height: 6.4vw;
  position: absolute;
  /* or 120% */

  text-align: center;
  white-space: pre-line;
  color: #ffffff;
}

.three .logo {
  position: absolute;
  height: 21.204vw;
  width: 26.133vw;
  left: 37.067vw;
  top: 37.037vw;
}

.threeImg {
  width: 100vw;
}

.slider_media {
  padding-left: 36.533vw;
}

.slbut {
  margin-top: 37.333vw;
  margin-bottom: 25.867vw;
}

.slbut img {
  height: 9.067vw;
  width: 28.8vw;
  margin-left: 35.733vw;
}



.acarM {
  width: 100vw;
}

.swiperOne1 {
  height: 5.6vw;
  width: 26.24vw;
}

.swiperOne2 {
  height: 5.6vw;
  width: 21.839vw;
}

.swiperOne3 {
  height: 5.6vw;
  width: 19.04vw;
}

.swiperOne4 {
  height: 5.6vw;
  width: 20.099vw;
}



.swiper-containerA {
  overflow: hidden;
  margin: 0px 6vw;
}

.swiper-slideA {
  text-align: center;
  font-size: 18px;
  background: #fff;
  width: 60%;

  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}

.swiper-slideA:nth-child(2n) {
  width: 40%;
}

.swiper-slideA:nth-child(3n) {
  width: 20%;
}

.tw_title {
  font-family: "Prompt-Regular";
  font-size: 5.333vw;
  font-weight: 400;
  line-height: 5.333vw;
  letter-spacing: 0em;
  margin-top: 21.333vw;
  margin-bottom: 10.667vw;
  text-align: center;
}


.bt_m {
  height: 7.733vw;
  width: 23.467vw;
  left: 11.467vw;
  top: 166.4vw;
  position: absolute;
}

.tw_m {
  height: 21.404vw;
  width: 52.267vw;
  left: 8.533vw;
  top: 140.533vw;
  position: absolute;
}

.one_m {
  width: 100vw;
  display: block;
}

.ombBox {
  position: relative;
}
.spacImg {
  width: 20.469vw;
  /* height: 2.848vw; */
  margin: auto;
}

.topFirst {
  position: relative;
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
  width: 16.042vw;
  top: 43.99vw;
  left: 4.115vw;
}

.wenziImg_btn {
  position: absolute;
  width: 6.667vw;
  height: 2.083vw;
  top: 48.526vw;
  left: 46.667vw;
  cursor: pointer;
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
  left: 6.19vw;
}

.twoimg {
  position: relative;
}

.twoText {
  position: absolute;
  top: 26.66vw;
  left: 26.56vw;
  font-family: "Prompt-Light";
  font-style: normal;
  font-weight: 300;
  font-size: 1.77vw;
  line-height: 2.91vw;
  text-align: center;
  color: #000000;
}

@keyframes fade-in {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}



.addaum {
  animation-name: fade-in;
  animation-duration: 2s;
  /* 动画持续时间 */
  /* animation-delay: 1s; */
  /* 延迟一段时间后开始执行动画 */
  animation-fill-mode: forwards;
  /* 动画结束后保留最后一帧的状态 */
}

.boxSwiper {
  margin-top: 2.083vw;
  display: flex;
  justify-content: center;
  width: 100vw;
}

.threeTopTItle {
  /* position: absolute;
left: 37.29vw; */
  margin-left: 37.29vw;
  font-family: "Prompt-Regular";
  font-style: normal;
  font-weight: 400;
  font-size: 1.77vw;
  line-height: 1.77vw;
  /* text-align: center; */
  color: #000000;
}

.threeTopDetail {
  margin-left: 42.5vw;
  font-family: "Prompt-Light";
  font-style: normal;
  font-weight: 300;
  font-size: 1.04vw;
  line-height: 1.56vw;
  /* text-align: center; */
  color: #000000;
  margin-top: 0.93vw;
}

.threeBottom {
  margin-top: 5.625vw;
  position: relative;
}

.threeBottomMobile {
  position: relative;
  overflow: hidden;
}

.media_text ul li {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 4.267vw;
  padding-top: 8.267vw;
  margin-right: 1.067vw;
  /* padding-bottom: 1.45vw; */
  border-bottom: 1px solid rgb(186, 186, 186);
}

.media_text ul {
  display: flex;
  flex-direction: row;
}

.media_text ul li {
  font-family: "Prompt-Regular";
  font-style: normal;
  font-weight: 400;
  font-size: 1.04vw;
  line-height: 1.04vw;
  text-align: center;
  color: #666666;
}

.swiperShowActive {
  font-family: "Prompt-Regular";
  font-style: normal;
  font-weight: 400;
  width: 10.667vw !important;
  font-size: 1.04vw;
  line-height: 1.04vw;
  text-align: center;
  color: #000000 !important;
  border-bottom: 1px solid #f65a11 !important;
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

.tabulation {
  margin-top: 1.56vw;
}

.blackCircle {
  width: 0.42vw;
  height: 0.42vw;
  margin-right: 0.62vw;
}

.fiveImgText {
  padding-top: 5.93vw;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-right: 6.56vw;
  padding-bottom: 10.2vw;
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
  height: 39.06vw;
}

.spacBox {
  padding-top: 5.802vw;
  padding-left: 4.479vw;
  padding-right: 3.958vw;
  background: #f6f6f6;
  padding-bottom: 6.33vw;
}

.spacBoxDetail {
  font-family: "Prompt-Light";
  font-style: normal;
  font-weight: 300;
  font-size: 1.15vw;
  line-height: 120%;
  color: #666666;
  margin-top: 1.002vw;
}

.spacBoxText {
  margin: auto;
  text-align: center;
}

.topLeft {
  display: flex;
  flex-direction: row;
  height: 24.632vw;
  margin-top: 4.536vw;
}

.topLeftDetail {
  display: flex;
  flex-direction: column;
  width: 30.938vw;
  background: #ffffff;
  padding-left: 2.552vw;
  padding-top: 2.743vw;
}

.topLeftTittle {
  font-family: "Prompt-Medium";
  font-style: normal;
  font-weight: 500;
  font-size: 1.667vw;
  line-height: 108%;
  color: #050505;
  height: 2.966vw;
}

.topLeftTittleD {
  display: flex;
  flex-direction: column;
  font-family: "Prompt-Light";
  font-style: normal;
  font-weight: 300;
  font-size: 1.563vw;
  line-height: 120%;
  color: #666666;
}

.seeMore {
  width: 6.302vw;
  height: 1.266vw;
  margin-top: 2.11vw;
}



.topLeftImg {
  width: 60.625vw;
  height: 24.632vw;
}

.communbottom {
  height: 16.615vw;
  width: 28.854vw;
}

.communbottomName {
  font-family: "Prompt-Medium";
  font-style: normal;
  font-weight: 500;
  font-size: 1.667vw;
  line-height: 108%;
  color: #000000;
  margin-top: 1.319vw;
}

.threeSeeMore {
  margin-top: 0.633vw;
}

.topRightF:not(:first-child) {
  margin-left: 2.5vw;
}

.topRight {
  display: flex;
  flex-direction: row;
  margin-top: 1.899vw;
}





`