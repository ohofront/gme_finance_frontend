import styled from "styled-components";
import Banner from "./Banner";
import Youtube from "./Youtube";
import Header from "./Header";
import Card from "./Card";
import Sns from "./Sns";
import DetailContent from "./Detail";
import Promotion from "./Promotion";
import Csr from "./Csr";
import Feature from "./Feature";
import BlogsContent from "./Blogs";
import Apply from "./Apply";

const Nepal = () => {
  return (
    <ContentWrapper>
      <Banner />
      <Youtube />
      <Header title={"जी एम ई फाईनान्स"} />
      <Card />
      <Sns />
      <Header title={"GME LOAN DETAILS"} />
      <DetailContent />
      <Header title={"जी एम ई फाईनान्सका सेवा तथा सुबिधाहरु"} />
      <Promotion />
      <Header title={"जी एम ई फाईनान्सको सामाजिक प्रतिवद्दता - CSR"} />
      <Csr />
      <Header title={"कोरिया एक आकर्षक गन्तब्य"} />
      <Feature />
      <Header title={"OUR BLOGS"} />
      <BlogsContent />
      <Apply />
    </ContentWrapper>
  );
};
export default Nepal;
const ContentWrapper = styled.div`
  background-size: cover;
  background-repeat: no-repeat;
  height: 100%;
  width: 100%;
`;
