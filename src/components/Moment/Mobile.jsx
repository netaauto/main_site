import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Mobile() {
  const { t } = useTranslation();
  const { data } = useSelector((state) => state.header);
  const { data: dataMoment } = useSelector((state) => state.moment);
  const az = t("mainLang") === "az";
  const navigate = useNavigate();
  const changeLink = (id) => {
    navigate(`/neta-moment/${id}`);
  };

  return (
    <div className="mobile-moment">
      <div className="oneBox"></div>
      <div className="towBox">
        <div className="t1">
          {az ? data[0].pages[0].nameAz : data[0].pages[0].nameEng}
        </div>
      </div>
      <div className="tre">
        <div className="t1-mm"> {t("latestNews")}</div>
        <div className="box">
          {dataMoment &&
            dataMoment.map((item) => {
              return (
                <div
                  style={{ marginBottom: "50px",background:"#fff", }}
                  key={item.id}
                  onClick={() => changeLink(item.id)}
                >
                  <img src={item.thumbnail} alt="" />
                  <div className="tBox">
                    <div className="t1">{item.title}
                    

                    </div>
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
