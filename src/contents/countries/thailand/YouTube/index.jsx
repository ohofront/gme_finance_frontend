import RowBgWrapper from "components/RowBgWrapper";
import styled from "styled-components";
import Divider from "components/Divider";
import band from "assets/images/countries/bangladesh/band.png";
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
                  <VideoWpbWrapper style={{ left: "0px" }}>
                    <iframe
                      width="100%"
                      height={608}
                      src="https://www.youtube.com/embed/QUxBfo6QAgk?feature=oembed"
                    />
                  </VideoWpbWrapper>
                </WpbWrapper>
              </YoutubeContentWrapper>
              <Divider height={30} />
            </YoutubeWbpWrapper>
          </YoutubeColumnInner>
        </YoutubeContainer>
      </YoutubeDarkLeft>
    </YoutubeRowInner>
  );
};

export default Youtube;

const YoutubeRowInner = styled.div`
  padding-top: 20px;
  margin-bottom: 24px;
  z-index: 100;
  position: relative;
  box-sizing: content-box;
  background-size: cover;
  width: 100%;
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
  &::after {
    content: "";
    display: block;
    height: 0;
    clear: both;
    visibility: hidden;
  }
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
  &::after {
    content: "";
    display: block;
    height: 0;
    clear: both;
    visibility: hidden;
  }
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
  &::after {
    clear: both;
    content: "";
    display: table;
  }
`;
const WpbWrapper = styled.div`
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
