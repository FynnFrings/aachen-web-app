import React, { useEffect, useState } from "react";
import { useSwipeable } from "react-swipeable";
import Image from "next/image";
import arrowLeft from "../../public/arrows_dots/arrow_left.png";
import arrowRight from "../../public/arrows_dots/arrow_right.png";

// Define the props interface for the Carousel component
interface CarouselItemProps {
  children: React.ReactNode;
}

// Define the CarouselItem component which renders each carousel item
export const CarouselItem: React.FC<CarouselItemProps> = ({ children }) => {
  return <div className="inline-flex">{children}</div>;
};

interface CarouselProps {
  children: React.ReactNode;
}

// Define the Carousel component
const Carousel: React.FC<CarouselProps> = ({ children }) => {
  // Define state for the active carousel item and whether the carousel is paused
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [paused, setPaused] = useState<boolean>(false);

  // Function to update the active carousel item
  const updateIndex = (newIndex: number) => {
    // If the new index is out of range, wrap it around to the other end of the carousel
    if (newIndex < 0) {
      newIndex = React.Children.count(children) - 1;
    } else if (newIndex >= React.Children.count(children)) {
      // If the new index is out of range, wrap it around to the other end of the carousel
      newIndex = 0;
    }
    // Update the active index
    setActiveIndex(newIndex);
  };

  // // Set up an effect to automatically update the active index
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     // Increment the active index if the carousel is not paused
  //     if (!paused) {
  //       updateIndex(activeIndex + 1);
  //     }
  //   }, 3000);
  //   // Clean up the interval on unmount
  //   return () => {
  //     if (interval) {
  //       clearInterval(interval);
  //     }
  //   };
  // });

  // Set up swipe handlers using the react-swipeable library
  const handlers = useSwipeable({
    onSwipedLeft: () => updateIndex(activeIndex + 1),
    onSwipedRight: () => updateIndex(activeIndex - 1),
  });

  // Render the Carousel component
  return (
    <div className="w-full flex justify-center items-center gap-x-10">
      <button
        onClick={() => {
          // Decrement the active index when the left arrow button is clicked
          updateIndex(activeIndex - 1);
        }}
      >
        <Image src={arrowLeft} alt="arrow_left" width={80} height={80} />
      </button>
      <div
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        className="overflow-hidden  w-[60%]"
      >
        <div
          className="whitespace-nowrap  transition-transform "
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {/* Render each carousel item */}
          {React.Children.map(children, (child, index) => {
            return React.cloneElement(child as React.ReactElement<any>, {
              key: index,
            });
          })}
        </div>
        <div className="text-white flex justify-center gap-5">
          {/* Render the navigation dots */}
          {React.Children.map(children, (child, index) => {
            return (
              <button
                onClick={() => {
                  // Update the active index when a navigation dot is clicked
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
          // Increment the active index when the right arrow button is clicked
          updateIndex(activeIndex + 1);
        }}
      >
        <Image src={arrowRight} alt="arrow_right" width={80} height={80} />
      </button>
    </div>
  );
};

export default Carousel;
