import ApplyButton from "components/ApplyButton";
import Divider from "components/Divider";
import RowBgWrapper2 from "components/RowBgWrapper2";
import styled from "styled-components";
import card from "assets/images/countries/myanmar/card.jpg";
import Header from "../Header";

const Card = () => {
  return (
    <>
      <Header title="အလုပ်သစ်မှာလစာတစ်ကြိမ်မှမရသေးရင်ချေးငွေလျှောက်လို့ရနိုင်ပါသလား?" />
      <CardWrapper>
        <RowBgWrapper2 />
        <CardDarkLeft>
          <CardLetterContainer>
            <CardColumnInner>
              <CardWpbWrapper>
                <Divider height={30} />
                <CardContentElement>
                  <CardWpbWrapper>
                    <p style={{ textAlign: "center", paddingBottom: 27 }}>
                      <b>&nbsp;</b>ကိုရီးယားနိုင်ငံအတွင်း တရားဝင်ဗီဇာနှင့်
                      အလုပ်လုပ်ကိုင်နေသူတိုင်း GMEတွင်
                      ချေးငွေစုံစမ်းလျှောက်ထားနိုင်ပါသည်။
                    </p>
                    <p style={{ textAlign: "center", paddingBottom: 27 }}>
                      ကိုရီးယားနိုင်ငံသို့
                      အသစ်လာရောက်အလုပ်လုပ်ကိုင်နေသူများအနေဖြင့်
                      အလုပ်ခွင်ဝင်တာမကြာသေး၍ ပထမဦးဆုံးအကြိမ်လစာမဝင်သေးပါကလည်း
                      စိုးရိမ်စရာမလိုပဲ GME မှာချေးငွေလျှောက်ထားနိုင်ပါသည်။
                    </p>
                    <p style={{ textAlign: "center", paddingBottom: 27 }}>
                      ထို့အပြင်အလုပ်ပြောင်းထားသူများအနေဖြင့်
                      အလုပ်သစ်တွင်လစာတစ်ကြိမ်မှမရထားသေးပါကလည်း ချေးငွေလျှောက်ထား
                      နိုင်ပါသည်။
                    </p>
                    <p style={{ textAlign: "center", paddingBottom: 27 }}>
                      လစာတစ်ကြိမ်မှမဝင်ထားရသေးတာဖြစ်သောကြောင့် ချေးငွေထုတ်ယူသူ၏
                      လစာဝင်ရက်ကိုသိရှိနိုင်ရန် အလုပ်စာချုပ်ကော်ပီပုံ
                      မဖြစ်မနေပြပေးဖို့လို အပ် ပါသည်။
                    </p>
                  </CardWpbWrapper>
                </CardContentElement>
              </CardWpbWrapper>
            </CardColumnInner>
          </CardLetterContainer>
          <CardBoxContainer>
            <CardColumnInner>
              <CardWpbWrapper>
                <CardImagerWrapper>
                  <CardImageInner>
                    <CardImageHover>
                      <CardImageLoaded>
                        <img
                          src={card}
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
                          width={2560}
                          height={1440}
                        />
                      </CardImageLoaded>
                    </CardImageHover>
                  </CardImageInner>
                </CardImagerWrapper>
                <ApplyButton />
              </CardWpbWrapper>
            </CardColumnInner>
          </CardBoxContainer>
        </CardDarkLeft>
      </CardWrapper>
    </>
  );
};
export default Card;
const CardWrapper = styled.div`
  padding-top: 0px;
  padding-bottom: 0px;
  position: relative;
  margin-bottom: 35px;
`;
const CardDarkLeft = styled.div`
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
const CardLetterContainer = styled.div`
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
    width: 66%;
  }
`;
const CardColumnInner = styled.div`
  position: relative;
`;
const CardWpbWrapper = styled.div`
  text-align: center;
`;
const CardContentElement = styled.div`
  margin-bottom: 0;
`;
const CardBoxContainer = styled.div`
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
    width: 33%;
  }
`;
const CardImagerWrapper = styled.div`
  text-align: center;
  line-height: 0;
  margin-bottom: 0;
`;
const CardImageInner = styled.div`
  height: 100%;
`;
const CardImageHover = styled.div`
  opacity: 1;
  transition: all 0.65s cubic-bezier(0.05, 0.2, 0.1, 1) !importa;
  border-radius: 20px;
  display: inline-block;
  overflow: visible;
  box-shadow: rgba(0, 0, 0, 0.04) 0px 1px 0px, rgba(0, 0, 0, 0.05) 0px 2px 7px,
    rgba(0, 0, 0, 0.06) 0px 12px 22px;
  margin-bottom: 20px;
`;
const CardImageLoaded = styled.div`
  display: inline-block;
`;
