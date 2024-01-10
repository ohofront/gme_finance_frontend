import RowBgWrapper from "components/RowBgWrapper";
import RowBgWrapper2 from "components/RowBgWrapper2";
import styled from "styled-components";
import { posts } from "utils/Countries/Bangladesh/post";

const LeftContent = () => {
  return (
    <LeftContentWrapper>
      <RowBgWrapper />
      <LeftContentDarkCenter>
        <HelpContentContainer>
          <HelpContentColumnInner>
            <HelpContentWpbWrapper>
              <div class="fb-page fb_iframe_widget">
                <span>
                  <iframe
                    name="f6412b78f8752"
                    width="1000px"
                    height="1000px"
                    data-testid="fb:page Facebook Social Plugin"
                    title="fb:page Facebook Social Plugin"
                    frameborder="0"
                    allowtransparency="true"
                    allowfullscreen="true"
                    scrolling="no"
                    allow="encrypted-media"
                    src="https://www.facebook.com/v15.0/plugins/page.php?adapt_container_width=true&amp;app_id=&amp;channel=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Df1815ed108261ec%26domain%3Dgmefinance.com%26is_canvas%3Dfalse%26origin%3Dhttps%253A%252F%252Fgmefinance.com%252Ffdf0dbc5bbc94%26relation%3Dparent.parent&amp;container_width=1100&amp;hide_cover=false&amp;href=https%3A%2F%2Fwww.facebook.com%2Fgmethai.finance&amp;locale=en_US&amp;sdk=joey&amp;show_facepile=true&amp;small_header=false&amp;tabs=timeline&amp;width="
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
                      width: "340px",
                    }}
                  ></iframe>
                </span>
              </div>
            </HelpContentWpbWrapper>
          </HelpContentColumnInner>
        </HelpContentContainer>
      </LeftContentDarkCenter>
    </LeftContentWrapper>
  );
};
export default LeftContent;
const LeftContentWrapper = styled.div`
  display: flex;
  width: 50%;
  height: 100%;
  float: left;
  align-items: center;
  justify-content: center;
`;

const LeftContentDarkCenter = styled.div`
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
const HelpContentContainer = styled.div`
  align-items: stretch;
  display: flex;
  height: 100%;
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
const HelpContentColumnInner = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  width: 100%;
  border-radius: 20px;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.1);
  position: relative;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  top: 0;
  &:hover {
    cursor: pointer;
    transform: translateY(-10px);
    box-shadow: 0 15px 20px rgba(0, 0, 0, 0.13);
  }
`;
const HelpContentWpbWrapper = styled.div`
  min-height: 1px;
`;
