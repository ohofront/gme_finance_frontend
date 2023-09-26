import styled from "styled-components";

const ToBottomMenu = () => {
  return (
    <NavWrapper>
      <UlWrapper>
        <LiWrapper>
          <AWrapper>
            <SpanWrapper>
              (주)지엠이대부 2019-금감원-1801 (대부업/대부중개업)
            </SpanWrapper>
          </AWrapper>
        </LiWrapper>
      </UlWrapper>
    </NavWrapper>
  );
};
export default ToBottomMenu;

const NavWrapper = styled.nav`
  @media screen and (min-width: 1000px) {
    display: flex;
  }
`;
const UlWrapper = styled.ul`
  overflow: visible;
  transition: padding 0.8s ease, margin 0.25s ease;
  min-height: 1px;
  line-height: 1px;
  margin: 0;
  padding: 0;
  z-index: 10;
  @media screen and (min-width: 1000px) {
    display: flex;
    float: none;
    vertical-align: middle;
  }
`;
const LiWrapper = styled.li`
  float: left;
  outline: 0 none;
  line-height: 0;
  font-size: 12px;
  position: relative;
  margin: 0;
  padding: 0;
  z-index: 10;
  @media screen and (min-width: 1000px) {
    display: flex;
    align-items: center;
  }
`;
const AWrapper = styled.a`
  color: #191c1f !important;
  opacity: 0.75;
  will-change: opacity, color;
  transition: opacity 0.2s ease, color 0.2s ease;
  padding-left: 10px;
  padding-right: 10px;
  font-family: Poppins;
  font-size: 16px;
  line-height: 28px;
  font-weight: 400;
`;
const SpanWrapper = styled.span`
  list-style: none outside none;
  margin: 0;
  padding: 0;
  cursor: pointer;
`;
