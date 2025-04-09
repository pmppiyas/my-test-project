function WhyMe() {
  return (
    <div className="font-cumtom bg-background px-4 md:px-10  lg:py-20 space-y-10 lg:space-y-20 min-h-[730px] flex items-center justify-center flex-col ">
      <div className="flex flex-col md:flex-row  gap-8 ">
        <h2 className="text-4xl md:text-5xl font-extrabold flex-1 leading-14">
          I can help you in these particular areas.
        </h2>
        <p className=" flex-1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua minim
          veniam.
          <br></br>
          <br></br>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo.{" "}
        </p>
      </div>
      {/* Why We */}
      <div className="flex flex-col md:flex-row *:flex-1 gap-8 lg:gap-12">
        <div className="space-y-4 py-6 md:py-10">
          <div className="border-2 w-max border-primary border-dashed p-1">
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
              className="lucide lucide-book-open-check-icon lucide-book-open-check"
            >
              <path d="M12 21V7" />
              <path d="m16 12 2 2 4-4" />
              <path d="M22 6V4a1 1 0 0 0-1-1h-5a4 4 0 0 0-4 4 4 4 0 0 0-4-4H3a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1h6a3 3 0 0 1 3 3 3 3 0 0 1 3-3h6a1 1 0 0 0 1-1v-1.3" />
            </svg>
          </div>
          <h2 className="text-2xl font-medium">1:1 Coaching</h2>
          <p className="opacity-75">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua minim
            veniam.
          </p>
        </div>
        <div className="space-y-4 py-6 md:py-10">
          <div className="border-2 w-max border-primary border-dashed p-1">
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
              className="lucide lucide-chart-candlestick-icon lucide-chart-candlestick"
            >
              <path d="M9 5v4" />
              <rect width="4" height="6" x="7" y="9" rx="1" />
              <path d="M9 15v2" />
              <path d="M17 3v2" />
              <rect width="4" height="8" x="15" y="5" rx="1" />
              <path d="M17 13v3" />
              <path d="M3 3v16a2 2 0 0 0 2 2h16" />
            </svg>
          </div>
          <h2 className="text-2xl font-medium">Consultation</h2>
          <p className="opacity-75">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua minim
            veniam.
          </p>
        </div>
        <div className="space-y-4 py-6 md:py-10">
          <div className="border-2 w-max border-primary border-dashed p-1">
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
              className="lucide lucide-group-icon lucide-group"
            >
              <path d="M3 7V5c0-1.1.9-2 2-2h2" />
              <path d="M17 3h2c1.1 0 2 .9 2 2v2" />
              <path d="M21 17v2c0 1.1-.9 2-2 2h-2" />
              <path d="M7 21H5c-1.1 0-2-.9-2-2v-2" />
              <rect width="7" height="5" x="7" y="7" rx="1" />
              <rect width="7" height="5" x="10" y="12" rx="1" />
            </svg>
          </div>
          <h2 className="text-2xl font-medium">Group Coaching Sessions</h2>
          <p className="opacity-75">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua minim
            veniam.
          </p>
        </div>
      </div>
    </div>
  );
}

export default WhyMe;
