import styled from "styled-components";

const Divider = () => {
  return (
    <Wrapper>
      <Content />
    </Wrapper>
  );
};
export default Divider;
const Wrapper = styled.div`
  margin-bottom: 0;
`;
const Content = styled.div`
  height: 30px;
`;
