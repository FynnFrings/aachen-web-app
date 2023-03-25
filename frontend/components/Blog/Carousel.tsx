import React, { useEffect, useState } from "react";
import { useSwipeable } from "react-swipeable";
import Image from "next/image";
import arrowLeft from "../../public/arrows_dots/arrow_left.png";
import arrowRight from "../../public/arrows_dots/arrow_right.png";

export const CarouselItem = ({ children }: any) => {
  return (
    <div className="inline-flex items-center justify-center text-white w-full">
      {children}
    </div>
  );
};

const Carousel = ({ children }: any) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const [paused, setPaused] = useState(false);

  const updateIndex = (newIndex: any) => {
    if (newIndex < 0) {
      newIndex = React.Children.count(children) - 1;
    } else if (newIndex >= React.Children.count(children)) {
      newIndex = 0;
    }
    setActiveIndex(newIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!paused) {
        updateIndex(activeIndex + 1);
      }
    }, 5000);
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  });

  const handlers = useSwipeable({
    onSwipedLeft: () => updateIndex(activeIndex + 1),
    onSwipedRight: () => updateIndex(activeIndex + 1),
  });
  return (
    <div className="w-full flex justify-center items-center gap-x-10">
      <button
        onClick={() => {
          updateIndex(activeIndex - 1);
        }}
      >
        <Image src={arrowLeft} alt="arrow_left" width={100} height={100} />
      </button>
      <div
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        className="overflow-hidden w-[60%]"
      >
        <div
          className="whitespace-nowrap transition-transform"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {React.Children.map(children, (child, index) => {
            return React.cloneElement(child);
          })}
        </div>
        <div className="text-white flex justify-center gap-5">
          {React.Children.map(children, (child, index) => {
            return (
              <button
                onClick={() => {
                  updateIndex(index);
                }}
              >
                <h1
                  className={`${
                    index === activeIndex
                      ? "text-[#FAC520] text-5xl"
                      : "text-5xl"
                  }`}
                >
                  •
                </h1>
              </button>
            );
          })}
        </div>
      </div>
      <button
        onClick={() => {
          updateIndex(activeIndex + 1);
        }}
      >
        <Image src={arrowRight} alt="arrow_right" width={100} height={100} />
      </button>
    </div>
  );
};

export default Carousel;
