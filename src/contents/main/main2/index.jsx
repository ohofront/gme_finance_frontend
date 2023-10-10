import RowWrapper from "components/RowWrapper";
import main2 from "assets/images/background/main2_background.png";
const Main2 = () => {
  return (
    <Main2Wrapper>
      <RowWrapper isColor={false} backgroundImage={main2} />
    </Main2Wrapper>
  );
};
export default Main2;
const Main2Wrapper = styled.div`
  padding-top: 0px;
  padding-bottom: 0px;
  margin-bottom: 0;
  visibility: visible;
  box-sizing: content-box;
  position: relative;
  background-size: cover;
  width: 100%;
`;
