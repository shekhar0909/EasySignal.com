export const Footer = () => {
  return (
    <footer className="bg-[#ffffff]">
      <section className="lg:px-20 mx-auto text-center lg:grid grid-cols-3  space-y-4 p-10 container">
        <div>
        <h1 className="text-2xl font-bold text-custom-blue uppercase lg:text-left">Easy Signal</h1>
      <p className="text-[.9rem] hover:text-slate-700 lg:w-[300px] lg:text-left">
        Maximize your capital market investment with Maven's convenience and
        variety of options.
      </p>
        </div>
        <div className="flex flex-col text-center hover:text-slate-700">
        <h6 className="text-[1.1rem] font-semibold mb-2">Companies</h6>
        <span className="my-1 font-normal">About Us</span>
        <span className="my-1 font-normal">Journey</span>
        <span className="my-1 font-normal">Blog</span>
        <span className="my-1 font-normal">Contact</span>
        <span className="my-1 font-normal">Help</span>
        </div>
     <div className="flex flex-col text-center hover:text-slate-700">
     <h6 className="text-[1.1rem] font-semibold mb-2">Contact US</h6>
     <div>
     <span className="my-1 font-normal"></span>
     <span className="my-1 font-normal">easysignal@gmail.com</span>
     </div>
     </div>

      </section>
    </footer>
  );
};
