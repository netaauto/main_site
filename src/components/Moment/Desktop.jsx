import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Desktop() {
  const { t } = useTranslation();
  const { data } = useSelector((state) => state.header);
  const { data: dataMoment } = useSelector((state) => state.moment);
  const az = t("mainLang") === "az";
  const navigate = useNavigate();
  const changeLink = (id) => {
    navigate(`/neta-moment/${id}`);
  };

  return (
    <div className="pc-moment">
      <div className="header">
        <div className="t1">
          {az ? data[0].pages[0].nameAz : data[0].pages[0].nameEng}
        </div>
      </div>
      <div className="box">
        <div className="two">{t("latestNews")}</div>
        <div className="contentBox" style={{ paddingBottom: "48px",gap:"24px" }}>
          {dataMoment &&
            dataMoment.map((item) => {
              return (
                <div
                  className="for"
                  key={item.id}
                  onClick={() => changeLink(item.slug)}
                >
                 <div
                    className="leftImg"
                    style={{
                      backgroundImage: `url(${item.thumbnail})`,
                      backgroundOrigin: "content-box",
                      padding: "16px",
                      backgroundColor: "#fff",
                      backgroundSize: "contain",
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center",
                      width: "100%",
                      height: "200px",
                    }}
                  ></div>
                  <div className="content-moment">
                    <div className="t1">{item.title}</div>
                    <div className="t2">{item.date}</div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}
