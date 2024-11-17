import styled from "styled-components";
import CloseIcon from "../../assets/images/close.png";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedMenu } from "./headerSlice";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";

export default function Menu() {
  const { data, selectedMenu } = useSelector((state) => state.header);
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const az = t("mainLang") === "az";

  const LeftSizeAz =
    selectedMenu && selectedMenu.id === "weAreNeta"
      ? "2.5vw"
      : selectedMenu && selectedMenu.id === "models"
      ? "10.4vw"
      : "17.6vw";

      const LeftSizeEn =
    selectedMenu && selectedMenu.id === "weAreNeta"
      ? "2.5vw"
      : selectedMenu && selectedMenu.id === "models"
      ? "11.6vw"
      : "18.1vw";

  return (
    <Wrapper $show={selectedMenu}>
      <img
        src={CloseIcon}
        alt="Close"
        onClick={() => dispatch(setSelectedMenu(null))}
      />

      <Pages>
        {data.length &&
          data.toReversed().map(
            (menu) =>
              menu.visible && (
                <PageItem
                  onClick={() => dispatch(setSelectedMenu(menu))}
                  key={menu.az}
                >
                  {az ? menu.az : menu.en}
                </PageItem>
              )
          )}
      </Pages>

      <Subpages $left={az?LeftSizeAz:LeftSizeEn}>
        {selectedMenu &&
          selectedMenu.pages.map(
            (sub) =>
              sub.visible && (
                <NavLink
                  key={sub.id}
                  to={sub.id==="4"?"https://blog.netaauto.az":`/${sub.path}`}
                  onClick={() => dispatch(setSelectedMenu(null))}
                >
                  {az ? sub.nameAz : sub.nameEng}
                </NavLink>
              )
          )}
      </Subpages>
    </Wrapper>
  );
}

const Subpages = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  margin-top: 120px;
  position: absolute;
  left: ${(props) => props.$left};
  .active {
    color: #f65a11 !important;
    border-radius: 0;
    border: none;
    width: auto;
  }
  a {
    text-decoration: none;
    font-style: normal;
    font-weight: 275;
    font-size: 1.458vw;
    line-height: 2.188vw;
    color: #ffffff;

    &:hover {
      color: #f65a11;
      cursor: pointer;
    }
  }
`;

const Wrapper = styled.div`
  width: 34.167vw;
  background: rgba(0, 0, 0, 0.8);
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 999;
  display: ${(props) => (props.$show ? "flex" : "none")};
  & > img {
    position: absolute;
    width: 2.083vw;
    top: 2.2vw;
    z-index: 9999;
    right: 2.5vw;
    &:hover {
      cursor: pointer;
    }
  }
`;

const Pages = styled.div`
  width: 100%;
  display: flex;
  gap: 3vw;
  position: absolute;
  top: 2.5vw;
  left: 2.5vw;
`;

const PageItem = styled.div`
  font-size: 1vw;
  color: white;
  &:hover {
    color: #f65a11;
    cursor: pointer;
  }
`;

Menu.propTypes = {
  show: PropTypes.bool,
  toggle: PropTypes.func,
};
