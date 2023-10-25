import RowBgWrapper3 from "components/RowBgWrapper3";
import styled from "styled-components";
import banner from "assets/images/products/banner.jpg";
import RowWrapper from "components/RowWrapper";
const ProductsBanner = () => {
  return (
    <ProductsBannerWrapper>
      <RowWrapper backgroundImage={banner} isColor={false} />
      <ProductsBannerDarkLeft>
        <ProductsBannerLeftContainer></ProductsBannerLeftContainer>
      </ProductsBannerDarkLeft>
    </ProductsBannerWrapper>
  );
};
export default ProductsBanner;
const ProductsBannerWrapper = styled.div`
  padding-top: 0px;
  padding-bottom: 200px;
  z-index: 100;
  position: relative;
  margin-top: 110px;
  visibility: visible;
  box-sizing: content-box;
  background-size: cover;
  width: 100%;
`;
const ProductsBannerDarkLeft = styled.div`
  color: #191c1f;
  float: none;
  display: flex;
  flex-wrap: wrap;
  z-index: 10;
  margin-bottom: 0 !important;
  margin-left: -1%;
  margin-right: -1%;
  width: auto;
  position: relative;
`;
const ProductsBannerLeftContainer = styled.div``;
