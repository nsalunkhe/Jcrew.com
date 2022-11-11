import {Routes,Route} from "react-router-dom";
import Boys from "../Components/Boys";
import Gift from "../Components/Gift";
import Girls from "../Components/Girls";
import Home from "../Components/Home";
import Login from "../Components/Login";
import Men from "../Components/Men";
// import New from "../Components/New";
import Shoes from "../Components/Shoes";
import Women from "../Components/Women";
import Cart from "../Components/Cart";

export default function AllRoutes(){
    return (
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/login" element={<Login/>}></Route>
            <Route path="/boys" element={<Boys/>}></Route>
            <Route path="/girls" element={<Girls/>}></Route>
            <Route path="/gift" element={<Gift/>}></Route>
            <Route path="/men" element={<Men/>}></Route>
            {/* <Route path="/new" element={<New/>}></Route> */}
            <Route path="/shoes" element={<Shoes/>}></Route>
            <Route path="/women" element={<Women/>}></Route>
            <Route path="/cart" element={<Cart/>}></Route>
            
        </Routes>
    )
}