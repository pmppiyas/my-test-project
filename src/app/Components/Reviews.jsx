import Image from "next/image";
import man from "@/app/Assets/man.jpeg";
function Reviews() {
  const reviews = [
    {
      name: "Jane",
      photo: "https://images.unsplash.com/photo-1593642633279-3e8d7f4c1b6e",
      rating: 5,
      reviews:
        "I gained so much confidence in my ability to connect and deepen my relationships with people",
    },
    {
      name: "Mahab",
      photo: "https://images.unsplash.com/photo-1593642633279-3e8d7f4c1b6e",
      rating: 4,
      reviews:
        "I gained so much confidence in my ability to connect and deepen my relationships with people. ",
    },
    {
      name: "Rabin",
      photo: "https://images.unsplash.com/photo-1593642633279-3e8d7f4c1b6e",
      rating: 5,
      reviews:
        "I gained so much confidence in my ability to connect and deepen my relationships with people. ",
    },
  ];
  return (
    <div className="font-cumtom bg-secondary px-4 md:px-10 py-10 lg:py-20 space-y-10 lg:space-y-20">
      <h2 className="text-4xl md:text-5xl font-semibold  leading-tight lg:w-1/2">
        Hear out what my clients say about me.
      </h2>
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
        {reviews.map((review, idx) => {
          return (
            <div
              key={idx}
              className="flex flex-col  gap-2 mb-10 bg-background p-5 rounded-lg shadow-lg"
            >
              <p className="text-center">"{review.reviews}"</p>

              <Image
                src={man}
                width={100}
                height={100}
                className="rounded-md  "
              ></Image>
              <h3 className="text-xl font-medium pl-6 mt-2">{review.name}</h3>
              <div className="flex text-xl pl-6">
                {[...Array(5)].map((_, starIdx) => (
                  <span
                    key={starIdx}
                    className={`${
                      starIdx < review.rating
                        ? "text-yellow-500 "
                        : "text-gray-300"
                    }`}
                  >
                    ★
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Reviews;
