import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

export default function Mobile() {
  const { data } = useSelector((state) => state.family);
  const { data: dataHeader } = useSelector((state) => state.header);

  const { t } = useTranslation();
  return (
    <div className="mobile-family">
      <div className="firs">
        <img
          src="https://www.netaauto.az/files/upload/93213587-d56f-4d98-b1c7-4ba0a93f9b4d_bj (3).png"
          alt=""
          className="topimg"
        />
        <div className="toptx">{t("mainLang")==="az"?dataHeader[0].pages[0].nameAz:dataHeader[0].pages[0].nameEng}</div>
      </div>

      <div className="content">
        <div>
          <img
            src="https://www.netaauto.az/files/upload/26567820-a469-4864-a9f0-e52679a8754e_20221122-090923 1.png"
            alt=""
            className="titleImg"
          />
        </div>
        <div>
          <div className="title">{data[0][t("mainLang")]}</div>
          <div className="content-m">
          {data[1][t("mainLang")]}
          </div>
        </div>
      </div>

      <div className="content">
        <div>
          <img
            src="https://www.netaauto.az/files/upload/2406ffdb-b509-4156-8139-108e0293bfd2_Group 48096815 (2).png"
            alt=""
            className="titleImg"
          />
        </div>
        <div>
          <div className="title">
          {data[2][t("mainLang")]}
          </div>
          <div className="content-m">
          {data[3][t("mainLang")]}
          </div>
        </div>
      </div>

      <div className="content">
        <div>
          <img
            src="https://www.netaauto.az/files/upload/5f85092b-109b-4f5c-885e-38145535c4ca_Group 48096816.png"
            alt=""
            className="titleImg"
          />
        </div>
        <div>
          <div className="title">
          {data[4][t("mainLang")]}
          </div>
          <div className="content-m">
          {data[5][t("mainLang")]}
          </div>
        </div>
      </div>
    </div>
  );
}
