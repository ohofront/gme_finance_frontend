import { useEffect, useState } from "react";
import styled from "styled-components";

const Divider = (props) => {
  const [height, setHeight] = useState(0);
  useEffect(() => {
    setHeight(props);
  }, [props]);
  return (
    <Wrapper>
      <Content height={height} />
    </Wrapper>
  );
};
export default Divider;
const Wrapper = styled.div`
  margin-bottom: 0;
`;
const Content = styled.div`
  ${(props) => props.height};
`;
