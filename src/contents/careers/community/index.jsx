import styled from "styled-components";
import banner from "assets/images/careers/community.png";
import RowBgWrapper4 from "components/RowBgWrapper4";
import Divider from "components/Divider";

const JoinCommunity = () => {
  return (
    <JoinWrapper>
      <RowBgWrapper4 backgroundImage={banner} color={"#ed1c24"} />
      <JoinDarkLeft>
        <JoinCotainer>
          <JoinColumnInner>
            <JoinWpbWrapper>
              <Divider height={50} />
              <h3
                style={{
                  fontSize: 72,
                  color: "#ffffff",
                  lineHeight: 1.25,
                  textAlign: "center",
                  fontFamily: "Roboto",
                  fontWeight: 700,
                  fontStyle: "normal",
                }}
              >
                Join Our Talent Community
              </h3>
              <Divider height={50} />
            </JoinWpbWrapper>
          </JoinColumnInner>
        </JoinCotainer>
      </JoinDarkLeft>
    </JoinWrapper>
  );
};
export default JoinCommunity;

const JoinWrapper = styled.div`
  --scroll-bar-w: 13px;
  margin-bottom: 0;
  padding-top: 0px;
  padding-bottom: 0px;
  margin-left: calc(-50vw + var(--scroll-bar-w) / 2);
  left: 50%;
  width: calc(100vw - var(--scroll-bar-w));
  position: relative;
  visibility: visible;
  &::before {
    content: "";
    display: table;
  }
`;
const JoinDarkLeft = styled.div`
  color: #191c1f;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  float: none;
  z-index: 10;
  text-align: center;
  margin-bottom: 0 !important;
  margin-left: -1%;
  margin-right: -1%;
  width: auto;
  position: relative;
`;
const JoinCotainer = styled.div`
  margin-left: 0;
  align-items: stretch;
  display: flex;
  float: none;
  margin-right: 0;
  margin-left: 0;
  padding-left: 1%;
  padding-right: 1%;
  box-shadow: none;
  background-size: cover;
  background-position: center;
  position: relative;
  @media screen and (min-width: 690px) {
    width: 100%;
  }
`;
const JoinColumnInner = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;
`;
const JoinWpbWrapper = styled.div`
  min-height: 1px;
`;
