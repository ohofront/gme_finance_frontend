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
    navigate(href);
    window.location.reload();
  };
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
  color: #0a1f44 !important;
  will-change: opacity, color;
  transition: opacity 0.2s ease, color 0.2s ease;
  padding-left: 10px;
  padding-right: 10px;
  margin-bottom: -1px;
  position: relative;
  font-family: inherit;
  font-size: 16px;
  line-height: 28px;
  font-weight: 600;
  padding: 0 10px 0 10px;
  display: block;
`;
const SpanWrapper = styled.span`
  color: #0a1f44 !important;
  &:hover {
    color: #0b3d91 !important;
    border-bottom: solid 3px #c9a24b;
  }
`;
