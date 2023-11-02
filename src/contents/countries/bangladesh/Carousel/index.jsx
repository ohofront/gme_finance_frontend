import { useEffect, useRef } from "react";
import Slider from "react-slick";
import banners from "utils/Countries/Bangladesh/banners";
import { SwiperSlide } from "swiper/react";
import "swiper/css";
import styled from "styled-components";
import InfiniteCarousel from "components/InfiniteCarousel";
const Carousel = () => {
  const slider = useRef();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <CountriesWrapper>
      <InfiniteCarousel carouselList={banners} />
    </CountriesWrapper>
  );
};
export default Carousel;
const CountriesWrapper = styled.div`
  margin-top: 100px;
  padding-bottom: 0px;
  margin-bottom: 0;
  visibility: visible;
  box-sizing: content-box;
  position: relative;
  background-size: cover;
  width: 100%;
`;
