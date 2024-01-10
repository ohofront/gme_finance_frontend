import styled from "styled-components";
import LeftContent from "./Left/index";
import RightContent from "./Right/index";

const PostContent = () => {
  return (
    <ContentWrapper>
      <LeftContent />
      <RightContent />
    </ContentWrapper>
  );
};
export default PostContent;
const ContentWrapper = styled.div`
  display: flex;
  background-color: white;
  padding: 100px;
`;
