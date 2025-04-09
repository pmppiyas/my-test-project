import Image from "next/image";
import man from "@/app/Assets/man.jpeg";
function Reviews() {
  const reviews = [
    {
      name: "Jane",
      photo: man,
      rating: 5,
      reviews:
        "I gained so much confidence in my ability to connect and deepen my relationships with people",
    },
    {
      name: "Mahab",
      photo: man,
      rating: 4,
      reviews:
        "I gained so much confidence in my ability to connect and deepen my relationships with people. ",
    },
    {
      name: "Rabin",
      photo: man,
      rating: 5,
      reviews:
        "I gained so much confidence in my ability to connect and deepen my relationships with people. ",
    },
  ];
  return (
    <div className="font-cumtom bg-secondary dark:bg-background px-4 md:px-10 py-10 lg:py-20 space-y-10 lg:space-y-20 min-h-[730px]">
      <h2 className="text-4xl md:text-5xl font-extrabold flex-1 leading-14">
        Hear out what my clients say about me.
      </h2>
      <div className="flex flex-col lg:flex-row gap-10 ">
        {reviews.map((review, idx) => {
          return (
            <div
              key={idx}
              className="flex flex-col  justify-center  gap-2 mb-10 bg-background p-5 md:p-10 rounded-lg shadow-lg "
            >
              <p className="text-2xl">"{review.reviews}"</p>

              <div className="rounded-full  border-2 border-primary overflow-hidden h-[100px] w-[100px]">
                <Image
                  src={review.photo}
                  alt={review.name}
                  className="scale-150"
                ></Image>
              </div>
              <h3 className="text-2xl font-bold ">{review.name}</h3>
              <div className="flex text-xl">
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
