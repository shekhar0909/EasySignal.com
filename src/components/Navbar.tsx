import {useGoogleLogin,useGoogleOneTapLogin } from "@react-oauth/google";
import {jwtDecode} from 'jwt-decode';



export const Navbar = () => {
  useGoogleLogin({
    onSuccess: tokenResponse => (console.log(tokenResponse),jwtDecode(tokenResponse)),
    onError:()=>console.log('Login Failed')
  });
  return (
    <nav className="container">
      <div className="px-10 flex py-10 justify-between text-white lg:px-20">
      <a href="/" className="uppercase text-custom-blue font-bold">Easy Signal</a>
      {/* <GoogleLogin onSuccess={handleSucess} onError={handleError} text={"signin"} type="standard"/> */}
      
      <button onClick={()=>useGoogleOneTapLogin} type="button">Login</button>
        </div>
    </nav>
  );
};
