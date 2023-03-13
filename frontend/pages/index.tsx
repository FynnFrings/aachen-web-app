import AdDownload from "@/components/AdDowmload";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import Overview from "@/components/Overview";
import Reviews from "@/components/Reviews";

export default function Home() {
  return (
    <>
      <AdDownload />
      <Reviews />
      <Overview />
      <Blog />
      <Contact />
    </>
  );
}
