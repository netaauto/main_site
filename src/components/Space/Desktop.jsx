import  { useState } from "react";
import { useTranslation } from "react-i18next";
import Modal from "./Modal";
import Baku from '../../assets/images/stores/baku.jpg'
import China from '../../assets/images/stores/china.png'
import Laos from '../../assets/images/stores/laos.png'
import Malaysia from '../../assets/images/stores/malaysia.png'
import Myanmar from '../../assets/images/stores/myanmar.png'
import Nepal from '../../assets/images/stores/nepal.png'
import Thailand from '../../assets/images/stores/thailand.png'



export default function Desktop() {
  const { t } = useTranslation(); 
  const [visible, setVisible] = useState(false);
  const [data, setData] = useState({ data1: "", data2: "" ,img:""});

  const setModal = (data) => {
    setVisible(true);
    setData(data)
  };

  return (
    <div className="pc">
      <Modal visible={visible} setVisible={setVisible} data={data} />
      <div className="title" style={{margin:0}}>{t("helloWorld")}</div>
      <div className="oneBox">
        <img
          src="https://www.netaauto.az/files/upload/73a47179-ce27-4267-9a74-4942a021003b_1%20(6).png"
          alt=""
          className="i1"
        />
        <div className="t1">
          <div className="cont">{t("Myanmar")}</div>
          <div className="line"></div>
          <img
            className="nImg"
            src="https://www.netaauto.az/files/upload/store/20.png"
            id="Myanmar"
            alt=""
            onClick={() => setModal({ data1: t("Myanmar"), data2: t("Yangon"),img:Myanmar })}
          />
          <img
            className="yImg"
            src="https://www.netaauto.az/files/upload/store/21.png"
            alt=""
          />
        </div>

        <div className="t2">
          <div className="cont">{t("Nepal")}</div>
          <div className="line"></div>
          <img
            className="nImg"
            src="https://www.netaauto.az/files/upload/store/20.png"
            id="Nepal"
            alt=""
            onClick={() => setModal({ data1: t("Nepal"), data2: t("Kathmandu"),img:Nepal })}
          />
          <img
            className="yImg"
            src="https://www.netaauto.az/files/upload/store/21.png"
            alt=""
          />
        </div>

        <div className="t3">
          <div className="cont">{t("Thailand")}</div>
          <div className="line"></div>
          <img
            className="nImg"
            src="https://www.netaauto.az/files/upload/store/20.png"
            id="Thailand"
            alt=""
            onClick={() => setModal({ data1: t("Thailand"), data2: t("Bangkok"),img:Thailand })}
          />
          <img
            className="yImg"
            src="https://www.netaauto.az/files/upload/store/21.png"
            alt=""
          />
        </div>

        <div className="t7">
          <img
            className="nImg"
            src="https://www.netaauto.az/files/upload/store/20.png"
            id="China"
            alt=""
            onClick={() => setModal({ data1: t("Azerbaijan"), data2: t("Baku"),img:Baku })}
          />
          <img
            className="yImg"
            src="https://www.netaauto.az/files/upload/store/21.png"
            alt=""
          />
          <div className="line"></div>
          <div className="cont">{t("Azerbaijan")}</div>
        </div>

        <div className="t4">
          <img
            className="nImg"
            src="https://www.netaauto.az/files/upload/store/20.png"
            id="China"
            alt=""
            onClick={() => setModal({ data1: t("China"), data2: t("Hanzhou"),img:China })}
          />
          <img
            className="yImg"
            src="https://www.netaauto.az/files/upload/store/21.png"
            alt=""
          />
          <div className="line"></div>
          <div className="cont">{t("China")}</div>
        </div>

        <div className="t5">
          <img
            className="nImg"
            src="https://www.netaauto.az/files/upload/store/20.png"
            id="Malaysia"
            alt=""
            onClick={() =>
              setModal({ data1: t("Malaysia"), data2: t("KualaLumpur"), img:Malaysia })
            }
          />
          <img
            className="yImg"
            src="https://www.netaauto.az/files/upload/store/21.png"
            alt=""
          />
          <div className="line"></div>
          <div className="cont">{t("Malaysia")}</div>
        </div>

        <div className="t6">
          <img
            className="nImg"
            src="https://www.netaauto.az/files/upload/store/20.png"
            id="Laos"
            alt=""
            onClick={() => setModal({ data1: t("Laos"), data2: t("Vientiane"),img:Laos })}
          />
          <img
            className="yImg"
            src="https://www.netaauto.az/files/upload/store/21.png"
            alt=""
          />
          <div className="line"></div>
          <div className="cont">{t("Laos")}</div>
        </div>
      </div>
    </div>
  );
}
