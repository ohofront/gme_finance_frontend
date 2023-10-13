import Divider from "components/Divider";
import RowWrapper from "components/RowWrapper";
import styled from "styled-components";

const FeatureTitle = () => {
  return (
    <FeatureTitleWrapper>
      <RowWrapper />
      <FeatureTitleDarkLeft>
        <FeatureTitleContainer>
          <FeatureTitleColumnInner>
            <FeatureTitleWpbWrapper>
              <Divider height={90} />
              <h3 style={{ fontSize: 30, textAlign: "center" }}>
                Best Loan Service Provider in South Korea
              </h3>
            </FeatureTitleWpbWrapper>
          </FeatureTitleColumnInner>
        </FeatureTitleContainer>
      </FeatureTitleDarkLeft>
    </FeatureTitleWrapper>
  );
};
export default FeatureTitle;
const FeatureTitleWrapper = styled.div`
  padding-top: 0px;
  padding-bottom: 0px;
  position: relative;
  margin-bottom: 35px;
  &::before {
    content: " ";
    display: table;
  }
`;
const FeatureTitleDarkLeft = styled.div`
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
const FeatureTitleContainer = styled.div`
  float: none;
  margin-right: 0;
  margin-left: 0;
  margin-bottom: 0;
  padding-left: 1%;
  padding-right: 1%;
  box-shadow: none;
  background-position: center;
  position: relative;
  @media screen and (min-width: 690px) {
    width: 100%;
  }
}
`;
const FeatureTitleColumnInner = styled.div`
  position: relative;
`;
const FeatureTitleWpbWrapper = styled.div``;
