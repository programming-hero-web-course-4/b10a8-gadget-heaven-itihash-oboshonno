import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { theCartIdHolder, theWishListIdHolder } from "../Utility/addToLocal";

const NavHome = () => {
  const navItems = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-white font-bold underline"
              : "text-white font-medium"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/statistics"
          className={({ isActive }) =>
            isActive
              ? "text-white font-bold underline"
              : "text-white font-medium"
          }
        >
          Statistics
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            isActive
              ? "text-white font-bold underline"
              : "text-white font-medium"
          }
        >
          Dashboard
        </NavLink>
      </li>
    </>
  );

  const [cartLength, setCartLength] = useState(0);
  const [wishListLength, setWishListLength] = useState(0);

  useEffect(() => {
    const cartArray = theCartIdHolder();
    setCartLength(cartArray.length);

    const wishListArray = theWishListIdHolder();
    setWishListLength(wishListArray.length);
  }, []);

  return (
    <nav className="flex items-center justify-between my-6 mx-auto px-8 relative top-8 z-10 max-w-7xl">
      <div className="md:hidden">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-primBlack bg-opacity-70 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {navItems}
          </ul>
        </div>
      </div>
      <div>
        <Link to="/">
          <h4 className="text-lg md:text-xl text-white font-bold">
            Gadget Heaven
          </h4>
        </Link>
      </div>
      <div className="hidden md:flex">
        <ul className="flex items-center gap-10">{navItems}</ul>
      </div>
      <div className="flex items-center gap-5">
        <Link to="/dashboard">
          <div>
            <div className="bg-white rounded-full p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-4 md:size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                />
              </svg>
            </div>
            <div className="relative bottom-10 left-3 md:bottom-12 md:left-4">
              <p className={cartLength > 0 ? "text-[#b62424] text-xs md:text-sm font-medium bg-white flex justify-center rounded-full" : "text-transparent text-xs md:text-sm font-medium bg-transparent flex justify-center rounded-full"}>{cartLength}</p>
            </div>
          </div>
        </Link>
        <Link to="/dashboard">
          <div>
            <div className="bg-white rounded-full p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-4 md:size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                />
              </svg>
            </div>
            <div className="relative bottom-10 left-3 md:bottom-12 md:left-4">
              <p className={wishListLength > 0 ? "text-[#b62424] text-xs md:text-sm font-medium bg-white flex justify-center rounded-full" : "text-transparent text-xs md:text-sm font-medium bg-transparent flex justify-center rounded-full"}>{wishListLength}</p>
            </div>
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default NavHome;
