import RowWrapper from "components/RowWrapper";
import styled from "styled-components";
import Video from "./video";
import Youtube from "./youtube";
import Divider from "./divider";
import Introduce from "./introduce";
import QuickHeader from "./quickHeader";
import QuickContent from "./quickContent";

const Banner = () => {
  return (
    <BannerWrapper>
      <RowWrapper />
      <VideoOverlay />
      <VideoImage />
      <Video />
      <BannerDarkLeft>
        <BannerContainer>
          <BannerColumnInner>
            <BannerWbpWrapper>
              <Youtube />
              <Divider />
              <Introduce />
              <QuickHeader />
              <QuickContent />
            </BannerWbpWrapper>
          </BannerColumnInner>
        </BannerContainer>
      </BannerDarkLeft>
    </BannerWrapper>
  );
};
export default Banner;

const BannerWrapper = styled.div`
  padding-top: 0px;
  padding-bottom: 0px;
  min-height: 100vh;
  z-index: 100;
  margin-bottom: 0;
  visibility: visible;
  position: relative;
  background-size: cover;
  width: 100%;
  @media only screen and (min-width: 1000px) {
    margin-top: 0 !important;
  }
`;

const VideoOverlay = styled.div`
  --scroll-bar-w: 13px;
  border-radius: 20px;
  opacity: 0.7;
  margin-left: calc(-50vw + var(--scroll-bar-w) / 2);
  left: 50%;
  width: calc(100vw - var(--scroll-bar-w));
  height: 100%;
  position: absolute;
  -webkit-backface-visibility: hidden;
  top: 0;
  padding-bottom: 0;
  z-index: 3;
`;

const VideoImage = styled.div`
  margin-left: calc(-50vw + var(--scroll-bar-w) / 2);
  left: 50%;
  width: calc(100vw - var(--scroll-bar-w));
  position: absolute;
  z-index: 1;
  top: 0;
  display: none;
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
`;
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
