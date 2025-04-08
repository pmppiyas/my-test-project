import React from "react";
import Button from "../lib/button";
import Image from "next/image";

function SessionBook() {
  return (
    <div className="font-custom bg-background md:px-10 py-10 flex flex-col">
      <div className="bg-secondary dark:bg-background p-6 md:p-8 rounded-md shadow-lg flex flex-col lg:flex-row gap-8 lg:gap-16 w-full md:w-3/4 mx-auto">
        {/* Left side */}
        <div className="flex flex-col space-y-6 lg:w-1/2 justify-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium">
            Get 15-Minutes Complimentary online session.
          </h2>
          <p className="text-sm md:text-base">
            Limited Period Offer. Claim Now.
          </p>
          <div className="pt-2">
            <Button props={"Book Now"}></Button>
          </div>
        </div>

        {/* Right Side */}
        <div className="w-full lg:w-1/2 flex justify-center items-center">
          <div className="relative w-full aspect-square md:aspect-video lg:aspect-auto h-64 md:h-72 lg:h-80">
            <Image
              src="https://i.ibb.co.com/Sw9Tj04L/pexels-mentalhealthamerica-5531323-1.jpg"
              alt="Therapy session"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="rounded-lg object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SessionBook;
