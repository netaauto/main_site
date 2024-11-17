import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import Baku from '../../assets/images/stores/baku.jpg'
import { useState } from "react";
import AZEMAP from '../../assets/images/stores/azemap.png'
export default function Mobile() {
  const { t } = useTranslation();
  const [active, setActive] = useState(0);
  return (
    <div className="mobile-store">
      <div className="mobile">
        <div className="box">
        <div className="title" style={{margin:0}}>{t("helloWorld")}</div>
        <img
            src="https://www.netaauto.az/files/upload/store/mChina.jpg"
            alt=""
            className="bg"
            style={{ display: active ===1 ? "inline" :"none" }}
          />
          <img
            src="https://www.netaauto.az/files/upload/store/mThailand.png"
            alt=""
            className="bg"
            style={{ display: active ===2 ? "inline" :"none" }}

          />
          <img
            src="https://www.netaauto.az/files/upload/store/mLaos.jpg"
            alt=""
            className="bg"
            style={{ display: active ===3 ? "inline" :"none" }}

          />
          <img
            src="https://www.netaauto.az/files/upload/store/mMyanmar.jpg"
            alt=""
            className="bg"
            style={{ display: active ===4 ? "inline" :"none" }}

          />
          <img
            src="https://www.netaauto.az/files/upload/store/mMalaysia.jpg"
            alt=""
            className="bg"
            style={{ display: active ===5 ? "inline" :"none" }}

          />
          <img
            src="https://www.netaauto.az/files/upload/store/mNepal1.jpg"
            alt=""
            className="bg"
            style={{ display: active ===0 ? "inline" :"none" }}
          />

<img
            src={AZEMAP}
            alt=""
            className="bg"
            style={{ display: active ===6 ? "inline" :"none" }}
          />

          <div className="swiper-container-mobile swiper-container-horizontal">
            <Swiper
              spaceBetween={50}
              slidesPerView={1}
              onActiveIndexChange={(swiper) => setActive(swiper.activeIndex)}
              style={{background:"#fff",paddingBottom:"12px"}}
            >
              <SwiperSlide>
                <div
                  className="swiper-slide swiper-slide-duplicate swiper-slide-prev"
                  data-swiper-slide-index="5"
                  style={{ width: "270px" }}
                >
                  <img
                    src="https://www.netaauto.az/files/upload/f002f23b-382d-4f8f-ac2c-12b12e2e551c_Group 48096946 (2).png"
                    className="mobile-swiper"
                    alt=""
                  />
                  <div className="swiper-bottom-text-m">
                    <div className="t1">{t("Nepal")}</div>
                    <div className="t2">{t("Kathmandu")}</div>
                    <div className="t3">
                      <p>{t("netaUserCenter")}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div
                  className="swiper-slide swiper-slide-active"
                  data-swiper-slide-index="0"
                  style={{ width: "270px" }}
                >
                  <img
                    src="https://www.netaauto.az/files/upload/4c5a7327-4ec7-49dc-816b-64e33e57e992_3 (6).png"
                    className="mobile-swiper"
                    alt=""
                  />

                  <div className="swiper-bottom-text-m">
                    <div className="t1">{t("China")}</div>
                    <div className="t2">{t("Hanzhou")}</div>
                    <div className="t3">
                      <p>{t("netaUserCenter")}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div
                  className="swiper-slide swiper-slide-next"
                  data-swiper-slide-index="1"
                  style={{ width: "270px" }}
                >
                  <img
                    src="https://www.netaauto.az/files/upload/9ab32fcd-a705-4d84-988c-15811a31ba21_4 (3).png"
                    className="mobile-swiper"
                    alt=""
                  />

                  <div className="swiper-bottom-text-m">
                    <div className="t1">{t("Thailand")}</div>
                    <div className="t2">{t("Bangkok")}</div>
                    <div className="t3">
                      <p>{t("netaUserCenter")}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div
                  className="swiper-slide"
                  data-swiper-slide-index="2"
                  style={{ width: "270px" }}
                >
                  <img
                    src="https://www.netaauto.az/files/upload/e2a385b0-3efa-4b11-af58-9e91a6a95139_Group 48096946.png"
                    className="mobile-swiper"
                    alt=""
                  />

                  <div className="swiper-bottom-text-m">
                    <div className="t1">{t("Laos")}</div>
                    <div className="t2">{t("Vientiane")}</div>
                    <div className="t3">
                      <p>{t("netaUserCenter")}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div
                  className="swiper-slide"
                  data-swiper-slide-index="3"
                  style={{ width: "270px" }}
                >
                  <img
                    src="https://www.netaauto.az/files/upload/8c6998ed-fd5d-43ca-b0ab-fb61a6740bfd_Group 48096946 (1).png"
                    className="mobile-swiper"
                    alt=""
                  />

                  <div className="swiper-bottom-text-m">
                    <div className="t1">{t("Myanmar")}</div>
                    <div className="t2">{t("Yangon")}</div>
                    <div className="t3">
                      <p>{t("netaUserCenter")}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div
                  className="swiper-slide"
                  data-swiper-slide-index="4"
                  style={{ width: "270px" }}
                >
                  <img
                    src="https://www.netaauto.az/files/upload/791d3413-738f-49dd-9cfb-4c4b7969e505_2022.09 2.png"
                    className="mobile-swiper"
                    alt=""
                  />

                  <div className="swiper-bottom-text-m">
                    <div className="t1">{t("Malaysia")}</div>
                    <div className="t2">{t("KualaLumpur")}</div>
                    <div className="t3">
                      <p>{t("netaUserCenter")}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>



              <SwiperSlide>
                <div
                  className="swiper-slide swiper-slide-duplicate-prev"
                  data-swiper-slide-index="5"
                  style={{ width: "270px" }}
                >
                  <img
                    src={Baku}
                    className="mobile-swiper"
                    alt=""
                  />


            <div className="swiper-bottom-text-m">
                    <div className="t1">{t("Azerbaijan")}</div>
                    <div className="t2">{t("Baku")}</div>
                    <div className="t3">
                      <p>{t("netaUserCenter")}</p>
                    </div>
                  </div>


               
                </div>
              </SwiperSlide>
       
            </Swiper>

            <div className="swiper-pagination-m">
              <div className={`swd ${active === 0 && "activeSwd"}`}></div>
              <div className={`swd ${active === 1 && "activeSwd"}`}></div>
              <div className={`swd ${active === 2 && "activeSwd"}`}></div>
              <div className={`swd ${active === 3 && "activeSwd"}`}></div>
              <div className={`swd ${active === 4 && "activeSwd"}`}></div>
              <div className={`swd ${active === 5 && "activeSwd"}`}></div>
              <div className={`swd ${active === 6 && "activeSwd"}`}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
