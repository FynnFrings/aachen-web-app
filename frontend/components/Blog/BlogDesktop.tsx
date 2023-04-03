import BlogCard from "./BlogCard";
import AachenPic4 from "../../public/AachenPics/aachen6.png";
import Carousel, { CarouselItem } from "./Carousel";

const BlogDesktop = () => {
  return (
    <>
      <Carousel>
        <CarouselItem>
          <BlogCard photo={AachenPic4} />
        </CarouselItem>
        <CarouselItem>
          <BlogCard photo={AachenPic4} />
        </CarouselItem>
        <CarouselItem>
          <BlogCard photo={AachenPic4} />
        </CarouselItem>
        <CarouselItem>
          <BlogCard photo={AachenPic4} />
        </CarouselItem>
        <CarouselItem>
          <BlogCard photo={AachenPic4} />
        </CarouselItem>
      </Carousel>
    </>
  );
};

export default BlogDesktop;
