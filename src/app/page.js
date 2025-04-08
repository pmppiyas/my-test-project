import Banner from "./Components/Banner";
import Blog from "./Components/Blog";
import DontMiss from "./Components/DontMiss";
import NewsLetter from "./Components/NewsLetter";
import Reviews from "./Components/Reviews";
import SessionBook from "./Components/SessionBook";
import WhyMe from "./Components/WhyMe";

export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <WhyMe></WhyMe>
      <Reviews></Reviews>
      <Blog></Blog>
      <DontMiss></DontMiss>
      <SessionBook></SessionBook>
      <NewsLetter></NewsLetter>
    </div>
  );
}
