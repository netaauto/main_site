import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

export default function Desktop() {
  const { data } = useSelector((state) => state.contactUs);
  const { t } = useTranslation();



  return (
    <div className="pc-contact">
      <img
        src="https://www.netaauto.az/files/upload/a6cada0c-2cd5-4ae1-b1b2-99cf2e35f01b_aa079217-1460-40fb-84e9-25011dcb802c_bj (2).png"
        alt=""
        className="topImg"
      />
      <div
        id="title-1"
        className="title-1 animate__animated animate__fadeIn"
        style={{ display: "block" }}
      >
        {data[0][t("mainLang")]}
      </div>
      <div
        id="title-2"
        className="title-2 animate__animated animate__fadeIn"
        style={{ display: "block" }}
      >
        {data[1][t("mainLang")]}
      </div>
      <div className="card">
        <div className="cardleft">
          <div className="toptitle">{data[2][t("mainLang")]}</div>
          <div className="line"></div>
          <div className="content-top">
            <div>{data[3][t("mainLang")]}</div>
            <div>{data[4][t("mainLang")]}</div>
            <div className="email">{data[5][t("mainLang")]}</div>
          </div>
          <div className="content-bottom">
            <div>{data[6][t("mainLang")]}</div>
            <div>{data[7][t("mainLang")]}</div>
            <div className="email">{data[8][t("mainLang")]}</div>
          </div>
        </div>
        <div className="cardright">
          <div className="topbox">
            <div className="toptitle">{data[9][t("mainLang")]}</div>
            <div className="line"></div>
            <div className="content-top">
              <div>{data[10][t("mainLang")]}</div>
              <div className="email">{data[11][t("mainLang")]}</div>
            </div>
          </div>
          <div className="bottomBox">
            <div className="toptitle">{data[12][t("mainLang")]}</div>
            <div className="line"></div>
            <div className="content-top">
              <div>{data[13][t("mainLang")]}</div>
              <div>{data[14][t("mainLang")]}</div>
              <div className="email">{data[15][t("mainLang")]}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
