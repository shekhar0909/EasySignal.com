import { InputField } from "./InputField";

export const Newsletter = () => {
  return (
    <section className="w-[90%] lg:w-[60%] lg:py-10 lg:grid grid-cols-2 mx-auto mb-10 p-5 text-white text-center rounded-lg bg-custom-blue">
        <div>
        <h5 className="lg:my-5">OUR NEWSLETTER</h5>
      <h2 className="text-[1.5rem] lg-my-10 font-semibold">Stay updated with our weekly newsletter</h2>
      <small className="text-[.8rem] lg:text-[.9rem] lg:my-10">
        a collection of the hottest stock market news sent every week to your
        email.
      </small>
        </div>
        <div>
        <h3 className="text-[1.4rem] font-medium">Signup For Newsletter</h3>
      <form action="" className="my-4">
      <InputField
        type="text"
        placeholder="Email Address"
      />
          <InputField
        type="password"
        placeholder="password"
      />
      <button type="submit" className="bg-white w-[200px] rounded-full text-black text-[1rem] py-4 m-3">Submit</button>
      </form>
        </div>


    </section>
  );
};
