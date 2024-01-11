import styled from "styled-components";

const Post = () => {
  return (
    <RawHtml>
      <WpbWrapper>
        <div class="fb-page fb_iframe_widget">
          <span
            style={{
              verticalAlign: "bottom",
              width: "500px",
              height: "500px",
              display: "inline-block",
              position: "relative",
              textAlign: "justify",
            }}
          >
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
              src="https://www.facebook.com/v15.0/plugins/page.php?adapt_container_width=true&app_id=&channel=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Dfbbc7f1b6225f8%26domain%3Dgmefinance.com%26is_canvas%3Dfalse%26origin%3Dhttps%253A%252F%252Fgmefinance.com%252Ff236584b049117c%26relation%3Dparent.parent&container_width=725&hide_cover=false&href=https%3A%2F%2Fwww.facebook.com%2Fprofile.php%3Fid%3D100086163531359&locale=en_US&sdk=joey&show_facepile=true&small_header=false&tabs=timeline&width=500"
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
                width: "500px",
              }}
            ></iframe>
          </span>
        </div>
      </WpbWrapper>
    </RawHtml>
  );
};
export default Post;

const RawHtml = styled.div`
  margin-bottom: 24px;
  text-align: center;
`;
const WpbWrapper = styled.div``;
