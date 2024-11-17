import styled from "styled-components";
import Logo from "../../assets/images/logo.png";
import WordIcon from "../../assets/images/wordicon.png";
import Language from "./Language";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firbaseConfig";
import Menu from "./Menu";
import { useDispatch, useSelector } from "react-redux";
import { setData, setSelectedMenu } from "./headerSlice";
import { NavLink, useNavigate } from "react-router-dom";
import useMobileDetect from "use-mobile-detect-hook";
import MobileHeader from "./MobileHeader";

export default function Header() {
  const detectMobile = useMobileDetect();

  const navigate = useNavigate();
  const [languageMenuVisible, setLanguageMenuVisible] = useState(false);
  const [headerVisible, setHeaderVisible] = useState(true);
  const { t } = useTranslation();
  const az = t("mainLang") === "az";
  const dispatch = useDispatch();
  const { data, selectedMenu } = useSelector((state) => state.header);

  
  const fetchData = async () => {
    await getDocs(collection(db, "mainCategories")).then((querySnapshot) => {
      const newData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      dispatch(setData(newData));
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (languageMenuVisible || selectedMenu) {
      setHeaderVisible(false);
    } else {
      setHeaderVisible(true);
    }
  }, [selectedMenu, languageMenuVisible]);

  return (
    <>
      {!detectMobile.isMobile() ? (
        <>
          <HeaderWrapper $show={headerVisible}>
            <Left>
              {data.length &&
                data.toReversed().map(
                  (menu) =>
                    menu.visible && (
                      <CategoryItem
                        onClick={() => dispatch(setSelectedMenu(menu))}
                        key={menu.az}
                      >
                        {az ? menu.az : menu.en}
                      </CategoryItem>
                    )
                )}

              <MenuLink to={`/${data[2]?.pages[5]?.path}`}>
                {t("mainLang") === "az"
                  ? data[2]?.pages[5]?.nameAz
                  : data[2]?.pages[5]?.nameEng}
              </MenuLink>
            </Left>
            <Center onClick={() => navigate("/")}>
              <img src={Logo} alt="Logo" />
            </Center>
            <Right>
              {data.length > 2 && data[2].pages.length > 4 && (
                <MenuLink to={`/${data[2].pages[4].path}`}>
                  {t("mainLang") === "az"
                    ? data[2].pages[4].nameAz
                    : data[2].pages[4].nameEng}
                </MenuLink>
              )}

              <img src={WordIcon} alt="Language" />
              <CategoryItem onClick={() => setLanguageMenuVisible(true)}>
                {t("language")}
              </CategoryItem>
            </Right>
          </HeaderWrapper>

          <Language
            show={languageMenuVisible}
            toggle={setLanguageMenuVisible}
          />
          <Menu />
        </>
      ) : (
        <MobileHeader />
      )}
    </>
  );
}

const HeaderWrapper = styled.div`
  width: 100%;
  z-index: 999999;
  height: 4.583vw;
  background-color: #000;
  padding: 0 5.104vw;
  position: fixed;
  top: 0;
  display: ${(props) => (props.$show ? "flex" : "none")};
  align-items: center;
  justify-content: space-between;
`;

const MenuLink = styled(NavLink)`
  cursor: pointer;
  text-decoration: none;
  font-style: normal;
  font-weight: 400;
  font-size: 0.99vw;
  line-height: 1.51vw;
  color: white;
  width: auto;
  border-radius: 0;
  border: none;
  font-family: "Prompt";
  &:hover {
    color: #f65a11 !important;
  }
`;
const CategoryItem = styled.div`
  cursor: pointer;

  font-style: normal;
  font-weight: 400;
  font-size: 0.99vw;
  line-height: 1.51vw;
  color: white;
  font-family: "Prompt";
  &:hover {
    color: #f65a11 !important;
  }
`;
const Left = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 100%;
  gap: 36px;
  width: 40%;
  .active {
    color: #f65a11 !important;
  }
`;

const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2%;
  cursor: pointer;
  img {
    width: 2.344vw;
  }
`;
const Right = styled.div`
  width: 40%;

  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 100%;
  gap: 36px;
  img {
    width: 26px;
  }
  .active {
    color: #f65a11 !important;
  }
`;
