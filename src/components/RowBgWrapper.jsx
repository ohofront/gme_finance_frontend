import styled from "styled-components";

const RowBgWrapper = () => {
  return (
    <Wrapper>
      <RowBg />
    </Wrapper>
  );
};
export default RowBgWrapper;

const Wrapper = styled.div`
  margin-left: 0;
  overflow: hidden;
  height: 100%;
  width: 100%;
  position: absolute;
  left: 0;
  top: 0;
`;
const RowBg = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
`;
