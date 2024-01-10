import Divider from "components/Divider";
import RowWrapper2 from "components/RowWrapper2";

import styled from "styled-components";

const Promotion = () => {
  return (
    <PromotionWrapper>
      <RowWrapper2 iscolor={"#ffc600"} />
      <PromotionDarkLeft>
        <PromotionContainer>
          <PromotionColumnInner>
            <PromotionWbpWrapper>
              <Divider height={50} />
              <PromotionContentElement>
                <PromotionWbpWrapper>
                  <h3 style={{ textAlign: "center", marginBottom: 10 }}>
                    <span style={{ color: "#ffffff" }}>
                      ආයුබෝවන් ශ්‍රීලංකා!!!
                    </span>
                  </h3>
                  <h3 style={{ textAlign: "center" }}>
                    <span style={{ color: "#ffffff" }}>
                      අපගේ විශ්වාසනීය සේවක මඩුල්ල
                    </span>
                  </h3>
                </PromotionWbpWrapper>
              </PromotionContentElement>
              <Divider height={50} />
            </PromotionWbpWrapper>
          </PromotionColumnInner>
        </PromotionContainer>
      </PromotionDarkLeft>
    </PromotionWrapper>
  );
};
export default Promotion;

const PromotionWrapper = styled.div`
  padding-top: 0px;
  padding-bottom: 0px;
  position: relative;
`;
const PromotionDarkLeft = styled.div`
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
const PromotionContainer = styled.div`
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
const PromotionColumnInner = styled.div`
  position: relative;
`;
const PromotionWbpWrapper = styled.div``;
const PromotionContentElement = styled.div`
  margin-bottom: 0;
  padding-top: 30px !important;
  padding-bottom: 30px !important;
  background-color: #dd3333 !important;
  border-radius: 10px !important;
`;
