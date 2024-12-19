import { BrowserRouter, Routes, Route } from "react-router"
import { Privacy } from "../pages/Privacy"
import Home from "../pages/Home"
import { RefundPolicy } from "../pages/RefundPolicy"
import { TermsConditions } from "../pages/Terms&Conditions"

 const Nav=()=>{
    return(
        <BrowserRouter basename="/">
        <Routes>
         <Route path="privacy" element={<Privacy/>}/>
         <Route index element={<Home />}/>
         <Route path="refund-policy" element={<RefundPolicy/>}/>
         <Route path="terms-conditions" element={<TermsConditions/>}/>
        </Routes>
        </BrowserRouter>
        )
}
export default Nav

