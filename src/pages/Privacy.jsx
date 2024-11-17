import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import '../assets/style/legal-privacy.css'

export default function Privacy() {
  const { data } = useSelector((state) => state.footer);
  const { t } = useTranslation();

  if (data.length) {
    return (
        <div  dangerouslySetInnerHTML={{ __html: data[1][t("mainLang")] }}></div>
    );
  }
}
