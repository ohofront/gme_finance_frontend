import { useEffect, useState } from "react";
import styled from "styled-components";

const DropdownMenu = (props) => {
  const [subMenu, setSubMenu] = useState([]);
  useEffect(() => {
    console.log("menu:", props);
    if (props.subTab !== null) {
      setSubMenu(props.subTab);
    }
  }, [props.subTab]);
  return (
    <UlWrapper>
      {subMenu.map((item, index) => {
        console.log(item);
        return (
          <LiWrapper key={index}>
            <AWrapper>
              <SpanWrapper>{item}</SpanWrapper>
            </AWrapper>
          </LiWrapper>
        );
      })}
    </UlWrapper>
  );
};
export default DropdownMenu;

const UlWrapper = styled.ul`
  border-radius: 20px;
  background-color: #fff;
  padding: 20px;
  width: 20em;
  opacity: 1;
  pointer-events: none;
  display: block;
  box-shadow: 0 6px 28px rgba(0, 0, 0, 0.08);
  position: absolute;
  top: 100%;
  left: 0;
  list-style: none outside none;
  margin: 0;
  z-index: 999;
`;
const LiWrapper = styled.li`
  line-height: 12px;
  position: relative;
  transform: translate3d(0, 13px, 0);
  float: right;
  list-style: none;
  font-size: 12px;
  width: 100%;
`;
const AWrapper = styled.a`
  position: relative;
  font-family: Poppins;
  font-size: 16px;
  line-height: 28px;
  font-weight: 400;
  color: #999;
  padding: 6px 6px;
`;
const SpanWrapper = styled.span`
  position: relative;
  list-style: none outside none;
  margin: 0;
  padding: 0;
  z-index: 10;
`;
