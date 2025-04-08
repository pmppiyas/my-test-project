import React from "react";
import Button from "../lib/button";
import Image from "next/image";
import { assets } from "../Assets/assets";

function DontMiss() {
  return (
    <div className="font-cumtom bg-background px-4 md:px-10 py-10  space-y-10 lg:space-y-16 flex flex-col lg:flex-row gap-12 lg:gap-16">
      {/* Left Side */}
      <div className="flex-1 space-y-6 lg:space-y-10  justify-center flex flex-col ">
        <h2 className="text-4xl md:text-5xl font-semibold  leading-tight ">
          Don’t miss out on my ‘Live life at the full potential’ free guide
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua minim
          veniam.
          <br></br>
          <br></br>Sed ut perspiciatis unde omnis iste natus error sit
          voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque
          ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae
          dicta sunt explicabo.{" "}
        </p>
        <Button></Button>
      </div>
      {/* Right Side */}
      <div className="md:w-1/2 lg:w-1/3 flex justify-center items-center ">
        <Image
          src={assets.poster}
          alt="image"
          height={450}
          className="rounded-t-md w-full"
        ></Image>
      </div>
    </div>
  );
}

export default DontMiss;
