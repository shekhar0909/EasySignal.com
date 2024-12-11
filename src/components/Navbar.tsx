import {useGoogleLogin } from "@react-oauth/google";




export const Navbar = () => {

  const login = useGoogleLogin({
    onSuccess: tokenResponse => console.log(tokenResponse),
    onError:()=>console.log('Login Failed')
  });
  return (
    <nav className="container">
      <div className="px-10 flex py-10 justify-between text-white lg:px-20">
      <p className="uppercase text-custom-blue font-bold">Easy Signal</p>
      {/* <GoogleLogin onSuccess={handleSucess} onError={handleError} text={"signin"} type="standard"/> */}
      <button onClick={()=>login()} type="button">Login</button>
        </div>
    </nav>
  );
};
