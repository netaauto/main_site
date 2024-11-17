import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

export default function MobileInfo({ data }) {
  const { t } = useTranslation();

  const az = t("mainLang") === "az";
  const { data: headerData } = useSelector((state) => state.header);

  return (
    <div className="mobile-moment-info">
      <div className="mobileBox">
      <div className="title">
        {az ? headerData[0].pages[0].nameAz : headerData[0].pages[0].nameEng}
      </div>
      <div className="titleTwo">{data.title}</div>
      <div className="date">{data.date}</div>
      <div dangerouslySetInnerHTML={{__html: data.content}}></div>
    </div>
    </div>
  );
}
