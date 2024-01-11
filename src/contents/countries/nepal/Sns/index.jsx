import RowBgWrapper from "components/RowBgWrapper";
import styled from "styled-components";
import Flag from "./flag";
import Icon from "./icon";
import RowWrapper2 from "components/RowWrapper2";

const Sns = () => {
  return (
    <>
      <SnsWrapper>
        <RowWrapper2 iscolor={"#ffc600"} />
        <SnsDarkLeft>
          <SnsContainer>
            <SnsColumnInner>
              <SnsWpbWrapper>
                <SnsRowInner>
                  <RowBgWrapper />
                  <SnsRowSpanLeft>
                    <SnsRowContainer>
                      <SnsRowColumnInner>
                        <SnsWpbWrapper>
                          <Flag />
                        </SnsWpbWrapper>
                      </SnsRowColumnInner>
                    </SnsRowContainer>
                    <SnsRowContainer>
                      <SnsRowColumnInner>
                        <SnsWpbWrapper>
                          <Icon />
                        </SnsWpbWrapper>
                      </SnsRowColumnInner>
                    </SnsRowContainer>
                    <SnsRowContainer>
                      <SnsRowColumnInner>
                        <SnsWpbWrapper></SnsWpbWrapper>
                      </SnsRowColumnInner>
                    </SnsRowContainer>
                  </SnsRowSpanLeft>
                </SnsRowInner>
              </SnsWpbWrapper>
            </SnsColumnInner>
          </SnsContainer>
        </SnsDarkLeft>
      </SnsWrapper>
    </>
  );
};
export default Sns;
const SnsWrapper = styled.div`
  padding-top: 0px;
  padding-bottom: 0px;
  position: relative;
  margin-bottom: 35px;
`;
const SnsDarkLeft = styled.div`
  display: flex;
  flex-wrap: wrap;
  float: none;
  margin-bottom: 0 !important;
  z-index: 10;
  margin-left: -1%;
  margin-right: -1%;
  width: auto;
  position: relative;
  @media screen and (min-width: 690px) {
    width: 100%;
  }
`;
const SnsContainer = styled.div`
  float: none;
  margin-right: 0;
  margin-left: 0;
  padding-left: 1%;
  padding-right: 1%;
  box-shadow: none;
  background-position: center;
  position: relative;
  display: block;
  @media screen and (min-width: 690px) {
    width: 100%;
  }
`;
const SnsColumnInner = styled.div`
  text-align: center;
  position: relative;
`;
const SnsWpbWrapper = styled.div``;
const SnsRowInner = styled.div`
  margin-bottom: 0;
  position: relative;
`;
const SnsRowSpanLeft = styled.div`
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
const SnsRowContainer = styled.div`
  float: none;
  margin-right: 0;
  margin-left: 0;
  padding-left: 1%;
  padding-right: 1%;
  box-shadow: none;
  background-position: center;
  position: relative;
  display: block;
  @media screen and (min-width: 690px) {
    width: 33.3%;
  }
`;
const SnsRowColumnInner = styled.div`
  position: relative;
`;
