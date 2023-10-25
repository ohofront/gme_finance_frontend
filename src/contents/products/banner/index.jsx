import styled from "styled-components";
import banner from "assets/images/products/banner.jpg";
import RowWrapper from "components/RowWrapper";
import Divider from "components/Divider";
const ProductsBanner = () => {
  return (
    <ProductsBannerWrapper>
      <RowWrapper backgroundImage={banner} isColor={false} />
      <ProductsBannerDarkLeft>
        <ProductsBannerLeftContainer>
          <ProductsBannerColumnInner>
            <ProductsBannerWpbWrapper>
              <Divider height={100} />
              <Divider height={300} />
            </ProductsBannerWpbWrapper>
          </ProductsBannerColumnInner>
        </ProductsBannerLeftContainer>
        <ProductsBannerCenterContainer>
          <ProductsBannerColumnInner>
            <ProductsBannerWpbWrapper>
              <Divider height={100} />
              <Divider height={300} />
            </ProductsBannerWpbWrapper>
          </ProductsBannerColumnInner>
        </ProductsBannerCenterContainer>
        <ProductsBannerRightContainer>
          <ProductsBannerColumnInner>
            <ProductsBannerWpbWrapper>
              <Divider height={100} />
              <ProductsBannerContentElement>
                <ProductsBannerWpbWrapper>
                  <h3>
                    <span style={{ color: "#800000" }}>Our Products</span>
                  </h3>
                </ProductsBannerWpbWrapper>
              </ProductsBannerContentElement>
              <Divider height={300} />
            </ProductsBannerWpbWrapper>
          </ProductsBannerColumnInner>
        </ProductsBannerRightContainer>
      </ProductsBannerDarkLeft>
    </ProductsBannerWrapper>
  );
};
export default ProductsBanner;
const ProductsBannerWrapper = styled.div`
  padding-top: 0px;
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
const ProductsBannerLeftContainer = styled.div`
  display: block;
  float: none;
  margin-right: 0;
  margin-left: 0;
  padding-left: 1%;
  padding-right: 1%;
  box-shadow: none;
  background-position: center;
  position: relative;
  @media screen and (min-width: 690px) {
    width: 25%;
  }
`;
const ProductsBannerColumnInner = styled.div`
  position: relative;
`;
const ProductsBannerWpbWrapper = styled.div``;
const ProductsBannerCenterContainer = styled.div`
  display: block;
  float: none;
  margin-right: 0;
  margin-left: 0;
  padding-left: 1%;
  padding-right: 1%;
  box-shadow: none;
  background-position: center;
  position: relative;
  @media screen and (min-width: 690px) {
    width: 50%;
  }
`;
const ProductsBannerRightContainer = styled.div`
  display: block;
  float: none;
  margin-right: 0;
  margin-left: 0;
  padding-left: 1%;
  padding-right: 1%;
  box-shadow: none;
  background-position: center;
  position: relative;
  @media screen and (min-width: 690px) {
    width: 25%;
  }
`;
const ProductsBannerContentElement = styled.div`
  margin-bottom: 0;
`;
