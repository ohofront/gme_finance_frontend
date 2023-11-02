import styled from "styled-components";
import BlogsHeader from "./Header";
import BlogsContent from "./Content";

const Blogs = () => {
  return (
    <BlogsWrapper>
      <BlogsHeader />
      <BlogsContent />
    </BlogsWrapper>
  );
};
export default Blogs;
const BlogsWrapper = styled.div`
  padding: 0 200px !important;
`;
