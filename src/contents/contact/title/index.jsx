import RowBgWrapper2 from "components/RowBgWrapper2";
import styled from "styled-components";

const HelpTile = () => {
  return (
    <>
      <HelpTitleWrapper>
        <RowBgWrapper2 />
        <HelpTitleDarkLeft>
          <HelpTitleContainer>
            <HelpTitleColumnInner>
              <HelpTitleWpbWrapper>
                <h2
                  style={{
                    fontSize: 64,
                    lineHeight: 1.25,
                    textAlign: "center",
                    fontFamily: "Rooboto",
                    fontWeight: 700,
                    fontStyle: "normal",
                  }}
                  class="vc_custom_heading"
                >
                  Contact Us
                </h2>
              </HelpTitleWpbWrapper>
            </HelpTitleColumnInner>
          </HelpTitleContainer>
        </HelpTitleDarkLeft>
      </HelpTitleWrapper>
    </>
  );
};
export default HelpTile;
const HelpTitleWrapper = styled.div`
  padding-top: 150px;
  padding-bottom: 60px;
  position: relative;
  margin-bottom: 35px;
`;
const HelpTitleDarkLeft = styled.div`
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
const HelpTitleContainer = styled.div`
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
const HelpTitleColumnInner = styled.div`
  position: relative;
`;
const HelpTitleWpbWrapper = styled.div``;
