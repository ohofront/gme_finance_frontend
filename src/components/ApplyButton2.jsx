import styled from "styled-components";

const ApplyButton2 = () => {
  return (
    <ButtonDiv>
      <ButtonAWrapper>
        <ButtonSpan>Apply Now!</ButtonSpan>
      </ButtonAWrapper>
    </ButtonDiv>
  );
};
export default ApplyButton2;
const ButtonDiv = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
`;
const ButtonAWrapper = styled.a`
  transition: all 0.3s ease;
  position: relative;
  display: block;
  background: rgb(255, 27, 0);
  background: linear-gradient(
    0deg,
    rgba(255, 27, 0, 1) 0%,
    rgba(251, 75, 2, 1) 100%
  );
  padding: 10px 20px;
  color: #fff;
  font-family: Poppins;
  text-transform: none !important;
  font-size: 16px;
  font-weight: 400;
  position: relative;
  top: 0;
  margin-bottom: 10px;
  opacity: 1;
  line-height: 20px;
  border-radius: 5px;
  text-align: center;
  box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5),
    7px 7px 20px 0px rgba(0, 0, 0, 0.1), 4px 4px 5px 0px rgba(0, 0, 0, 0.1);
  outline: none;
  cursor: pointer;
`;
const ButtonSpan = styled.span`
  display: flex;
  position: relative;
  text-align: center;
  cursor: pointer;
`;
