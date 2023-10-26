import BgOverlayWrapper from "components/BgOverlayWrapper";
import RowBgWrapper from "components/RowBgWrapper";
import styled from "styled-components";
import perks from "utils/Careers/perks";

const PerksContent = () => {
  return (
    <>
      <PerksContentWrapper>
        <RowBgWrapper />
        <PerksContentDarkLeft>
          {perks.map((item, index) => {
            console.log(item.className);
            return (
              <PerksContentContainer>
                <PerksContentColumnInner>
                  <BgOverlayWrapper />
                  <PerksContentWbpWrapper>
                    <IconWrapper>
                      <IconInner>
                        <Iconi className={item.className} />
                      </IconInner>
                    </IconWrapper>
                    <h1
                      style={{
                        fontSize: 28,
                        textAlign: "center",
                        fontFamily: "Roboto",
                        fontWeight: 700,
                        fontStyle: "normal",
                      }}
                    >
                      {item.title}
                    </h1>
                    <p
                      style={{
                        fontSize: 23,
                        lineHeight: 1.5,
                        textAlign: "center",
                        fontFamily: "Roboto",
                        fontWeight: 400,
                        fontStyle: "normal",
                      }}
                    >
                      {item.content}
                    </p>
                  </PerksContentWbpWrapper>
                </PerksContentColumnInner>
              </PerksContentContainer>
            );
          })}
        </PerksContentDarkLeft>
      </PerksContentWrapper>
    </>
  );
};
export default PerksContent;
const PerksContentWrapper = styled.div`
  margin-bottom: 24px;
  position: relative;
`;
const PerksContentDarkLeft = styled.div`
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
const PerksContentContainer = styled.div`
  align-items: stretch;
  display: flex;
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
const PerksContentColumnInner = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  width: 100%;
  border-radius: 20px;
  padding: calc(1245px * 0.05);
  position: relative;
  text-align: center;
`;
const PerksContentWbpWrapper = styled.div`
  min-height: 1px;
  position: relative;
  z-index: 2;
`;
const IconWrapper = styled.div`
  margin-bottom: 30px;
  display: inline-block;
  position: relative;
  text-align: center;
`;
const IconInner = styled.div`
  border-color: #930000;
  font-size: 50px;
  padding: 20px;
  border-width: 2px;
  line-height: 0;
  border: 2px solid #930000;
  text-align: center;
  border-radius: 150px;
  position: relative;
  transition: background-color 0.45s cubic-bezier(0.25, 1, 0.33, 1),
    border-color 0.45s cubic-bezier(0.25, 1, 0.33, 1);
  &:hover {
    background-color: #930000;
  }
  &:hover {
    color: #fff !important;
  }
`;
const Iconi = styled.i`
  font-size: 50px;
  height: 75px;
  width: 75px;
  line-height: 75px;
  display: inline-block;
  vertical-align: middle;
  max-width: none;
  top: 0;
`;
