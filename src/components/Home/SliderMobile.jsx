import React, { Fragment, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

export default function SliderMobile() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const az = t("mainLang") === "az";
  const { data } = useSelector((state) => state.home);

  const turnToContact = () => {
    navigate("/contact-us");
  };

  const turnToCoop = () => {
    navigate("/investment-cooperation");
  };
  return (
    <Fragment>
      <Swiper
        modules={[Navigation]}
        scrollbar={{ draggable: true }}
        slidesPerView={1}
        className="mySwiper"
        // spaceBetween={30}
      >
        <SwiperSlide>
          <div className="cadd">
            <img
              src="https://www.netaauto.az/files/upload/630a13af-507f-4dfd-8747-d81aefff50bd_136-m.png"
              alt=""
              className="bottomImg"
            />
            <div className="dd">
              <div className="title"> {az ? data[10].az : data[10].en}</div>
              <div className="contentX">
                <p>{az ? data[11].az : data[11].en}</p>
              </div>
              <div
                className="m-button m-button-dark six forImg02"
                onClick={turnToContact}
              >
                {t("learnMore")}
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="cadd">
            <img
              src="https://www.netaauto.az/files/upload/05a0614e-0a0c-4cd4-ad1d-0acae7516742_Group%2048096769.jpg"
              alt=""
              className="bottomImg"
            />
            <div className="dd">
              <div className="title"> {az ? data[8].az : data[8].en}</div>
              <div className="contentX">
                <p>{az ? data[9].az : data[9].en}</p>
              </div>
              <div
                className="m-button m-button-dark six forImg022"
                onClick={turnToCoop}
              >
                {t("learnMore")}
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </Fragment>
  );
}
