import Divider from "components/Divider";
import Banner from "./Banner";
import Sns from "./Sns";
import Promotion from "./Promotion";
import Card from "./Card";
import Vacation from "./Vacation";
import Call from "./Call";

const Myanmar = () => {
  return (
    <>
      <Banner />
      <Divider height={100} />
      <Sns />
      <Card />
      <Vacation />
      <Call />
    </>
  );
};
export default Myanmar;
