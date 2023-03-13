import AdDownload from "@/components/AdDowmload";
import Blog from "@/components/Blog/Blog";
import Contact from "@/components/Contact";
import Overview from "@/components/Overview/Overview";
import Reviews from "@/components/Reviews/Reviews";
import WeatherWidget from "@/components/WeatherWidget";

export default function Home() {
  return (
    <>
      <AdDownload />
      <Reviews />
      <Overview />
      <Blog />
      <Contact />
      <WeatherWidget />
    </>
  );
}
