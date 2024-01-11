import { useEffect, useState } from "react";
import styled from "styled-components";

const RowBgWrapper7 = (props) => {
  const [background, setBackground] = useState("");
  useEffect(() => {
    setBackground(props.backgroundImage);
  }, [props]);
  return (
    <Wrapper>
      <InnerWrapper>
        <RowbgImage background={background} />
      </InnerWrapper>
      <RowBgOverlay />
    </Wrapper>
  );
};
export default RowBgWrapper7;

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
  background-color: #ffffff;
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
