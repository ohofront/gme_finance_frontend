import styled from "styled-components";
import flag from "assets/images/countries/indonesia/flag.png";

const Flag = () => {
  return (
    <FlagImageWrapper>
      <FlagImageInner>
        <FlagImageHover>
          <img
            className="img-with-animation skip-lazy nectar-lazy loaded animated-in"
            data-delay="0"
            height="265"
            width="265"
            data-animation="fade-in"
            src={flag}
            alt=""
            sizes="(min-width: 1450px) 75vw, (min-width: 1000px) 85vw, 100vw"
          />
        </FlagImageHover>
      </FlagImageInner>
    </FlagImageWrapper>
  );
};
export default Flag;
const FlagImageWrapper = styled.div`
  text-align: center;
  line-height: 0;
  margin-bottom: 0;
`;
const FlagImageInner = styled.div`
  display: inline-block;
  max-width: 75%;
  width: auto;
  height: 100%;
  text-align: center;
`;
const FlagImageHover = styled.div`
  opacity: 1;
  margin-bottom: 0;
  transition: all 0.65s cubic-bezier(0.05, 0.2, 0.1, 1) !important;
  border-radius: 15px;
  overflow: visible;
  position: relative;
`;
