import styled from "styled-components";
import menuTab from "utils/Header";
import DropdownMenu from "./DropdownMenu";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Navigation = () => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const navigate = useNavigate();

  const handleMouseEnter = (number) => {
    if (number === 2) setDropdownVisible(true);
  };
  const handleMouseLeave = () => {
    setDropdownVisible(false);
  };
  const goPage = (href) => {
    console.log("이동");
    navigate(href);
  };
  useEffect(() => {
    console.log("isDropdownVisible: ", isDropdownVisible);
  }, [isDropdownVisible]);
  return (
    <NavigationWrapper>
      <NavWrapper>
        <UlWrapper>
          {menuTab.map((item, index) => {
            return (
              <LiWrapper
                key={index}
                onMouseEnter={() => handleMouseEnter(item.id)}
                onMouseLeave={handleMouseLeave}
              >
                <AWrapper onClick={() => goPage(item.href)}>
                  <SpanWrapper>{item.name}</SpanWrapper>
                </AWrapper>
                {isDropdownVisible ? (
                  <DropdownMenu subTab={item.subTab} />
                ) : null}
              </LiWrapper>
            );
          })}

          {/* <li
            id="menu-item-10242"
            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children nectar-regular-menu-item menu-item-10242"
          >
            <a href="https://gmefinance.com/about-us/">
              <span className="menu-title-text">About Us</span>
            </a>
            <ul className="sub-menu">
              <li
                id="menu-item-10330"
                className="menu-item menu-item-type-custom menu-item-object-custom nectar-regular-menu-item menu-item-10330"
              >
                <a href="https://www.gmefinance.com/about-us/#introduction">
                  <span className="menu-title-text">Introduction</span>
                </a>
              </li>
              <li
                id="menu-item-10331"
                className="menu-item menu-item-type-custom menu-item-object-custom nectar-regular-menu-item menu-item-10331"
              >
                <a href="https://www.gmefinance.com/about-us/#Why">
                  <span className="menu-title-text">Why choose us</span>
                </a>
              </li>
              <li
                id="menu-item-10333"
                className="menu-item menu-item-type-post_type menu-item-object-page nectar-regular-menu-item menu-item-10333"
              >
                <a href="https://gmefinance.com/blogs/">
                  <span className="menu-title-text">Blog</span>
                </a>
              </li>
              <li
                id="menu-item-10334"
                className="menu-item menu-item-type-post_type menu-item-object-page nectar-regular-menu-item menu-item-10334"
              >
                <a href="https://gmefinance.com/contact-us/">
                  <span className="menu-title-text">Contact Us</span>
                </a>
              </li>
            </ul>
          </li> */}
        </UlWrapper>
      </NavWrapper>
    </NavigationWrapper>
  );
};
export default Navigation;

const NavigationWrapper = styled.div`
  @media screen and (min-width: 1000px) {
    float: none;
    margin-left: auto;
    display: flex;
  }
`;
const NavWrapper = styled.nav`
  @media screen and (min-width: 1000px) {
    -webkit-flex-direction: row-reverse;
    display: flex;
  }
`;
const UlWrapper = styled.ul`
  margin-left: 0;
  overflow: visible;
  transition: padding 0.8s ease;
  min-height: 1px;
  line-height: 1px;
  list-style: none outside none;
  margin: 0;
  padding: 0;
  z-index: 10;
  @media screen and (min-width: 1000px) {
    float: none;
    height: auto;
    vertical-align: middle;
    display: flex;
  }
`;
const LiWrapper = styled.li`
  float: left;
  line-height: 12px;
  position: relative;
  list-style: none;
  @media screen and (min-width: 1000px) {
    align-items: center;
    display: flex;
  }
`;
const AWrapper = styled.a`
  opacity: 1;
  cursor: pointer;
  color: #191c1f !important;
  will-change: opacity, color;
  transition: opacity 0.2s ease, color 0.2s ease;
  padding-left: 10px;
  padding-right: 10px;
  margin-bottom: -1px;
  position: relative;
  font-family: Open Sans;
  font-size: 17px;
  line-height: 28px;
  font-weight: 400;
  padding: 0 10px 0 10px;
  display: block;
`;
const SpanWrapper = styled.span`
  color: #191c1f !important;
`;
