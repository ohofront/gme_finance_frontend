import Divider from "components/Divider";
import RowBgWrapper from "components/RowBgWrapper";
import styled from "styled-components";
import pattern from "assets/images/countries/myanmar/pattern.jpg";
import RowBgWrapper6 from "components/RowBgWrapper6";
import Promotion from "../Promotion";
import call from "assets/images/countries/myanmar/call.png";
const Call = () => {
  return (
    <>
      <Promotion />
      <CallWrapper>
        {/* <RowBgWrapper6 backgroundImage={pattern} /> */}
        <CallDarkLeft>
          <CallContainer>
            <CallColumnInner>
              <CallWpbWrapper>
                <CallRowInner>
                  <RowBgWrapper6 backgroundImage={pattern} />
                  <CallDarkLeft>
                    <CallImageContainer>
                      <CallColumnInner>
                        <CallWpbWrapper>
                          <Divider height={30} />
                          <CallImageWrapper>
                            <CallImageInner>
                              <CallImageHoverWrapper>
                                <CallImageLoaded>
                                  <img
                                    height={1368}
                                    width={1368}
                                    src={call}
                                    alt=""
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
                                      margin: "0 auto",
                                      position: "relative",
                                    }}
                                  />
                                </CallImageLoaded>
                              </CallImageHoverWrapper>
                            </CallImageInner>
                          </CallImageWrapper>
                        </CallWpbWrapper>
                      </CallColumnInner>
                    </CallImageContainer>
                  </CallDarkLeft>
                </CallRowInner>
              </CallWpbWrapper>
            </CallColumnInner>
          </CallContainer>
        </CallDarkLeft>
      </CallWrapper>
    </>
  );
};
export default Call;
const CallWrapper = styled.div`
  padding-top: 0px;
  padding-bottom: 0px;
  position: relative;
  margin-bottom: 25px;
`;
const CallDarkLeft = styled.div`
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
const CallContainer = styled.div`
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
const CallColumnInner = styled.div`
  position: relative;
`;
const CallWpbWrapper = styled.div``;
const CallRowInner = styled.div`
  position: relative;
  margin-bottom: 24px;
`;
const CallImageContainer = styled.div`
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
const CallImageWrapper = styled.div`
  text-align: center;
  line-height: 0;
  margin-bottom: 0;
`;
const CallImageInner = styled.div`
  height: 100%;
  display: block;
  text-align: center;
`;
const CallImageHoverWrapper = styled.div`
  opacity: 1;
  margin-bottom: 0;
  transition: all 0.65s cubic-bezier(0.05, 0.2, 0.1, 1) !important;
  border-radius: 20px;
  display: inline-block;
  overflow: visible;
  position: relative;
`;
const CallImageLoaded = styled.div`
  display: inline-block;
  transition: transform 0.65s cubic-bezier(0.05, 0.2, 0.1, 1);
`;
