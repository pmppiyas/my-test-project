import Button from "../lib/button";
import Image from "next/image";
import { assets } from "../Assets/assets";

function Banner() {
  return (
    <div className="font-cumtom md:min-h-[calc(100vh-72px)] bg-secondary dark:bg-background text-foreground flex flex-col md:flex-row justify-between items-center gap-8 p-4 md:p-10 relative">
      {/* Vector Image */}
      <div className="block absolute top-0 left-0 ">
        <Image
          src={assets.vector1}
          alt="Vector"
          height={100}
          className="w-full  object-cover"
        />
      </div>
      {/* Left Section */}
      <div className="text-left space-y-4 md:w-1/2">
        <p className="text-md opacity-50 ">
          Proven strategies backed by science for success.
        </p>
        <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
          Live life at the full potential
        </h1>
        <h6>
          I help people to discover their true potential and live a fulfilling
          life...Discover the simple 3 steps that I discovered to hack
          productivity. It just works and it is begin using backed by science.
          Wanna transform your life?
        </h6>
        <Button></Button>
      </div>

      {/* Right Section */}
      <div className="w-full md:w-1/2 h-full flex justify-end items-center relative">
        {/* Rating */}
        <div className="bg-background shadow-xl flex items-center gap-2 p-2  absolute top-0 md:-top-8 left-0 rounded-sm">
          <div className="border-2 border-primary border-dashed p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="35"
              height="35"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#20ad96"
              strokeWidth="2.25"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-goal-icon lucide-goal"
            >
              <path d="M12 13V2l8 4-8 4" />
              <path d="M20.561 10.222a9 9 0 1 1-12.55-5.29" />
              <path d="M8.002 9.997a5 5 0 1 0 8.9 2.02" />
            </svg>
          </div>

          <div className=" flex flex-col text-center">
            <h3 className="text-2xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 animate-pulse">
              100%
            </h3>

            <p>Success rate this year</p>
          </div>
        </div>
        <Image
          src={assets.banner1}
          alt="Banner"
          className=" h-[500px] w-full lg:w-3/4 rounded-lg shadow-lg"
          priority
        />
      </div>
    </div>
  );
}

export default Banner;
