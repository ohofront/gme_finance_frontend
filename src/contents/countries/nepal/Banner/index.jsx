import RowBgWrapper9 from "components/RowBgWrapper9";
import banner from "assets/images/countries/nepal/banner.png";
import styled from "styled-components";
import Divider from "components/Divider";

const Banner = () => {
  return (
    <FullSection>
      <div>1</div>
      <RowBgWrapper9
        color={
          "radial-gradient(50% 50% at 50% 50%,#ff0000 0%,rgba(255,255,255,0.001) 100%)"
        }
        backgroundImage={banner}
      />
      <DarkLeft>
        <Container>
          <ColumnInner>
            <WpbWrapper>
              <Divider height={250} />
              <h1 style={{ color: "#ffff", textAlign: "center", fontSize: 35 }}>
                Our Nepal Team
              </h1>
              <Divider height={250} />
            </WpbWrapper>
          </ColumnInner>
        </Container>
      </DarkLeft>
    </FullSection>
  );
};
export default Banner;
const FullSection = styled.div`
  margin-top: 100px;
  padding-top: 0px;
  padding-bottom: 0px;
  position: relative;
  background-size: cover;
  width: 100%;
`;
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
