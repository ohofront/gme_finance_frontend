import styled from "styled-components";

const Flag = () => {
  return (
    <FlagImageWrapper>
      <FlagImageInner>
        <FlagImageHover>
          <img
            class="img-with-animation skip-lazy nectar-lazy loaded animated-in"
            data-delay="0"
            height="265"
            width="265"
            data-animation="fade-in"
            src="https://gmefinance.com/wp-content/uploads/2022/10/flag_myanmar.png"
            alt=""
            sizes="(min-width: 1450px) 75vw, (min-width: 1000px) 85vw, 100vw"
            srcset="https://gmefinance.com/wp-content/uploads/2022/10/flag_myanmar.png 512w, https://gmefinance.com/wp-content/uploads/2022/10/flag_myanmar-300x300.png 300w, https://gmefinance.com/wp-content/uploads/2022/10/flag_myanmar-150x150.png 150w, https://gmefinance.com/wp-content/uploads/2022/10/flag_myanmar-100x100.png 100w, https://gmefinance.com/wp-content/uploads/2022/10/flag_myanmar-140x140.png 140w, https://gmefinance.com/wp-content/uploads/2022/10/flag_myanmar-500x500.png 500w, https://gmefinance.com/wp-content/uploads/2022/10/flag_myanmar-350x350.png 350w"
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
