import Image from "next/image";
import React from "react";

function Blog() {
  const blogs = [
    {
      title: "Balancing your love and work life.",
      description:
        "This article discusses the importance of balancing your love and work life, and offers tips for achieving that balance.",
      image: "https://i.ibb.co.com/ccKcL8sC/pexels-pixabay-208603-1.jpg",
    },
    {
      title: "The importance of self-care.",
      description:
        "This article discusses the importance of self-care, and offers tips for incorporating self-care into your daily routine.",
      image:
        "https://i.ibb.co.com/My4RGmng/pexels-divinetechygirl-1181671-1.jpg",
    },
    {
      title: "How to stay motivated during tough times.",
      description:
        "This article discusses how to stay motivated during tough times, and offers tips for maintaining motivation.",
      image: "https://i.ibb.co.com/gq9b1Cf/pexels-gabby-k-5331072-1.jpg",
    },
  ];
  return (
    <div className="font-cumtom bg-background px-4 md:px-10 py-10 lg:py-20 space-y-10 lg:space-y-16">
      <h2 className="text-4xl md:text-5xl font-semibold  leading-tight text-center">
        Stay Motivated, read the
        <br></br>
        weekly blog articles.
      </h2>
      <div className="flex flex-col md:flex-row gap-10">
        {blogs.map((blog, idx) => {
          return (
            <div
              key={idx}
              className="border-1 border-foreground hover:border-primary transition-all duration-300 rounded-lg group hover:shadow-md"
            >
              <Image
                src={blog.image}
                alt="image"
                layout="responsive"
                width={100}
                height={50}
                className="rounded-t-md"
              />
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-medium group-hover:underline group-hover:text-primary transition-all duration-300 cursor-pointer">
                  {blog.title}
                </h3>
                <p>{blog.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Blog;
