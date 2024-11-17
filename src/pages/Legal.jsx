import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import '../assets/style/legal.css'

export default function Legal() {
  const { data } = useSelector((state) => state.footer);
  const { t } = useTranslation();

  console.log(data)
  if (data.length) {
    return (
      <div style={{padding:"0px 100px 0 100px",display:"flex",width:"100%",justifyContent:"center",background:"#fff"}} dangerouslySetInnerHTML={{ __html: data[0][t("mainLang")] }}></div>
    );
  }
}