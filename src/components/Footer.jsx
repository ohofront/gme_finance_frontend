import styled from "styled-components";
import RowWrapper from "./RowWrapper";
import Divider from "./Divider";
import RowBgWrapper from "./RowBgWrapper";
import FooterTab from "utils/Footer";

const Footer = () => {
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
                                <FooterContetElemtent>
                                  <FooterContentWpbWrapper>
                                    <ul
                                      style={{
                                        marginBottom: 30,
                                        listStyle: "none",
                                      }}
                                    >
                                      {item.subTab.map((item) => {
                                        return (
                                          <li
                                            style={{
                                              listStyle: "disc",
                                              listStylePosition: "outside",
                                            }}
                                          >
                                            <a>{item}</a>
                                          </li>
                                        );
                                      })}
                                    </ul>
                                  </FooterContentWpbWrapper>
                                </FooterContetElemtent>
                              </FooterContentWpbWrapper>
                            </FooterCotentColumnInner>
                          </FooterContentColumn>
                        );
                      })}
                    </FooterContentDarkLeft>
                  </FooterContentRowInner>
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
    width: 25%;
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
