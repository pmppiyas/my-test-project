"use client";
import { useState } from "react";
import Button from "../lib/button";

function NewsLetter() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Subscribing email:", email);
    setEmail("");
  };

  return (
    <div className="w-full  py-8 px-6  bg-secondary rounded-lg shadow-md flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0 md:space-x-6">
      <div className="flex-1 flex flex-col items-center justify-center text-center space-y-2 mb-6">
        <h3 className="text-2xl font-medium">
          Get notified when I publish new articles
        </h3>
        <p className="text-sm md:text-base ">
          Stay up to date with the latest news, announcements, and articles
          delivered directly to your inbox.
        </p>
      </div>

      {/* Subscription Form */}
      <form onSubmit={handleSubmit} className="w-full flex-1 ">
        <div className="flex gap-6">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            required
            className="w-full p-3 rounded-md border ring-primary focus:outline-none focus:ring-2 focus:ring-primary"
            aria-label="Email address"
          />
          <Button props={"Subscribe"} />
        </div>
      </form>
    </div>
  );
}

export default NewsLetter;
