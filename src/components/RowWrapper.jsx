import styled from "styled-components";

const RowWrapper = () => {
  return (
    <Wrapper>
      <InnerWrapper>
        <Rowbg />
      </InnerWrapper>
    </Wrapper>
  );
};
export default RowWrapper;

const Wrapper = styled.div`
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
const Rowbg = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
`;
