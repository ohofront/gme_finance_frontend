import RowBgWrapper from "components/RowBgWrapper";
import styled from "styled-components";
import { catalog } from "utils/Countries/Cambodia/catalog";
import catalog1 from "assets/images/countries/cambodia/catalog1.png";
import catalog2 from "assets/images/countries/cambodia/catalog2.png";
import Divider from "components/Divider";
import ApplyButton2 from "components/ApplyButton2";

const Catalog = () => {
  return (
    <>
      <CatalogRowInner>
        <RowBgWrapper />
        <CatalogDarkLeft>
          <CatalogContainer>
            <CatalogColumnInner>
              <CatalogWpbWrapper>
                <Divider height={30} />
                <ContentElement>
                  <CatalogWpbWrapper>
                    {catalog.map((item, index) => {
                      return <p style={{ paddingBottom: 27 }}>{item}</p>;
                    })}
                  </CatalogWpbWrapper>
                </ContentElement>
              </CatalogWpbWrapper>
            </CatalogColumnInner>
          </CatalogContainer>
          <CatalogContainer>
            <CatalogColumnInner>
              <CatalogWpbWrapper>
                <Divider height={30} />
                <ContentElement>
                  <CatalogWpbWrapper>
                    <img
                      src={catalog1}
                      style={{
                        display: "block",
                        maxWidth: "100%",
                        borderRadius: 20,
                      }}
                    />
                  </CatalogWpbWrapper>
                </ContentElement>
              </CatalogWpbWrapper>
            </CatalogColumnInner>
          </CatalogContainer>
          <CatalogContainer>
            <CatalogColumnInner>
              <CatalogWpbWrapper>
                <Divider height={30} />
                <ContentElement>
                  <CatalogWpbWrapper>
                    <img
                      src={catalog2}
                      style={{
                        display: "block",
                        maxWidth: "100%",
                        borderRadius: 20,
                      }}
                    />
                  </CatalogWpbWrapper>
                </ContentElement>
              </CatalogWpbWrapper>
            </CatalogColumnInner>
          </CatalogContainer>
        </CatalogDarkLeft>
      </CatalogRowInner>
    </>
  );
};
export default Catalog;

const CatalogRowInner = styled.div`
  position: relative;
  margin-bottom: 15px;
`;
const CatalogDarkLeft = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  float: none;
  margin-bottom: 100px !important;
  z-index: 10;
  margin-left: -1%;
  margin-right: -1%;
  width: auto;
  position: relative;
`;
const CatalogContainer = styled.div`
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
    width: 33%;
  }
`;
const CatalogColumnInner = styled.div`
  position: relative;
`;
const CatalogWpbWrapper = styled.div``;
const ContentElement = styled.div`
  margin-bottom: 0;
  display: flex;
  text-align: center;
`;
