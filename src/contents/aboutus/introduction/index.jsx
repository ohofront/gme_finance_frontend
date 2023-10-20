import Banner from "./banner";
import IntroductionContent from "./content";
import IntroductionDivider from "./divider";
import History from "./history";
import License from "./license";
import Why from "./why";

const Introduction = () => {
  return (
    <>
      <Banner />
      <IntroductionDivider />
      <IntroductionContent />
      <License />
      <History />
      <Why />
    </>
  );
};

export default Introduction;
