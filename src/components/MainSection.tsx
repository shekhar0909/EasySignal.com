import heroImage from "../assets/heroImage.jpg";

export const MainSection = () => {
  return (
    <section className="container mx-auto">
      <div className="p-10 lg:p-20">
        <div className="lg:w-[50%]">
          <h1 className="text-[3.5rem] tracking-wide text-center lg:text-left text-white font-bold leading-tight my-10 lg:text-[4rem]">
            <span className="text-custom-blue">One</span>{" "}
            <span className="text-custom-blue">platform </span>
            <br /> <span className="text-custom-blue">Master{" "}</span>all things about <br />
            Stocks
          </h1>
          <p className="text-[1.2rem] text-white text-center lg:text-left lg:leading-loose">
          Master the art of trading with EasySignal – live stock analysis, expert courses, and actionable strategies for your financial success.          </p>
        </div>

        <div className="text-[1.2rem] text-white font-semibold text-center py-10">
          <div className="lg:flex lg:justify-center lg:gap-5">
            <h6 className="py-2 lg:text-xl lg:font-bold">Easy to Learn</h6>
            <h6 className="py-2 lg:text-xl lg:font-bold">Secure & Reliable</h6>
            <h6 className="py-2 lg:text-xl lg:font-bold">
              Continous Market Updates
            </h6>
          </div>

          <button className="w-[80%] lg:w-[250px] mt-10 rounded-lg mx-auto text-center text-black h-12 bg-white">
            Start Now
          </button>
        </div>
        <h2 className="text-custom-blue font-semibold text-center text-2xl">
          Learn about the stocks and be master in reading and analyse the stocks.
        </h2>
        <div className="lg:grid grid-cols-2">
          <div>
            <h6 className="text-[1rem] text-custom-blue text-center mt-10 lg:text-left">
              Smart Knowledge
            </h6>
            <h2 className="text-[2.4rem] text-white text-center my-4 font-semibold lg:text-left">
              Gain Knowledge with Us <br /> and Enjoy Astonishing <br />{" "}
              Returns
            </h2>
            <p className="text-[.8rem] text-center">
              Make the most of your investment in the world of capital markets
              by taking advantage of Maven's many features and conveniences.
            </p>
            <div className="flex justify-center lg:justify-start gap-4">
              <button className="text-white bg-custom-blue w-[150px] h-[50px] rounded">
                Get Started
              </button>
              <button className="text-custom-blue">See How it Works</button>
            </div>
          </div>
          <div>
            <img
              className="w-full lg:w-[80%] my-10 mx-auto"
              src={heroImage}
              alt=""
            />
          </div>
        </div>

        <h2 className="text-[2rem] text-white text-center font-bold my-10 lg:mb-0">
          Additional Advantages from <br />{" "}
          <span className="text-custom-blue">Easy Signal</span>
        </h2>
        <p className="text-[.8rem] lg:text-[1.1rem] lg:w-[70%] mx-auto lg:my-2 text-center text-white">
          At Tradiant, you will benefit from us, such as many conveniences in
          transactions, user-friendly transparency, and many others
        </p>

        <div className="grid lg:grid-cols-4 md:grid-cols-2 items-center lg:gap-x-10 lg:px-20 mx-auto ">
          <div className="bg-custom-blue my-2 w-[90%] h-[90%] lg:w-[300px] lg:h-[300px]  mx-auto rounded-lg text-white p-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="81"
              height="80"
              fill="none"
              viewBox="0 0 81 80"
              className="mx-auto"
            >
              <path
                stroke="#fff"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="10"
                strokeWidth="5"
                d="M17.667 6.667v66.666M17.667 13.333H55c9 0 11 5 4.667 11.334l-4 4c-2.667 2.666-2.667 7 0 9.333l4 4c6.333 6.333 4 11.333-4.667 11.333H17.667"
              ></path>
            </svg>
            <h4 className="text-2xl text-white text-center pt-2">
              High standards
            </h4>
            <p className="text-[1rem] text-center p-4">
              At Maven, we have high standards; all types of transactions will
              be conducted properly, so that Maven users feel safe and
              comfortable.
            </p>
          </div>
          <div className="bg-custom-blue my-2 w-[90%] h-[90%] lg:w-[300px] lg:h-[300px]  mx-auto rounded-lg text-white p-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="81"
              height="80"
              fill="none"
              viewBox="0 0 81 80"
              className="mx-auto"
            >
              <path
                stroke="#fff"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="5"
                d="M33.833 58.333h13.334M7.167 58.333V25c0-13.333 3.333-16.667 16.666-16.667M73.833 58.333V25c0-13.333-3.333-16.667-16.666-16.667"
              ></path>
              <path
                stroke="#fff"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="5"
                d="M33.833 53.033V64c0 6.667-2.666 9.333-9.333 9.333h-8c-6.667 0-9.333-2.666-9.333-9.333V53.033c0-6.666 2.666-9.333 9.333-9.333h8c6.667 0 9.333 2.667 9.333 9.333M73.833 53.033V64c0 6.667-2.666 9.333-9.333 9.333h-8c-6.667 0-9.333-2.666-9.333-9.333V53.033c0-6.666 2.666-9.333 9.333-9.333h8c6.667 0 9.333 2.667 9.333 9.333"
              ></path>
            </svg>
            <h4 className="text-2xl text-white text-center pt-2">Simplicity</h4>
            <p className="text-[1rem] text-center p-4">
              We guarantee the ease of transactions at Maven, so that users will
              have convenience in transactions
            </p>
          </div>
          <div className="bg-custom-blue my-2 w-[90%] h-[90%] lg:w-[300px] lg:h-[300px]  mx-auto rounded-lg text-white p-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="81"
              height="80"
              fill="none"
              viewBox="0 0 81 80"
              className="mx-auto"
            >
              <path
                stroke="#fff"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="5"
                d="M13.9 19.9A33.22 33.22 0 0 0 7.167 40c0 18.4 14.933 33.333 33.333 33.333S73.833 58.4 73.833 40 58.9 6.667 40.5 6.667"
              ></path>
              <path
                stroke="#fff"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="5"
                d="M17.167 40c0 12.9 10.433 23.333 23.333 23.333S63.833 52.9 63.833 40 53.4 16.667 40.5 16.667"
              ></path>
              <path
                stroke="#fff"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="5"
                d="M40.5 53.333c7.367 0 13.333-5.966 13.333-13.333S47.867 26.667 40.5 26.667"
              ></path>
            </svg>
            <h4 className="text-2xl text-white text-center pt-2">
              Transparency
            </h4>
            <p className="text-[1rem] text-center p-4 ">
              We will report all forms of transactions as they are, transparency
              is very important to grow the trust of Maven users
            </p>
          </div>
          <div className="bg-custom-blue my-2 w-[90%] h-[90%] mx-auto lg:w-[300px] lg:h-[300px] rounded-lg text-white p-4">
            <svg
              className="mx-auto"
              xmlns="http://www.w3.org/2000/svg"
              width="81"
              height="80"
              fill="none"
              viewBox="0 0 81 80"
            >
              <path
                stroke="#fff"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="5"
                d="M35.467 7.433 18.834 13.7c-3.833 1.433-6.967 5.967-6.967 10.033V48.5c0 3.933 2.6 9.1 5.767 11.467l14.333 10.7c4.7 3.533 12.434 3.533 17.133 0l14.334-10.7C66.6 57.6 69.2 52.433 69.2 48.5V23.733c0-4.1-3.134-8.633-6.967-10.067L45.6 7.434c-2.833-1.033-7.366-1.033-10.133 0"
              ></path>
            </svg>
            <h4 className="text-2xl text-white text-center pt-2">Invention</h4>
            <p className="text-[1rem] text-center p-4">
              Maven is the result of the production, refinement, or development
              of the original invention. It is also continuous and continuously
              developing in a better direction.
            </p>
          </div>
        </div>
        <h2 className="text-[2rem] text-white text-center font-bold my-5">
          All of this and much more dedicated from <br />{" "}
          <span className="text-custom-blue">Easy Signal </span>
          <br /> to your success
        </h2>
        <div className="text-center">
          <button className="bg-white font-medium w-[200px] h-[50px] my-2 rounded-lg">
            Join with Us Today
          </button>
        </div>
      </div>
    </section>
  );
};
