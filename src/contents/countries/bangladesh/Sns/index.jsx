import styled from "styled-components";
import banner from "assets/images/countries/bangladesh/banner.png";
import band from "assets/images/countries/bangladesh/band.png";
import facebook from "assets/images/countries/bangladesh/facebook.png";
import imo from "assets/images/countries/bangladesh/imo.png";
import Divider from "components/Divider";
import RowWrapper from "components/RowWrapper";
import RowBgWrapper from "components/RowBgWrapper";
import bangladesh from "assets/images/countries/bangladesh/flag.png";
const Sns = () => {
  return (
    <IntroductionBannerWrapper>
      <RowWrapper backgroundImage={banner} />
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
                  <ContentSnsWrapper>
                    <RowBgWrapper />
                    <ContentSnsDarkLeft>
                      <ContentSnsContainer>
                        <ContentSnsColumnInner>
                          <ContentSnsWpbWrapper></ContentSnsWpbWrapper>
                        </ContentSnsColumnInner>
                      </ContentSnsContainer>
                    </ContentSnsDarkLeft>
                  </ContentSnsWrapper>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      alignContent: "center",
                      justifyContent: "center",
                      textAlign: "center",
                      height: "100%",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        position: "absolute",
                        top: -50,
                        left: 700,
                      }}
                    >
                      <img src={bangladesh} width={200} />
                    </div>
                    <div
                      style={{
                        display: "flex",
                        position: "absolute",
                        bottom: 0,
                        left: 650,
                      }}
                    >
                      <img
                        src={facebook}
                        width={50}
                        style={{ marginRight: 10 }}
                      />
                      <h1
                        style={{
                          fontSize: 16,
                          display: "flex",
                          textAlign: "center",
                          alignItems: "center",
                          alignContent: "center",
                          justifyContent: "center",
                          fontFamily: "poppine",
                          fontWeight: 500,
                          fontStyle: "normal",
                          color: "black",
                        }}
                      >
                        GME Finance Bangladesh
                      </h1>
                    </div>

                    <div
                      style={{
                        display: "flex",
                        position: "absolute",
                        bottom: -80,
                        left: 650,
                      }}
                    >
                      <img src={imo} width={50} style={{ marginRight: 10 }} />
                      <h1
                        style={{
                          fontSize: 16,
                          display: "flex",
                          textAlign: "center",
                          alignItems: "center",
                          alignContent: "center",
                          justifyContent: "center",
                          fontFamily: "poppine",
                          fontWeight: 500,
                          fontStyle: "normal",
                          color: "black",
                        }}
                      >
                        010 4108 6864
                      </h1>
                    </div>

                    <div
                      style={{
                        position: "absolute",
                        bottom: -1450,
                        left: -500,
                      }}
                    >
                      <img src={band} />
                    </div>
                  </div>
                </IntroductionWpbWrapper>
              </IntrouductionContentElement>
            </IntroductionWpbWrapper>
          </IntroductionColumnInner>
        </IntroductionContainer>
      </IntroductionDarkLeft>
    </IntroductionBannerWrapper>
  );
};
export default Sns;
const IntroductionBannerWrapper = styled.div`
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
  position: relative;
`;
const IntrouductionContentElement = styled.div`
  margin-bottom: 0;
`;
const ContentSnsWrapper = styled.div`
  margin-bottom: 0;
  position: relative;
`;
const ContentSnsDarkLeft = styled.div`
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
const ContentSnsContainer = styled.div`
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
    width: 25%;
  }
`;
const ContentSnsColumnInner = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;
`;
const ContentSnsWpbWrapper = styled.div`
  min-height: 1px;
`;
