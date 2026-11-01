import styled from "styled-components";
import Intro from "assets/videos/intro.mp4";
import { useState } from "react";

const Video = () => {
  const [isShow, setIsShow] = useState(false);
  const [fadeIn, setFadeIn] = useState("");
  // Keep the video hidden until enough data is buffered so that
  // low-quality first frames are never displayed.
  const [isReady, setIsReady] = useState(false);
  const handleVideoEnd = () => {
    if (isShow === false) {
      setFadeIn("fade-In");
      setTimeout(() => {
        setIsShow(!isShow);
      }, 1000);
    }
    setIsShow(true);
  };
  return (
    <VideoLoaded>
      <VideoInner>
        <StyledVideo
          $ready={isReady}
          onCanPlayThrough={() => setIsReady(true)}
          onEnded={handleVideoEnd}
          preload="auto"
          autoPlay
          muted
          playsInline
        >
          <source src={Intro} type="video/mp4" />
        </StyledVideo>
      </VideoInner>
    </VideoLoaded>
  );
};
export default Video;

const StyledVideo = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  visibility: visible;
  opacity: ${(props) => (props.$ready ? 1 : 0)};
  transition: opacity 0.6s ease;
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
  background-color: #0a1f44;
`;
const VideoInner = styled.div`
  height: 100%;
`;
