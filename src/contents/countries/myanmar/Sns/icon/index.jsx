import Divider from "components/Divider";
import styled from "styled-components";
import tiktok from "assets/images/contact/sns/tiktok.png";
const Icon = () => {
  return (
    <>
      <Divider height={50} />
      <IconWrapper>
        <FacebookIcon>
          <a
            href={"https://www.facebook.com/gmeafrica/"}
            style={{
              display: "block",
              width: "100%",
              height: "100%",
              position: "absolute",
              left: 0,
              top: 0,
              zIndex: 1,
            }}
          />

          <i
            className="fa fa-facebook"
            style={{
              fontSize: 24,
              height: 36,
              width: "36px",
              color: "#3b5998",
              display: "inline-block",
              verticalAlign: "middle",
              maxWidth: "none",
              top: 10,
              wordSpacing: "1px",
              position: "relative",
              textAlign: "center",
            }}
          ></i>
        </FacebookIcon>
      </IconWrapper>
      <TiktokIconWrapper>
        <TiktokIconInner>
          <TiktokHoverWrapper>
            <TiktokImgLoaded>
              <a
                style={{
                  display: "block",
                  width: "100%",
                  height: "100%",
                  position: "block",
                  left: 0,
                  top: 0,
                  zIndex: 1,
                }}
              />
              <img
                src={tiktok}
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
                  maxWidth: "100%",
                  height: "auto",
                }}
              />
            </TiktokImgLoaded>
          </TiktokHoverWrapper>
        </TiktokIconInner>
      </TiktokIconWrapper>
    </>
  );
};
export default Icon;
const IconWrapper = styled.div`
  margin-bottom: 24px;
  display: inline-block;
  position: relative;
`;
const FacebookIcon = styled.div`
  line-height: 0;
  padding: 20px;
  text-align: center;
  border-radius: 150px;
  position: relative;
  &::before {
    background-color: #3b5998 !important;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    content: "";
    position: absolute;
    display: block;
    border-radius: 100px;
    z-index: -1;
    opacity: 0.11;
  }
`;
const TiktokIconWrapper = styled.div`
  text-align: center;
  line-height: 0;
  margin-bottom: 0;
`;
const TiktokIconInner = styled.div`
  display: inline-block;
  max-width: 60px;
  height: 100%;
`;
const TiktokHoverWrapper = styled.div`
  opacity: 1;
  margin-bottom: 0;
  transition: all 0.65s cubic-bezier(0.05, 0.2, 0.1, 1) !important;
  border-radius: 15px;
  overflow: visible;
  position: relative;
`;
const TiktokImgLoaded = styled.div`
  transition: transform 0.65s cubic-bezier(0.05, 0.2, 0.1, 1);
`;
