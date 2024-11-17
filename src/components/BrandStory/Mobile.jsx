import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'

export default function Mobile() {
    const {data} = useSelector((state)=>state.brandStory)
    const {t} = useTranslation()
    


  return (
    <div className="mobile-brand-story">
      <div className="oneBox">
        <img src="https://www.netaauto.az/files/upload/411b0290-1685-40db-b459-4e52c13ebaa7_Group 48096704.png" alt="" className="i1" />
        <img src="https://www.netaauto.az/files/upload/917b9eb5-06b8-4284-8c42-87bdc9d05ab9_0.png" alt="" className="i2" />
        <div className="t1">
          <div>{data[0][t("mainLang")]}</div>
          <div>{data[1][t("mainLang")]}</div>
        </div>
      </div>

      <div className="twoBox">
        <div className="t1Box dd " style={{ opacity: 1 }}>
          <div>
            <p>{data[2][t("mainLang")]}&nbsp;<br />{data[3][t("mainLang")]}</p>
          </div>
        </div>
        <img src="https://www.netaauto.az/files/upload/1485db69-cb5b-4546-bd1e-76c202fc79b3_2.png" alt="" className="i1" />
      </div>

      <div className="treBox">
        <img src="https://www.netaauto.az/files/upload/72bfae48-45b4-424b-b04f-c3a7890ae98f_20230529101802.png" alt="" className="i1" />
        <div className="t1 dd " style={{ opacity: 1 }}>
          <div className="t2">{data[4][t("mainLang")]}</div>
          <div className="t3">{data[5][t("mainLang")]}</div>
          <div className="t4">
            <div>
              <p>{data[6][t("mainLang")]}&nbsp;<br />{data[7][t("mainLang")]}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="forBox-brand-story">
        <img src="https://www.netaauto.az/files/upload/bd348ef4-0c62-44ba-92fb-1cfb511d90f4_Contact us.png" alt="" className="i1" />
        <div className="t1 dd " style={{ opacity: 1 }}>{data[8][t("mainLang")]}</div>
        <div className="t2 dd " style={{ opacity: 1 }}>
          <div>
            <p>{data[9][t("mainLang")]}</p>
          </div>
        </div>
        <img src="https://www.netaauto.az/files/upload/05ef13d9-dc12-42b5-b333-bcd10f0f480b_Investment and cooperation.png" alt="" className="i1" />
        <div className="dd " style={{ opacity: 1 }}>
          <div className="t1">{data[10][t("mainLang")]}</div>
          <div className="t2">
            <div>
              <p>{data[11][t("mainLang")]}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="fiveBox">
        <img src="https://www.netaauto.az/files/upload/807ccc5b-d36e-49d8-8e90-16a3b8284fa7_Investment and cooperation (1).png" alt="" className="i1" />
        <div className="t1 dd " style={{ opacity: 1 }}>
          <div>
          <p>{data[12][t("mainLang")]}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
