import React from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import './_style.scss';

export default function DesktopInfo({data}) {
  const { t } = useTranslation();

  const az = t("mainLang") === "az";
  const { data:headerData } = useSelector((state) => state.header);



  return (

    <>
         
    
    
        <div className="pc-moment-info">
    <div className="title-pc">        
      
        {az ? headerData[0].pages[0].nameAz : headerData[0].pages[0].nameEng}
</div>
    <div className="contentBox" style={{paddingBottom:"48px"}}>
      <div className="title-name">{data.title}</div>
      <div className="date-pc">{data.date}</div>
      <div className="content" dangerouslySetInnerHTML={{__html: data.content}}></div>

    </div>
  </div>
    
    </>

 
  );
}
