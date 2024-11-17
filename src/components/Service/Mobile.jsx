import { useTranslation } from "react-i18next";
import Img1 from "../../assets/images/service/1.png";
import Img2 from "../../assets/images/service/2.png";
import Img3 from "../../assets/images/service/3.png";
import Img4 from "../../assets/images/service/4.png";
import { useSelector } from "react-redux";

export default function Mobile() {

    const { t } = useTranslation();
    const {data} = useSelector((state) => state.service)
    



  return (
    <div className="mobile-service">
      <div className="oneBox">
        <img src={Img1} alt="" />
        <div className="t11">{data[0][t('mainLang')]}</div>
        <div className="t22">
        {data[1][t('mainLang')]}
        </div>
      </div>
      <div className="twoBox">
        <div className="tservice1">
        {data[2][t('mainLang')]}
        </div>

        <div className="tservice2">
          <div style={{marginBottom:"1.333vw"}}>{data[3][t('mainLang')]}</div>
          <span>{data[4][t('mainLang')]}</span>
        </div>

        <img src={Img2} alt="" className="tservicei1" />
        <div className="t5">{data[5][t('mainLang')]}</div>
        <div className="t6">
        {data[6][t('mainLang')]}
        </div>
        <div className="addbuton">
          {/* <div className="addwenziImg_btn">{data[7][t('mainLang')]}</div> */}
        </div>

        <img src={Img3} alt="" className="tservicei2" />
        <div className="t7">{data[8][t('mainLang')]}</div>
        <div className="t8">
        {data[11][t('mainLang')]}
        </div>

        <img src={Img4} alt="" className="tservicei3" />
        <div className="t7">{data[9][t('mainLang')]}</div>
        <div className="t8">
        {data[10][t('mainLang')]}
        </div>
      </div>
    </div>
  );
}
