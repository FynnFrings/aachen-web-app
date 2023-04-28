import BlogCardCarousel from "./BlogCardCarousel";
import Carousel, { CarouselItem } from "./Carousel";
import { IBlogCard } from "@/types/types";

const BlogDesktop = ({ articles }: { articles: IBlogCard[] }) => {
  //Get two last items from array of articles
  const articlesReverse = articles.slice(-3);

  return (
    <>
      <Carousel>
        <CarouselItem>
          <BlogCardCarousel article={articlesReverse[0]} />
        </CarouselItem>
        <CarouselItem>
          <BlogCardCarousel article={articlesReverse[1]} />
        </CarouselItem>
        <CarouselItem>
          <BlogCardCarousel article={articlesReverse[2]} />
        </CarouselItem>
      </Carousel>
    </>
  );
};
export default BlogDesktop;
