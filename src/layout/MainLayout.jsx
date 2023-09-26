import Header from "components/Header";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

const MainLayout = () => {
  return (
    <>
      <Header />
      <AjaxContentWrapper>
        <ContainerWrapper>
          <MainContent>
            <MainContentRow>
              <Outlet />
            </MainContentRow>
          </MainContent>
        </ContainerWrapper>
      </AjaxContentWrapper>
    </>
  );
};
export default MainLayout;

const AjaxContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;
const ContainerWrapper = styled.div`
  padding-bottom: 0px;
  margin-top: 0 !important;
  padding-top: 0px;
  flex-grow: 1;
  background-color: #fafbfc;
  position: relative;
  z-index: 10;
`;
const MainContent = styled.div`
  margin: 0 auto;
  position: relative;
  @media only screen and (min-width: 1300px) {
    max-width: 1100px;
  }
`;
const MainContentRow = styled.div`
  position: relative;
  margin-left: 0;
  margin-right: 0;
  padding-bottom: 0;
`;
