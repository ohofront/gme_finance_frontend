import pattern from "assets/images/countries/thailand/pattern.png";
import styled from "styled-components";
import Apply from "./Apply";
import Sns from "./Sns";
import Detail from "./Detail";
import Youtube from "./YouTube";
import PostContent from "./Posts";
import Blogs from "./Blogs";
const Thailand = () => {
  return (
    <ContentWrapper>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <Sns />
        <Apply />
      </div>
      <Detail />
      <Youtube />
      <PostContent />
      <Blogs />
    </ContentWrapper>
  );
};
export default Thailand;
const ContentWrapper = styled.div`
  background-size: cover;
  // background-image: url(${pattern});
  background-repeat: no-repeat;
  height: 100%;
  width: 100%;
`;
