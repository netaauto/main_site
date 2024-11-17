import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Mobile() {
    const navigate = useNavigate();
    const {t} = useTranslation()
    const {data} = useSelector((state)=>state.joinUs)

    const turnToBrand = (element) => {
      const parameter = element.getAttribute("data-parameter");
      navigate(parameter);
    };

  return (
<div className="mobile-join-us">
      <div className="firs">
        <img
          src="https://www.netaauto.az/files/upload/45a2e87b-c984-4a91-a2cc-ba5d9fa78e75_bj (1).png"
          alt=""
          className="topimg"
        />
        <div className="toptx">{data[0][t("mainLang")]}</div>
      </div>
      <div className="content-join-us">
        <div className="title">{data[1][t("mainLang")]}</div>
        <p>
        {data[2][t("mainLang")]}
        </p>
        <p>
        {data[3][t("mainLang")]}
        </p>
        <div data-parameter="/brand-story.html" onClick={(e) => turnToBrand(e.currentTarget)} className="m-button m-button-dark button">
        {t("learnMore")}

        </div>
      </div>
      <div className="nbBox">
        <img
          src="https://www.netaauto.az/files/upload/5f06cdbe-6d9c-42cf-8533-f1b28c478259_Group 48096815 (5).png"
          alt=""
          className="nbImg"
        />
        <h1>{data[4][t("mainLang")]}</h1>
        <p>
        {data[5][t("mainLang")]}<br />
        {data[6][t("mainLang")]}
        </p>
        <img
          src="https://www.netaauto.az/files/upload/4b2f4783-3e11-406e-aa08-0579844317ea_Group 48096816.png"
          alt=""
          className="nbImg"
        />
        <h1>{data[7][t("mainLang")]}</h1>
        <p>
        {data[8][t("mainLang")]}<br />
        {data[9][t("mainLang")]}
        </p>
        <img
          src="https://www.netaauto.az/files/upload/3110298d-8292-439c-97d3-204efd6cc3ef_Group 48096882 (1).png"
          alt=""
          className="nbImg"
        />
        <h1>{data[10][t("mainLang")]}</h1>
        <p>
        {data[11][t("mainLang")]}
        </p>
      </div>
      <div className="bottomBoxJoin">
        <div>{data[12][t("mainLang")]}</div>
        <div>{data[13][t("mainLang")]}</div>
        
        <div>
        {data[14][t("mainLang")]} <span>{data[15][t("mainLang")]}</span>
        </div>
      </div>
    
    </div>  )
}
