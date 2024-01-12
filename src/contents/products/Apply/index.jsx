import Divider from "components/Divider";
import styled from "styled-components";
import RowWrapper from "components/RowWrapper";

const Apply = () => {
  return (
    <ApplyWrapper id="Apply">
      <RowWrapper />
      <ApplyDarkLeft>
        <ApplyContainer>
          <ApplyColumnInner>
            <ApplyWpbWrapper>
              <Divider height={50} />
              <ApplyRawHtml>
                <iframe
                  id="1698968031259_950574319381996"
                  src="https://form.123formbuilder.com/js-form-username-6258808.html?ref=https%3A%2F%2Fgmefinance.com%2Fbangladesh%2F&amp;_referrer_=https%3A%2F%2Fgmefinance.com%2F&amp;_embedType_=embed.js&amp;_iframeID_=1698968031259_950574319381996"
                  frameborder="0"
                  scrolling="no"
                  style={{
                    padding: 0,
                    margin: 0,
                    display: "block",
                    width: "100%",
                    backgroundColor: "transparent",
                    overflow: "hidden",
                    opacity: 1,
                    visibility: "visible",
                    height: "500px",
                  }}
                ></iframe>
              </ApplyRawHtml>
            </ApplyWpbWrapper>
          </ApplyColumnInner>
        </ApplyContainer>
      </ApplyDarkLeft>
    </ApplyWrapper>
  );
};
export default Apply;
const ApplyWrapper = styled.div`
  display: flex;
  padding-top: 0px;
  padding-bottom: 0px;
  position: relative;
  background-color: white;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const ApplyDarkLeft = styled.div`
  display: flex;
  flex-wrap: wrap;
  float: none;
  margin-bottom: 0 !important;
  z-index: 10;
  margin-left: -1%;
  margin-right: -1%;
  width: 50%;
  position: relative;
`;
const ApplyContainer = styled.div`
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
const ApplyColumnInner = styled.div`
  justify-content: center;
  width: 100%;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  position: relative;
`;
const ApplyWpbWrapper = styled.div``;

const ApplyRawHtml = styled.div`
  margin-bottom: 0px;
`;
