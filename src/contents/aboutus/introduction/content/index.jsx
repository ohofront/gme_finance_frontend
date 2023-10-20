import Divider from "components/Divider";
import RowBgWrapper from "components/RowBgWrapper";
import RowBgWrapper2 from "components/RowBgWrapper2";
import styled from "styled-components";
import feature from "utils/AboutUs/feature";

const IntroductionContent = () => {
  return (
    <ContentWrapper>
      <RowBgWrapper2 />
      <IntroductionContentDarkLeft>
        <IntroductionContentContainer>
          <IntroductionContentColumnInner>
            <IntroductionContentWpbWrapper>
              <Divider height={50} />
              <IntroductionContentRowInner>
                <RowBgWrapper />
                <ContentDarkLeft>
                  <ContentContainer>
                    <ContentColumnInner>
                      <ContentWpbWrapper>
                        <ContentElement>
                          <p style={{ paddingBottom: 26 }}>
                            <strong>GME Finance</strong> is a loan company
                            licensed&nbsp; by Financial Supervisory Services in
                            Korea in 2019 to provide loans to the legal
                            foreigners &nbsp;in South Korea. Any legal foreign
                            worker who works under legal working contract, can
                            apply for loan online or offline.
                          </p>
                          <p style={{ marginBottom: 27 }}>
                            We are the best loan service provider in South
                            Korea. We are,
                          </p>
                          <ul>
                            {feature.map((item, index) => {
                              return (
                                <li style={{ listStyle: "disc" }} key={index}>
                                  {item.content}
                                </li>
                              );
                            })}
                          </ul>
                        </ContentElement>
                      </ContentWpbWrapper>
                    </ContentColumnInner>
                  </ContentContainer>
                </ContentDarkLeft>
              </IntroductionContentRowInner>
            </IntroductionContentWpbWrapper>
          </IntroductionContentColumnInner>
        </IntroductionContentContainer>
      </IntroductionContentDarkLeft>
    </ContentWrapper>
  );
};
export default IntroductionContent;
const ContentWrapper = styled.div`
  padding-top: 0px;
  padding-bottom: 0px;
  position: relative;
  margin-bottom: 35px;
`;
const IntroductionContentDarkLeft = styled.div`
  display: flex;
  flew-wrap: wrap;
  float: none;
  margin-bottom: 0 !important;
  z-index: 10;
  margin-left: -1%;
  margin-right: -1%;
  width: auto;
  position: relative;
`;
const IntroductionContentContainer = styled.div`
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
const IntroductionContentColumnInner = styled.div`
  position: relative;
`;
const IntroductionContentWpbWrapper = styled.div``;
const IntroductionContentRowInner = styled.div`
  margin-bottom: 0;
`;
const ContentDarkLeft = styled.div`
  display: flex;
  flew-wrap: wrap;
  float: none;
  margin-bottom: 0 !important;
  z-index: 10;
  margin-left: -1%;
  margin-right: -1%;
  width: auto;
  position: relative;
`;
const ContentContainer = styled.div`
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
const ContentColumnInner = styled.div`
  position: relative;
`;
const ContentWpbWrapper = styled.div``;
const ContentElement = styled.div`
  margin-bottom: 0;
`;
