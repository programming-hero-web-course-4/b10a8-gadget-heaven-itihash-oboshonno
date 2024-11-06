import { useLocation } from "react-router-dom";
import NavHome from "../NavHome/NavHome";
import NavRest from "../NavRest/NavRest";

const Navbar = () => {
  const location = useLocation();
  const atHomePage = location.pathname === "/";
  
  const atAllProd = location.pathname === "/category/All%20Products";
  const atLaptops = location.pathname === "/category/Laptops";
  const atAccessories = location.pathname === "/category/Accessories";
  const atAppliances = location.pathname === "/category/Appliances";
  const atTelevisions = location.pathname === "/category/Televisions";
  const atPhones = location.pathname === "/category/Phones";
  const atVehicles = location.pathname === "/category/Vehicles";

  return <>{atHomePage || atAllProd || atLaptops || atAccessories || atAppliances || atTelevisions || atPhones || atVehicles ? <NavHome className={"z-10"}></NavHome> : <NavRest className={"bg-white shadow-lg"}></NavRest>}</>;
};

export default Navbar;
