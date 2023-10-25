import Divider from "components/Divider";
import RowWrapper from "components/RowWrapper";
import styled from "styled-components";
import products from "utils/Products/products";

const ProductList = () => {
  return (
    <>
      {products.map((item, index) => {
        return item.location === "right" ? (
          <ProductListWrapper>
            <RowWrapper isColor={true} />
            <ProductListDarkLeft>
              <ProductImageContainer>
                <ProductImageColumnInner>
                  <ProductImageWbpWrapper>
                    <Divider height={100} />
                    <ProductImageWrapper>
                      <ProductImageInner>
                        <ProductImageHoverWrapper>
                          <ProductImageLoaded>
                            <img
                              src={item.src}
                              style={{
                                opacity: 1,
                                transform: "none",
                                paddingRight: 0,
                                paddingLeft: 0,
                                paddingBottom: 0,
                                marginBottom: 0,
                                display: "block",
                                minHeight: "1px",
                                minWidth: "1px",
                                maxWidth: "100%",
                                height: "auto",
                              }}
                            />
                          </ProductImageLoaded>
                        </ProductImageHoverWrapper>
                      </ProductImageInner>
                    </ProductImageWrapper>
                  </ProductImageWbpWrapper>
                </ProductImageColumnInner>
              </ProductImageContainer>
              <ProductContentContainer>
                <ProductContentColumnInner>
                  <ProductContentWbpWrapper>
                    <Divider height={100} />
                    <ProductContentElement>
                      <ProductContentWbpWrapper>
                        <h3 style={{ marginBottom: 10 }}>{item.title}</h3>
                        {item.subItem.map((sub, index) => {
                          return (
                            <p style={{ paddingBottom: 20 }}>
                              <p>
                                <strong>{sub.subtitle}</strong>
                              </p>
                              <br />
                              <p>
                                {sub.content1}
                                <br />
                                {sub.content2}
                                <br />
                                {sub.content3}
                                <br />
                                {sub.content4}
                              </p>
                            </p>
                          );
                        })}
                      </ProductContentWbpWrapper>
                    </ProductContentElement>
                  </ProductContentWbpWrapper>
                </ProductContentColumnInner>
              </ProductContentContainer>
            </ProductListDarkLeft>
          </ProductListWrapper>
        ) : (
          <>1</>
        );
      })}
    </>
  );
};
export default ProductList;
const ProductListWrapper = styled.div`
  padding-top: 0px;
  padding-bottom: 0px;
  margin-bottom: 0;
`;
const ProductListDarkLeft = styled.div`
  color: #191c1f;
  float: none;
  display: flex;
  flex-wrap: wrap;
  z-index: 10;
  margin-bottom: 0 !important;
  margin-left: -1%;
  margin-right: -1%;
  width: auto;
  position: relative;
`;
const ProductImageContainer = styled.div`
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
    width: 50%;
  }
`;
const ProductImageColumnInner = styled.div`
  position: relative;
`;
const ProductImageWbpWrapper = styled.div``;
const ProductImageWrapper = styled.div`
  line-height: 0;
  margin-bottom: 0;
`;
const ProductImageInner = styled.div`
  height: 100%;
`;
const ProductImageHoverWrapper = styled.div`
  opacity: 1;
  margin-bottom: 0;
  transition: all 0.65s cubic-bezier(0.05, 0.2, 0.1, 1) !important;
  overflow: visible;
  position: relative;
`;
const ProductImageLoaded = styled.div`
  transition: transform 0.65s cubic-bezier(0.05, 0.2, 0.1, 1);
`;
const ProductContentContainer = styled.div`
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
    width: 50%;
  }
`;
const ProductContentColumnInner = styled.div`
  position: relative;
`;
const ProductContentWbpWrapper = styled.div``;
const ProductContentElement = styled.div`
  margin-bottom: 0px;
`;
