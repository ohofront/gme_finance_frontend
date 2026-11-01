import Divider from "components/Divider";
import RowBgWrapper2 from "components/RowBgWrapper2";
import styled from "styled-components";
import blog from "utils/Countries/Bangladesh/blog";
import {
  AiOutlineUser,
  AiOutlineHeart,
  AiOutlineComment,
} from "react-icons/ai";
const BlogsContent = () => {
  return (
    <QuickHeaderRowInner>
      <RowBgWrapper2 />
      <QuickHeaderDarkLeft>
        <QuickHeaderContainer>
          <QuickHeaderColumnInner>
            <QuickHeaderWpbWrapper>
              <QuickHeaderContent>
                <BlogsContentWrapper>
                  <BlogsContentContainer>
                    {blog.map((item, index) => {
                      return (
                        <BlogsArticle key={index}>
                          <BlogsInnerWrapper>
                            <BlogsPostContent>
                              <BlogsPostA>
                                <BlogsFeaturedImg>
                                  <img
                                    width="600"
                                    height="403"
                                    src={item.src}
                                    className="attachment-portfolio-thumb size-portfolio-thumb skip-lazy wp-post-image auto-height"
                                    alt=""
                                    decoding="async"
                                    title=""
                                    sizes="(min-width: 1600px) 20vw, (min-width: 1300px) 25vw, (min-width: 1000px) 33.3vw, (min-width: 690px) 50vw, 100vw"
                                  />
                                </BlogsFeaturedImg>
                              </BlogsPostA>
                              <BlogContentInner>
                                <BlogEntireMetaLink />
                                <BlogMetaCategory>
                                  <BlogFilter>{item.category}</BlogFilter>
                                </BlogMetaCategory>
                                <BlogContentWrapper>
                                  <BlogContentHeader>
                                    <span>{item.date}</span>
                                    <Divider height={20} />
                                    <h3 className="title">
                                      <a href="https://gmefinance.com/2023/09/04/%e0%a6%9c%e0%a6%bf%e0%a6%8f%e0%a6%ae%e0%a6%87-%e0%a6%ab%e0%a6%bf%e0%a6%a8%e0%a7%8d%e0%a6%af%e0%a6%be%e0%a6%a8%e0%a7%8d%e0%a6%b8-%e0%a6%8f%e0%a6%b0-%e0%a6%87%e0%a6%ad%e0%a7%87%e0%a6%a8%e0%a7%8d/">
                                        {item.title}
                                      </a>
                                    </h3>
                                  </BlogContentHeader>
                                  <div className="excerpt">{item.content}</div>
                                </BlogContentWrapper>
                              </BlogContentInner>
                              <BlogPostMeta>
                                <BlogAuthor>
                                  <a href="https://gmefinance.com/author/taizuligmeremit-com/">
                                    <AiOutlineUser
                                      size={15}
                                      style={{ marginRight: "5px" }}
                                    />
                                    {item.writer}
                                  </a>
                                </BlogAuthor>

                                <BlogAuthor>
                                  <a href="https://gmefinance.com/2023/09/04/%e0%a6%9c%e0%a6%bf%e0%a6%8f%e0%a6%ae%e0%a6%87-%e0%a6%ab%e0%a6%bf%e0%a6%a8%e0%a7%8d%e0%a6%af%e0%a6%be%e0%a6%a8%e0%a7%8d%e0%a6%b8-%e0%a6%8f%e0%a6%b0-%e0%a6%87%e0%a6%ad%e0%a7%87%e0%a6%a8%e0%a7%8d/#respond">
                                    <AiOutlineComment size={15} />
                                    {item.comment}
                                  </a>
                                </BlogAuthor>

                                <BlogLoveWrapper>
                                  <a
                                    href="#"
                                    className="nectar-love"
                                    id="nectar-love-11755"
                                    title="Love this"
                                  >
                                    {" "}
                                    <AiOutlineHeart size={15} />
                                    <span className="total_loves">
                                      <span className="nectar-love-count">
                                        {item.love}
                                      </span>
                                    </span>
                                  </a>{" "}
                                </BlogLoveWrapper>
                              </BlogPostMeta>
                            </BlogsPostContent>
                          </BlogsInnerWrapper>
                        </BlogsArticle>
                      );
                    })}
                  </BlogsContentContainer>
                </BlogsContentWrapper>
              </QuickHeaderContent>
            </QuickHeaderWpbWrapper>
          </QuickHeaderColumnInner>
        </QuickHeaderContainer>
      </QuickHeaderDarkLeft>
    </QuickHeaderRowInner>
  );
};
export default BlogsContent;
const QuickHeaderRowInner = styled.div`
  margin-bottom: 24px;
  margin-top: 50px !important;
  position: relative;
`;
const QuickHeaderDarkLeft = styled.div`
  display: flex;
  flex-wrap: wrap;
  float: none;
  margin-bottom: 0 !important;
  z-index: 10;
  margin-left: -1%;
  margin-right: -1%;
  width: auto;
  position: relative;
  &::after {
    content: "";
    display: block;
    height: 0;
    clear: both;
    visibility: hidden;
  }
`;
const QuickHeaderContainer = styled.div`
  float: none;
  justify-content: center;
  margin-right: 0;
  margin-left: 0;
  padding-left: 1%;
  padding-right: 1%;
  box-shadow: none;
  background-position: center;
  position: relative;
  display: flex;
  @media screen and (min-width: 690px) {
    width: 100%;
  }
`;
const QuickHeaderColumnInner = styled.div`
  position: relative;
`;
const QuickHeaderWpbWrapper = styled.div``;
const QuickHeaderContent = styled.div`
  margin-bottom: 0;
  position: relative;
`;
const BlogsContentWrapper = styled.div`
  margin-left: 0;
  margin-right: 0;
  padding-left: 0;
  float: none;
  width: 1125px;
  margin-bottom: 20px;
  margin-top: 0;
  overflow: visible;
`;
const BlogsContentContainer = styled.div`
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
const BlogsArticle = styled.article`
  align-items: stretch;
  display: flex;
  float: none;
  margin-right: 0;
  margin-left: 0;
  padding-left: 1%;
  padding-right: 1%;
  box-shadow: none;
  background-position: center;
  position: relative;
  margin-bottom: 30px;
  @media screen and (min-width: 690px) {
    width: 33.3%;
  }
`;
const BlogsInnerWrapper = styled.div`
  border-radius: 4px;
  overflow: hidden;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.08);
  padding: 0;
  height: 100%;
  background-color: #fff;
  transition: transform 0.3s ease, box-shadow 0.2s ease;
  &:hover {
    cursor: pointer;
    transform: translateY(-10px);
    box-shadow: 0 15px 20px rgba(0, 0, 0, 0.13);
  }
`;
const BlogsPostContent = styled.div`
  padding-left: 0 !important;
  position: relative;
  min-height: 98px;
`;
const BlogsPostA = styled.a`
  position: relative;
  display: block;
  color: #0b3d91;
`;
const BlogsFeaturedImg = styled.span`
  line-height: 0;
  display: block;
  position: relative;
`;
const BlogContentInner = styled.div`
  position: static;
  border: none;
  padding-bottom: 0;
  margin-bottom: 0;
`;
const BlogEntireMetaLink = styled.a`
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 100%;
  z-index: 101;
  height: 100%;
`;
const BlogMetaCategory = styled.span``;
const BlogFilter = styled.a`
  position: absolute;
  top: 20px;
  left: 20px;
  z-index: 101;
`;
const BlogContentWrapper = styled.div`
  height: 537.45px;
  padding: 17%;
  position: relative;
  z-index: 100;
  background-color: #fff;
`;
const BlogContentHeader = styled.div`
  font-size: 12px;
  color: #555;
  margin-bottom: 12px;
  padding-bottom: 20px;
`;
const BlogPostMeta = styled.div`
  padding: 6px 21px;
  z-index: 101;
  position: relative;
  border-top: 2px solid rgba(0, 0, 0, 0.1);
  display: block;
  margin-bottom: 0;
`;
const BlogAuthor = styled.span`
  margin-right: 20px;
  margin-left: 0;
  color: #555;
  font-size: 12px;
`;
const BlogLoveWrapper = styled.div`
  margin-right: 0;
  float: none;
  display: inline-block;
  text-align: center;
  line-height: 20px;
  font-size: 12px;
`;
const UserIcon = styled.i`
  width: 15px;
  margin-right: 3px;
  font-size: 14px;
  font-style: normal;
  top: 0;
  color: #b9b9b9;
  line-height: 34px;
  height: 34px;
  &::before {
    text-decoration: inherit;
    speak: none;
  }
`;
