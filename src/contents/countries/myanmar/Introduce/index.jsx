import styled from "styled-components";
import Header from "../Header";
import Divider from "components/Divider";
import ApplyButton2 from "components/ApplyButton2";

const Introduce = () => {
  return (
    <>
      <Header title="GME ချေးငွေကို ရုံးခွဲများသို့ကိုယ်တိုင်လာရောက်လျှောက်ထားနိုင်သလို Online မှလည်း လျင်မြန်လွယ်ကူစွာလျှောက်ထားနိုင်ပါသည်။" />
      <Divider height={50} />
      <DarkLeft>
        <Container>
          <ColumnInner>
            <WpbWrapper>
              <TextElement>
                <TextWbpWrapper>
                  <p>
                    ကိုရီးယားနိုင်ငံတစ်ဝှမ်းမှာ GME ရုံးခွဲ 13 နေရာရှိပါသည်။
                  </p>
                  <p>GME မြန်မာတာဝန်ခံများ ပုံမှန်ရုံးထိုင်သောရုံးခွဲများ –</p>
                  <p>၁) ဘူဖြောင်းရုံးခွဲ</p>
                  <p>၂) ဆုန်အူရီရုံးခွဲ</p>
                  <p>၃) ဆူဝမ်ရုံးခွဲ</p>
                  <p>၄) အန်းဆန်းရုံးခွဲ</p>
                  <p>၅) ဂင်မဲရုံးခွဲ</p>
                  <p>
                    ထို့ကြောင့် ချေးငွေအား GME ရုံးခွဲများသို့
                    ကိုယ်တိုင်လာရောက်၍ ယုံကြည်စိတ်ချစွာလျှောက်ထားနိုင်ပါသည်။
                  </p>
                  <p>
                    GME ရုံးခွဲများနှင့် ဝေးရာတွင် နေထိုင်သူ၊ အလုပ်နားရက်မရှိ၍
                    အပြင်ထွက်ရန်အဆင်မပြေသူများအတွက်လည်း Online
                    ချေးငွေလျှောက်ထားနိုင်ပါသည်။ “GME Finance Myanmar” Facebook
                    Page Messenger တွင် ကိုရီးယားစံတော်ချိန် မနက် 10နာရီမှ ည 12
                    နာရီအထိ စာပြန်ပေးပါ၍ အလုပ်နားချိန်တွင် သက်သောင့်သက်သာ
                    စုံစမ်းမေးမြန်း၊ အချက်အလက်များပေးပို့ကာ
                    လျှောက်ထားနိုင်ပါသည်။
                  </p>
                  <p>
                    (Online/Offline ချေးငွေလုပ်ဆောင်ချက်များမှာ
                    အတူတူပင်ဖြစ်ပါသည်။)
                  </p>
                </TextWbpWrapper>
              </TextElement>
            </WpbWrapper>
          </ColumnInner>
        </Container>
      </DarkLeft>
    </>
  );
};
export default Introduce;

const DarkLeft = styled.div`
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
const Container = styled.div`
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
const ColumnInner = styled.div`
  position: relative;
`;
const WpbWrapper = styled.div``;
const TextElement = styled.div`
  margin-bottom: 0;
`;
const TextWbpWrapper = styled.div`
  text-align: left;
  p {
    padding-bottom: 24px;
  }
`;
