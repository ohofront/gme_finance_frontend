import styled from "styled-components";

const Divider2 = () => {
  return (
    <Wrapper>
      <Content />
    </Wrapper>
  );
};
export default Divider2;
const Wrapper = styled.div`
  margin-bottom: 0;
`;
const Content = styled.div`
  margin-top: 25px;
  height: 1px;
  margin-bottom: 25px;
  transform: scale(1, 1);
  visibility: visible;
  margin: 35px auto 35px auto;
  background-color: rgba(0, 0, 0, 0.12);
`;
