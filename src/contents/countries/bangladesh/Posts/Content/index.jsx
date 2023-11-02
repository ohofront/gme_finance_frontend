import styled from "styled-components";
import LeftContent from "./LeftContent";
import RightContent from "./RightContent";

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
`;
