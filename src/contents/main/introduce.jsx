import RowBgWrapper from "components/RowBgWrapper";
import styled from "styled-components";

const Introduce = () => {
  return (
    <IntroduceRowInner>
      <RowBgWrapper />
      <IntroduceDarkLeft>
        <IntroduceContainer>
          <IntroduceColumnInner>
            <IntroduceWbpWrapper>
              <h3
                style={{
                  textAlign: "left",
                  fontFamily: "Poppins",
                  fontSize: 30,
                  fontWeight: 600,
                  marginBottom: 8,
                }}
              >
                Solving Your <br />
                Financial Needs
              </h3>
              <IntroduceContent>
                <IntroduceWbpWrapper>
                  <iframe
                    id="1695796472296_180364552799780"
                    src="https://form.123formbuilder.com/js-form-username-6258808.html?ref=https%3A%2F%2Fgmefinance.com%2F&amp;_referrer_=&amp;_embedType_=embed.js&amp;_iframeID_=1695796472296_180364552799780"
                    frameborder="0"
                    scrolling="no"
                    style={{
                      padding: 0,
                      margin: 0,
                      display: "block",
                      width: "100%",
                      backgroundColor: "transparent",
                      overflow: "hidden",
                      opacity: 1,
                      visibility: "visible",
                      height: 486.4,
                    }}
                  ></iframe>
                </IntroduceWbpWrapper>
              </IntroduceContent>
            </IntroduceWbpWrapper>
          </IntroduceColumnInner>
        </IntroduceContainer>
        <IntroduceContainer>
          <IntroduceColumnInner>
            <IntroduceWbpWrapper>
              <IntroduceElement>
                <IntroduceWbpWrapper>
                  <IntroduceWrapper>
                    <IntroduceDarkLeft>
                      <IntroduceColumn>
                        <IntroduceColumnInner>
                          <IntroduceWbpWrapper>
                            <IntroduceInnerRow>
                              <IntroduceInnerLeft>
                                <IntroduceColumn>
                                  <IntroduceColumnInner>
                                    <IntroduceWbpWrapper>
                                      <IntroduceElement>
                                        <IntroduceWbpWrapper>
                                          <h3
                                            style={{
                                              textAlign: "center",
                                              fontFamily: "Poppins",
                                              fontSize: 30,
                                              fontWeight: 600,
                                              marginBottom: 8,
                                            }}
                                          >
                                            <strong>GME Finance</strong>
                                          </h3>
                                          <p>
                                            <strong>GME Finance</strong>&nbsp;is
                                            a loan company licensed&nbsp; by
                                            Financial Supervisory Services in
                                            Korea in 2019 to provide loans to
                                            the legal foreigners &nbsp;in South
                                            Korea. Any legal foreign worker who
                                            works under legal working contract,
                                            can apply for loan online or
                                            offline.
                                          </p>
                                          <p>
                                            We are the best loan service
                                            provider in South Korea. We are,
                                          </p>
                                          <ul>
                                            <li>Faster with online loans.</li>
                                            <li>
                                              Easy with paperless contracts
                                            </li>
                                            <li>Flexible with Loan policy</li>
                                            <li>
                                              Cheaper with discounted interest
                                              rates
                                            </li>
                                          </ul>
                                        </IntroduceWbpWrapper>
                                      </IntroduceElement>
                                    </IntroduceWbpWrapper>
                                  </IntroduceColumnInner>
                                </IntroduceColumn>
                              </IntroduceInnerLeft>
                            </IntroduceInnerRow>
                          </IntroduceWbpWrapper>
                        </IntroduceColumnInner>
                      </IntroduceColumn>
                    </IntroduceDarkLeft>
                  </IntroduceWrapper>
                </IntroduceWbpWrapper>
              </IntroduceElement>
            </IntroduceWbpWrapper>
          </IntroduceColumnInner>
        </IntroduceContainer>
      </IntroduceDarkLeft>
    </IntroduceRowInner>
  );
};
export default Introduce;
const IntroduceRowInner = styled.div`
  margin-bottom: 24px;
  position: relative;
  &::before {
    content: "";
    display: table;
    color: #191c1f;
    visibility: visible;
  }
  &::after {
    clear: both;
    content: "";
    display: table;
    visibility: visible;
  }
`;
const IntroduceDarkLeft = styled.div`
  display: flex;
  flex-wrap: wrap;
  float: none;
  margin-bottom: 0 !important;
  z-index: 10;
  margin-left: -1%;
  margin-right: -1%;
  width: auto;
  position: relative;
  &::after {
    content: "";
    display: block;
    height: 0;
    clear: both;
    visibility: hidden;
  }
`;
const IntroduceContainer = styled.div`
  float: none;
  margin-right: 0;
  margin-left: 0;
  padding-left: 1%;
  padding-right: 1%;
  box-shadow: none;
  background-position: center;
  position: relative;
  display: block;
  @media screen and (min-width: 690px) {
    width: 50%;
  }
`;
const IntroduceColumnInner = styled.div`
  position: relative;
`;
const IntroduceWbpWrapper = styled.div``;
const IntroduceContent = styled.div`
  margin-bottom: 24px;
`;
const IntroduceElement = styled.div`
  margin-bottom: 0px;
`;
const IntroduceWrapper = styled.div`
  margin-bottom: 24px;
  position: relative;
  &:: before {
    content: "";
    display: table;
  }
`;
const IntroduceColumn = styled.div`
  float: none;
  margin-right: 0;
  margin-left: 0;
  padding-left: 1%;
  padding-right: 1%;
  box-shadow: none;
  background-position: center;
  position: relative;
  display: block;
  @media screen and (min-width: 690px) {
    width: 100%;
  }
`;
const IntroduceInnerRow = styled.div`
  margin-bottom: 0;
  position: relative;
  &:: before {
    content: "";
    display: table;
  }
`;
const IntroduceInnerLeft = styled.div`
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
