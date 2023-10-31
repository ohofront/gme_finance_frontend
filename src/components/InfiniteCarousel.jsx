import { useMemo } from "react";
import styled from "styled-components";
import { useEffect, useRef, useState } from "react";

const InfiniteCarousel = ({ carouselList }) => {
  let touchStartX;
  let touchEndX;
  const [mouseDownClientX, setMouseDownClientX] = useState(0);
  const [mouseDownClientY, setMouseDownClientY] = useState(0);
  const [mouseUpClientX, setMouseUpClientX] = useState(0);
  const [mouseUpClientY, setMouseUpClientY] = useState(0);
  const [tochedX, setTochedX] = useState(0);
  const [tochedY, setTochedY] = useState(0);

  const [currIndex, setCurrIndex] = useState(1);
  const [currList, setCurrList] = useState([]);
  const [autoPlay, setAutoPlay] = useState(true);
  let timeOut = null;
  const carouselRef = useRef(null);

  useEffect(() => {
    if (carouselList.length !== 0) {
      const startData = carouselList[0];
      const endData = carouselList[carouselList.length - 1];
      const newList = [endData, ...carouselList, startData];

      setCurrList(newList);
    }
  }, [carouselList]);

  useEffect(() => {
    if (carouselRef.current !== null) {
      carouselRef.current.style.transform = `translateX(-${currIndex}00%)`;
    }
  }, [currIndex]);

  const moveToNthSlide = (index) => {
    setTimeout(() => {
      console.log("index:", index);
      setCurrIndex(index);
      if (carouselRef.current !== null) {
        carouselRef.current.style.transition = "";
      }
    }, 500);
  };

  const handleSwipe = (direction) => {
    console.log("direction", direction);
    const newIndex = currIndex + direction;
    console.log(newIndex);
    if (newIndex === carouselList.length + 1) {
      moveToNthSlide(1);
    } else if (newIndex === 0) {
      moveToNthSlide(carouselList.length);
    }

    setCurrIndex((prev) => prev + direction);
    if (carouselRef.current !== null) {
      carouselRef.current.style.transition = "all 1s ease-in-out";
    }
  };
  const handleMouseDown = (e) => {
    setMouseDownClientX(e.clientX);
    setMouseDownClientY(e.clientY);
  };
  const handleMouseUp = (e) => {
    setMouseUpClientX(e.clientX);
    setMouseUpClientY(e.clientY);
  };
  useEffect(() => {
    const dragSpaceX = Math.abs(mouseDownClientX - mouseUpClientX);
    const dragSpaceY = Math.abs(mouseDownClientY - mouseUpClientY);
    const vector = dragSpaceX / dragSpaceY;

    if (mouseDownClientX !== 0 && dragSpaceX > 100 && vector > 2) {
      if (mouseUpClientX < mouseDownClientX) {
        handleSwipe(1);
      } else if (mouseUpClientX > mouseDownClientX) {
        handleSwipe(-1);
      }
    }
  }, [mouseUpClientX]);

  const handleTouchStart = (e) => {
    setTochedX(e.changedTouches[0].pageX);
    setTochedY(e.changedTouches[0].pageY);
  };

  const handleTouchMove = (e) => {
    const currTouchX = e.nativeEvent.changedTouches[0].clientX;
    console.log(currTouchX);
    console.log(carouselRef);
    if (carouselRef.current !== null) {
      console.log("1");
      carouselRef.current.style.transform = `translateX(calc(-${currIndex}00% - ${
        (touchStartX - currTouchX) * 2 || 0
      }px))`;
    }
  };

  const handleTouchEnd = (e) => {
    const distanceX = tochedX - e.changedTouches[0].pageX;
    const distanceY = tochedY - e.changedTouches[0].pageY;
    const vector = Math.abs(distanceX / distanceY);

    if (distanceX > 30 && vector > 2) {
      handleSwipe(1);
    } else if (distanceX < -30 && vector > 2) {
      handleSwipe(-1);
    }
  };
  // useEffect(() => {
  //   timeOut =
  //     autoPlay &&
  //     setTimeout(() => {
  //       handleSwipe(1);
  //     }, 2000);
  // });
  return (
    <CarouselContainer
      // key={currIndex}
      onMouseEnter={() => {
        setAutoPlay(false);
        clearTimeout(timeOut);
      }}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onTouchMove={handleTouchMove}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onMouseLeave={() => {
        setAutoPlay(true);
      }}
    >
      <CarouselWrapper>
        <LeftButton onClick={() => handleSwipe(-1)}>
          <LeftSvg className="flickity-button-icon" viewBox="0 0 100 100">
            <LeftPath
              d="M 10,50 L 60,100 L 70,90 L 30,50  L 70,10 L 60,0 Z"
              className="arrow"
            ></LeftPath>
          </LeftSvg>
        </LeftButton>
        <RightButton onClick={() => handleSwipe(1)}>
          <RightSvg className="flickity-button-icon" viewBox="0 0 100 100">
            <RightPath
              d="M 10,50 L 60,100 L 70,90 L 30,50  L 70,10 L 60,0 Z"
              className="arrow"
              transform="translate(100, 100) rotate(180) "
            ></RightPath>
          </RightSvg>
          <i className="fas fa-chevron-right"></i>
        </RightButton>

        <Carousel ref={carouselRef}>
          {currList.map((image, idx) => {
            const key = `${image}-${idx}`;
            return (
              <CarouselItem key={key}>
                <img src={image.src} alt="carousel-img" />
              </CarouselItem>
            );
          })}
        </Carousel>
      </CarouselWrapper>
    </CarouselContainer>
  );
};
export default InfiniteCarousel;

const CarouselContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;
const CarouselWrapper = styled.div`
  position: relative;
  width: 100%;
`;

const Carousel = styled.div`
  display: flex;
  width: 100%;
`;

const CarouselItem = styled.div`
  flex: none;
  object-fit: contain;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: auto;
  padding: 100px 10px;
  overflow: hidden;
  border-right: 2px solid colors.$WHITE;
  border-left: 2px solid colors.$WHITE;
  transition: border 300ms;
  img {
    flex-shrink: 0;
    width: 100%;
    display: block;
    min-height: 100%;
  }
`;
const LeftButton = styled.button`
  position: absolute;
  left: 50px;
  top: 45%;
  width: 40px;
  height: 40px;
  transition: all 0.5s ease-in-out;
  transform: translateY(-50%);
  background: transparent;
  border: none;
  cursor: pointer;
  z-index: 1000;
  background-color: transparent !important;

  &::before {
    background-color: #fff;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    content: "";
    display: block;
  }
  &::after {
    left: 13px;
    transform: scaleX(1) translateX(1px);
    transform-origin: left;
    background-color: #000;
    position: absolute;
    height: 2px;
    top: 50%;
    margin-top: -1px;
    width: 15px;
    content: "";
    transition: transform 0.45s cubic-bezier(0.15, 0.75, 0.5, 1);
    display: block;
  }
`;
const LeftSvg = styled.svg`
  left: 10px;
  width: 12px;
  top: 9px;
  transition: transform 0.45s cubic-bezier(0.15, 0.75, 0.5, 1);
  position: absolute;
  height: 55%;
  visibility: visible;
`;
const LeftPath = styled.path`
  fill: #000;
  visibility: visible;
`;

const RightButton = styled.button`
  position: absolute;
  right: 50px;
  width: 40px;
  height: 40px;
  top: 45%;
  background: transparent;
  border: none;
  cursor: pointer;
  z-index: 1000;
  transform: translateY(-50%);
  transition: all 0.5s ease-in-out;
  background-color: transparent !important;
  visibility: visible;
  &::before {
    background-color: #fff;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    content: "";
    display: block;
  }
  &::after {
    left: 12px;
    transform: scaleX(1) translateX(0px);
    transform-origin: right;
    background-color: #000;
    position: absolute;
    height: 2px;
    top: 50%;
    margin-top: -1px;
    width: 15px;
    content: "";
    transition: transform 0.45s cubic-bezier(0.15, 0.75, 0.5, 1);
    display: block;
  }
`;
const RightSvg = styled.svg`
  right: 10px;
  left: auto;
  width: 12px;
  top: 9px;
  transition: transform 0.45s cubic-bezier(0.15, 0.75, 0.5, 1);
  position: absolute;
  height: 55%;
`;
const RightPath = styled.path`
  fill: #000;
  visibility: visible;
`;
