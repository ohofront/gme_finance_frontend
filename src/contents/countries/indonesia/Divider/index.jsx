import styled from "styled-components";
import divider1 from "assets/images/countries/indonesia/divider1.png";
const Divider = () => {
  return (
    <Wrapper>
      <Inner>
        <HoverWrapper>
          <HoverImageLoaded>
            <img
              style={{
                display: "block",
                maxWidth: "100%",
                position: "relative",
              }}
              src={divider1}
            />
          </HoverImageLoaded>
        </HoverWrapper>
      </Inner>
    </Wrapper>
  );
};
export default Divider;

const Wrapper = styled.div`
  text-align: center;
`;
const Inner = styled.div`
  display: inline-block;
  max-width: 75%;
  width: auto;
  height: 100%;
`;
const HoverWrapper = styled.div`
opacity: 1;
transition: all .65s cubic-bezier(.05,0.2,.1,1)!important
overflow: visible;
margin-bottom: 15px;
position: relative;
`;
const HoverImageLoaded = styled.div`
  visibility: visible;
`;
