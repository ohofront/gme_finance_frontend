import Divider from "components/Divider";

const PerksTitle = () => {
  return (
    <>
      <h1
        style={{
          fontSize: 60,
          textAlign: "center",
          fontFamily: "Roboto",
          fontWeight: 700,
          fontStyle: "normal",
        }}
      >
        Perks and Benefits
      </h1>
      <Divider height={20} />
      <p
        style={{
          fontSize: 23,
          lineHeight: 1.25,
          textAlign: "center",
          fontFamily: "Roboto",
          fontWeight: 400,
          fontStyle: "normal",
        }}
      >
        GME Finance offers competitive salaries and an excellent benefits
        package for full-time employees, including bonus leave, anniversary
        leave, and educational opportunities for career development. Also, we
        have different types of incentive policies, even world tour is included!
      </p>
    </>
  );
};
export default PerksTitle;
