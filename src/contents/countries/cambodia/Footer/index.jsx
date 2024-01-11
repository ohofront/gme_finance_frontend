import RowBgWrapper6 from "components/RowBgWrapper6";
import styled from "styled-components";
import footer from "assets/images/countries/cambodia/footer.jpg";
import Divider from "components/Divider";

const Footer = () => {
  return (
    <FullSection>
      <RowBgWrapper6 backgroundImage={footer} />
      <DarkCenter>
        <Container>
          <ColumnInner>
            <WpbWrapper>
              <Divider height={1000} />
            </WpbWrapper>
          </ColumnInner>
        </Container>
      </DarkCenter>
    </FullSection>
  );
};
export default Footer;

const FullSection = styled.div`
  padding-top: 0px;
  padding-bottom: 0px;
  margin-bottom: 0;
  visibility: visible;
  position: relative;
  background-size: cover;
  width: 100%;
`;
const DarkCenter = styled.div`
  color: #fff;
  float: none;
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
  z-index: 10;
  margin-bottom: 0 !important;
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
  text-align: center;
`;
const WpbWrapper = styled.div``;
