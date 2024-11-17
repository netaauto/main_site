import React from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export default function NotFound() {
    const {t}= useTranslation() 
  return (
    <Wrapper className="pc">
            <h2>{t("notFound")}</h2>
        <Link to={"/"}>{t("backToHomePage")}</Link>
  </Wrapper>
  )
}



const Wrapper = styled.div`
display: flex;
width: 100%;
justify-content: center;
align-items: center;
flex-direction: column;
gap: 50px;
padding: 50px 12px;
height: 80vh;

h2{
    font-size:60px;
}
a{
    font-size: 18px;
    border: 1px solid #000;
    padding: 12px 24px;
    &:hover{
        background-color: #000;
        color: #fff;
    }
    
}
    

`