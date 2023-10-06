import styled from "styled-components";
import RowWrapper from "./RowWrapper";

const Footer = () => {
  return (
    <FooterSection>
      <FooterContainerRow>
        <FooterRow>
          <RowWrapper isColor={true} />
          <FooterDarkLeft>
            <FooterContainer>
              <FooterColumnInner>
                <FooterWpbWrapper></FooterWpbWrapper>
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
