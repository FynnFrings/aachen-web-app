import BlogCardCarousel from "./BlogCardCarousel";
import AachenPic4 from "../../public/AachenPics/aachen6.png";
import Carousel, { CarouselItem } from "./Carousel";

const BlogDesktop = () => {
  return (
    <>
      <Carousel>
        <CarouselItem>
          <BlogCardCarousel photo={AachenPic4} />
        </CarouselItem>
        <CarouselItem>
          <BlogCardCarousel photo={AachenPic4} />
        </CarouselItem>
        <CarouselItem>
          <BlogCardCarousel photo={AachenPic4} />
        </CarouselItem>
      </Carousel>
    </>
  );
};

export default BlogDesktop;
