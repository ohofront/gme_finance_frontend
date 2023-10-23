import Divider from "components/Divider";
import RowBgWrapper from "components/RowBgWrapper";
import RowBgWrapper2 from "components/RowBgWrapper2";
import styled from "styled-components";
import feature from "utils/Home/feature";

const FeatureContent = () => {
  return (
    <FeatureContentWrapper>
      <RowBgWrapper2 />
      <FeatureContentDarkLeft>
        {feature.map((item, index) => {
          return (
            <FeatureContentContainer key={index}>
              <FeatureContentColumnInner>
                <FeatureContentWpbWrapper>
                  <FeatureContentRowInner>
                    <RowBgWrapper />
                    <FeatureContentDarkLeft>
                      <FeatureContentColumnContainer>
                        <ContentColumnInner>
                          <ContentImageWrapper>
                            <ContentInnerWrapper>
                              <ContentImageLoaded background={item.src} />
                            </ContentInnerWrapper>
                          </ContentImageWrapper>
                          <ContentBgWrapper>
                            <ContentBgOverlay color={item.color} />
                          </ContentBgWrapper>
                          <ContentWbpWrapper>
                            <ContentImgWrapper>
                              <ContentImgInner maxWidth={item.width}>
                                <ContentImgHoverWrapper>
                                  <ContentImgHoverLodaded>
                                    <img
                                      src={item.src}
                                      style={{
                                        opacity: 1,
                                        display: "block",
                                        minHeight: 1,
                                        minWidth: 1,
                                        margin: "0 auto",
                                        maxWidth: "100%",
                                        height: "auto",
                                        position: "relative",
                                        transition: "opacity 0.5s ease",
                                        transform: "none",
                                        paddingRight: 0,
                                        paddingLeft: 0,
                                        paddingBottom: 0,
                                        marginBottom: 0,
                                      }}
                                    />
                                  </ContentImgHoverLodaded>
                                </ContentImgHoverWrapper>
                              </ContentImgInner>
                            </ContentImgWrapper>
                            <Divider height={25} />
                            <h4
                              style={{
                                textAlign: "left",
                                fontFamily: "Poppins",
                                fontSize: 25,
                                fontWeight: 600,
                                marginBottom: 8,
                              }}
                            >
                              {item.title}
                            </h4>
                            <ContentWpbElement>
                              <ContentWbpWrapper>
                                <p>{item.content}</p>
                              </ContentWbpWrapper>
                            </ContentWpbElement>
                          </ContentWbpWrapper>
                        </ContentColumnInner>
                      </FeatureContentColumnContainer>
                    </FeatureContentDarkLeft>
                  </FeatureContentRowInner>
                </FeatureContentWpbWrapper>
              </FeatureContentColumnInner>
            </FeatureContentContainer>
          );
        })}
      </FeatureContentDarkLeft>
    </FeatureContentWrapper>
  );
};
export default FeatureContent;
const FeatureContentWrapper = styled.div`
  padding-top: 0px;
  padding-bottom: 0px;
  margin-bottom: 1.5em;
  position: relative;
`;
const FeatureContentDarkLeft = styled.div`
  display: flex;
  flex-wrap: wrap;
  float: none;
  margin-bottom: 0 !important;
  z-index: 10;
  margin-left: -1%;
  margin-right: -1%;
  width: auto;
  position: relative;
`;
const FeatureContentContainer = styled.div`
  float: none;
  margin-right: 0;
  margin-left: 0;
  margin-bottom: 0;
  padding-left: 1%;
  padding-right: 1%;
  box-shadow: none;
  background-position: center;
  position: relative;
  @media screen and (min-width: 690px) {
    width: 50%;
  }
`;
const FeatureContentColumnInner = styled.div`
  position: relative;
`;
const FeatureContentWpbWrapper = styled.div``;
const FeatureContentRowInner = styled.div`
  margin-bottom: 0;
  position: relative;
  &::before {
    content: " ";
    display: table;
  }
`;
const FeatureContentColumnContainer = styled.div`
  float: none;
  position: relative;
  margin-right: 0;
  margin-left: 0;
  margin-bottom: 0;
  padding-left: 1%;
  padding-right: 1%;
  background-size: cover;
  background-position: center;
  @media screen and (min-width: 690px) {
    width: 100%;
  }
`;
const ContentColumnInner = styled.div`
  padding: calc(1245px * 0.05);
  border-radius: 15px;
  position: relative;
`;
const ContentImageWrapper = styled.div`
  z-index: 0;
  overflow: hidden;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;
const ContentInnerWrapper = styled.div`
  overflow: hidden;
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
`;
const ContentImageLoaded = styled.div`
  background-image: url(${(props) => props.background});
  border-radius: 15px;
  background-position: right center;
  background-size: cover;
  overflow: hidden;
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
`;
const ContentBgWrapper = styled.div`
  border-radius: 15px;
  overflow: hidden;
  opacity: 1;
  pointer-events: none;
  position: absolute;
  z-index: 0;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  content: " ";
  display: block;
`;
const ContentBgOverlay = styled.div`
  opacity: 1;
  background-color: ${(props) => props.color};
  pointer-events: none;
  position: absolute;
  z-index: 0;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  content: " ";
  display: block;
`;
const ContentWbpWrapper = styled.div`
  position: relative;
  z-index: 2;
`;
const ContentImgWrapper = styled.div`
  text-align: center;
  line-height: 0;
  margin-bottom: 0;
`;
const ContentImgInner = styled.div`
  display: inline-block;
  max-width: ${(props) => props.maxWidth}%;
  width: auto;
  height: 100%;
`;
const ContentImgHoverWrapper = styled.div`
  opacity: 1;
  margin-bottom: 15px;
  overflow: hidden;
  position: relative;
`;
const ContentImgHoverLodaded = styled.div`
  text-align: center;
`;

const ContentWpbElement = styled.div`
  max-width: 300px;
  display: inline-block;
  margin-bottom: 0;
`;
