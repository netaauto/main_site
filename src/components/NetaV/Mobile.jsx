import ModelSliderMobile from "../ModelSliderMobile";
import Image1 from "../../assets/images/neta-v/1.png";
import Image2 from "../../assets/images/neta-v/2.png";
import Image3 from "../../assets/images/neta-v/3.png";
import ModelColorSelectMobile from '../../components/ModelColorSelectMobile'
import MobileColor1 from '../../assets/images/neta-v/MobileColor1.jpg'
import MobileColor2 from '../../assets/images/neta-v/MobileColor2.png'
import MobileColor3 from '../../assets/images/neta-v/MobileColor3.jpg'
import MobileColor4 from '../../assets/images/neta-v/MobileColor4.png'
import MobileColor5 from '../../assets/images/neta-v/MobileColor5.png'
import Color1 from '../../assets/images/neta-v/Color1.png'
import Color2 from '../../assets/images/neta-v/Color2.png'
import Color3 from '../../assets/images/neta-v/Color3.png'
import Color4 from '../../assets/images/neta-v/Color4.png'
import Color5 from '../../assets/images/neta-v/Color5.png'
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";


export default function Mobile() {
  const {data} = useSelector((state)=>state.netaV)
  const {t} = useTranslation()



  return (
    <div className="mobile-v">
      <div className="dom11">
        <div className="dom11_min">
          <div className="min_color" >
            <div className="oneBox-m">
              <img src="https://www.netaauto.az/files/upload/6e213dc0-469d-477e-ae4a-df9a0c3d2b74_bj (1).jpg" alt="" className="oneImg-m" />
              <img src="https://www.netaauto.az/files/upload/936fd89c-139d-4a1e-bc9c-d3611124b66a_NetaMv.png" alt="" className="one1-m" />
              <div className="one_text-m">{data[0][t("mainLang")]}</div>
              <div className="productadd">
              {data[1][t("mainLang")]}
              </div>
            </div>
          </div>
          <div className="min_color" >
            <div className="twoBox-m">
              <img src="https://www.netaauto.az/files/upload/b61a0c9f-025c-4331-8971-813c6377bd35_Rectangle 16501.png" alt="" className="twoImg-m" />
              <div className="twot-m">
                <div>{data[2][t("mainLang")]}</div>
                <div>{data[39][t("mainLang")]}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="tre-m">
        
      <ModelSliderMobile images={[Image1, Image2, Image3]} />



        </div>


        <div className="for-m">
    <img src="https://www.netaauto.az/files/upload/08a34503-8842-48ab-a26e-7ef9608fda49_178.png" alt="" className="forimg-m" />
    <div className="forcontent-m dd animate__animated animate__fadeInUp" style={{ opacity: 1 }}>
      <div className="t1">{data[13][t("mainLang")]}<br />{data[14][t("mainLang")]}</div>
      <div className="t2">
        <div><div className="solid_round"></div> {data[15][t("mainLang")]}</div>
        <div><div className="solid_round"></div> {data[40][t("mainLang")]}</div>
        <div><div className="solid_round"></div> {data[16][t("mainLang")]}</div>
        <div><div className="solid_round"></div> {data[17][t("mainLang")]}</div>
      </div>
    </div>
  </div>
  <div className="five-m">
    <img src="https://www.netaauto.az/files/upload/8325fe62-dedf-4c98-9f80-dfcef7c586a4_Group 48096782.jpg" alt="" className="fiveimg-m" />
    <div className="fiveOne-m dd animate__animated animate__fadeInUp" style={{ opacity: 1 }}>{data[43][t("mainLang")]}<br />{data[18][t("mainLang")]}</div>
    <div className="fiveTwo-m dd animate__animated animate__fadeInUp" style={{ opacity: 1 }}>
      <div className="five-info">
        <div className="fiv-top-m">{data[19][t("mainLang")]}</div> 
        <div className="fivebot-m">4070<span style={{ fontSize: '3.467vw' }}>mm</span></div>
      </div>
      <div className="vertical-bar-m"></div>
      <div className="five-info">
        <div className="fiv-top-m">{data[20][t("mainLang")]}</div> 
        <div className="fivebot-m">2420<span style={{ fontSize: '3.467vw' }}>mm</span></div>
      </div>
      <div className="vertical-bar-m"></div>
      <div className="five-info">
        <div className="fiv-top-m">{data[21][t("mainLang")]}</div> 
        <div className="fivebot-m">1540<span style={{ fontSize: '3.467vw' }}>mm</span></div>
      </div>
    </div>
  </div>

  <div className="seve">
    <img src="https://www.netaauto.az/files/upload/59260689-c264-49f4-8e17-d94ad667d144_176.png" className="seveimg-m" />
    <div className="forcontent-m dd animate__animated animate__fadeInUp" style={{ opacity: 1 }}>
      <div className="t1">{data[22][t("mainLang")]}</div>
      <div className="t2">
        <div><div className="solid_round"></div> {data[23][t("mainLang")]}</div>
        {/* <div><div style={{ width: '1.067vw', marginRight: '2.091vw' }}></div> Ride to GO</div> */}
        <div><div className="solid_round"></div> {data[24][t("mainLang")]}</div>
      </div>
    </div>
  </div>
  <div className="seve">
    <img src="https://www.netaauto.az/files/upload/144356ef-3a3e-4636-bac8-1d09626ca44a_175.png" className="seveimg-m" />
    <div className="forcontent-m dd animate__animated animate__fadeInUp" style={{ opacity: 1 }}>
      <div className="t1">{data[25][t("mainLang")]}</div>
      <div className="t2">
        <div><div></div> {data[26][t("mainLang")]}</div>
        <div> {data[27][t("mainLang")]}</div>
      </div>
    </div>
  </div>
  <div className="seve">
    <img src="https://www.netaauto.az/files/upload/3faa31eb-1957-4de8-b7d5-6441931d790e_174.png" className="seveimg-m" />
    <div className="forcontent-m dd animate__animated animate__fadeInUp" style={{ opacity: 1 }}>
      <div className="t1">{data[28][t("mainLang")]}</div>
    </div>
  </div>



  <div className="seve">
  <img src="https://www.netaauto.az/files/upload/a8aeff29-f5c6-429b-a70b-fe9fe258ee6e_car.png" className="seveimg-m" />
  <div className="forcontent-m dd animate__animated animate__fadeInUp" style={{ marginTop: '-8.533vw', opacity: 1 }}>
    <div className="t1">{data[29][t("mainLang")]}<br />{data[42][t("mainLang")]}</div>
    <div className="t2">
      <div><div className="solid_round"></div> {data[30][t("mainLang")]}</div>
      <div><div className="solid_round"></div> {data[32][t("mainLang")]}</div>
      <div><div className="solid_round"></div> {data[31][t("mainLang")]}</div>
    </div>
  </div>
</div>

<ModelColorSelectMobile  images={[MobileColor1,MobileColor2,MobileColor3,MobileColor4,MobileColor5]} paginationLogos={[Color1,Color2,Color3,Color4,Color5]}  title={""}  /> 


<div className="sevebox">
  <img src="https://www.netaauto.az/files/upload/d12b6e9f-4a5e-400f-ac7d-10ccca388d28_Group 48096780.jpg" alt="" className="fiveimg-m" />
  <div className="fiveTwo-m dd animate__animated animate__fadeInUp" style={{ opacity: 1 }}>
    <div className="five-info">
      <div className="fiv-top-m">3.9<span style={{ fontSize: '3.467vw' }}>{t("second")}</span></div>
      <div className="fivebot-m">0-50{t("k-h")}</div>
    </div>
    <div className="vertical-bar-m"></div>
    <div className="five-info">
      <div className="fiv-top-m">384<span style={{ fontSize: '3.467vw' }}>km</span></div>
      <div className="fivebot-m">{data[37][t("mainLang")]}</div>
    </div>
    <div className="vertical-bar-m"></div>
    <div className="five-info">
      <div className="fiv-top-m">≥100<span style={{ fontSize: '3.467vw' }}>{t("k-h")}</span></div>
      <div className="fivebot-m">{data[38][t("mainLang")]}</div>
    </div>
  </div>
</div>

<div className="eight dd animate__animated animate__fadeInUp" style={{ opacity: 1 }}>
  <div className="title">{data[33][t("mainLang")]}<br />{data[34][t("mainLang")]}</div>
  <div>
    <p>{data[35][t("mainLang")]}</p>
    
    <p>{data[36][t("mainLang")]}</p>
    <p><br /></p>
  </div>
</div>

        </div>

  )
}
