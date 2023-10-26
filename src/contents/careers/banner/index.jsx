import styled from "styled-components";
import banner from "assets/images/careers/banner.png";
import RowWrapper from "components/RowWrapper";
import Divider from "components/Divider";
const CareersBanner = () => {
  return (
    <BannerWrapper>
      <RowWrapper backgroundImage={banner} isColor={false} />
      <BannerDarkLeft>
        <BannerContainer>
          <BannerColumnInner>
            <BannerWpbWrapper>
              <Divider height={300} />
              <h1
                style={{
                  fontSize: 60,
                  color: "#ffffff",
                  textAlign: "center",
                  fontFamily: "Roboto",
                  fontWeight: 700,
                  fontStyle: "normal",
                }}
              >
                Careers
              </h1>
              <Divider height={300} />
            </BannerWpbWrapper>
          </BannerColumnInner>
        </BannerContainer>
      </BannerDarkLeft>
    </BannerWrapper>
  );
};
export default CareersBanner;
const BannerWrapper = styled.div`
  z-index: 100;
  position: relative;
  margin-top: 100px;
  visibility: visible;
  box-sizing: content-box;
  background-size: cover;
  width: 100%;
`;
const BannerDarkLeft = styled.div`
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
const BannerContainer = styled.div`
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
    width: 100%;
  }
`;
const BannerColumnInner = styled.div`
  position: relative;
`;
const BannerWpbWrapper = styled.div``;
