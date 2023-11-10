import Divider from "components/Divider";
import RowBgWrapper2 from "components/RowBgWrapper2";
import styled from "styled-components";
import history from "utils/AboutUs/history";

const History = () => {
  return (
    <HistoryWrapper>
      <RowBgWrapper2 />
      <HistoryDarkLeft>
        <HistoryContainer>
          <HistoryWpbWrapper>
            <HistoryContentElement>
              <HistoryWpbWrapper>
                <h3 style={{ textAlign: "center" }}>Upgrading our Service</h3>
                <h3 style={{ textAlign: "center" }}>
                  to serve our Customer in a better way
                </h3>
              </HistoryWpbWrapper>
            </HistoryContentElement>
            <Divider height={50} />
            <HistoryRawHtml>
              <HistoryWpbWrapper>
                <HistoryTimeline>
                  <HistoryTimelinLoaded>
                    <HistroyTimelineWrapper>
                      {history.length > 0 &&
                        history.map((item, index) =>
                          item.location === "right" ? (
                            <HistoryRightWrapper>
                              <HistoryRightInner>
                                <HistoryRightContentWrapper>
                                  <HistoryRightContent>
                                    <h2
                                      style={{
                                        fontSize: 16,
                                        color: "#222222",
                                        fontStyle: "normal",
                                        fontWeight: "normal",
                                      }}
                                    >
                                      {item.year}
                                    </h2>
                                    <p>{item.content}</p>
                                  </HistoryRightContent>
                                </HistoryRightContentWrapper>
                              </HistoryRightInner>
                            </HistoryRightWrapper>
                          ) : (
                            <HistoryLeftWrapper>
                              <HistoryLeftInner>
                                <HistoryLeftContentWrapper>
                                  <HistoryLeftContent>
                                    <h2
                                      style={{
                                        fontSize: 16,
                                        color: "#222222",
                                        fontStyle: "normal",
                                        fontWeight: "normal",
                                      }}
                                    >
                                      {item.year}
                                    </h2>
                                    <p>{item.content}</p>
                                  </HistoryLeftContent>
                                </HistoryLeftContentWrapper>
                              </HistoryLeftInner>
                            </HistoryLeftWrapper>
                          )
                        )}
                    </HistroyTimelineWrapper>
                  </HistoryTimelinLoaded>
                </HistoryTimeline>
              </HistoryWpbWrapper>
            </HistoryRawHtml>
          </HistoryWpbWrapper>
        </HistoryContainer>
      </HistoryDarkLeft>
    </HistoryWrapper>
  );
};
export default History;

const HistoryWrapper = styled.div`
  padding-top: 0px;
  padding-bottom: 0px;
  position: relative;
  margin-bottom: 35px;
`;
const HistoryDarkLeft = styled.div`
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
const HistoryContainer = styled.div`
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
const HistoryWpbWrapper = styled.div``;
const HistoryContentElement = styled.div`
  margin-bottom: 0;
`;
const HistoryRawHtml = styled.div`
  margin-bottom: 24px;
`;
const HistoryTimeline = styled.div`
  margin-bottom: 24px;
`;
const HistoryTimelinLoaded = styled.div`
  opacity: 1;
  box-sizing: border-box;
  position: relative;
  &::before {
    background-color: #ddd;
    bottom: 0;
    content: "";
    left: 50%;
    margin-left: -2px;
    position: absolute;
    top: 0;
    width: 4px;
    z-index: 1;
  }
`;
const HistroyTimelineWrapper = styled.div`
  overflow: hidden;
  position: relative;
  z-index: 2;
`;
const HistoryRightWrapper = styled.div`
  left: 50%;
  padding: 0.625rem 0 0.625rem 2.5rem;
  font-size: 1rem;
  position: relative;
  width: 50%;
  z-index: 2;
  &::after {
    border: 5px solid #ddd;
    background-color: #fff;
    border-radius: 50%;
    content: "";
    height: 10px;
    position: absolute;
    left: -10px;
    transform: translateY(-50%);
    top: 50%;
    width: 10px;
    z-index: 1;
  }
`;
const HistoryRightInner = styled.div``;
const HistoryRightContentWrapper = styled.div``;
const HistoryRightContent = styled.div`
  background: #ffffff;
  border: 1px solid #cccccc;
  border-radius: 10px;
  color: #333;
  display: block;
  padding: 1.25rem;
  position: relative;
  &::before {
    border-bottom: 11px solid transparent;
    border-right: 12px solid #ccc;
    border-left: none;
    border-top: 11px solid transparent;
    left: -12px;
    z-index: 1;
    content: "";
    height: 0;
    position: absolute;
    transform: translateY(-50%);
    top: 50%;
    width: 0;
  }
  &::after {
    border-right: 12px solid #ffffff;
    border-bottom: 10px solid transparent;
    border-left: none;
    border-top: 10px solid transparent;
    left: -10px;
    right: -11px;
    z-index: 2;
    content: "";
    height: 0;
    position: absolute;
    transform: translateY(-50%);
    top: 50%;
    width: 0;
  }
`;

const HistoryLeftWrapper = styled.div`
  font-size: 1rem;
  padding: 0.625rem 2.5rem 0.625rem 0;
  position: relative;
  width: 50%;
  z-index: 2;
  &::after {
    border: 5px solid #ddd;
    background-color: #fff;
    border-radius: 50%;
    content: "";
    height: 10px;
    position: absolute;
    right: -10px;
    transform: translateY(-50%);
    top: 50%;
    width: 10px;
    z-index: 1;
  }
`;
const HistoryLeftInner = styled.div``;
const HistoryLeftContentWrapper = styled.div``;
const HistoryLeftContent = styled.div`
  background: #ffffff;
  border: 1px solid #cccccc;
  border-radius: 10px;
  color: #333;
  display: block;
  padding: 1.25rem;
  position: relative;
  &::before {
    border-bottom: 11px solid transparent;
    border-left: 12px solid #ccc;
    border-top: 11px solid transparent;
    right: -12px;
    z-index: 1;
    content: "";
    height: 0;
    position: absolute;
    transform: translateY(-50%);
    top: 50%;
    width: 0;
    color: #333;
  }
  &::after {
    border-left: 11px solid #ffffff;
    border-bottom: 9px solid transparent;
    border-top: 9px solid transparent;
    right: -11px;
    z-index: 2;
    content: "";
    height: 0;
    position: absolute;
    transform: translateY(-50%);
    top: 50%;
    width: 0;
    color: #333;
  }
`;
