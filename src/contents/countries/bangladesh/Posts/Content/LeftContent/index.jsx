import RowBgWrapper from "components/RowBgWrapper";
import RowBgWrapper2 from "components/RowBgWrapper2";
import styled from "styled-components";
import { posts } from "utils/Countries/Bangladesh/post";

const LeftContent = () => {
  return (
    <LeftContentWrapper>
      <RowBgWrapper />
      <HelpContentRowInner>
        <HelpContentDarkLeft>
          {posts.map((item, index) => {
            return (
              <HelpContentContainer>
                <HelpContentColumnInner>
                  <HelpContentWpbWrapper>{item.html}</HelpContentWpbWrapper>
                </HelpContentColumnInner>
              </HelpContentContainer>
            );
          })}
        </HelpContentDarkLeft>
      </HelpContentRowInner>
    </LeftContentWrapper>
  );
};
export default LeftContent;
const LeftContentWrapper = styled.div`
  width: 50%;
  height: 100%;
  float: left;
  box-sizing: border-box;
`;
const HelpContentRowInner = styled.div`
  margin-bottom: 24px;
  margin-top: 50px !important;
  padding: 20px;
  position: relative;
`;
const HelpContentDarkLeft = styled.div`
  float: none;
  display: flex;
  flex-wrap: wrap;
  z-index: 10;
  margin-bottom: 0 !important;
  margin-left: -1%;
  margin-right: -1%;
  width: auto;
  position: relative;
`;
const HelpContentContainer = styled.div`
  align-items: stretch;
  display: flex;
  height: 100%;
  float: none;
  margin-right: 0;
  margin-left: 0;
  padding-left: 1%;
  padding-right: 1%;
  box-shadow: none;
  background-color: transparent;
  background-position: center;
  position: relative;
  @media screen and (min-width: 690px) {
    width: 50%;
  }
`;
const HelpContentColumnInner = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  width: 100%;
  border-radius: 20px;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.1);
  position: relative;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  top: 0;
  &:hover {
    cursor: pointer;
    transform: translateY(-10px);
    box-shadow: 0 15px 20px rgba(0, 0, 0, 0.13);
  }
`;
const HelpContentWpbWrapper = styled.div`
  min-height: 1px;
`;
