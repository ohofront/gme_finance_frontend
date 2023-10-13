import RowWrapper from "components/RowWrapper";
import main2 from "assets/images/background/main2_background.png";
import styled from "styled-components";
import Divider from "components/Divider";
const Main2 = () => {
  return (
    <Main2Wrapper>
      <RowWrapper isColor={false} backgroundImage={main2} />
      <BestLoanDarkLeft>
        <BestLoanContainer>
          <BestLoanColumnInner>
            <BestLoanWbpWrapper>
              <Divider height={120} />
              <h1
                style={{ fontSize: 52, color: "#ffffff", textAlign: "center" }}
              >
                Best Loan Service Provider in South Korea
              </h1>
              <BestLoanContentElement>
                <BestLoanWbpWrapper>
                  <p style={{ textAlign: "center" }}>
                    <span style={{ color: "#ffffff" }}>
                      Easy and effortless loan application
                    </span>
                  </p>
                </BestLoanWbpWrapper>
              </BestLoanContentElement>
              <Divider height={120} />
            </BestLoanWbpWrapper>
          </BestLoanColumnInner>
        </BestLoanContainer>
      </BestLoanDarkLeft>
    </Main2Wrapper>
  );
};
export default Main2;
const Main2Wrapper = styled.div`
  padding-top: 0px;
  padding-bottom: 0px;
  margin-bottom: 0;
  visibility: visible;
  box-sizing: content-box;
  position: relative;
  background-size: cover;
  width: 100%;
`;
const BestLoanDarkLeft = styled.div`
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
const BestLoanContainer = styled.div`
  float: none;
  margin-right: 0;
  margin-left: 0;
  padding-bottom: 0;
  padding-left: 1%;
  padding-right: 1%;
  background-position: center;
  @media screen and (min-width: 690px) {
    width: 100%;
  }
`;
const BestLoanColumnInner = styled.div`
  position: relative;
`;
const BestLoanWbpWrapper = styled.div``;
const BestLoanContentElement = styled.div`
  margin-bottom: 0;
`;
