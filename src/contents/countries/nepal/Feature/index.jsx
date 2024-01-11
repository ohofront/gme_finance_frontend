import Divider from "components/Divider";
import RowBgWrapper2 from "components/RowBgWrapper2";
import styled from "styled-components";
import feature from "assets/images/countries/nepal/feature.png";
const Feature = () => {
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
                    <li>
                      जी एम ई फाईनान्सले नेपाली कला तथा साहित्यलाई प्रवर्धन तथा
                      संरक्षण को लागि वित्तीय सहयोग गर्नु का साथै सहभागिता
                      जनाउदै आइरहेको छ !
                    </li>
                    <li>
                      जी एम ई फाईनान्सले आफ्नो सामाजिक जिम्मेवारी प्रति पनि सजग
                      र दृढ रहेको छ !
                    </li>
                    <li>
                      नेपाल को कुनै दुर्गम क्षेत्र को बिद्यालय होस् वा कुनै विपद
                      जी एम ई फाईनान्सले सधै आफ्नो सामाजिक जिम्मेवारी प्रति दृढ
                      रही सेवा प्रदान गर्दै आइ रहेको छ !
                    </li>
                  </ol>
                </TextWbpWrapper>
              </TextElement>
              <Divider height={50} />
              <CardImagerWrapper>
                <CardImageInner>
                  <CardImageHover>
                    <CardImageLoaded>
                      <img
                        src={feature}
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
                        width={1100}
                        height={340}
                      />
                    </CardImageLoaded>
                  </CardImageHover>
                </CardImageInner>
              </CardImagerWrapper>
            </WpbWrapper>
          </ColumnInner>
        </Container>
      </DarkLeft>
    </>
  );
};
export default Feature;
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
