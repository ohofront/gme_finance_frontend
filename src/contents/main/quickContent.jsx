import RowBgWrapper from "components/RowBgWrapper";
import styled from "styled-components";
import step from "utils/Home/step";
import Divider from "./divider";

const QuickContent = () => {
  return (
    <QuickContentRowInner>
      <RowBgWrapper />
      <QuickContentDarkLeft>
        {step.map((item, index) => {
          return (
            <QuickContentCotainer>
              <QuickContentColumnInner>
                <QuickContentWpbWrapper>
                  <QuickContentUsingImage>
                    <QuickContentLoaded image={item.src} />
                    <QuickContentInner>
                      <h4>
                        <div>
                          <div style={{ height: 225 }}></div>
                        </div>
                      </h4>
                      <h4
                        style={{
                          textAlign: "center",
                          fontFamily: "Poppins",
                          fontSize: 30,
                          fontWeight: 600,
                          marginBottom: 8,
                        }}
                      >
                        {item.title}
                      </h4>
                      <p>{item.content}</p>
                    </QuickContentInner>
                  </QuickContentUsingImage>
                </QuickContentWpbWrapper>
              </QuickContentColumnInner>
            </QuickContentCotainer>
          );
        })}
      </QuickContentDarkLeft>
    </QuickContentRowInner>
  );
};
export default QuickContent;
const QuickContentRowInner = styled.div`
  margin-bottom: 0px;
  position: relative;
  &::before {
    content: "";
    display: table;
    color: #191c1f;
    visibility: visible;
  }
  &::after {
    clear: both;
    content: "";
    display: table;
    visibility: visible;
  }
`;
const QuickContentDarkLeft = styled.div`
  display: flex;
  flex-wrap: wrap;
  float: none;
  margin-bottom: 0 !important;
  z-index: 10;
  margin-left: -1%;
  margin-right: -1%;
  width: auto;
  position: relative;
  &::after {
    content: "";
    display: block;
    height: 0;
    clear: both;
    visibility: hidden;
  }
`;
const QuickContentCotainer = styled.div`
  align-items: stretch;
  display: flex;
  float: none;
  margin-right: 0;
  margin-left: 0;
  padding-left: 1%;
  padding-right: 1%;
  box-shadow: none;
  background-position: center;
  position: relative;
  @media screen and (min-width: 690px) {
    width: 25%;
  }
`;
const QuickContentColumnInner = styled.div`
  justify-content: center;
  width: 100%;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  position: relative;
`;
const QuickContentWpbWrapper = styled.div`
  min-height: 1px;
`;
const QuickContentUsingImage = styled.div`
  color: #0a0a0a;
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  padding: 13%;
`;
const QuickContentLoaded = styled.div`
  background-color: rgb(158, 158, 158);
  background-image: url(${(props) => props.image});
  transition: transform 0.6s cubic-bezier(0.24, 1, 0.3, 1),
    opacity 0.55s ease 0.25s;
  opacity: 1;
  position: absolute;
  top: 0;
  left: 0;
  height: 100.2%;
  width: 100.2%;
  background-size: cover;
  z-index: 1;
  background-position: center;
  &::before {
    position: absolute;
    top: 0;
    left: 0;
    content: "";
    width: 100%;
    height: 100%;
    background-color: #fff;
    opacity: 0;
    z-index: 1;
    transition: opacity 0.4s cubic-bezier(0.25, 1, 0.33, 1);
  }
  &::after {
    backface-visibility: hidden;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    content: " ";
  }
`;
const QuickContentInner = styled.div`
  min-height: 370px;
  text-align: center;
  position: relative;
  z-index: 10;
`;
