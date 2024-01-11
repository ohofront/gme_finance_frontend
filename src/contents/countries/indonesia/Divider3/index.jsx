import styled from "styled-components";
import divider3 from "assets/images/countries/indonesia/divider3.png";
const Divider3 = () => {
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
              src={divider3}
            />
          </HoverImageLoaded>
        </HoverWrapper>
      </Inner>
    </Wrapper>
  );
};
export default Divider3;

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
