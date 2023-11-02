import styled from "styled-components";
import Carousel from "./Carousel";
import Sns from "./Sns";
import Youtube from "./YouTube";
import background from "assets/images/countries/bangladesh/backgroundImage.png";
import Detail from "./Detail";
import FacebookPosts from "./Posts";
import Blogs from "./Blogs";
const Bangladesh = () => {
  return (
    <ContentWrapper>
      <Carousel />
      <Sns />
      <Youtube />
      <Detail />
      <FacebookPosts />
      <Blogs />
    </ContentWrapper>
  );
};
export default Bangladesh;
const ContentWrapper = styled.div`
  background-size: cover;
  background-image: url(${background});
  background-repeat: no-repeat;
  height: 100%;
  width: 100%;
`;
