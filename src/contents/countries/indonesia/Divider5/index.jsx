import Divider from "components/Divider";
import RowBgWrapper6 from "components/RowBgWrapper6";
import styled from "styled-components";
import divider5 from "assets/images/countries/indonesia/divider5.png";

const Divider5 = () => {
  return (
    <Wrapper>
      <RowBgWrapper6 backgroundImage={divider5} />
      <DarkLeft>
        <ColumnContainer>
          <VcColumnInner>
            <WpbWrapper>
              <Divider height={500} />
            </WpbWrapper>
          </VcColumnInner>
        </ColumnContainer>
      </DarkLeft>
    </Wrapper>
  );
};
export default Divider5;
const Wrapper = styled.div`
  padding-bottom: 0px;
  margin-bottom: 0px;
  position: relative;
  background-size: cover;
  width: 100%;
`;
const DarkLeft = styled.div`
  color: #191c1f;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 0 !important;
  z-index: 10;
  margin-left: -1%;
  margin-right: -1%;
  width: auto;
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
