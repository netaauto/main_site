import { useTranslation } from "react-i18next";
import styled from "styled-components";

export default function Modal({visible,setVisible,data}) {
    const {t}= useTranslation()
  return (
    <ModalItem $visible={visible}>
      <img src={data.img} alt={data.data1} />
      <div className="box-modal">
        <div className="name1">{data.data1}</div>
        <div className="name2">{data.data2}</div>
        <div className="name3">
          <p>{t("netaUserCenter")}</p>
        </div>
      </div>
      <img
      onClick={()=>setVisible(false)}
        id="img4"
        src="https://www.netaauto.az/files/upload/store/12.png"
        alt=""
        className="img2"
      ></img>
    </ModalItem>
  );
}

const ModalItem = styled.div`
  padding: 0.781vw;
  display: ${(props) => (props.$visible ? "flex" : "none")};
  background-color: #fff;
  left: 30.052vw;
  top: 17.76vw;
  position: absolute;
  z-index: 9999999;
  img {
    width: 17.448vw;
    display: block;
  }
  .img2 {
    width: 1.25vw;
    height: 1.25vw;
    cursor: pointer;
    display: block;
    margin-left: 3.49vw;
  }
  .box-modal {
    margin-left: 1.25vw !important;
    .name1 {
      font-weight: 500;
      font-size: 1.146vw;
      line-height: 1.146vw;
      color: #000000;
      margin-top: 2.083vw;
    }
    .name2 {
      margin-top: 0.417vw;
      font-weight: 300;
      font-size: 1.146vw;
      line-height: 1.146vw;
      color: #000000;
    }
    .name3 {
      margin-top: 3.542vw;
      font-weight: 300;
      font-size: 0.833vw;
      line-height: 0.833vw;
      color: #000000;
    }
  }
`;
