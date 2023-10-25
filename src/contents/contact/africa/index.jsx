import RowBgWrapper from "components/RowBgWrapper";
import RowBgWrapper2 from "components/RowBgWrapper2";
import styled from "styled-components";
import africa from "utils/AboutUs/africa";

const AfricaContactUs = () => {
  return (
    <HelpContentWrapper>
      <RowBgWrapper2 />
      <HelpContentDarkLeft>
        <HelpContentContainer>
          <HelpContentColumnInner>
            <HelpContentWpbWrapper>
              <ContentFlagRowInner>
                <RowBgWrapper />
                <ContentFlagDarkLeft>
                  <ContentFlagContainer>
                    <ContentFlagColumnInner>
                      <ContentFlagWpbWrapper>
                        {africa.map((item, index) => {
                          return (
                            <FlagImageWrapper>
                              <FlagInner>
                                <FlagHoverWrapper>
                                  <FlagImageLoaded>
                                    <img
                                      src={item.src}
                                      style={{
                                        opacity: 1,
                                        transition: "opacity 0.5s ease",
                                        transform: 0,
                                        paddingRight: 0,
                                        paddingLeft: 0,
                                        paddingBottom: 0,
                                        marginBottom: 0,
                                        borderRadius: 15,
                                        display: "block",
                                        minHeight: 1,
                                        minWidth: 1,
                                        maxWidth: "100%",
                                        height: "auto",
                                      }}
                                    />
                                  </FlagImageLoaded>
                                </FlagHoverWrapper>
                              </FlagInner>
                            </FlagImageWrapper>
                          );
                        })}
                      </ContentFlagWpbWrapper>
                    </ContentFlagColumnInner>
                  </ContentFlagContainer>
                  <ContentExtraContainer>
                    <ContentFlagColumnInner>
                      <ContentFlagWpbWrapper />
                    </ContentFlagColumnInner>
                  </ContentExtraContainer>
                </ContentFlagDarkLeft>
              </ContentFlagRowInner>
              <ContentRowInner>
                <RowBgWrapper />
                <ContentDarkLeft>
                  <ContentContainer>
                    <ContentColumnInner>
                      <ContentWbpWrapper>
                        <h2
                          style={{
                            fontSize: 20,
                            lineHeight: 1.25,
                            textAlign: "left",
                            fontFamily: "Roboto",
                            fontWeight: 700,
                            fontStyle: "normal",
                          }}
                        >
                          African Region
                        </h2>
                        <ContentSnsIconWrapper>
                          <FacebookIcon>
                            <a
                              href={"https://www.facebook.com/gmeafrica/"}
                              style={{
                                display: "block",
                                width: "100%",
                                height: "100%",
                                position: "absolute",
                                left: 0,
                                top: 0,
                                zIndex: 1,
                              }}
                            />

                            <i
                              className="fa fa-facebook"
                              style={{
                                fontSize: 24,
                                height: 36,
                                width: "36px",
                                color: "#3b5998",
                                display: "inline-block",
                                verticalAlign: "middle",
                                maxWidth: "none",
                                top: 10,
                                wordSpacing: "1px",
                                position: "relative",
                                textAlign: "center",
                              }}
                            ></i>
                          </FacebookIcon>
                        </ContentSnsIconWrapper>
                      </ContentWbpWrapper>
                    </ContentColumnInner>
                  </ContentContainer>
                </ContentDarkLeft>
              </ContentRowInner>
            </HelpContentWpbWrapper>
          </HelpContentColumnInner>
        </HelpContentContainer>
      </HelpContentDarkLeft>
    </HelpContentWrapper>
  );
};
export default AfricaContactUs;

const HelpContentWrapper = styled.div`
  padding-top: 0px;
  padding-bottom: 0px;
  position: relative;
  margin-bottom: 1.5em;
`;
const HelpContentDarkLeft = styled.div`
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
const HelpContentContainer = styled.div`
  align-items: stretch;
  display: flex;
  float: none;
  margin-right: 0;
  margin-left: 0;
  padding-left: 1%;
  padding-right: 1%;
  box-shadow: none;
  background-color: transparent;
  background-position: center;
  position: relative;
  @media screen and (min-width: 690px) {
    width: 100%;
  }
`;
const HelpContentColumnInner = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  width: 100%;
  border-radius: 20px;
  padding: calc(1245px * 0.02);
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  position: relative;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  top: 0;
  &:hover {
    cursor: pointer;
    transform: translateY(-10px);
    box-shadow: 0 15px 20px rgba(0, 0, 0, 0.13);
  }
`;
const HelpContentWpbWrapper = styled.div`
  min-height: 1px;
`;
const ContentFlagRowInner = styled.div`
  margin-bottom: 24px;
  position: relative;
`;
const ContentFlagDarkLeft = styled.div`
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
const ContentFlagContainer = styled.div`
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
    width: 83%;
  }
`;
const ContentExtraContainer = styled.div`
  float: none;
  margin-right: 0;
  margin-left: 0;
  margin-bottom: 0;
  padding-left: 1%;
  padding-right: 1%;
  box-shadow: none;
  text-align: right;
  background-position: center;
  @media screen and (min-width: 690px) {
    width: 16%;
  }
`;
const ContentFlagColumnInner = styled.div`
  position: relative;
`;
const ContentFlagWpbWrapper = styled.div``;
const FlagImageWrapper = styled.div`
  line-height: 0;
  margin-bottom: 0;
  width: 75px;
  display: inline-block;
  margin-right: 15px;
`;
const FlagInner = styled.div`
  height: 100%;
`;
const FlagHoverWrapper = styled.div`
  opacity: 1;
  margin-bottom: 0;
  transition: all 0.65s cubic-bezier(0.05, 0.2, 0.1, 1) !important;
  border-radius: 15px;
  overflow: visible;
  position: relative;
`;
const FlagImageLoaded = styled.div`
  transition: transform 0.65s cubic-bezier(0.05, 0.2, 0.1, 1);
`;
const ContentRowInner = styled.div`
  margin-bottom: 0px;
  position: relative;
`;
const ContentDarkLeft = styled.div`
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
const ContentContainer = styled.div`
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
const ContentColumnInner = styled.div`
  justify-content: flex-end;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;
`;
const ContentWbpWrapper = styled.div`
  min-height: 1px;
`;
const ContentSnsIconWrapper = styled.div`
  margin-bottom: 0;
  display: inline-block;
  position: relative;
`;
const FacebookIcon = styled.div`
  padding: 12px;
  text-align: center;
  line-height: 0px;
  border-radius: 150px;
  position: relative;
  transition: background-color 0.45s cubic-bezier(0.25, 1, 0.33, 1),
    border-color 0.45s cubic-bezier(0.25, 1, 0.33, 1);
  &::before {
    background-color: #3b5998 !important;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    content: "";
    position: absolute;
    display: block;
    border-radius: 100px;
    z-index: -1;
    opacity: 0.11;
  }
`;
