import styled from "styled-components";
import Header from "../Header";
import Divider from "components/Divider";
import ApplyButton2 from "components/ApplyButton2";
import ApplyButton from "components/ApplyButton";

const Youtube = () => {
  return (
    <>
      <YoutubeDarkLeft>
        <YoutubeContainer>
          <YoutubeColumnInner>
            <Header title="ချေးငွေယူတဲ့အခါ စာရွက်တွေနဲ့ လက်မှတ်ထိုးနေတုန်းလား?" />
            <>
              <YoutubeWpbWrapper>
                <VideoWpbWrapper>
                  <iframe
                    title="Digital contract (Myanmar)"
                    width="100%"
                    height={608}
                    src="https://www.youtube.com/embed/H7VzdAdSKT8?feature=oembed"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen=""
                    style={{ opacity: 1, visibility: "visible" }}
                  />
                </VideoWpbWrapper>
              </YoutubeWpbWrapper>
            </>
          </YoutubeColumnInner>
        </YoutubeContainer>
      </YoutubeDarkLeft>
      <Divider height={50} />
      <DarkLeft>
        <Container>
          <ColumnInner>
            <WpbWrapper>
              <TextElement>
                <TextWbpWrapper>
                  <p>
                    GME မှာ 100% paperless (စာရွက်မလို) ချေးငွေ service ကို
                    2022/7 လပိုင်းကစ၍ ကိုရီးယားနိုင်ငံမှာ ပထမဆုံး
                    မိတ်ဆက်ပေးလိုက်ပါပြီ!
                  </p>
                  <p>
                    ပါဆယ်နဲ့ စာချုပ်ပို့၊ စာချုပ်ယူလုပ်ဖို့မလိုတော့တဲ့အပြင်
                    ငွေရရှိမှုလည်း ပိုမိုလျင်မြန်စေတာမလို့ Customer
                    များစိတ်တိုင်းကျလိမ့်မယ်လို့ ယုံကြည်ရပါတယ်။
                  </p>
                  <p>လုပ်ဆောင်ချက်။</p>
                  <p>
                    ၁) ချေးဘယ်ဘယ်လောက်၊ ဘယ်နှစ်လချုပ်၊
                    လစဉ်ကြေးဘယ်လောက်နဲ့ယူမှာဖြစ်ကြောင်း ဆွေးနွေးခြင်း။
                  </p>
                  <p>၂) Customer ဘက်မှ လိုအပ်သောအချက်အလက်များပေးပို့ခြင်း။</p>
                  <p>
                    ၃) GME ဘက်မှ အချက်အလက်များစုစည်းပြီး Credit စစ်ဆေးခြင်း။
                  </p>
                  <p>
                    ၄) Credit အောင်လျှင် စာချုပ်ဖြည့်ရန် link အား Customer ၏
                    kakao (သို့) ဖုန်းမက်ဆေ့မှတဆင့် ပေးပို့ခြင်း။
                  </p>
                  <p>
                    ၅) Customer မှ ထို link သို့ဝင်၍
                    စာချုပ်ရေးသားဖြည့်စွက်ခြင်းနှင့် ငွေလက်ခံရရှိခြင်း။
                  </p>
                  <ApplyButton />
                </TextWbpWrapper>
              </TextElement>
            </WpbWrapper>
          </ColumnInner>
        </Container>
      </DarkLeft>
    </>
  );
};
export default Youtube;
const YoutubeDarkLeft = styled.div`
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
const YoutubeContainer = styled.div`
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
const YoutubeColumnInner = styled.div`
  position: relative;
`;
const YoutubeWpbWrapper = styled.div`
  float: left;
  width: 100%;
  position: relative;
`;
const VideoWpbWrapper = styled.div`
  padding-top: 40px;
  margin-bottom: 0;
  position: relative;
  width: 100%;
  height: 100%;
`;
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
  padding-bottom: 100px;
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
  text-align: center;
  p {
    padding-bottom: 24px;
  }
`;
