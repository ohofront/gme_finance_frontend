import styled from "styled-components";
import Logo from "./Logo";
import ToBottomMenu from "./ToBottomMenu";
import Navigation from "./Navigation";
import { useEffect, useState } from "react";

const Header = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const updateScroll = () => {
    setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  };
  useEffect(() => {
    window.addEventListener("scroll", updateScroll);
  });
  useEffect(() => {
    console.log("scrollPosition:", scrollPosition);
  }, [scrollPosition]);
  return (
    <HeaderOuter scroll={scrollPosition}>
      <HeaderTop>
        <HedaerContainer>
          <HeaderRow>
            <Logo />
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
  overflow: visible;
  box-shadow: ${(props) =>
    props.scrollPosition < 100 ? "0 4px 4px -4px black" : ""};
`;
const HeaderTop = styled.header`
  position: relative;
  z-index: 9998;
  width: 100%;
`;
const HedaerContainer = styled.div`
  margin: 0px auto;
  position: relative;
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
