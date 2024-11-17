import { useState } from "react";
import styled from "styled-components";
import Burger from "../../assets/images/burger.png";
import Logo from "../../assets/images/mobilelogo.png";
import Lang from "../../assets/images/mobilelang.png";
import CloseIcon from "../../assets/images/close.png";
import Arrow from "../../assets/images/arrow.png";
import ActiveArrow from "../../assets/images/activeArrow.png";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import MobileLanguage from "./MobileLanguage";

export default function MobileHeader() {
  const [menu, setMenu] = useState(false);
  const [menuIndex, setMenuIndex] = useState(1);
const [lang,setLang] = useState(false)
  const { data } = useSelector((state) => state.header);
  const { t } = useTranslation();
  const navigate = useNavigate()
  return (
    <Wrapper>
      <Left onClick={() => setMenu(true)}>
        <img src={Burger} alt="" />
      </Left>
      <Center onClick={()=>navigate("/")}>
        <img src={Logo} alt="" />
      </Center>
      <Right onClick={()=>setLang(true)}>
        <img src={Lang} alt="" />
      </Right>

      {menu && (
        <Menu>
          <Head>
            <img src={CloseIcon} alt="Close" onClick={() => setMenu(false)} />
          </Head>
          <Body>
            {data &&
              data.length &&
              data.toReversed().map((item, index) => {
                return (
                  <MenuItem key={index}>
                    <div
                      onClick={() => {
                        if (menuIndex === index) {
                          setMenuIndex(null);
                        } else {
                          setMenuIndex(index);
                        }
                      }}
                    >
                      <img
                        src={menuIndex === index ? ActiveArrow : Arrow}
                        alt="arrow"
                      />
                      <span>{t("mainLang")==="az"?item.az:item.en}</span>
                    </div>
                    <div
                      style={{ display: menuIndex === index ? "flex" : "none" }}
                    >
                      {item.pages &&
                        item.pages.map((page) => {
                          return (
                            <NavLink
                              key={page.id}
                              onClick={() => {
                                setMenu(false);
                              }}
                              to={page.path}
                              style={{ color: "#fff", textDecoration: "none" }}
                            >
                              {t("mainLang") === "az"
                                ? page.nameAz
                                : page.nameEng}
                            </NavLink>
                          );
                        })}
                    </div>
                  
                  </MenuItem>
                );
              })}


          </Body>
        </Menu>
      )}

      <MobileLanguage show={lang} toggle={setLang} />
    </Wrapper>
  );
}

const MenuItem = styled.div`
  margin-top: 24px;
  .active {
    color: #ff0000 !important;
    border-radius: 0;
    border: none;
    width: auto;
  }
  div {
    display: flex;
    align-items: center;
    gap: 24px;
  }
  img {
    width: 16px;
  }
  div:last-of-type {
    list-style: none;
    margin-left: 40px;
    margin-top: 12px;
    align-items: flex-start;
    font-size: 24px;
    flex-direction: column;
    gap: 12px;
  }
`;

const Body = styled.div`
  width: 100%;
  padding: 16px 24px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const Head = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  padding: 24px;
  img {
    width: 32px;
  }
`;

const Menu = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.8);
  top: 0;
  left: 0;
  color: #fff;
`;
const Left = styled.div`
  img {
    width: 4.267vw;
  }
`;
const Center = styled.div`
  img {
    width: 7.467vw;
  }
`;
const Right = styled.div`
  img {
    width: 13.28vw;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  height: 12.267vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  padding: 0 4.267vw;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 9999999;
`;
