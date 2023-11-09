import styled from "styled-components";
import Promotion from "../Promotion";
import RowBgWrapper2 from "components/RowBgWrapper2";
import Divider from "components/Divider";

const Vacation = () => {
  return (
    <>
      <Promotion />
      <VacationWrapper>
        <RowBgWrapper2 />
        <VacationDarkLeft>
          <VacationContainer>
            <VacationColumnInner>
              <VacationWpbWrapper>
                <Divider height={30} />
              </VacationWpbWrapper>
            </VacationColumnInner>
          </VacationContainer>
        </VacationDarkLeft>
      </VacationWrapper>
    </>
  );
};
export default Vacation;
const VacationWrapper = styled.div`
  padding-top: 0px;
  padding-bottom: 0px;
  position: relative;
  margin-bottom: 35px;
`;
const VacationDarkLeft = styled.div`
  display: flex;
  flew-wrap: wrap;
  float: none;
  margin-bottom: 0 !important;
  z-index: 10;
  margin-left: -1%;
  margin-right: -1%;
  width: auto;
  position: relative;
`;
const VacationContainer = styled.div`
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
    width: 25%;
  }
`;
const VacationColumnInner = styled.div`
  position: relative;
`;
const VacationWpbWrapper = styled.div``;
