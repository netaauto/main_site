import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";



export default function Mobile() {

  const { data } = useSelector((state) => state.contactUs);
  const { t } = useTranslation();

  return (
    <div className="mobile-contact">
    <img
      src="https://www.netaauto.az/files/upload/663d2be6-1632-4e70-a154-9e6eb8123b0d_bj (3).png"
      alt=""
      className="topImg"
    />
    <div
      id="title-3"
      className="title-1 animate__animated animate__fadeIn"
      style={{ display: 'block' }}
    >
      {data[0][t("mainLang")]}
    </div>
    <div
      id="title-4"
      className="title-2 animate__animated animate__fadeIn"
      style={{ display: 'block' }}
    >
      {data[1][t("mainLang")]}
    </div>
    <div className="cardBox">
      <div className="card">
        <div className="title">{data[2][t("mainLang")]}</div>
        <div className="line"></div>
        <div className="content-1">
          <div>{data[3][t("mainLang")]}</div>
          <div>{data[4][t("mainLang")]}</div>
          <div className="email">{data[5][t("mainLang")]}</div>
        </div>
        <div className="content-2">
          <div>{data[6][t("mainLang")]}</div>
          <div>{data[7][t("mainLang")]}</div>
          <div className="email">{data[8][t("mainLang")]}</div>
        </div>
      </div>
      <div className="card">
        <div className="title">{data[9][t("mainLang")]}</div>
        <div className="line"></div>
        <div className="content-1">
          <div>{data[10][t("mainLang")]}</div>
          <div className="email">{data[11][t("mainLang")]}</div>
        </div>
      </div>
      <div className="card">
        <div className="title">{data[12][t("mainLang")]}</div>
        <div className="line"></div>
        <div className="content-1">
          <div>{data[13][t("mainLang")]}</div>
          <div>{data[14][t("mainLang")]}</div>
          <div className="email">{data[15][t("mainLang")]}</div>
        </div>
      </div>
    </div>
  </div>
  )
}
