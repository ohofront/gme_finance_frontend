import RowBgWrapper3 from "components/RowBgWrapper3";
import styled from "styled-components";
import banner from "assets/images/countries/banner.png";
const Countries = () => {
  return (
    <CountriesWrapper>
      <RowBgWrapper3 backgroundImage={banner} />
    </CountriesWrapper>
  );
};
export default Countries;
const CountriesWrapper = styled.div`
  margin-top: 100px;
  padding-bottom: 0px;
  margin-bottom: 0;
  visibility: visible;
  box-sizing: content-box;
  position: relative;
  background-size: cover;
  width: 100%;
`;
