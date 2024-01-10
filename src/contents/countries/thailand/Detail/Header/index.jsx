import RowBgWrapper from "components/RowBgWrapper";
import styled from "styled-components";
import { headers, items } from "utils/Countries/Srilanka/detail";

const DetailHeader = () => {
  const headerKey = headers.map((header) => header.value);
  return (
    <QuickHeaderRowInner>
      <RowBgWrapper />
      <QuickHeaderDarkLeft>
        <QuickHeaderContainer>
          <QuickHeaderColumnInner>
            <QuickHeaderWpbWrapper>
              <QuickHeaderContent>
                <QuickHeaderWpbWrapper>
                  <h3
                    style={{
                      textAlign: "center",
                      fontFamily: "SANGJU Gyeongcheon Island",
                      fontSize: 50,
                      fontWeight: 500,
                      color: "red",
                    }}
                  >
                    รายละเอียดสินเชื่อ
                  </h3>
                </QuickHeaderWpbWrapper>
              </QuickHeaderContent>
            </QuickHeaderWpbWrapper>
          </QuickHeaderColumnInner>
        </QuickHeaderContainer>
      </QuickHeaderDarkLeft>
    </QuickHeaderRowInner>
  );
};
export default DetailHeader;
const QuickHeaderRowInner = styled.div`
  margin-bottom: 24px;
  position: relative;
`;
const QuickHeaderDarkLeft = styled.div`
  display: flex;
  flex-wrap: wrap;
  float: none;
  margin-bottom: 0 !important;
  z-index: 10;
  margin-left: -1%;
  margin-right: -1%;
  width: auto;
  position: relative;
  &::after {
    content: "";
    display: block;
    height: 0;
    clear: both;
    visibility: hidden;
  }
`;
const QuickHeaderContainer = styled.div`
  float: none;
  margin-right: 0;
  margin-left: 0;
  padding-left: 1%;
  padding-right: 1%;
  box-shadow: none;
  background-position: center;
  position: relative;
  display: block;
  @media screen and (min-width: 690px) {
    width: 100%;
  }
`;
const QuickHeaderColumnInner = styled.div`
  position: relative;
`;
const QuickHeaderWpbWrapper = styled.div``;
const QuickHeaderContent = styled.div`
  margin-bottom: 0;
`;
