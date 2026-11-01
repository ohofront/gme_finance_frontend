import { Link } from "react-scroll";
import styled from "styled-components";

const ApplyButton = () => {
  return (
    <ButtonAWrapper>
      <Link to="Apply">
        <ButtonSpan>Apply Now</ButtonSpan>
      </Link>
    </ButtonAWrapper>
  );
};
export default ApplyButton;
const ButtonAWrapper = styled.a`
  background-color: #0b3d91 !important;
  padding: 8px 14px;
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
  &:hover {
    cursor: pointer;
    opacity: 0.5;
  }
`;
const ButtonSpan = styled.span`
  position: relative;
`;
