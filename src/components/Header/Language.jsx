import styled from "styled-components";
import PropTypes from "prop-types";
import CloseIcon from "../../assets/images/close.png";
import Azerbaijan from "../../assets/images/azerbaijan.png";
import English from "../../assets/images/united-states.png";
import { useTranslation } from 'react-i18next';

export default function Language({ show, toggle }) {

const {t} = useTranslation()


const { i18n } = useTranslation();

const handleChangeLanguage = (lang) => {
  i18n.changeLanguage(lang);
  localStorage.setItem("lang",lang)
  toggle(false)
};



  return (
    <Wrapper $show={show}>
      <img src={CloseIcon} alt="Close" onClick={() => toggle(false)} />

      <Languages>
        <h2>{t("language")}</h2>
        <LanguageItem onClick={()=>handleChangeLanguage("en")}>
          <img src={English} alt="English" />
          {t("en")}
        </LanguageItem>
        <LanguageItem onClick={()=>handleChangeLanguage("az")}>
          <img src={Azerbaijan} alt="Azerbaijan" />
          {t("az")}

        </LanguageItem>
      </Languages>
    </Wrapper>
  );
}

const Languages = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2vw;
  h2 {
    font-style: normal;
    font-weight: 400;
    font-size: 1.771vw;
    line-height: 2.656vw;
    color: white;
  }
`;

const LanguageItem = styled.div`
width: 200px;
  display: flex;
  gap: 16px;
  font-style: normal;
  font-weight: 400;
  font-size: 1vw;
  color: white;
  align-items: center;
  img{
    width: 48px;
  }
  &:hover{
    color: #f65a11;
    cursor: pointer;
  }
  
`;
const Wrapper = styled.div`
  width: 34.167vw;
  background: rgba(0, 0, 0, 0.8);
  right: 0vw;
  top: 0vw;
  height: 100vh;
  position: fixed;
  z-index: 9999;
  display: ${(props) => (props.$show ? "flex" : "none")};
  justify-content: center;
  align-items: center;

  & > img {
    position: absolute;
    width: 2.083vw;
    top: 2.5vw;
    right: 2.5vw;
    &:hover {
      cursor: pointer;
    }
  }
`;

Language.propTypes = {
  show: PropTypes.bool,
  toggle: PropTypes.func,
};
