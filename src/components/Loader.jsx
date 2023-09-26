import { Suspense } from "react";
import Loading from "./Loading";

const Loader = (Component) => {
  return function LoaderComp(props) {
    return (
      <Suspense fallback={<Loading />}>
        <Component {...props} />
      </Suspense>
    );
  };
};
export default Loader;
