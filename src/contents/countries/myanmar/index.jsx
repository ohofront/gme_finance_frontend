import Divider from "components/Divider";
import Banner from "./Banner";
import Sns from "./Sns";
import Promotion from "./Promotion";
import Card from "./Card";
import Vacation from "./Vacation";
import Call from "./Call";
import Youtube from "./Youtube";
import Introduce from "./Introduce";
import Apply from "./Apply";
import Banner2 from "./Banner2";

const Myanmar = () => {
  return (
    <>
      <Banner />
      <Banner2 />
      <Divider height={100} />
      <Sns />
      <Card />
      <Vacation />
      <Call />
      <Youtube />
      <Introduce />
      <Apply />
    </>
  );
};
export default Myanmar;
