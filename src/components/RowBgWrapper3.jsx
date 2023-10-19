import { useEffect, useState } from "react";
import styled from "styled-components";

const RowBgWrapper3 = (props) => {
  const [background, setBackground] = useState("");
  useEffect(() => {
    console.log("props:", props);
    setBackground(props.backgoundImage);
  }, [props]);
  useEffect(() => {
    console.log("background: ", background);
  }, [background]);
  return (
    <Wrapper>
      <InnerWrapper>
        <RowbgImage background={background} />
      </InnerWrapper>
      <RowBgOverlay />
    </Wrapper>
  );
};
export default RowBgWrapper3;

const Wrapper = styled.div`
  --scroll-bar-w: 13px;
  margin-left: calc(-50vw + var(--scroll-bar-w) / 2);
  left: 50%;
  width: calc(100vw - var(--scroll-bar-w));
  overflow: hidden;
  height: 100%;
  position: absolute;
  top: 0;
`;
const InnerWrapper = styled.div`
  height: 100%;
  width: 100%;
  overflow: hidden;
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  transform: scale(1) translateZ(0);
  transition: transform 0.95s 0s cubic-bezier(0.3, 0.58, 0.42, 0.9);
`;

const RowbgImage = styled.div`
  background-position: center center;
  background-repeat: no-repeat;
  background-image: url(${(props) => props.background});
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  transition: opacity 0.4s ease 0.2s;
`;
const RowBgOverlay = styled.div`
  background: linear-gradient(
    90deg,
    #ed1c24 0%,
    rgba(255, 255, 255, 0.001) 100%
  );
  opacity: 0.8;
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  content: " ";
  z-index: 2;
  backface-visibility: hidden;
`;
