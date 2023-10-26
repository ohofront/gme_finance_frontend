import Divider from "components/Divider";
import RowBgWrapper2 from "components/RowBgWrapper2";
import styled from "styled-components";
import PerksTitle from "./title";
import PerksContent from "./content";

const Perks = () => {
  return (
    <PerksWrapper>
      <RowBgWrapper2 />
      <PerksDarkLeft>
        <PerksContainer>
          <PerksColumnInner>
            <PerksWpbWrapper>
              <PerksTitle />
              <Divider height={50} />
              <PerksContent />
            </PerksWpbWrapper>
          </PerksColumnInner>
        </PerksContainer>
      </PerksDarkLeft>
    </PerksWrapper>
  );
};
export default Perks;
const PerksWrapper = styled.div`
  padding-top: 120px;
  padding-bottom: 120px;
  margin-bottom: 0;
  position: relative;
`;
const PerksDarkLeft = styled.div`
  margin-left: 0;
  margin-right: 0;
  display: flex;
  flew-wrap: wrap;
  float: none;
  margin-bottom: 0 !important;
  z-index: 10;
  width: auto;
  position: relative;
`;
const PerksContainer = styled.div`
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
const PerksColumnInner = styled.div`
  position: relative;
`;
const PerksWpbWrapper = styled.div``;
