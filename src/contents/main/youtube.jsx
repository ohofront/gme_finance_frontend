import RowBgWrapper from "components/RowBgWrapper";
import styled from "styled-components";

const Youtube = () => {
  return (
    <YoutubeRowInner>
      <RowBgWrapper />
      <YoutubeDarkLeft>
        <YoutubeContainer>
          <YoutubeColumnInner>
            <YoutubeWbpWrapper>
              <YoutubeContentWrapper>
                <WpbWrapper>
                  <VideoWpbWrapper>
                    <iframe
                      width={1080}
                      height={608}
                      src="https://www.youtube.com/embed/oeOPWfxZ0ZI?feature=oembed"
                    />
                  </VideoWpbWrapper>
                </WpbWrapper>
              </YoutubeContentWrapper>
            </YoutubeWbpWrapper>
          </YoutubeColumnInner>
        </YoutubeContainer>
      </YoutubeDarkLeft>
    </YoutubeRowInner>
  );
};

export default Youtube;

const YoutubeRowInner = styled.div`
  margin-bottom: 24px;
  position: relative;
  &::before {
    content: "";
    display: table;
    color: #191c1f;
    visibility: visible;
  }
  &::after {
    clear: both;
    content: "";
    display: table;
    visibility: visible;
  }
`;
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
  background-position: center;
  position: relative;
  padding-left: 1%;
  padding-right: 1%;
  margin-right: 0;
  margin-left: 0;
  margin-bottom: 0;
  @media screen and (min-width: 690px) {
    width: 100%;
  }
`;
const YoutubeColumnInner = styled.div`
  padding-right: 0;
  padding-bottom: 0;
  padding-left: 0;
  width: 100%;
  position: relative;
  @media screen and (min-width: 1425px) {
    padding: calc(1245px * 0.1);
  }
}
`;
const YoutubeWbpWrapper = styled.div``;
const YoutubeContentWrapper = styled.div`
  margin-bottom: 24px;
  visibility: visible;
  &::before {
    content: "";
    display: table;
    color: #191c1f;
    visibility: visible;
  }
`;
const WpbWrapper = styled.div`
  float: left;
  width: 100%;
  position: relative;
`;
const VideoWpbWrapper = styled.div`
  padding-top: 56.25%;
  margin-bottom: 0;
  position: relative;
  width: 100%;
`;
