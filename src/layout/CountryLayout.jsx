import Footer from "components/Footer";
import Header from "components/Header";
import Loading from "components/Loading";
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

const CountryLayout = (props) => {
  const [loading, setLoading] = useState(false);
  const api = async () => {
    try {
      setLoading(true);
    } catch (e) {
      setLoading(false);
    }
  };
  useEffect(() => {
    setTimeout(() => {
      api();
    }, 1000);
  }, [loading]);

  return loading === false ? (
    <Loading />
  ) : (
    <>
      <Header />
      <AjaxContentWrapper>
        <ContainerWrapper color={props.color}>
          <MainContent>
            <MainContentRow>
              <Outlet />
            </MainContentRow>
          </MainContent>
          <Footer />
        </ContainerWrapper>
      </AjaxContentWrapper>
    </>
  );
};
export default CountryLayout;

const AjaxContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;
const ContainerWrapper = styled.div`
  padding-bottom: 0px;
  margin-top: 0 !important;
  padding-top: 0;
  flex-grow: 1;
  background-color: ${(props) => props.color};
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
