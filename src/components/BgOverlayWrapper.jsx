import styled from "styled-components";

const BgOverlayWrapper = () => {
  return (
    <Wrapper>
      <ColumnBgOverlay />
    </Wrapper>
  );
};
export default BgOverlayWrapper;
const Wrapper = styled.div`
  border-radius: 20px;
  overflow: hidden;
  opacity: 1;
  pointer-events: none;
  position: absolute;
  z-index: 0;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  content: " ";
  display: block;
`;
const ColumnBgOverlay = styled.div`
  opacity: 1;
  background-color: #ffffff;
  pointer-events: none;
  position: absolute;
  z-index: 0;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  content: " ";
  display: block;
`;
