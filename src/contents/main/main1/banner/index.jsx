import Youtube from "./youtube/index";
import Divider from "components/Divider";
import Introduce from "./introduce/index";
import QuickHeader from "../banner/quickHeader/index";
import QuickContent from "../banner/quickContent/index";
import styled from "styled-components";

const Banner = () => {
  return (
    <BannerDarkLeft>
      <BannerContainer>
        <BannerColumnInner>
          <BannerWbpWrapper>
            <Youtube />
            <Divider height={20} />
            <Introduce />
            <QuickHeader />
            <QuickContent />
          </BannerWbpWrapper>
        </BannerColumnInner>
      </BannerContainer>
    </BannerDarkLeft>
  );
};
export default Banner;
const BannerDarkLeft = styled.div`
  min-height: 100vh;
  display: flex;
  align-content: center;
  float: none;
  flex-wrap: wrap;
  z-index: 10;
  position: relative;
  width: auto;
`;
const BannerContainer = styled.div`
  align-items: stretch;
  display: flex;
  float: none;
  overflow: hidden;
  opacity: 1;
  position: relative;
  width: 100%;
`;
const BannerColumnInner = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;
`;

const BannerWbpWrapper = styled.div`
  min-height: 1px;
`;
