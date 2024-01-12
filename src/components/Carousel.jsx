import { useState } from "react";
import { useEffect } from "react";
import styled from "styled-components";

const Caroussel = ({ props }) => {
  const [current, setCurrent] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  let timeOut = null;

  const slideRight = () => {
    setCurrent(current === props.length - 1 ? 0 : current + 1);
  };
  const slideLeft = () => {
    setCurrent(current === 0 ? props.length - 1 : current - 1);
  };
  useEffect(() => {
    timeOut =
      autoPlay &&
      setTimeout(() => {
        slideRight();
      }, 2000);
  });
  return (
    <CarouselMain
      onMouseEnter={() => {
        setAutoPlay(false);
        clearTimeout(timeOut);
      }}
      onMouseLeave={() => {
        setAutoPlay(true);
      }}
    >
      <CarouselWrapper>
        {props.length > 0 &&
          props.map((item, index) => (
            <div
              className={
                index == current
                  ? "carousel_card carousel_card-active"
                  : "carousel_card"
              }
              key={index}
            >
              <CardDetail>
                <img src={item.src} alt="" />
              </CardDetail>
            </div>
          ))}

        <ArrowLeft
          className="carousel_arrow_left"
          type="button"
          aria-label="Previous"
          onClick={slideLeft}
        >
          <svg viewBox="0 0 100 100">
            <path
              d="M 10,50 L 60,100 L 70,90 L 30,50  L 70,10 L 60,0 Z"
              className="arrow"
            ></path>
          </svg>
        </ArrowLeft>

        <ArrowRight
          className="carousel_arrow_right"
          type="button"
          aria-label="Next"
          onClick={slideRight}
        >
          <svg viewBox="0 0 100 100">
            <path
              d="M 10,50 L 60,100 L 70,90 L 30,50  L 70,10 L 60,0 Z"
              className="arrow"
              transform="translate(100, 100) rotate(180) "
            ></path>
          </svg>
        </ArrowRight>
        <div className="carousel_pagination">
          {props.map((_, index) => {
            return (
              <div
                key={index}
                className={
                  index == current
                    ? "pagination_dot pagination_dot-active"
                    : "pagination_dot"
                }
                onClick={() => setCurrent(index)}
              ></div>
            );
          })}
        </div>
      </CarouselWrapper>
    </CarouselMain>
  );
};

export default Caroussel;
const CarouselMain = styled.div`
  display: flex;
  height: 450px;
  width: 100%;
`;
const CarouselWrapper = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  height: 100%;
  .carousel_card {
    display: flex;
    flex: 1;
    position: absolute;
    width: 100%;
    height: 100%;
    overflow: hidden;
    border-radius: 20px;
    box-shadow: 0px 0px 11px 3px rgba(0, 0, 0, 0.15);
    opacity: 0;
    pointer-events: none;
    transform: 0.5s ease-in-out;
  }
  .carousel_card-active {
    opacity: 1;
    transform: scale(1);
    pointer-events: visible;
  }
`;
const CardDetail = styled.div`
  width: 100%;
  height: 100%;
  gap: 20px;
  transition: 0.1s ease;
  display: flex;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  img {
    max-width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
const ArrowLeft = styled.button`
  position: absolute;
  background: transparent;
  left: 50px;
  top: 50%;
  width: 50px;
  height: 40px;
  border: none;
  cursor: pointer;
  z-index: 1000;
  background-color: transparent !important;
  transform: translateY(-50%);
  font-size: 25px !important;
  svg {
    position: absolute;
    border-radius: 10px;
    padding: 5px 5px;
    background-color: white !important;
    left: 10px;
    width: 20px;
    height: 55%;
    top: 9px;
    transition: transform 0.45s cubic-bezier(0.15, 0.75, 0.5, 1);
  }
`;
const ArrowRight = styled.button`
  position: absolute;
  background: transparent;
  right: 50px;
  width: 40px;
  height: 40px;
  top: 50%;
  border: none;
  cursor: pointer;
  z-index: 1000;
  background-color: transparent !important;
  transform: translateY(-50%);
  font-size: 25px !important;
  svg {
    position: absolute;
    right: 10px;
    border-radius: 10px;
    padding: 5px 5px;
    background-color: white !important;
    width: 20px;
    height: 55%;
    top: 9px;
    transition: transform 0.45s cubic-bezier(0.15, 0.75, 0.5, 1);
  }
`;
