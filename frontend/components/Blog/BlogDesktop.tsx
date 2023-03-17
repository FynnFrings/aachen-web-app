import { useState } from "react";
import BlogCard from "./BlogCard";
import AachenPic from "../../public/aachen_pic_2.png";
import AachenPic2 from "../../public/aachen3.jpg";
import AachenPic3 from "../../public/aachen2.jpg";

const BlogDesktop = () => {
  const [currentGalleryContainer, setCurrentGalleryContainer] = useState(0);
  const galleryContainers = [
    { id: 1, div: <BlogCard photo={AachenPic2} /> },
    { id: 2, div: <BlogCard photo={AachenPic3} /> },
    { id: 3, div: <BlogCard photo={AachenPic2} /> },
    { id: 4, div: <BlogCard photo={AachenPic3} /> },
  ];

  const handlePrevClick = () => {
    setCurrentGalleryContainer(currentGalleryContainer - 1);
    if (currentGalleryContainer === 0) {
      setCurrentGalleryContainer(galleryContainers.length - 1);
    }
  };

  const handleNextClick = () => {
    setCurrentGalleryContainer(currentGalleryContainer + 1);
    if (currentGalleryContainer === galleryContainers.length - 1) {
      setCurrentGalleryContainer(0);
    }
  };
  return (
    <>
      <div className="flex flex-row items-center justify-items-stretch">
        {galleryContainers.map((container) => (
          <div
            key={container.id}
            className={`w-full h-full flex justify-center items-stretch ${
              container.id === currentGalleryContainer + 1 ? "" : "hidden"
            }`}
          >
            {container.div}
          </div>
        ))}
        <div>
          <button
            className="mx-4 px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg"
            onClick={handleNextClick}
          >
            Next
          </button>
        </div>
        <div className="last:order-first">
          <button
            className="mx-4 px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg"
            onClick={handlePrevClick}
          >
            Prev
          </button>
        </div>
      </div>
    </>
  );
};

export default BlogDesktop;
