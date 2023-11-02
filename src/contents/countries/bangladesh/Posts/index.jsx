import styled from "styled-components";
import PostContent from "./Content";
import PostHeader from "./Header";

const FacebookPosts = () => {
  return (
    <FacebookWrapper>
      <PostHeader />
      <PostContent />
    </FacebookWrapper>
  );
};
export default FacebookPosts;
const FacebookWrapper = styled.div`
  padding: 200px !important;
`;
