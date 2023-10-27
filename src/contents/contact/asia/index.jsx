import RowBgWrapper from "components/RowBgWrapper";
import RowBgWrapper2 from "components/RowBgWrapper2";

import styled from "styled-components";
import asia from "utils/AboutUs/asia";
import tiktok from "assets/images/contact/sns/tiktok.png";
const AisaContactUs = () => {
  return (
    <HelpContentWrapper>
      <RowBgWrapper2 />
      <HelpContentDarkLeft>
        {asia.map((item, index) => {
          return (
            <HelpContentContainer key={index}>
              <HelpContentColumnInner>
                <HelpContentWpbWrapper>
                  <ContentFlagWrapper>
                    <RowBgWrapper />
                    <ContentFlagDarkLeft>
                      <ContentFlagContainer>
                        <ContentFlagColumnInner>
                          <ContentFlagWpbWrapper>
                            <ContentFlagImageWrapper>
                              <ContentFlagImageInner>
                                <ContentFlagHoverWrapper>
                                  <ContentFlagImagLoaded>
                                    <img
                                      src={item.flag}
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
                                  </ContentFlagImagLoaded>
                                </ContentFlagHoverWrapper>
                              </ContentFlagImageInner>
                            </ContentFlagImageWrapper>
                          </ContentFlagWpbWrapper>
                        </ContentFlagColumnInner>
                      </ContentFlagContainer>
                      <ContentFlagContainer>
                        <ContentFlagColumnInner>
                          <ContentFlagWpbWrapper />
                        </ContentFlagColumnInner>
                      </ContentFlagContainer>
                    </ContentFlagDarkLeft>
                  </ContentFlagWrapper>
                  <h2
                    style={{
                      fontSize: 20,
                      textAlign: "left",
                      fontFamily: "Roboto",
                      fontWeight: 700,
                      fontStyle: "normal",
                    }}
                  >
                    {item.name}
                  </h2>
                  <ContentSnsWrapper>
                    <RowBgWrapper />
                    <ContentSnsDarkLeft>
                      {item.sns.map((item, index) => {
                        return (
                          <ContentSnsContainer key={index}>
                            <ContentSnsColumnInner>
                              <ContentSnsWpbWrapper>
                                {item.type === "facebook" ? (
                                  <ContentSnsIconWrapper>
                                    <FacebookIcon>
                                      <a
                                        href={item.src}
                                        style={{
                                          display: "block",
                                          width: "100%",
                                          height: "100%",
                                          position: "block",
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
                                          width: 36,
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
                                ) : item.type === "instagram" &&
                                  item.src !== null ? (
                                  <ContentSnsIconWrapper>
                                    <InstagramIcon>
                                      <a
                                        href={item.src}
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
                                        style={{
                                          fontSize: 50,
                                          height: 50,
                                          width: 50,
                                        }}
                                        className="fa fa-instagram"
                                      ></i>
                                    </InstagramIcon>
                                  </ContentSnsIconWrapper>
                                ) : item.type === "tiktok" ? (
                                  <ContentFlagImageWrapper>
                                    <ContentFlagImageInner>
                                      <ContentFlagHoverWrapper>
                                        <ContentFlagImagLoaded>
                                          <a
                                            href={item.src}
                                            style={{
                                              display: "block",
                                              width: "100%",
                                              height: "100%",
                                              position: "block",
                                              left: 0,
                                              top: 0,
                                              zIndex: 1,
                                            }}
                                          />
                                          <img
                                            src={tiktok}
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
                                        </ContentFlagImagLoaded>
                                      </ContentFlagHoverWrapper>
                                    </ContentFlagImageInner>
                                  </ContentFlagImageWrapper>
                                ) : null}
                              </ContentSnsWpbWrapper>
                            </ContentSnsColumnInner>
                          </ContentSnsContainer>
                        );
                      })}
                    </ContentSnsDarkLeft>
                  </ContentSnsWrapper>
                </HelpContentWpbWrapper>
              </HelpContentColumnInner>
            </HelpContentContainer>
          );
        })}
      </HelpContentDarkLeft>
    </HelpContentWrapper>
  );
};
export default AisaContactUs;

const HelpContentWrapper = styled.div`
  padding-top: 0px;
  padding-bottom: 0px;
  position: relative;
  margin-bottom: 35px;
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
  background-position: center;
  position: relative;
  margin-bottom: 30px;
  @media screen and (min-width: 690px) {
    width: 33.3%;
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
const ContentFlagWrapper = styled.div`
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
    width: 50%;
  }
`;
const ContentFlagColumnInner = styled.div`
  position: relative;
`;
const ContentFlagWpbWrapper = styled.div``;
const ContentFlagImageWrapper = styled.div`
  line-height: 0;
  margin-bottom: 0;
`;
const ContentFlagImageInner = styled.div`
  max-width: 75%;
  width: auto;
  height: 100%;
`;
const ContentFlagHoverWrapper = styled.div`
  opacity: 1;
  margin-bottom: 0;
  transition: all 0.65s cubic-bezier(0.05, 0.2, 0.1, 1) !important;
  border-radius: 15px;
  overflow: visible;
  position: relative;
`;
const ContentFlagImagLoaded = styled.div`
  transition: transform 0.65s cubic-bezier(0.05, 0.2, 0.1, 1);
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
const ContentSnsIconWrapper = styled.div`
  margin-bottom: 0;
  display: inline-block;
  position: relative;
`;
const InstagramIcon = styled.div`
  padding: 12px;
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
