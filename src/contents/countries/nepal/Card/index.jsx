import Divider from "components/Divider";
import RowBgWrapper2 from "components/RowBgWrapper2";
import styled from "styled-components";
import card from "assets/images/countries/nepal/card.png";
const Card = () => {
  return (
    <>
      <RowBgWrapper2 />
      <DarkLeft>
        <Container>
          <ColumnInner>
            <WpbWrapper>
              <TextElement>
                <TextWbpWrapper>
                  <p>
                    जी एम ई&nbsp; फाईनान्स कोरियाको एक मात्र पहिलो लोन कम्पनी
                    जुन&nbsp; कोरियन सरकारबाट सम्बन्धन प्राप्त सस्था हो ! जसले
                    सम्पूर्ण बित्तिय आवश्कताको परिपूरण गर्दै ग्राहक वर्गको सूचना
                    हरुलाई सुरक्षित राख्ने प्रत्याभूति गर्दछ !&nbsp; बित्तिय
                    आवश्कताको जानकारी लिन जी एम ई को जुनसुकै शाखा वा online बाट
                    पनि जानकारी लिन सकिनेछ ! जी एम ई&nbsp; लोन सहज, सरल तथा
                    द्रुत सेवाको साथ एक दिन मै पाउन सकिने हुदा श्रम र समयको बचत
                    गर्दछ !
                  </p>
                </TextWbpWrapper>
              </TextElement>
              <Divider height={50} />
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
export default Card;
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
  text-align: center;
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
