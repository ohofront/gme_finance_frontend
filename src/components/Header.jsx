import styled from "styled-components";
import Logo from "./Logo";
import ToBottomMenu from "./ToBottomMenu";
import Navigation from "./Navigation";
import { useEffect, useState } from "react";

const Header = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const isScroll = scrollPosition >= 100;
  const updateScroll = () => {
    setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  };
  useEffect(() => {
    window.addEventListener("scroll", updateScroll);
  });
  return (
    <HeaderOuter isscroll={isScroll}>
      <HeaderTop>
        <HedaerContainer>
          <HeaderRow>
            <Logo isScroll={isScroll} />
            <ToBottomMenu />
            <Navigation />
          </HeaderRow>
        </HedaerContainer>
      </HeaderTop>
    </HeaderOuter>
  );
};

const HeaderOuter = styled.div`
  width: 100%;
  top: 0;
  left: 0;
  position: fixed;
  z-index: 9999;
  border-top: 4px solid #0a1f44;
  backdrop-filter: blur(6px);
  overflow: visible;
  box-shadow: ${(props) =>
    props.isscroll ? "0 4px 24px rgba(10,31,68,0.15)" : "0 1px 0 rgba(10,31,68,0.08)"};
  background-color: ${(props) => "rgba(255,255,255,0.98)"};
  transition: transform 0.3s ease 0s, background-color 0.3s ease 0s,
    opacity 0.3s ease 0s, box-shadow 0.3s ease 0s, border-color 0.3s ease 0s,
    margin 0.25s ease-out 0s;
`;
const HeaderTop = styled.header`
  position: relative;
  z-index: 9998;
  width: 100%;
`;
const HedaerContainer = styled.div`
  margin: 0px auto;
  position: relative;
  &::before {
    content: " ";
    display: table;
  }
  &::after {
    content: " ";
    display: table;
    clear: both;
  }
  @media screen and (min-width: 1300px) {
    max-width: 1100px;
  }
`;
const HeaderRow = styled.div`
  position: relative;
  padding-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  @media screen and (min-width: 1000px) {
    display: flex;
  }
`;
export default Header;
