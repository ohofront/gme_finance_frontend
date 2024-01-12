import styled from "styled-components";
import background from "assets/images/countries/indonesia/pattern.png";
import Divider from "./Divider";
import DetailContent from "./Detail";
import Sns from "./Sns";
import Divider2 from "./Divider2";
import Divider3 from "./Divider3";
import Post from "./Post";
import Divider4 from "./Divider4";
import BlogsContent from "./Blogs";
import Apply from "./Apply";
import Divider5 from "./Divider5";
import Banner from "./Banner";
import Banner2 from "./Banner2";
const Indonesia = () => {
  return (
    <ContentWrapper>
      <Banner />
      <Banner2 />
      <Divider />
      <DetailContent />
      <Sns />
      <Divider2 />
      <Divider3 />
      <Post />
      <Divider4 />
      <BlogsContent />
      <Apply />
      <Divider5 />
    </ContentWrapper>
  );
};
export default Indonesia;
const ContentWrapper = styled.div`
  background-size: cover;
  //   background-image: url(${background});
  background-repeat: no-repeat;
  height: 100%;
  width: 100%;
`;
