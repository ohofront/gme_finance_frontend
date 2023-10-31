import styled from "styled-components";
import RowWrapper from "./RowWrapper";
import Divider from "./Divider";
import RowBgWrapper from "./RowBgWrapper";
import FooterTab from "utils/Footer";
import Divider2 from "./Divider2";
import logo from "assets/images/footer/footerLogo.png";

const Footer = () => {
  const splitArray = (arr, chunk) => {
    const result = [];
    while (arr.length > 0) {
      let tempArray;
      tempArray = arr.splice(0, chunk);
      result.push(tempArray);
    }
    return result;
  };

  return (
    <FooterSection>
      <FooterContainerRow>
        <FooterRow>
          <RowWrapper isColor={true} />
          <FooterDarkLeft>
            <FooterContainer>
              <FooterColumnInner>
                <FooterWpbWrapper>
                  <Divider height={50} />
                  <FooterContentRowInner>
                    <RowBgWrapper />
                    <FooterContentDarkLeft>
                      {FooterTab.map((item, index) => {
                        return (
                          <FooterContentColumn key={index}>
                            <FooterCotentColumnInner>
                              <FooterContentWpbWrapper>
                                <FooterContetElemtent>
                                  <FooterContentWpbWrapper>
                                    <h2 style={{ lineHeight: 1.25 }}>
                                      <a>{item.name}</a>
                                    </h2>
                                  </FooterContentWpbWrapper>
                                </FooterContetElemtent>
                                <FooterDividerWrapper>
                                  <FooterDividerContent />
                                </FooterDividerWrapper>
                                <div
                                  style={{
                                    display: "flex",
                                    flexDirection: "row",
                                  }}
                                >
                                  {splitArray(item.subTab, 7).map(
                                    (sub, index) => {
                                      return (
                                        <FooterContetElemtent key={index}>
                                          <FooterContentWpbWrapper>
                                            <ul
                                              style={{
                                                listStyle: "none",
                                                marginRight: 20,
                                              }}
                                            >
                                              {sub.map((subitem, index) => {
                                                return (
                                                  <LiWrapper
                                                    key={index}
                                                    style={{
                                                      listStyle: "disc",
                                                      listStylePosition:
                                                        "outside",
                                                    }}
                                                  >
                                                    <a>{subitem}</a>
                                                  </LiWrapper>
                                                );
                                              })}
                                            </ul>
                                          </FooterContentWpbWrapper>
                                        </FooterContetElemtent>
                                      );
                                    }
                                  )}
                                </div>
                              </FooterContentWpbWrapper>
                            </FooterCotentColumnInner>
                          </FooterContentColumn>
                        );
                      })}
                    </FooterContentDarkLeft>
                  </FooterContentRowInner>
                  <Divider2 />
                  <FooterContentRowInner>
                    <RowBgWrapper />
                    <FooterDarkLeft>
                      <FooterLogoContainer>
                        <FooterContentColumnInner>
                          <FooterContentWpbWrapper>
                            <FooterContentImageWrap>
                              <FooterContentInner>
                                <FooterContentHover>
                                  <FooterContentImageLoaded>
                                    <img
                                      src={logo}
                                      style={{
                                        opacity: 1,
                                        transform: "none",
                                        paddingRight: 0,
                                        paddingLeft: 0,
                                        paddingBottom: 0,
                                        display: "block",
                                        minHeight: 1,
                                        minWidth: 1,
                                        margin: "0 auto",
                                        maxWidth: "100%",
                                        height: "auto",
                                        position: "relative",
                                      }}
                                    />
                                  </FooterContentImageLoaded>
                                </FooterContentHover>
                              </FooterContentInner>
                            </FooterContentImageWrap>
                          </FooterContentWpbWrapper>
                        </FooterContentColumnInner>
                      </FooterLogoContainer>
                      <FooterInfoContainer>
                        <FooterContentColumnInner>
                          <FooterContentWpbWrapper>
                            <FooterContetElemtent>
                              <FooterContentWpbWrapper>
                                <p style={{ color: "gray" }}>
                                  상호: 주식회사 지엠이대부
                                  <br />
                                  브랜드명: GME Loan
                                  <br />
                                  대부업등록번호: 2019-금감원-1801
                                  <br />
                                  대부중개업등록번호: 2019-금감원-1801
                                  <br />
                                  대표자: 성종화
                                  <br />
                                  사업자등록번호: 646-88-01104
                                  <br />
                                  소재지: 서울특별시 영등포구 영등포로 150, 비동
                                  202호, 203호, 204호(당산동1가, 생각공장당산)
                                  (우)07292
                                  <br />
                                  전화번호(영업소): 02-765-5555
                                </p>
                              </FooterContentWpbWrapper>
                            </FooterContetElemtent>
                          </FooterContentWpbWrapper>
                        </FooterContentColumnInner>
                      </FooterInfoContainer>
                      <FooterAuthorConainer>
                        <FooterContentColumnInner>
                          <FooterContentWpbWrapper>
                            <FooterContentIconWrapper>
                              <FooterNectarIcon>
                                <a
                                  href="https://www.gmefinance.com/authors/"
                                  style={{
                                    display: "block",
                                    width: "100%",
                                    height: "100%",
                                    position: "absolute",
                                    left: 0,
                                    top: 0,
                                    zIndex: 1,
                                  }}
                                ></a>
                                <i
                                  style={{
                                    fontSize: 30,
                                    lineHeight: "30px",
                                    height: 30,
                                    width: 30,
                                    display: "inline-block",
                                    color: "#c8c8c8",
                                    wordSpacing: 1,
                                    position: "relative",
                                    textAlign: "center",
                                    top: -2,
                                    verticalAlign: "middle",
                                    maxWidth: "100%",
                                  }}
                                  className="fa fa-sign-in"
                                ></i>
                              </FooterNectarIcon>
                            </FooterContentIconWrapper>
                          </FooterContentWpbWrapper>
                        </FooterContentColumnInner>
                      </FooterAuthorConainer>
                    </FooterDarkLeft>
                  </FooterContentRowInner>
                  <Divider2 />
                  <FooterContentRawHtml>
                    <FooterContentWpbWrapper>
                      <p
                        style={{
                          color: "darkgray",
                          fontSize: 13,
                          paddingBottom: 27,
                        }}
                      >
                        대출금리 : 연 20% 이내　　연체금리 :
                        대출금리+연3%이내(법정최고금리 20% 이내) 단, 2021.07.07
                        부터 체결된 갱신, 연장되는 계약에 한함
                      </p>
                      <p
                        style={{
                          color: "darkgray",
                          fontSize: 13,
                          paddingBottom: 27,
                        }}
                      >
                        부대비용 및 중도상환수수료 없음. 이자는 매월 약정일에
                        부과되며, 상환금액은 대출기간 및 상환방법 등 대출계약
                        내용에 따라 달라질 수 있음(예시. 100만원을 연 20%로
                        12개월 동안 원리금균등 상환 시 총 납부금액은
                        1,111,614원). 공공정보, 신용도판단정보, 채무불이행정보
                        등의 보유자는 대출취급이 제한될 수 있습니다.
                        일반금융소비자는 금융판매사업자로부터 충분히 설명을 받을
                        권리가 있으며, 계약체결 전 금융상품 설명서 및 약관을
                        읽어보시기 바랍니다. 일정기간 납부해야 할 원리금이
                        연체될 경우 계약만료 기한이 도래하기 전에 모든 원리금을
                        변제해야 할 의무가 발생할 수 있습니다.
                      </p>
                      <p
                        style={{
                          color: "gray",
                          fontSize: 14,
                          paddingBottom: 27,
                        }}
                      >
                        대출 시 또는 상환능력에 비해 대출금이 과도할 경우 귀하의
                        신용등급 또는 개인신용평점이 하락할 수 있습니다.
                        개인신용평점 하락으로 금융거래와 관련된 불이익이 발생할
                        수 있습니다.
                      </p>
                      <p
                        style={{
                          color: "red",
                          fontSize: 14,
                          paddingBottom: 27,
                        }}
                      >
                        과도한 빚은 당신에게 큰 불행을 안겨줄 수 있습니다.
                      </p>
                      <p style={{ color: "darkgray", fontSize: 13 }}>
                        이자 외 별도로 중개수수료를 수취하는 일은 불법입니다.
                      </p>
                    </FooterContentWpbWrapper>
                  </FooterContentRawHtml>
                  <Divider height={50} />
                  <FooterContetElemtent>
                    <FooterContentWpbWrapper>
                      <p style={{ textAlign: "center" }}>
                        © 2022 GME Finance. |&nbsp;
                        <a href="https://www.gmefinance.com/terms-conditions/">
                          Terms &amp; Conditions
                        </a>{" "}
                        |
                        <a href="https://gmefinance.com/product-manual/">
                          {" "}
                          Product Manual
                        </a>
                      </p>
                    </FooterContentWpbWrapper>
                  </FooterContetElemtent>
                  <Divider height={50} />
                </FooterWpbWrapper>
              </FooterColumnInner>
            </FooterContainer>
          </FooterDarkLeft>
        </FooterRow>
      </FooterContainerRow>
    </FooterSection>
  );
};
export default Footer;
const FooterSection = styled.div`
  background-color: #fafbfc;
  z-index: 11;
  position: relative;
`;
const FooterContainerRow = styled.div`
  padding-bottom: 0;
  position: relative;
  margin: 0 auto;
  @media screen and (min-width: 1300px) {
    max-width: 1100px;
  }
  &::before {
    content: " ";
    display: table;
  }
`;
const FooterRow = styled.div`
  padding-top: 0px;
  padding-bottom: 0px;
  margin-top: 0 !important;
  margin-bottom: 0;
  position: relative;
  box-sizing: content-box;
  background-size: cover;
  width: 100%;
  &::before {
    content: " ";
    display: table;
  }
`;
const FooterDarkLeft = styled.div`
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
const FooterContainer = styled.div`
  display: block;
  float: none;
  background-position: center;
  position: relative;
  padding-left: 1%;
  padding-right: 1%;
  margin-right: 0;
  margin-left: 0;
  margin-bottom: 0;
  &::after {
    content: "";
    display: block;
    height: 0;
    clear: both;
    visibility: hidden;
  }
  @media screen and (min-width: 690px) {
    width: 100%;
  }
`;
const FooterColumnInner = styled.div`
  position: relative;
`;
const FooterWpbWrapper = styled.div``;
const FooterContentRowInner = styled.div`
  margin-bottom: 24px;
  position: relative;
  &::before {
    content: " ";
    display: table;
  }
`;
const FooterContentDarkLeft = styled.div`
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
const FooterContentColumn = styled.div`
  float: none;
  margin-right: 0;
  margin-left: 0;
  padding-left: 1%;
  padding-right: 1%;
  box-shadow: none;
  background-position: center;
  position: relative;
  @media screen and (min-width: 690px) {
    width: 33%;
  }
`;
const FooterCotentColumnInner = styled.div`
  position: relative;
`;
const FooterContentWpbWrapper = styled.div``;
const FooterContetElemtent = styled.div`
  margin-bottom: 0;
`;
const FooterDividerWrapper = styled.div`
  margin-bottom: 0;
`;
const FooterDividerContent = styled.div`
  margin-top: 5px;
  height: 1px;
  margin-bottom: 5px;
  margin: 35px px auto 35px auto;
  background-color: rgba(0, 0, 0, 0.12);
`;
const FooterLogoContainer = styled.div`
  float: none;
  margin-right: 0;
  margin-left: 0;
  padding-left: 1%;
  padding-right: 1%;
  background-position: center;
  position: relative;
  @media screen and (min-width: 690px) {
    width: 16.6%;
  }
`;
const FooterContentColumnInner = styled.div`
  position: relative;
`;
const FooterContentImageWrap = styled.div`
  text-align: center;
  line-height: 0;
  margin-bottom: 0;
`;
const FooterContentInner = styled.div`
  display: inline-block;
  max-width: 75%;
  width: auto;
  height: 100%;
`;
const FooterContentHover = styled.div`
  opacity: 1;
  margin-bottom: 0;
  overflow: visible;
  position: relative;
  text-align: center;
`;

const FooterContentImageLoaded = styled.div`
  text-align: center;
`;
const FooterInfoContainer = styled.div`
  float: none;
  margin-right: 0;
  margin-left: 0;
  padding-left: 1%;
  padding-right: 1%;
  box-shadow: none;
  background-position: center;
  position: relative;
  @media screen and (min-width: 690px) {
    width: 66.6%;
  }
`;
const FooterAuthorConainer = styled.div`
  float: none;
  margin-right: 0;
  margin-left: 0;
  padding-left: 1%;
  padding-right: 1%;
  background-position: center;
  position: relative;
  @media screen and (min-width: 690px) {
    width: 16.7%;
  }
`;

const FooterContentIconWrapper = styled.div`
  margin-bottom: 0;
  display: inline-block;
  position: relative;
`;
const FooterNectarIcon = styled.div`
  padding: 20px;
`;
const FooterContentRawHtml = styled.div`
  margin-bottom: 24px;
`;
const LiWrapper = styled.li`
  list-style: disc;
  list-style-position: outside;
`;
