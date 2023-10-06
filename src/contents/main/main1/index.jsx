import RowWrapper from "components/RowWrapper";
import styled from "styled-components";
import Video from "./video/index";
import Banner from "./banner/index";

const Main1 = () => {
  return (
    <Main1Wrapper>
      <RowWrapper isColor={false} />
      <VideoOverlay />
      <VideoImage />
      <Video />
      <Banner />
    </Main1Wrapper>
  );
};
export default Main1;
const Main1Wrapper = styled.div`
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
  --scroll-bar-w: 13px;
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
