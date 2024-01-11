import Divider from "components/Divider";
import RowBgWrapper from "components/RowBgWrapper";
import { useEffect, useState } from "react";
import styled from "styled-components";

const Header = (props) => {
  const [text, setText] = useState("");
  useEffect(() => {
    setText(props.title);
  }, [props]);
  return (
    <Wrapper>
      <RowBgWrapper />
      <DarkLeft>
        <Container>
          <ColumnInner>
            <WpbWrapper>
              <Divider height={50} />
              <h4 style={{ color: "#ffff", textAlign: "center", fontSize: 28 }}>
                {text}
              </h4>
              <Divider height={50} />
            </WpbWrapper>
          </ColumnInner>
        </Container>
      </DarkLeft>
    </Wrapper>
  );
};
export default Header;

const Wrapper = styled.div`
  background-color: #ff0000 !important;
  border-radius: 20px !important;
  position: relative;
  margin-bottom: 25px;
`;
const DarkLeft = styled.div`
  display: flex;
  flex-wrap: wrap;
  float: none;
  margin-bottom: 0 !important;
  z-index: 10;
  margin-left: -1%;
  margin-right: -1%;
  width: auto;
  position: relative;
`;
const Container = styled.div`
  display: block;
  float: none;
  margin-right: 0;
  margin-left: 0;
  padding-left: 1%;
  padding-right: 1%;
  box-shadow: none;
  background-position: center;
  position: relative;
  @media screen and (min-width: 690px) {
    width: 100%;
  }
`;
const ColumnInner = styled.div`
  position: relative;
`;
const WpbWrapper = styled.div``;
