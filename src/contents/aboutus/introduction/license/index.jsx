import Divider from "components/Divider";
import RowBgWrapper2 from "components/RowBgWrapper2";
import styled from "styled-components";
import license from "assets/images/introduction/license.jpg";
const License = () => {
  return (
    <LicenseWrapper>
      <RowBgWrapper2 />
      <LicenseDarkLeft>
        <LicenseContainer>
          <LicenseColumnInner>
            <LicenseWpbWrapper>
              <Divider height={25} />
              <LicenseImageWrapper>
                <LicenseImageInner>
                  <LicenseHoverWrapper>
                    <LicenseHoverImageLoaded>
                      <img
                        style={{
                          opacity: 1,
                          display: "block",
                          minHeight: 1,
                          minWidth: 1,
                          maxWidth: "100%",
                          height: "auto",
                        }}
                        src={license}
                        alt=""
                      />
                    </LicenseHoverImageLoaded>
                  </LicenseHoverWrapper>
                </LicenseImageInner>
              </LicenseImageWrapper>
              <Divider height={25} />
            </LicenseWpbWrapper>
          </LicenseColumnInner>
        </LicenseContainer>
      </LicenseDarkLeft>
    </LicenseWrapper>
  );
};
export default License;
const LicenseWrapper = styled.div`
  padding-top: 0px;
  padding-bottom: 0px;
  position: relative;
  margin-bottom: 35px;
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
const LicenseImageWrapper = styled.div`
  text-align: center;
  line-height: 0;
  margin-bottom: 0;
`;
const LicenseImageInner = styled.div`
  display: inline-block;
  max-width: 50%;
  width: auto;
  height: 100%;
`;
const LicenseHoverWrapper = styled.div`
  opacity: 1;
  transition: all 0.65s cubic-bezier(0.05, 0.2, 0.1, 1) !important;
  overflow: visible;
  margin-bottom: 15px;
  position: relative;
`;
const LicenseHoverImageLoaded = styled.div`
  text-align: center;
`;
