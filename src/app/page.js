import Banner from "./Components/Banner";
import Blog from "./Components/Blog";
import Reviews from "./Components/Reviews";
import WhyMe from "./Components/WhyMe";

export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <WhyMe></WhyMe>
      <Reviews></Reviews>
      <Blog></Blog>
    </div>
  );
}
