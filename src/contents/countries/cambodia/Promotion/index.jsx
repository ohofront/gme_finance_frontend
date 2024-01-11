import RowBgWrapper8 from "components/RowBgWrapper8";
import styled from "styled-components";
import background from "assets/images/countries/cambodia/background.jpg";
import Divider from "components/Divider";

const Promotion = () => {
  return (
    <FullSection>
      <RowBgWrapper8 color={"rgb(255, 198, 0)"} background={background} />
      <DarkLeft>
        <ColumnContainer>
          <VcColumnInner>
            <WpbWrapper>
              <Divider height={200} />
              <Divider height={50} />
            </WpbWrapper>
          </VcColumnInner>
        </ColumnContainer>
      </DarkLeft>
    </FullSection>
  );
};
export default Promotion;

const FullSection = styled.div`
  padding-top: 0px;
  padding-bottom: 0px;
  transform: translateY(-40px);
  position: relative;
  visibility: visible;
  background-size: cover;
  width: 100%;
  &::before {
    content: " ";
    display: table;
  }
`;
const DarkLeft = styled.div`
  float: none;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 0 !important;
  z-index: 10;
  position: relative;
`;
const ColumnContainer = styled.div`
  display: block;
  float: none;
  margin-right: 0;
  margin-left: 0;
  margin-bottom: 0;
  background-position: center;
  position: relative;
  @media screen and (min-width: 690px) {
    width: 100%;
  }
`;
const VcColumnInner = styled.div`
  position: relative;
`;
const WpbWrapper = styled.div``;
