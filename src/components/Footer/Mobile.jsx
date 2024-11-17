import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import Youtube from "../../assets/images/youtube.png";
import Tiktok from "../../assets/images/tiktok.png";
function MobileFooter() {
  const { t } = useTranslation();

  const { data } = useSelector((state) => state.footer);

  return (
    <div className="mobilefoot">
      <div
        className="box1"
        style={{ display: "grid", gridTemplateColumns: "auto auto" }}
      >
        {data &&
          data.length &&
          data.map((item, index) => {
            return (
              <NavLink
                to={item.path}
                key={index}
                style={{ marginRight: "24px", color: "#fff" }}
                className="c1"
              >
                {t("mainLang") === "az" ? item.nameAz : item.nameEng}
              </NavLink>
            );
          })}

        <NavLink
          to={"/neta-v"}
          style={{ marginRight: "24px", color: "#fff" }}
          className="c1"
        >
          Neta V
        </NavLink>
        <NavLink
          to={"/neta-u"}
          style={{ marginRight: "24px", color: "#fff" }}
          className="c1"
        >
          Neta U
        </NavLink>
        <NavLink
          to={"neta-s"}
          style={{ marginRight: "24px", color: "#fff" }}
          className="c1"
        >
          Neta S
        </NavLink>
        <NavLink
          to={"neta-gt"}
          style={{ marginRight: "24px", color: "#fff" }}
          className="c1"
        >
          Neta GT
        </NavLink>
      </div>
      <div className="bottomBox">
        <div className="box2">
          <a
            href="https://www.youtube.com/@NetaAutoAzerbaijan"
            target="_blank"
            title="Youtube"
          >
            <img src={Youtube} alt="Youtube" className="open1" />
          </a>

          <a
            title="Tiktok"
            href="https://www.tiktok.com/@netautoazerbaijan?_t=8mj4ANLBML2&_r=1"
            target="_blank"
          >
            <img src={Tiktok} alt="Tiktok" className="open1" />
          </a>

          <a
            title="Facebook"
            href="https://www.facebook.com/profile.php?id=61558734524716&mibextid=LQQJ4d&rdid=IH0ol7ezjH6x6nTu&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2FiZ2dcpXS5JLpXQpJ%2F%3Fmibextid%3DLQQJ4d"
            target="_blank"
          >
            <img
              src="https://www.netaauto.co//template/1/website/static/images/pc/foot/2.png"
              alt="Facebook"
              className="open2"
            />
          </a>

          <a
            href="https://www.instagram.com/netauto.azerbaijan?igsh=MW1sdWEwZGxhcHJmNg%3D%3D"
            target="_blank"
            title="Instagram"
          >
            <img
              src="https://www.netaauto.co//template/1/website/static/images/pc/foot/3.png"
              alt="Instagram"
              className="open3"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default MobileFooter;
