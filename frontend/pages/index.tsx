import AdDownload from "@/components/AdDowmload";
import Blog from "@/components/Blog/Blog";
import Contact from "@/components/Contact";
import Gallery from "@/components/Gallery";
import Overview from "@/components/Overview/Overview";
import Reviews from "@/components/Reviews/Reviews";
import { IBlogCard } from "@/types/types";

export default function Home({ articles }: { articles: IBlogCard[] }) {
  return (
    <>
      <AdDownload />
      <Reviews />
      <Overview />
      <Blog articles={articles} />
      <Gallery />
      <Contact />
    </>
  );
}

//Using Server Side Rendering function
export async function getServerSideProps() {
  // Fetch data from  API
  const res = await fetch(`http://localhost:5050/blog/`);
  const data = await res.json();
  // Pass data to the page via props
  return { props: { articles: data } };
}
