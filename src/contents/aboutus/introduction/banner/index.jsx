import RowBgWrapper3 from "components/RowBgWrapper3";
import styled from "styled-components";
import banner from "assets/images/introduction/banner.png";
import Divider from "components/Divider";
const Banner = () => {
  return (
    <IntroductionBannerWrapper>
      <RowBgWrapper3 backgoundImage={banner} />
      <IntroductionDarkLeft>
        <IntroductionContainer>
          <IntroductionColumnInner>
            <IntroductionWpbWrapper>
              <IntrouductionContentElement>
                <IntroductionWpbWrapper>
                  <h1
                    style={{
                      color: "#fff",
                      fontFamily: "Poppins",
                      fontSize: 36,
                      fontWeight: 600,
                      lineHeight: 1.25,
                    }}
                  >
                    <Divider height={300} />
                  </h1>
                  <h1
                    style={{
                      textAlign: "center",
                      marginBottom: 7,
                      lineHeight: 1.25,
                      fontSize: 36,
                    }}
                  >
                    About GME Finance
                  </h1>
                </IntroductionWpbWrapper>
              </IntrouductionContentElement>
            </IntroductionWpbWrapper>
          </IntroductionColumnInner>
        </IntroductionContainer>
      </IntroductionDarkLeft>
    </IntroductionBannerWrapper>
  );
};
export default Banner;
const IntroductionBannerWrapper = styled.div`
  padding-top: 0px;
  padding-bottom: 200px;
  z-index: 100;
  position: relative;
  margin-top: 100px;
  visibility: visible;
  box-sizing: content-box;
  background-size: cover;
  width: 100%;
`;
const IntroductionDarkLeft = styled.div`
  color: #fff;
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
const IntroductionContainer = styled.div`
  align-items: stretch;
  display: flex;
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
const IntroductionColumnInner = styled.div`
  justify-content: center;
  width: 100%;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  position: relative;
`;
const IntroductionWpbWrapper = styled.div`
  min-height: 1px;
`;
const IntrouductionContentElement = styled.div`
  margin-bottom: 0;
`;
