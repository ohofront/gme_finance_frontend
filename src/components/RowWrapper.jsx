import { useEffect, useState } from "react";
import styled from "styled-components";

const RowWrapper = (props) => {
  const [iscolor, setColor] = useState(false);
  useEffect(() => {
    console.log("props:", props);
    setColor(props);
  }, [props]);
  return (
    <Wrapper>
      <InnerWrapper>
        {props.backgroundImage ? (
          <RowbgImage image={props.backgroundImage} />
        ) : (
          <Rowbg $iscolor={iscolor} />
        )}
      </InnerWrapper>
    </Wrapper>
  );
};
export default RowWrapper;

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
  transform: scale(1) translateZ(0);
  height: 100%;
  width: 100%;
  overflow: hidden;
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
`;

const RowbgImage = styled.div`
  background-position: center center;
  background-repeat: no-repeat;
`;
const Rowbg = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-color: ${(props) => (props.iscolor ? "#f2f2f2" : "")};
`;
