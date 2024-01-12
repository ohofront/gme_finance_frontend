import RowBgWrapper6 from "components/RowBgWrapper6";
import styled from "styled-components";
import Divider from "components/Divider";
import Caroussel from "components/Carousel";
import banner from "utils/Countries/Indonesia/banner";
const Banner = () => {
  return (
    <MyanmarWrapper>
      <RowBgWrapper6 />
      <MyanmarDarkLeft>
        <MyanmarContainer>
          <MyanmarColumnInner>
            <MyanmarWpbWrapper>
              <Divider height={100} />
              <Caroussel props={banner} />
            </MyanmarWpbWrapper>
          </MyanmarColumnInner>
        </MyanmarContainer>
      </MyanmarDarkLeft>
    </MyanmarWrapper>
  );
};
export default Banner;
const MyanmarWrapper = styled.div`
  padding-top: 0px;
  padding-bottom: 0px;
  margin-top: 0 !important;
  margin-bottom: 0 !important;
`;
const MyanmarDarkLeft = styled.div`
  color: #191c1f;
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
const MyanmarContainer = styled.div`
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
const MyanmarColumnInner = styled.div`
  position: relative;
`;
const MyanmarWpbWrapper = styled.div``;
