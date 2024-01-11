import styled from "styled-components";
import Promotion from "./Promotion";
import Sns from "./Sns";
import Header from "./Header";
import Post from "./Post";
import RowBgWrapper8 from "components/RowBgWrapper8";
import background2 from "assets/images/countries/cambodia/background2.jpg";
import DetailContent from "./Detail";
import Facebook from "./Facebook";
import Catalog from "./Catalog";
import ApplyButton2 from "components/ApplyButton2";
import Call from "./Call";
import Apply from "./Apply";
import Footer from "./Footer";

const Cambodia = () => {
  return (
    <ContentWrapper>
      <Promotion />
      <Sns />
      <FullSection>
        {/* <RowBgWrapper8 color={"rgb(255, 255, 255)"} background={background2} /> */}
        <Header title={"OUR FACEBOOK PAGE"} />
        <Post />
        <Header title={"GME LOAN DETAILS"} />
        <DetailContent />
        <Header title={"- វីឌីអូពីរបៀបមើលកម្ចីតាមរយៈកម្មវិធី GME ផងដែរ"} />
        <Facebook />
        <Catalog />
        <ApplyButton2 />
        <Header
          title={
            "ហេតុអ្វីបានជា GME ជាជម្រើសដ៏ល្អសម្រាប់អតិថិជនដែលត្រូវការកម្ចីនៅក្នងប្រទេសកូរ៉េ៖"
          }
        />
        <Call />
        <Apply />
        <Footer />
      </FullSection>
    </ContentWrapper>
  );
};
export default Cambodia;
const ContentWrapper = styled.div`
  background-size: cover;
  background-repeat: no-repeat;
  height: 100%;
  width: 100%;
`;
const FullSection = styled.div`
  padding-top: 0px;
  padding-bottom: 0px;
  margin-bottom: 0;
  box-sizing: content-box;
  position: relative;
  background-size: cover;
  width: 100%;
`;
