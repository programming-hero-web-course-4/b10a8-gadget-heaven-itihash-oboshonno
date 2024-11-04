import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

const Root = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className="bg-gray-50">
        <Outlet></Outlet>
      </div>
    </>
  );
};

export default Root;
