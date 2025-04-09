import React from "react";
import Button from "../lib/button";
import Image from "next/image";
import { assets } from "../Assets/assets";

function DontMiss() {
  return (
    <div className="font-custom bg-background px-4 md:px-10 py-12 md:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
        {/* Left Side */}
        <div className="flex flex-col gap-6 md:gap-8 lg:flex-1 max-w-full lg:max-w-[550px]">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight text-center lg:text-left">
            Don't miss out on my 'Live life at the full potential' free guide
          </h2>

          <div className="text-sm md:text-base text-center lg:text-left">
            <p className="mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua minim
              veniam.
            </p>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo.
            </p>
          </div>

          <div className="mt-2 md:mt-4 flex justify-center lg:justify-start">
            <Button />
          </div>
        </div>

        {/* Right Side */}
        <div className="w-full md:w-2/3 lg:w-1/3 flex justify-center lg:justify-end">
          <div className="relative w-full aspect-[3/4]">
            <Image
              src={assets.poster}
              alt="Live life at full potential guide cover"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="rounded-sm object-cover object-center shadow-md"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DontMiss;
