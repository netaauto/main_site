import { useTranslation } from "react-i18next"
import { useSelector } from "react-redux"

export default function Desktop() {
    const {data} = useSelector((state)=>state.cooperation)
    const {t} = useTranslation()
  return (
    <div className="pc-cooperation">
    <div className="oneBox">
      <img
        src="https://www.netaauto.az/files/upload/d6b54596-6ec8-477e-b295-063f14d407f6_bj.jpg"
        alt=""
        srcSet=""
      />
      <div>{data[0][t("mainLang")]}</div>
    </div>
    <div className="twoBox">
      <div className="t1">
      {data[1][t("mainLang")]}
      </div>
      <div className="t2">
      {data[2][t("mainLang")]}
              </div>
      <div className="t3">
      {data[3][t("mainLang")]}
      </div>
      <div className="t4">
        <div className="k1">
          <img
            src="https://www.netaauto.az/files/upload/24d8baa0-4f41-4620-bfdc-a4c45ce630ec_2 (6).png"
            alt=""
          />
          <div>
          {data[4][t("mainLang")]}
          </div>
        </div>
        <div className="k1">
          <img
            src="https://www.netaauto.az/files/upload/01fb3dad-0271-44d6-ba2b-0132eb8e7d3d_123.jpg"
            alt=""
          />
          <div>
          {data[5][t("mainLang")]}
          </div>
        </div>
      </div>
      <div className="t5">
        <div>{data[6][t("mainLang")]}</div>
        <div>{data[7][t("mainLang")]}</div>
        <div>
        {data[8][t("mainLang")]} <span>{data[9][t("mainLang")]}</span>
        </div>
      </div>
    </div>
  </div>
  )
}
