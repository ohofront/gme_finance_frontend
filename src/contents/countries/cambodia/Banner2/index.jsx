import RowBgWrapper2 from "components/RowBgWrapper2";
import styled from "styled-components";

const Banner2 = () => {
  return (
    <>
      <RowBgWrapper2 />
      <DarkLeft>
        <Container>
          <ColumnInner>
            <WpbWrapper>
              <ContentElement>
                <ContentWbpWrapper>
                  <VideoWrapper>
                    <iframe
                      title="GME FINANCE Introduction Video Nepal"
                      width="1080"
                      height="608"
                      src="https://www.youtube.com/embed/oItSG4IhIz0?feature=oembed"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen=""
                      style={{
                        opacity: 1,
                        visibility: "visible",
                      }}
                    ></iframe>
                  </VideoWrapper>
                </ContentWbpWrapper>
              </ContentElement>
            </WpbWrapper>
          </ColumnInner>
        </Container>
      </DarkLeft>
    </>
  );
};
export default Banner2;
const DarkLeft = styled.div`
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
const Container = styled.div`
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
const ColumnInner = styled.div`
  position: relative;
`;
const WpbWrapper = styled.div``;
const ContentElement = styled.div`
  margin-bottom: 24px;
  margin-top: -100px !important;
  border-radius: 35px !important;
`;
const ContentWbpWrapper = styled.div`
  margin: 0 auto;
  width: 50%;
  position: relative;
  text-align: center;
`;
const VideoWrapper = styled.div`
  padding-top: 56.25%;
  position: relative;
  width: 100%;
  iframe {
    width: 100%;
    height: 100%;
    display: block;
    position: absolute;
    margin: 0;
    top: 0;
    left: 0;
  }
`;
