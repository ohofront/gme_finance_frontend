import styled from "styled-components";

const RowBgWrapper2 = () => {
  return (
    <Wrapper>
      <InnerWrapper>
        <Rowbg />
      </InnerWrapper>
    </Wrapper>
  );
};
export default RowBgWrapper2;

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
`;
const Rowbg = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
`;
