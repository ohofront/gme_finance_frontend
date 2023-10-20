import RowBgWrapper2 from "components/RowBgWrapper2";
import styled from "styled-components";

const IntroductionDivider = () => {
  return (
    <DividerWrapper>
      <RowBgWrapper2 />
      <DividerDarkLeft>
        <DividerContainer>
          <DividerColumnInner>
            <DividerWpbWrapper />
          </DividerColumnInner>
        </DividerContainer>
      </DividerDarkLeft>
    </DividerWrapper>
  );
};
export default IntroductionDivider;
const DividerWrapper = styled.div`
  padding-top: 0px;
  padding-bottom: 0px;
  position: relative;
  margin-bottom: 35px;
`;
const DividerDarkLeft = styled.div`
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
const DividerContainer = styled.div`
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
const DividerColumnInner = styled.div`
  position: relative;
`;
const DividerWpbWrapper = styled.div``;
