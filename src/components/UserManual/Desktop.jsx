import { useState } from "react";
import { useTranslation } from "react-i18next";

const Download1 = 'https://www.netaauto.co/resource/upload/PDF/NETA U User Manual.pdf'
const Download2 = "https://www.netaauto.co/resource/upload/User's Manual of NETA V.pdf"
const Download3 = 'https://www.netaauto.co/resource/upload/PDF/NETA V RHD User Manual.pdf'
const Download4 = 'https://www.netaauto.co/resource/upload/circuit diagram.pdf'
const Download5 = 'https://www.netaauto.co/resource/upload/service manual.pdf'
const Download6 = 'https://www.netaauto.co/resource/upload/warranty and maintenance manual.pdf'

export default function Desktop() {
  const [active, setActive] = useState("u");
  const {t} = useTranslation()





  return (
    <div className="pc-manual">
      <div className="pcbox">
        <div className="leftBox">
          <div className="t1">{t("userManual")}</div>
          <div
            className={`t2 ${active === "u" && "active"}`}
            onClick={() => setActive("u")}
          >
            {t("UuserManualDownload")}
          </div>
          <div
            className={`t2 ${active === "vrhd" && "active"}`}
            onClick={() => setActive("vrhd")}
          >
            {t("VRHDUserManualDowjload")}
          </div>
          <div
            className={`t2 ${active === "vlhd" && "active"}`}
            onClick={() => setActive("vlhd")}
          >
            {t("VLHDUserManual")}
          </div>
          <div
            className={`t2 ${active === "service" && "active"}`}
            onClick={() => setActive("service")}
          >
           {t("netaServiceManusal")}
          </div>
        </div>
        <div className="rightbox" style={{ display: active !== "u" && "none" }}>
          <div className="title">{t("UuserManualDownload")}</div>
          <img
            src="https://www.netaauto.az/files/upload/1.png"
            alt=""
            className="lefImg"
          />
          <a href={Download1} target="_blank" download>
            <img
              src="https://www.netaauto.az/files/upload/4.png"
              alt=""
              className="btnImg1 u"
            />
          </a>
        </div>
        <div
          className="rightbox"
          style={{ display: active !== "vrhd" && "none" }}
        >
          <div className="title">{t("VRHDUserManualDowjload")}</div>
          <img
            src="https://www.netaauto.az/files/upload/2.png"
            alt=""
            className="lefImg"
          />
          <a href={Download2} download target="_blank">
            <img
              src="https://www.netaauto.az/files/upload/5.png"
              alt=""
              className="btnImg2 v"
              
            />
          </a>
        </div>
        <div
          className="rightbox"
          style={{ display: active !== "vlhd" && "none" }}
        >
          <div className="title">{t("VLHDUserManual")}</div>
          <img
            src="https://www.netaauto.az/files/upload/3.png"
            alt=""
            className="lefImg"
          />
          <a href={Download3} download target="_blank">
            <img
              src="https://www.netaauto.az/files/upload/6.png"
              alt=""
              className="btnImg3 v2"
            />
          </a>
        </div>
        <div
          className="rightbox"
          style={{ display: active !== "service" && "none" }}
        >
          <div className="title">{t("netaServiceManusal")}</div>
          <a href={Download4} download target="_blank">
            <img
              src="https://www.netaauto.co/upload/cms/content/editor/1706608946092.png"
              alt=""
              className="btnImg4 NETA1"
            />
          </a>
          <a href={Download5} download target="_blank">
            <img
              src="https://www.netaauto.co/upload/cms/content/editor/1706608949406.png"
              alt=""
              className="btnImg4 NETA2"
            />
          </a>
          <a
            href={Download6}
            download
            target="_blank"
          >
            <img
              src="https://www.netaauto.co/upload/cms/content/editor/1706608953877.png"
              alt=""
              className="btnImg4 NETA3"
            />
          </a>
        </div>
      </div>
  
    </div>
  );
}
