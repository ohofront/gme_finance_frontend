import nProgress from "nprogress";
import { useEffect } from "react";
import styled from "styled-components";
import RingLoader from "react-spinners/RingLoader";

const Loading = () => {
  useEffect(() => {
    nProgress.start();
    return () => {
      nProgress.done();
    };
  }, []);
  return (
    <LoadingContent>
      <RingLoader color="#d63636" size={50} />
    </LoadingContent>
  );
};

export default Loading;

const LoadingContent = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
