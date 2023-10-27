import { useEffect, useState } from "react";
import styled from "styled-components";

const RowBgWrapper4 = (props) => {
  const [background, setBackground] = useState("");
  const [color, setColor] = useState("");
  useEffect(() => {
    setBackground(props.backgroundImage);
    setColor(props.color);
  }, [props]);
  return (
    <Wrapper>
      <InnerWrapper>
        <RowBgImage background={background} />
      </InnerWrapper>
      <RowBgOverlay color={color} />
    </Wrapper>
  );
};
export default RowBgWrapper4;
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
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
  background-image: url(${(props) => props.background});
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
`;
const RowBgOverlay = styled.div`
  background-color: ${(props) => props.color};
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
