import styled from "styled-components";
import banner from "assets/images/countries/banner.png";
import RowBgWrapper5 from "components/RowBgWrapper5";
import Divider from "components/Divider";
import RowBgWrapper from "components/RowBgWrapper";
import country from "utils/Countries/country";
import { useNavigate } from "react-router-dom";
const Countries = () => {
  const navigate = useNavigate();
  const goCountry = (href) => {
    console.log(href);
    navigate(href);
  };
  return (
    <CountriesWrapper>
      <RowBgWrapper5 backgroundImage={banner} />
      <CountriesDarkLeft>
        <CountriesContainer>
          <CountriesColumnInner>
            <ContriesWpbWrapper>
              <h1
                style={{
                  fontSize: 36,
                  textAlign: "center",
                  fontFamily: "Roboto",
                  fontWeight: 600,
                  fontStyle: "normal",
                  color: "#191c1f",
                  // lineHeight: '1.25',
                }}
              >
                Countries
              </h1>
              <Divider height={25} />
              <CountriesContentWrapper>
                <RowBgWrapper />
                <CountriesContentDarkLeft>
                  {country.map((item, index) => {
                    return (
                      <CountriesContentContainer key={index}>
                        <CountriesContentColumnInner
                          onClick={() => goCountry(item.href)}
                        >
                          <ContriesContentWpbWrapper>
                            <ContentFlagImageWrapper>
                              <ContentFlagImageInner>
                                <ContentFlagHoverWrapper>
                                  <ContentFlagImagLoaded>
                                    <img
                                      src={item.flag}
                                      style={{
                                        opacity: 1,
                                        transition: "opacity 0.5s ease",
                                        transform: 0,
                                        paddingRight: 0,
                                        paddingLeft: 0,
                                        paddingBottom: 0,
                                        marginBottom: 0,
                                        borderRadius: 15,
                                        display: "block",
                                        minHeight: 1,
                                        minWidth: 1,
                                        maxWidth: "70%",
                                        height: "auto",
                                        margin: "0 auto",
                                        position: "relative",
                                      }}
                                      width={255}
                                      height={255}
                                    />
                                  </ContentFlagImagLoaded>
                                </ContentFlagHoverWrapper>
                              </ContentFlagImageInner>
                            </ContentFlagImageWrapper>
                            <ContentElement>
                              <ContentWbpWrapper>
                                <p style={{ textAlign: "center" }}>
                                  <a style={{ color: "#930000" }}>
                                    <strong>{item.country}</strong>
                                  </a>
                                </p>
                              </ContentWbpWrapper>
                            </ContentElement>
                          </ContriesContentWpbWrapper>
                        </CountriesContentColumnInner>
                      </CountriesContentContainer>
                    );
                  })}
                </CountriesContentDarkLeft>
              </CountriesContentWrapper>
            </ContriesWpbWrapper>
          </CountriesColumnInner>
        </CountriesContainer>
      </CountriesDarkLeft>
    </CountriesWrapper>
  );
};
export default Countries;
const CountriesWrapper = styled.div`
  padding-top: 100px;
  padding-bottom: 0px;
  margin-bottom: 0;
  visibility: visible;
  box-sizing: content-box;
  position: relative;
  background-size: cover;
  width: 100%;
`;
const CountriesDarkLeft = styled.div`
  color: #191c1f;
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
const CountriesContainer = styled.div`
  display: block;
  float: none;
  margin-right: 0;
  margin-left: 0;
  padding-left: 1%;
  padding-right: 1%;
  box-shadow: none;
  position: relative;
  @media screen and (min-width: 690px) {
    width: 100%;
  }
`;
const CountriesColumnInner = styled.div`
  position: relative;
`;
const ContriesWpbWrapper = styled.div``;
const CountriesContentWrapper = styled.div`
  padding-top: 0px;
  padding-bottom: 0px;
  position: relative;
  margin-bottom: 35px;
`;
const CountriesContentDarkLeft = styled.div`
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
const CountriesContentContainer = styled.div`
  display: block;
  float: none;
  margin-right: 0;
  margin-left: 0;
  padding-left: 1%;
  padding-right: 1%;
  margin-bottom: 50px;
  box-shadow: none;
  background-position: center;
  position: relative;
  @media screen and (min-width: 690px) {
    width: 25%;
  }
`;
const CountriesContentColumnInner = styled.div`
  position: relative;
  &:hover {
    cursor: pointer;
    transform: scale(1.2);
    transition: transform 0.5s ease;
  }
`;
const ContriesContentWpbWrapper = styled.div``;
const ContentFlagImageWrapper = styled.div`
  line-height: 0;
  margin-bottom: 0;
  text-align: center;
`;
const ContentFlagImageInner = styled.div`
  display: inline-block;
  max-width: 75%;
  width: auto;
  height: 100%;
`;
const ContentFlagHoverWrapper = styled.div`
  opacity: 1;

  transition: all 0.65s cubic-bezier(0.05, 0.2, 0.1, 1) !important;
  overflow: hidden;
  position: relative;
  text-align: center;
`;
const ContentFlagImagLoaded = styled.a`
  text-decoration: none;
  color: #930000;
  text-align: center;
`;
const ContentElement = styled.div`
  margin-bottom: 0;
  margin-top: 10px !important;
`;
const ContentWbpWrapper = styled.div``;
