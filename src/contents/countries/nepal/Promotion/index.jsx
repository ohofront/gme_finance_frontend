import Divider from "components/Divider";
import RowBgWrapper2 from "components/RowBgWrapper2";
import styled from "styled-components";
import card from "assets/images/countries/nepal/card.png";
const Promotion = () => {
  return (
    <>
      <RowBgWrapper2 />
      <DarkLeft>
        <Container>
          <ColumnInner>
            <WpbWrapper>
              <TextElement>
                <TextWbpWrapper>
                  <ol>
                    <li
                      style={{
                        listStyle: "decimal",
                        listStylePosition: "outside",
                      }}
                    >
                      जी एम ई फाईनान्सले बिबिध भिसा भएका भिसा बाहक लाई लोन
                      प्रदान गर्दछ !
                    </li>
                    <li>
                      एक दिन मै लोन पाउनुका साथै सरल, सहज, तथा द्रुत सेवा पनि!
                    </li>
                    <li>
                      E ९ तथा E ७ संगै बैधानिक रुप ले कोरिया मा बस्दै आउनु भएको
                      ले पनि लोन लिन पाउने&nbsp;!
                    </li>
                    <li>
                      F २,&nbsp; F ४, F ५,&nbsp; H २, F ६,&nbsp; तथा D ८ भिसा
                      बाहक ले पनि लोन लिन पाउने !
                    </li>
                    <li>
                      जी एम ई फाईनान्सले अग्रिम रुपमा बोनस भिसा लाई पनि मान्यता
                      दिने हुदा अधिक लोन प्राप्त गर्न सकिने !
                    </li>
                  </ol>
                </TextWbpWrapper>
              </TextElement>
            </WpbWrapper>
          </ColumnInner>
        </Container>
      </DarkLeft>
    </>
  );
};
export default Promotion;
const DarkLeft = styled.div`
  display: flex;
  flex-wrap: wrap;
  float: none;
  margin-bottom: 20px !important;
  z-index: 10;
  margin-left: -1%;
  margin-right: -1%;
  width: auto;
  position: relative;
  align-items: center;
  justify-content: center;
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
  display: flex;
  align-items: center;
  justify-content: center;
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
  display: block;
  overflow: visible;
  box-shadow: rgba(0, 0, 0, 0.04) 0px 1px 0px, rgba(0, 0, 0, 0.05) 0px 2px 7px,
    rgba(0, 0, 0, 0.06) 0px 12px 22px;
  margin-bottom: 20px;
  position: relative;
`;
const CardImageLoaded = styled.div`
  display: block;
`;
