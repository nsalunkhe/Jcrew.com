import { Link, NavLink } from "react-router-dom";


export default function Navbar() {
  let activeStyle = 
   { color: 'white',
    fontWeight: "bold",
    fontSize:"30px",
    width:"200px",
    textDecorationLine:"none",
    cursor:"pointer"
}
  
  let normalStyle = { color: 'white',
  fontWeight: "30px",
  width:"200px",
  borderRadius:"10px",
  textDecorationLine:"none"} 
  return (
    <div style={{ display: "flex", gap: "1rem", justifyContent: "space-around",height:"100px",paddingTop:"25px",boxShadow: '1px 2px 9px #F4AAB9',position:"sticky",top:"0",backgroundColor:"black",paddingBottom:"20px"}}>
        
      <NavLink
        style={({ isActive }) => (isActive ?activeStyle :normalStyle )}
        to="/Login"
        end
      >
        Login
      </NavLink>
      <NavLink
        style={({ isActive }) => (isActive ?activeStyle :normalStyle )}
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        style={({ isActive }) => (isActive ?activeStyle :normalStyle )}
        to="/boys"
      >
      Boys
      </NavLink>
      <NavLink
         style={({ isActive }) => (isActive ?activeStyle :normalStyle )}
        to="/girls"
      >
        Girls
      </NavLink>
      <NavLink
          style={({ isActive }) => (isActive ?activeStyle :normalStyle )}
        to="/gift"
      >
        Gift
      </NavLink>

      <NavLink
          style={({ isActive }) => (isActive ?activeStyle :normalStyle )}
        to="/men"
      >
        Men
      </NavLink>
      <NavLink
          style={({ isActive }) => (isActive ?activeStyle :normalStyle )}
        to="/new"
      >
        New
      </NavLink>
      <NavLink
          style={({ isActive }) => (isActive ?activeStyle :normalStyle )}
        to="/shoes"
      >
        Shoes
      </NavLink>
      <NavLink
          style={({ isActive }) => (isActive ?activeStyle :normalStyle )}
        to="/women"
      >
        Women
      </NavLink>
      <NavLink
          style={({ isActive }) => (isActive ?activeStyle :normalStyle )}
        to="/cart"
      >
        Cart
      </NavLink>
    </div>
  );
}
