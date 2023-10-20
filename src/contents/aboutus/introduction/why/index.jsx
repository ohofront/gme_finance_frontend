import RowBgWrapper2 from "components/RowBgWrapper2";
import styled from "styled-components";
import why from "utils/AboutUs/why";

const Why = () => {
  return (
    <WhyWrapper>
      <RowBgWrapper2 />
      <WhyDarkLeft>
        <WhyContainer>
          <WhyColumnInner>
            <WhyWbpWrapper>
              <WhyContent>
                <h3
                  style={{
                    textAlign: "center",
                    color: "#191c1f",
                    fontSize: 30,
                    fontWeight: 600,
                    fontFamily: "Poppins",
                    marginBottom: 8,
                  }}
                >
                  Why Choose Us?
                </h3>
                {why.map((item, index) => {
                  return (
                    <p
                      style={{
                        textAlign: "center",
                        paddingBottom: 27,
                        color: "#191c1f",
                      }}
                      key={index}
                    >
                      {item.content}
                    </p>
                  );
                })}
              </WhyContent>
            </WhyWbpWrapper>
          </WhyColumnInner>
        </WhyContainer>
      </WhyDarkLeft>
    </WhyWrapper>
  );
};
export default Why;
const WhyWrapper = styled.div`
  padding-top: 0px;
  padding-bottom: 0px;
  margin-bottom: 1.5em;
`;
const WhyDarkLeft = styled.div`
  color: #fff;
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
const WhyContainer = styled.div`
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
    width: 100%;
  }
`;
const WhyColumnInner = styled.div`
  position: relative;
`;
const WhyWbpWrapper = styled.div``;
const WhyContent = styled.div``;
