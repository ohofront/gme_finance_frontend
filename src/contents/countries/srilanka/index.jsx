import styled from "styled-components";
import Carousel from "../bangladesh/Carousel";

const Srilnaka = () => {
  return (
    <ContentWrapper>
      <Carousel />
    </ContentWrapper>
  );
};
export default Srilnaka;
export const ContentWrapper = styled.div`
  background-repeat: no-repeat;
  background-color: #ffc600;
  height: 100%;
  width: 100%;
`;
