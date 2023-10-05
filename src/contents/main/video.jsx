import styled from "styled-components";
import Intro from "assets/videos/intro.mp4";
import { useState } from "react";

const Video = () => {
  const [isShow, setIsShow] = useState(false);
  const [fadeIn, setFadeIn] = useState("");
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
        <video
          style={{
            width: "2950px",
            height: "1660px",
            visibility: "visible",
            opacity: 1,
          }}
          onEnded={handleVideoEnd}
          preload="auto"
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
