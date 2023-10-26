import styled from "styled-components";
import banner from "assets/images/careers/community.png";
import RowBgWrapper4 from "components/RowBgWrapper4";

const JoinCommunity = () => {
  return (
    <JoinWrapper>
      <RowBgWrapper4 backgroundImage={banner} color={"#ed1c24"} />
    </JoinWrapper>
  );
};
export default JoinCommunity;

const JoinWrapper = styled.div`
  --scroll-bar-w: 13px;
  margin-bottom: 0;
  padding-top: 0px;
  padding-bottom: 0px;
  margin-left: calc(-50vw + var(--scroll-bar-w) / 2);
  left: 50%;
  width: calc(100vw - var(--scroll-bar-w));
  position: relative;
`;
