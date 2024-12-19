
export const Footer = () => {


  return (
    <footer className="bg-[#ffffff]">
      <section className="lg:px-20 mx-auto text-center lg:grid grid-cols-3  space-y-4 p-10 container">
        <div>
        <h1 className="text-2xl font-bold text-custom-blue uppercase lg:text-left">Easy Signal</h1>
      <p className="text-[.9rem] hover:text-slate-700 lg:w-[300px] lg:text-left leading-7">
      Maximize your stocks knowledge with EasySignal's diverse courses and unmatched convenience.
      </p>
        </div>
        <div className="flex flex-col text-center hover:text-slate-700">
        <h6 className="text-[1.1rem] font-semibold mb-2">Companies</h6>
        <span className="my-1 font-normal cursor-pointer hover:font-semibold">About Us</span>
        <span className="my-1 font-normal cursor-pointer hover:font-semibold">Journey</span>
        <span className="my-1 font-normal cursor-pointer hover:font-semibold">Blog</span>
        <span className="my-1 font-normal cursor-pointer hover:font-semibold">Contact</span>
        <span className="my-1 font-normal cursor-pointer hover:font-semibold">Help</span>
        <a className="my-1 cursor-pointer hover:font-semibold" href="/privacy ">Privacy & Policy</a>
        <a className="my-1 cursor-pointer hover:font-semibold" href="/refund-policy">Refund Policy</a>
        <a className="my-1 cursor-pointer hover:font-semibold" href="/terms-conditions">Terms and Condition</a>
        </div>
     <div className="flex flex-col text-center hover:text-slate-700">
     <h6 className="text-[1.1rem] font-semibold mb-2">Contact US</h6>
     <div className="flex flex-col">
     <span className="my-1 font-normal cursor-pointer hover:font-semibold">+916794355296</span>
     <span className="my-1 font-normal cursor-pointer hover:font-semibold">contacteasysignal@gmail.com</span>
     </div>
     </div>

      </section>
    </footer>
  );
};
