import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-scroll";
import styled from "styled-components";

const DropdownMenu = (props) => {
  const [subMenu, setSubMenu] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    if (props.subTab !== null) {
      setSubMenu(props.subTab);
    }
  }, [props.subTab]);
  const goPage = (href) => {
    navigate(href);
    window.location.reload();
  };
  return (
    <UlWrapper>
      {subMenu.map((item, index) => {
        return (
          <LiWrapper key={index}>
            {item.href.includes("/") !== true ? (
              <Link
                to="Why"
                spy={true}
                smooth={true}
                style={{
                  position: "relative",
                  fontFamily: "Poppins",
                  fontSize: 16,
                  lineHeight: "28px",
                  fontWeight: 400,
                  color: "#999",
                  padding: "6px 6px",
                }}
              >
                <SpanWrapper>{item.name}</SpanWrapper>
              </Link>
            ) : (
              <AWrapper onClick={() => goPage(item.href)}>
                <SpanWrapper>{item.name}</SpanWrapper>
              </AWrapper>
            )}
          </LiWrapper>
        );
      })}
    </UlWrapper>
  );
};
export default DropdownMenu;

const UlWrapper = styled.ul`
  border-radius: 20px;
  padding: 0px;
  display: block;
  background-color: #fff;
  overflow: hidden;
  background-size: cover;
  background-position: center;
  width: 15em;
  opacity: 1;
  box-shadow: 0 6px 28px rgba(0, 0, 0, 0.08);
  position: absolute;
  top: 100%;
  left: 0;
  list-style: none outside none;
  margin: 0;
  z-index: 10;
`;
const LiWrapper = styled.li`
  display: block;
  flex: none;
  margin: 10px;
  padding: 5px;
  line-height: 5px;
  position: relative;
  transform: translate3d(0, 5px, 0);
  float: none;
  list-style: none;
  font-size: 12px;
  width: 100%;
  cursor: pointer;
`;
const AWrapper = styled.a`
  position: relative;
  font-family: Poppins;
  font-size: 17px;
  line-height: 30px;
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
  &:hover {
    color: #0b3d91 !important;
    border-bottom: solid 3px #c9a24b;
  }
`;
