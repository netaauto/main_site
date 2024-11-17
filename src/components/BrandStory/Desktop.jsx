import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'

export default function Desktop() {
const {data} = useSelector((state)=>state.brandStory)
const {t} = useTranslation()


  return (
    <div className="pc-brand-story">
    <div className="oneBox">
      <img src="https://www.netaauto.az/files/upload/6c0a7b89-25c0-4b48-a0ae-37481c5930c0_Group 48096704.jpg" alt="" className="i1" />
      <img src="https://www.netaauto.az/files/upload/082e5875-64cd-4b59-88e0-3efe3c23d4de_1.png" alt="" className="i2" />
      <div className="t1">
        {data[0][t("mainLang")]}<br />
        {data[1][t("mainLang")]}
      </div>
    </div>

    <div className="twoBox">
      <div className="t1 dd animate__animated animate__fadeInUp" style={{ opacity: 1 }}>
        <div>
        {data[2][t("mainLang")]}
        </div>
        <div>
        {data[3][t("mainLang")]}
        </div>
      </div>
      <img src="https://www.netaauto.az/files/upload/62dac7a4-0b07-4d56-8ebc-f6e5767f4d3a_Group 48096969.png" alt="" className="i1 dd animate__animated animate__fadeInUp" style={{ opacity: 1 }} />
    </div>

    <div className="threeBox">
      <img src="https://www.netaauto.az/files/upload/2fbe404e-d740-4ee6-94ed-b8fc1d2b1a80_bj (1).jpg" alt="" className="i1" />
      <div className="t1 dd animate__animated animate__fadeInUp" style={{ opacity: 1 }}>
        <div className="t2">
        {data[4][t("mainLang")]}
        </div>
        <div className="t3">
        {data[5][t("mainLang")]}
        </div>
      </div>
      <div className="t4 dd animate__animated animate__fadeInUp" style={{ opacity: 1 }}>
        <p>{data[6][t("mainLang")]}&nbsp;</p>
        <p>{data[7][t("mainLang")]}&nbsp;</p>
        <p><br /></p>
      </div>
    </div>

    <div className="forBox-brand-story ">
      <div className="lefBox">
        <div className="i11">
          <img src="https://www.netaauto.az/files/upload/239c0a90-d241-4b1d-9442-21fa22cf6206_Group 48096767.png" alt="" className="i1 hvr-grow" />
        </div>
        <div className="t1 dd animate__animated animate__fadeInUp" style={{ opacity: 1 }}>
          {data[8][t("mainLang")]}
        </div>
        <div className="t2 dd animate__animated animate__fadeInUp" style={{ opacity: 1 }}>
          <p>{data[9][t("mainLang")]}</p>
        </div>
      </div>
      <div className="rigBox">
        <div className="t1 dd animate__animated animate__fadeInUp" style={{ opacity: 1 }}>
        {data[10][t("mainLang")]}
        </div>
        <div className="t2 dd animate__animated animate__fadeInUp" style={{ opacity: 1 }}>
          <p>{data[11][t("mainLang")]}</p>
          <p><br /></p>
        </div>
        <div className="i11">
          <img src="https://www.netaauto.az/files/upload/93471b4c-11a9-4ebe-8559-3893cdf76de6_Popularizer of smart EVs.png" alt="" className="i1 hvr-grow" />
        </div>
      </div>
    </div>

    <div className="fiveBox">
      <img src="https://www.netaauto.az/files/upload/67a8afd5-466a-4b6f-93dc-4f9849f7b988_Investment and cooperation.png" alt="" className="i1" />
      <div className="t1 dd animate__animated animate__fadeInUp" style={{ opacity: 1 }}>
        <div>
          <p>{data[12][t("mainLang")]}</p>
        </div>
     
      </div>
    </div>
  </div>
  )
}
