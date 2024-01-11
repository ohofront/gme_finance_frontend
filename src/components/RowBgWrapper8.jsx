import { useEffect, useState } from "react";
import styled from "styled-components";

const RowBgWrapper8 = (props) => {
  const [background, setBackground] = useState("");
  const [color, setColor] = useState("");
  useEffect(() => {
    setBackground(props.background);
    setColor(props.color);
  }, [props]);

  return (
    <Wrapper>
      <InnerWrapper>
        <RowBgImage color={color} background={background} />
      </InnerWrapper>
    </Wrapper>
  );
};
export default RowBgWrapper8;

const Wrapper = styled.div`
  --scroll-bar-w: 13px;
  margin-left: calc(-50vw + var(--scroll-bar-w) / 2);
  left: 50%;
  width: calc(110vw - var(--scroll-bar-w));
  height: 100%;
  position: absolute;
  overflow: hidden;
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
`;

const RowBgImage = styled.div`
  background-position: center bottom;
  background-repeat: no-repeat;
  background-color: ${(props) => props.color};
  background-image: url(${(props) => props.background});
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  transition: opacity 0.4s ease 0.2s;
`;
