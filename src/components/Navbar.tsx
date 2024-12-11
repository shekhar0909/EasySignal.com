import { GoogleLogin } from "@react-oauth/google";




export const Navbar = () => {
  const handleSucess = (credentialResponse:any)=>{
   console.log('login Successfully',credentialResponse)
  }
  const handleError =()=>{
    console.log('login Error')
  }
  return (
    <nav className="container">
      <div className="px-10 flex justify-between text-white lg:px-20">
      <p className="uppercase text-custom-blue font-bold">Easy Signal</p>
      <GoogleLogin onSuccess={handleSucess} onError={handleError} text={"signin"}/>
        </div>
    </nav>
  );
};
