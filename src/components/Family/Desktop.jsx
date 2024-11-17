import { useSelector } from 'react-redux'
import  '../../assets/style/family.css'
import { useTranslation } from 'react-i18next'
export default function Desktop() {


    const {data} = useSelector((state)=>state.family)
    const {data:dataHeader} = useSelector((state)=>state.header)

  
const {t} = useTranslation()

  return (
    <div className="pc-family">
    <div className="top-pc">
      <img
        src="https://www.netaauto.az/files/upload/d1c08e24-2784-4c96-af39-9fa384ac18dd_bj1.png"
        alt=""
        className="topImg-pc"
      />
      <div className="toptext">{t("mainLang")==="az"?dataHeader[0].pages[0].nameAz:dataHeader[0].pages[0].nameEng}</div>
    </div>
    

    <div className="pcCardBox">
      <div className="card-pc">
        <div className="card-left">
          <div className="card-title">{data[0][t("mainLang")]}</div>
          <div className="card-content">
          {data[1][t("mainLang")]}
          </div>
          
        </div>
        <div className="card-right">
          <img
            src="https://www.netaauto.az/files/upload/26567820-a469-4864-a9f0-e52679a8754e_20221122-090923 1.png"
            alt=""
            className="rightImg"
          />
        </div>
      </div>

      <div className="card-pc">
        <div className="card-left">
          <div className="card-title">{data[2][t("mainLang")]}</div>
          <div className="card-content">
          {data[3][t("mainLang")]}
          </div>
         
        </div>
        <div className="card-right">
          <img
            src="https://www.netaauto.az/files/upload/2406ffdb-b509-4156-8139-108e0293bfd2_Group 48096815 (2).png"
            alt=""
            className="rightImg"
          />
        </div>
      </div>

      <div className="card-pc">
        <div className="card-left">
          <div className="card-title">

          {data[4][t("mainLang")]}

          </div>
          <div className="card-content">
          {data[5][t("mainLang")]}
          </div>
          
        </div>
        <div className="card-right">
          <img
            src="https://www.netaauto.az/files/upload/5f85092b-109b-4f5c-885e-38145535c4ca_Group 48096816.png"
            alt=""
            className="rightImg"
          />
        </div>
      </div>

     
    </div>


 
  </div>  )
}
