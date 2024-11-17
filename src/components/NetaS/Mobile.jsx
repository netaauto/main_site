import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

export default function Mobile() {
  const {data} = useSelector((state)=>state.netaS)
  const {t} = useTranslation()


  return (
    <div className="mobile-s">
      <div className="oneBox-m">
        <img
          src="https://www.netaauto.az/files/upload/72b87ea4-a254-42df-94f8-d838f6eca6b7_bj.png"
          alt=""
          className="oneImg-m"
        />
        <img
          src="https://www.netaauto.az/files/upload/d262d3a1-0fcf-42ff-b7f3-b53bd3482281_2 (5).png"
          alt=""
          className="one1-m"
        />
        <div className="one_text-m">{data[0][t("mainLang")]}</div>
        <div className="productadd">
        {data[1][t("mainLang")]}
        </div>
      </div>
      <div className="tre-m">
        <div
          className="title-m dd animate__animated animate__fadeInUp"
          style={{ display: "block", opacity: 1 }}
        >
          {data[2][t("mainLang")]}
        </div>
        <div className="title-m" style={{ display: "none" }}>
        {data[3][t("mainLang")]}
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
          >
            <SwiperSlide>
              <img
                src="https://www.netaauto.az/files/upload/262e9dd2-5880-4675-913d-e016c009b3f6_Group 48096780 (2).png"
                className="mobile-swiper"
              />
              <div className="swiper-bottom-text-m">
                <div className="t12">
                  <div className="solid_round"></div>
                  <div className="t2">
                  {data[9][t("mainLang")]}
                  </div>
                </div>
                <div className="t12">
                  <div className="solid_round_n"></div>
                  <div className="t2">emotional expression</div>
                </div>
                <div className="t12">
                  <div className="solid_round"></div>
                  <div className="t2">{data[10][t("mainLang")]}</div>
                </div>
                <div className="t12">
                  <div className="solid_round"></div>
                  <div className="t2">{data[11][t("mainLang")]}</div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <img
                src="https://www.netaauto.az/files/upload/36e36766-ab28-49cd-b30d-f4a6d5f5d930_3 (3).png"
                className="mobile-swiper"
              />
              <div
                className="swiper-bottom-text-m dd animate__animated animate__fadeInUp"
                style={{ opacity: 1 }}
              >
                <div>
                  <p>
                  {data[4][t("mainLang")]}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div className="bottomSwiper">
        <div
          className="topContent dd animate__animated animate__fadeInUp"
          style={{ opacity: 1 }}
        >
          {data[12][t("mainLang")]}
        </div>
        <div className="swiper-containerC swiper-container-horizontal swiper-container-ios">
          <div
            className="swiper-wrapper"
            style={{
              width: "98vw",
              transitionDuration: "0ms",
              transform: "translate3d(20px, 0px, 0px)",
            }}
          >
            <Swiper
              modules={[Navigation]}
              scrollbar={{ draggable: true }}
              speed={1000}
              loop={true}
              spaceBetween={20}

              slidesPerView={1}
              style={{ width: "100%" }}
              className="mySwiper"
            >
              <SwiperSlide>
                <div className="mobile-s-img-slide">
                  <img
                    src="https://www.netaauto.az/files/upload/a73dbd44-1343-412e-a06e-b13929e354e5_5.png"
                    alt=""
                    srcSet=""
                    className="bottomImg"
                  />
                  <div
                    className="contentX dd animate__animated animate__fadeInUp"
                    style={{ opacity: 1 }}
                  >
                    <div className="title">{data[13][t("mainLang")]}</div>
                    <div className="t12">
                      <div className="solid_round"></div>
                      <div className="t2">{data[14][t("mainLang")]}</div>
                    </div>
                    <div className="t12">
                      <div className="solid_round"></div>
                      <div className="t2">{data[15][t("mainLang")]}</div>
                    </div>
                    <div className="t12">
                      <div className="solid_round"></div>
                      <div className="t2">{data[18][t("mainLang")]}</div>
                    </div>
                    <div className="t12">
                      <div className="solid_round"></div>
                      <div className="t2">{data[17][t("mainLang")]}</div>
                    </div>
                    <div className="t12">
                      <div className="solid_round"></div>
                      <div className="t2">{data[16][t("mainLang")]}</div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="mobile-s-img-slide">
                  <img
                    src="https://www.netaauto.az/files/upload/c5ec4542-67d6-4193-b408-545989c0b9da_6 (3).png"
                    alt=""
                    srcSet=""
                    className="bottomImg"
                  />
                  <div
                    className="title dd animate__animated animate__fadeInUp"
                    style={{ opacity: 1 }}
                  >
                    {data[20][t("mainLang")]}
                  </div>
                  <div
                    className="contentX dd animate__animated animate__fadeInUp"
                    style={{ opacity: 1 }}
                  >
                    {data[21][t("mainLang")]} {data[22][t("mainLang")]}
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
      <div className="carInfo">
        <div className="carBox">
          <img
            src="https://www.netaauto.az/files/upload/1f34d6f2-e8be-4281-88d7-fb59da36e84e_Smobile4.jpg"
            alt=""
          />
          <div
            className="info dd animate__animated animate__fadeInUp"
            style={{ opacity: 1 }}
          >
            <div className="ak">{data[12][t("mainLang")]}</div>
            <div className="t12">
              <div className="solid_round"></div>
              <div className="t2">{data[24][t("mainLang")]}</div>
            </div>
            <div className="t12">
              <div className="solid_round"></div>
              <div className="t2">{data[25][t("mainLang")]}</div>
            </div>
            <div className="t12">
              <div className="solid_round"></div>
              <div className="t2">
              {data[26][t("mainLang")]}
              </div>
            </div>
            <div className="t12">
              <div className="solid_round_n"></div>
              {/* <div className="t2">interaction</div> */}
            </div>
          </div>
        </div>
        <div className="swiper-containerD swiper-container-horizontal swiper-container-ios">
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
              loop={true}
              slidesPerView={1}
              style={{ width: "100%" }}
              className="mySwiper"
              onReachEnd={(swiper) => {
                swiper.slideTo(0);  // Go back to the first slide
              }}
            >
              <SwiperSlide>
                <div
                  className="swiper-slide cadd swiper-slide-active"
                  style={{ marginRight: '20px' }}
                >
                  <div
                    className="dd animate__animated animate__fadeInUp"
                    style={{ opacity: 1 }}
                  >
                    <img
                      src="https://www.netaauto.az/files/upload/268c95d8-9483-448f-adb2-c4b482d55232_1.jpg"
                      alt=""
                      srcSet=""
                      className="bottomImg"
                    />
                    <div
                      className="contentX dd animate__animated animate__fadeInUp"
                      style={{ opacity: 1 }}
                    >
                      <div>{data[27][t("mainLang")]}</div>
                      <div>{data[28][t("mainLang")]}</div>
                      <div>{data[29][t("mainLang")]}</div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div
                  className="swiper-slide cadd swiper-slide-next"
                  style={{marginRight:"20px"}}
                >
                  <div
                    className="dd animate__animated animate__fadeInUp"
                    style={{ opacity: 1 }}
                  >
                    <img
                      src="https://www.netaauto.az/files/upload/c0417611-6e47-470d-908b-3c2ab1b289f0_15.png"
                      alt=""
                      srcSet=""
                      className="bottomImg"
                    />
                    <div
                      className="contentX dd animate__animated animate__fadeInUp"
                      style={{ opacity: 1 }}
                    >
                      {data[30][t("mainLang")]}  {data[31][t("mainLang")]}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div
                  className="swiper-slide cadd"
                  style={{ marginRight: '20px' }}
                >
                  <div
                    className="dd animate__animated animate__fadeInUp"
                    style={{ opacity: 1 }}
                  >
                    <img
                      src="https://www.netaauto.az/files/upload/f71e49f5-3061-4b52-9fbb-6d1f9724f980_3S椤甸潰绗簲灞忎腑鎺у睆.jpg"
                      alt=""
                      srcSet=""
                      className="bottomImg"
                    />
                    <div
                      className="contentX dd animate__animated animate__fadeInUp"
                      style={{ opacity: 1 }}
                    >
                      QNX® Neutrino® RTOS
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div
                  className="swiper-slide cadd"
                >
                  <div>
                    <img
                      src="https://www.netaauto.az/files/upload/3b85158e-1a47-4396-a702-52ae5412d11c_13 (1).png"
                      alt=""
                      srcSet=""
                      className="bottomImg"
                    />
                    <div
                      className="contentX dd animate__animated animate__fadeInUp"
                      style={{ opacity: 1 }}
                    >
                      <div>{data[32][t("mainLang")]}</div>
                      <div>{data[33][t("mainLang")]}</div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>


      <div className="for-m">
  <div className="title dd animate__animated animate__fadeInUp" style={{ opacity: 1 }}>
  <div>{data[34][t("mainLang")]}</div>
  </div>
  <img src="https://www.netaauto.az/files/upload/94ebd974-e809-454a-8b8a-eb4536c011e0_10 (2).png" alt="" className="forimg-m" />
  <div className="dd animate__animated animate__fadeInUp" style={{ opacity: 1 }}>
    <div className="t12">
      <div className="solid_round"></div>
      <div className="t2">{data[35][t("mainLang")]}</div>
    </div>
    <div className="t12">
      <div className="solid_round_n"></div>
      <div className="t2">470 mm COG</div>
    </div>
    <div className="t12">
      <div className="solid_round"></div>
      <div className="t2">{data[36][t("mainLang")]}</div>
    </div>
  </div>
</div>

<div className="sevebox">
  <img src="https://www.netaauto.az/files/upload/07fbbb21-8327-41ce-9fad-34062d90873a_Group 48096780.jpg" alt="" className="fiveimg-m" />
  <div className="fiveTwo-m dd animate__animated animate__fadeInUp" style={{ opacity: 1 }}>
    <div className="five-info">
      <div className="fiv-top-m">3.9<span>{t("second")}</span></div>
      <div className="fivebot-m">0-100km/h</div>
    </div>
    <div className="vertical-bar-m"></div>
    <div className="five-info">
      <div className="fiv-top-m">33.5<span>{t("minute")}</span></div>
      <div className="fivebot-m">100-0 {t("k-h")}</div>
    </div>
    <div className="vertical-bar-m"></div>
    <div className="five-info">
      <div className="fiv-top-m">80<span>{t("k-h")}</span></div>
      <div className="fivebot-m">{data[37][t("mainLang")]}</div>
    </div>
  </div>
  <div className="title dd animate__animated animate__fadeInUp" style={{ opacity: 1 }}>
  {data[39][t("mainLang")]}
  </div>
</div>
    </div>
  );
}
