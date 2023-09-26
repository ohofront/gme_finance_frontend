import styled from "styled-components";
import Intro from "assets/videos/intro.mp4";

const Video = () => {
  return (
    <VideoLoaded>
      <VideoInner>
        <video
          style={{
            width: "2950px",
            height: "1660px",
            visibility: "visible",
            opacity: 1,
          }}
          preload="auto"
          loop={true}
          autoPlay
          muted
          playsInline
        >
          <source src={Intro} type="video/mp4" />
        </video>
      </VideoInner>
    </VideoLoaded>
  );
};
export default Video;

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

const VideoLoaded = styled.div`
  opacity: 1;
  height: 100%;
  margin-left: -50vw;
  left: 50%;
  width: 100vw !important;
  position: absolute;
  top: 0;
  padding-bottom: 0;
  overflow: hidden;
  z-index: 1;
`;
const VideoInner = styled.div`
  height: 100%;
`;
