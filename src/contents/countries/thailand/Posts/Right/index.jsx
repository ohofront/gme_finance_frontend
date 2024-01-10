import RowBgWrapper from "components/RowBgWrapper";
import RowBgWrapper2 from "components/RowBgWrapper2";
import styled from "styled-components";
import facebook from "utils/Countries/Thailand/facebook";

const RightContent = () => {
  return (
    <RightContentWrapper>
      <QuickHeaderRowInner>
        <RowBgWrapper />
        <QuickContentDarkLeft>
          <h1>เฟสบุ๊คโพสต์</h1>
        </QuickContentDarkLeft>
      </QuickHeaderRowInner>
      <QuickHeaderRowInner>
        <RowBgWrapper2 />
        <LicenseDarkLeft>
          <LicenseContainer>
            <LicenseColumnInner>
              <LicenseWpbWrapper>
                <ContentElement>
                  <ContentWbpWrapper>
                    {facebook.map((item, index) => {
                      return (
                        <p style={{ paddingBottom: 27, fontSize: 15 }}>
                          {item.content}
                        </p>
                      );
                    })}
                  </ContentWbpWrapper>
                </ContentElement>
              </LicenseWpbWrapper>
            </LicenseColumnInner>
          </LicenseContainer>
        </LicenseDarkLeft>
      </QuickHeaderRowInner>
    </RightContentWrapper>
  );
};
export default RightContent;
const RightContentWrapper = styled.div`
  width: 50%;
  float: right;
  box-sizing: border-box;
  padding: 50px 0px;
`;
const QuickHeaderRowInner = styled.div`
  margin-bottom: 24px;
  position: relative;
`;
const QuickContentDarkLeft = styled.div`
  display: flex;
  flex-wrap: wrap;
  float: none;
  margin-bottom: 0 !important;
  z-index: 10;

  margin-left: -1%;
  margin-right: -1%;
  width: auto;
  position: relative;

  h1 {
    font-size: 50px;
    font-weight: 900;
    color: red;
  }
  &::after {
    content: "";
    display: block;
    height: 0;
    clear: both;
    visibility: hidden;
  }
`;
const LicenseDarkLeft = styled.div`
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
const LicenseContainer = styled.div`
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
const LicenseColumnInner = styled.div`
  position: relative;
`;
const LicenseWpbWrapper = styled.div``;
const ContentElement = styled.div`
  margin-bottom: 0;
  margin-top: 10px !important;
`;
const ContentWbpWrapper = styled.div``;
