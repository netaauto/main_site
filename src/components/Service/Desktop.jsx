import Img1 from '../../assets/images/service/1.png'
import Img2 from '../../assets/images/service/2.png'
import Img3 from '../../assets/images/service/3.png'
import Img4 from '../../assets/images/service/4.png'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'

export default function Desktop() {
    const { t } = useTranslation();
    const {data} = useSelector((state) => state.service)
    const az = t('mainLang')==="az"

  return (
    <div className="pc pc-service">
    <div className="oneBox">
      <img src={Img1} alt="" />

      <div className="tservice1">{az? data[0].az:data[0].en}</div>
      <div className="tservice2">{az? data[1].az:data[1].en}</div>
    </div>
    <div className="twoBox">

      <div className="tservice1">
      {az? data[2].az:data[2].en}
      </div>

      <div className="tservice2">
      {az? data[3].az:data[3].en}
        <span>{az? data[4].az:data[4].en}</span>
      </div>
    </div>
    <div className="treBox">
      <img src={Img2} alt="" />

      <div className="tservice1">{az? data[5].az:data[5].en}</div>
      <div className="tservice2">{az? data[6].az:data[6].en}</div>
      <div className="c-button wenziImg_btn">{az? data[7].az:data[7].en}</div>
    </div>
    <div className="forBox">
      <img src={Img3} alt="" />

      <div className="tservice1">{az? data[8].az:data[8].en}</div>
      <div className="tservice2">{az? data[11].az:data[11].en}</div>
    </div>
    <div className="forBox">
      <img src={Img4} alt="" />

      <div className="tservice1">{az? data[9].az:data[9].en}</div>
      <div className="tservice2">{az? data[10].az:data[10].en}</div>
    </div>



  </div>
  )
}
