import styled from "styled-components";
import Promotion from "../Promotion";
import RowBgWrapper2 from "components/RowBgWrapper2";
import Divider from "components/Divider";
import RowBgWrapper from "components/RowBgWrapper";
import vacation from "assets/images/countries/myanmar/vacation.jpg";
import ApplyButton from "components/ApplyButton";
const Vacation = () => {
  return (
    <>
      <Promotion />
      <VacationWrapper>
        <RowBgWrapper2 />
        <VacationDarkLeft>
          <VacationContainer>
            <VacationColumnInner>
              <VacationWpbWrapper>
                <VacationRowInner>
                  <RowBgWrapper />
                  <VacationDarkLeft>
                    <VacationImageContainer>
                      <VacationColumnInner>
                        <VacationWpbWrapper>
                          <Divider height={30} />
                          <VacationImageWrapper>
                            <VacationImageInner>
                              <VacationImageHoverWrapper>
                                <VacationImageLodaed>
                                  <img
                                    height={1368}
                                    width={1368}
                                    src={vacation}
                                    alt=""
                                    style={{
                                      opacity: 1,
                                      transition: "opacity 0.5s ease",
                                      transform: 0,
                                      paddingRight: 0,
                                      paddingLeft: 0,
                                      paddingBottom: 0,
                                      marginBottom: 0,
                                      borderRadius: 15,
                                      display: "block",
                                      minHeight: 1,
                                      minWidth: 1,
                                      maxWidth: "100%",
                                      height: "auto",
                                      margin: "0 auto",
                                      position: "relative",
                                    }}
                                  />
                                </VacationImageLodaed>
                              </VacationImageHoverWrapper>
                            </VacationImageInner>
                          </VacationImageWrapper>
                        </VacationWpbWrapper>
                      </VacationColumnInner>
                    </VacationImageContainer>
                    <VacationLetterContainer>
                      <VacationColumnInner>
                        <VacationWpbWrapper>
                          <Divider height={30} />
                          <VacationContentElement>
                            <VacationWpbWrapper>
                              <p
                                style={{
                                  textAlign: "center",
                                  paddingBottom: 25,
                                }}
                              >
                                ပြန်မာပြည်အလည်ပြန်ချိန် လက်ထဲငွေသားဆုပ်ကိုင်ပြီး
                                ပြန်ချင်ကြသူများအတွက် GME
                                မှချေးငွေထုတ်ပေးနေပါသည်။
                              </p>
                              <p
                                style={{
                                  textAlign: "center",
                                  paddingBottom: 25,
                                }}
                              >
                                မြန်မာပြည်အလည်ပြန်ရာမှ ကိုရီးယားပြန်အဝင်
                                လစာမရသေးချိန် ငွေကြေးလိုအပ်ချက်ရှိပါကလည်း GME
                                တွင် ချေးငွေထုတ်ယူနိုင်ပါသည်။
                              </p>
                              <p
                                style={{
                                  textAlign: "center",
                                  paddingBottom: 25,
                                }}
                              >
                                ​သုံးလအတွင်း မြန်မာပြည်ပြန်ဖူးသူသည်
                                လေယာဉ်လက်မှတ်အသွားအပြန်ပုံပြပေးပါက အားလုံး
                                အိုကေ!
                              </p>
                              <p
                                style={{
                                  textAlign: "center",
                                  paddingBottom: 25,
                                }}
                              >
                                လူကြီးမင်းတို့အတွက် စိတ်ချယုံကြည်ရပြီး
                                မြန်ဆန်လှသော ဝန်ဆောင်မှူများအတွက် အမြဲအဆင်သင့်
                                ရှိနေတဲ့ GME…
                              </p>
                            </VacationWpbWrapper>
                          </VacationContentElement>
                          <Divider height={30} />
                          <ApplyButton />
                        </VacationWpbWrapper>
                      </VacationColumnInner>
                    </VacationLetterContainer>
                  </VacationDarkLeft>
                </VacationRowInner>
              </VacationWpbWrapper>
            </VacationColumnInner>
          </VacationContainer>
        </VacationDarkLeft>
      </VacationWrapper>
    </>
  );
};
export default Vacation;
const VacationWrapper = styled.div`
  padding-top: 0px;
  padding-bottom: 0px;
  position: relative;
  margin-bottom: 25px;
`;
const VacationDarkLeft = styled.div`
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
const VacationContainer = styled.div`
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
const VacationColumnInner = styled.div`
  position: relative;
`;
const VacationWpbWrapper = styled.div``;
const VacationRowInner = styled.div`
  position: relative;
  margin-bottom: 24px;
`;
const VacationImageContainer = styled.div`
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
    width: 25%;
  }
`;
const VacationLetterContainer = styled.div`
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
    width: 75%;
  }
`;
const VacationImageWrapper = styled.div`
  text-align: center;
  line-height: 0;
  margin-bottom: 0;
`;
const VacationImageInner = styled.div`
  height: 100%;
  display: block;
  text-align: center;
`;
const VacationImageHoverWrapper = styled.div`
  opacity: 1;
  margin-bottom: 0;
  transition: all 0.65s cubic-bezier(0.05, 0.2, 0.1, 1) !important;
  border-radius: 20px;
  display: inline-block;
  overflow: visible;
  position: relative;
`;
const VacationImageLodaed = styled.div`
  display: inline-block;
  transition: transform 0.65s cubic-bezier(0.05, 0.2, 0.1, 1);
`;
const VacationContentElement = styled.div`
  margin-bottom: 0;
`;
