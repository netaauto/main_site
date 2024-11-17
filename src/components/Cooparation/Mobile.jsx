import { useTranslation } from "react-i18next"
import { useSelector } from "react-redux"

export default function Mobile() {
    const {data} = useSelector((state)=>state.cooperation)
    const {t} = useTranslation()
  return (
    <div className="mobile-cooperation">
    <div className="oneBox">
      <img
        src="https://www.netaauto.az/files/upload/9c7a4501-1fb2-4cd4-8d5c-7545b9144be3_bj.jpg"
        alt=""
        srcSet=""
      />
      <div className="t11">{data[0][t("mainLang")]}</div>
   
    </div>
    <div className="twoBox">
      <div className="t1">
      {data[1][t("mainLang")]}
      </div>
      <div className="t2">
      {data[2][t("mainLang")]}
      </div>
      <div className="t4">
      {data[3][t("mainLang")]}
      </div>
      <img
        src="https://www.netaauto.az/files/upload/f3468f8e-793d-4073-8711-dde1813dc370_m2.png"
        alt=""
        className="i1"
      />
      <div className="t5">
      {data[4][t("mainLang")]}
      </div>
      <img
        src="https://www.netaauto.az/files/upload/8401bad6-af4f-4d60-a90d-530768438bdf_m3.png"
        alt=""
        className="i2"
      />
      <div className="t6">
      {data[5][t("mainLang")]}
      </div>
      <div className="t7">
      {data[6][t("mainLang")]}
      </div>
      <div className="t8">
      {data[7][t("mainLang")]}
      </div>
      <div className="t9">{data[8][t("mainLang")]} <span>{data[9][t("mainLang")]}</span>
      </div>
    </div>
  </div>  )
}
