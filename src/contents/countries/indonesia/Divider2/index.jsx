import RowBgWrapper7 from "components/RowBgWrapper7";
import styled from "styled-components";
import pattern from "assets/images/countries/indonesia/pattern.png";
import divdider2 from "assets/images/countries/indonesia/divider2.png";

const Divider2 = () => {
  return (
    <Wrapper>
      <RowBgWrapper7 backgroundImage={pattern} />
      <DarkLeft>
        <Container>
          <VcColumnInner>
            <WpbWrapper>
              <ImageWithWrapper>
                <Inner>
                  <HoverWrapper>
                    <img
                      src={divdider2}
                      style={{
                        height: "480px",
                      }}
                    />
                  </HoverWrapper>
                </Inner>
              </ImageWithWrapper>
            </WpbWrapper>
          </VcColumnInner>
        </Container>
      </DarkLeft>
    </Wrapper>
  );
};
export default Divider2;

const Wrapper = styled.div`
  padding-bottom: 0px;
  margin-bottom: 0px;
  z-index: 110;
  visibility: visible;
  box-sizing: content-box;
  position: relative;
  background-size: cover;
  width: 100%;
  &::before {
    content: "";
    display: table;
  }
`;
const DarkLeft = styled.div`
  float: none;
  display: flex;
  flex-wrap: wrap;
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
  margin-top: -150px;
  margin-left: 0;
  margin-right: 0;
  margin-bottom: 0;
  padding-bottom: 0;
  padding-left: 1%;
  padding-right: 1%;
  text-align: center;
  background-position: center;
  position: relative;
  @media screen and (min-width: 690px) {
    width: 100%;
  }
`;
const VcColumnInner = styled.div`
  position: relative;
  text-align: center;
`;
const WpbWrapper = styled.div``;
const ImageWithWrapper = styled.div`
  line-height: 0;
  margin-bottom: 0;
`;
const Inner = styled.div`
  height: 100%;
`;
const HoverWrapper = styled.div`
  opacity: 1;
  margin-bottom: 0;
  overflow: visible;
  position: relative;
`;
