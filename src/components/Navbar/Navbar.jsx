import { useLocation } from "react-router-dom";
import NavHome from "../NavHome/NavHome";
import NavRest from "../NavRest/NavRest";

const Navbar = () => {
  const location = useLocation();
  const atHomePage = location.pathname === "/";

  return <>{atHomePage ? <NavHome></NavHome> : <NavRest></NavRest>}</>;
};

export default Navbar;
