import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Desktop() {
  const navigate = useNavigate();
  const {t} = useTranslation()

  const turnToBrand = (element) => {
    const parameter = element.getAttribute("data-parameter");
    navigate(parameter);
    
};
const {data} = useSelector((state)=>state.joinUs)
  return (
    <div className="pc-join-us">
      <div className="top-pc">
        <img
          src="https://www.netaauto.az/files/upload/06484491-767d-4d1b-ada2-b833d8f5fb38_bj.png"
          alt=""
          className="topImg-pc"
        />
        <div className="toptext">{data[0][t("mainLang")]}</div>
      </div>
      <div className="pcCardBox">
        <div className="pcCardcode">{data[1][t("mainLang")]}</div>
        <div className="content-1">
        {data[2][t("mainLang")]}
        </div>
        <div className="content-2">
          <p style={{ textAlign: "left" }}>
          {data[3][t("mainLang")]}
          </p>
        </div>
        <div
          data-parameter="/brand-story.html"
          onClick={(e) => turnToBrand(e.currentTarget)}
          className="c-button c-button-dark conimg"
        >
          {t("learnMore")}
        </div>
      </div>
      <div className="pctab">
        <img
          src="https://www.netaauto.az/files/upload/128209a1-847a-402e-82a1-7d241447755d_Group 48096874.jpg"
          alt=""
          className="pctabImg"
        />
        <div className="weBox">
          <div className="title">{data[4][t("mainLang")]}</div>
          <div className="content1">
          {data[5][t("mainLang")]}
          </div>
          <div className="content1">
            <p style={{ whiteSpace: "pre-wrap" }}>
            {data[6][t("mainLang")]}
            </p>
          </div>
        </div>
      </div>
      <div className="pctab">
        <div className="weBox">
          <div className="title">{data[7][t("mainLang")]}</div>
          <div className="content1">
          {data[8][t("mainLang")]}
          </div>
          <div className="content1">
          {data[9][t("mainLang")]}
          </div>
        </div>
        <img
          src="https://www.netaauto.az/files/upload/80eb7234-868e-4e15-9e97-2bdcf0a221b7_Group 48096782 (1).png"
          alt=""
          className="pctabImg"
        />
      </div>
      <div className="pctab">
        <img
          src="https://www.netaauto.az/files/upload/d1005557-cfea-4ded-8de8-988ef4c7ee16_Group 48096797.png"
          alt=""
          className="pctabImg"
        />
        <div className="weBox">
          <div className="title">{data[10][t("mainLang")]}</div>
          <div className="content1">
          {data[11][t("mainLang")]}
          </div>
        </div>
      </div>
      <div className="bottomBoxJoin">
        <div>{data[12][t("mainLang")]}</div>
        <div>
        {data[13][t("mainLang")]}
        </div>
        <div>
        {data[14][t("mainLang")]}  <span>{data[15][t("mainLang")]}</span>
        </div>
      </div>
  
    </div>
  );
}
