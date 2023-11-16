import Divider from "components/Divider";
import Promotion from "../Promotion";
import styled from "styled-components";

const Youtube = () => {
  return (
    <YoutubeDarkLeft>
      <YoutubeContainer>
        <YoutubeColumnInner>
          <Promotion />
          <>
            <YoutubeWpbWrapper>
              <VideoWpbWrapper>
                <iframe
                  title="Digital contract (Myanmar)"
                  width="100%"
                  height={608}
                  src="https://www.youtube.com/embed/H7VzdAdSKT8?feature=oembed"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen=""
                  style={{ opacity: 1, visibility: "visible" }}
                />
              </VideoWpbWrapper>
            </YoutubeWpbWrapper>
          </>
        </YoutubeColumnInner>
      </YoutubeContainer>
    </YoutubeDarkLeft>
  );
};
export default Youtube;
const YoutubeDarkLeft = styled.div`
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
const YoutubeContainer = styled.div`
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
const YoutubeColumnInner = styled.div`
  position: relative;
`;
const YoutubeWpbWrapper = styled.div`
  float: left;
  width: 100%;
  position: relative;
`;
const VideoWpbWrapper = styled.div`
  padding-top: 40px;
  margin-bottom: 0;
  position: relative;
  width: 100%;
  height: 100%;
`;
