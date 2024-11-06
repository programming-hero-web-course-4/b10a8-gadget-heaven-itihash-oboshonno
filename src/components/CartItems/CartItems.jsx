import { useEffect, useState } from "react";
import CartItem from "../CartItem/CartItem";
import { removingIdFromCart, theCartIdHolder } from "../Utility/addToLocal";
import { useLoaderData } from "react-router-dom";
import { ToastContainer } from "react-toastify";

const CartItems = () => {
  const allGadgets = useLoaderData();
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const cartList = theCartIdHolder();
    const cartListForShow = allGadgets.filter((item) =>
      cartList.includes(item.product_id)
    );
    setCartItems(cartListForShow);
  }, []);

  const handleRemove = (id) => {
    removingIdFromCart(id);
    const cartList = theCartIdHolder();
    const cartListForShow = allGadgets.filter((item) =>
      cartList.includes(item.product_id)
    );
    setCartItems(cartListForShow);
  };

  const handleSort = () => {
    const cartList = theCartIdHolder();
    const cartListForShow = allGadgets.filter((item) =>
      cartList.includes(item.product_id)
    );
    const sorted = [...cartListForShow].sort((a, b) => b.price - a.price);
    setCartItems(sorted);
  }

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
        theme="colored"
      />
      <div className="flex justify-between items-center">
        <div>
          <p className="text-2xl font-bold text-primBlack">Cart</p>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-5">
          <p className="font-bold text-2xl">Total Price: </p>
          <button onClick={handleSort} className="flex items-center font-semibold text-primPink bg-gray-100 border-2 border-primPink px-6 py-2 rounded-full hover:bg-primPink hover:text-white transition-colors">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 13.5V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 9.75V10.5"
                />
              </svg>
            </span>
            Sort by Price
          </button>
          <button className="font-semibold bg-primPink text-white border-2 border-primPink px-6 py-2 rounded-full hover:bg-[#a62ff2] hover:border-[#a62ff2] transition-colors">Purchase</button>
        </div>
      </div>
      <div className="py-8 grid gap-5">
        {cartItems.map((item) => (
          <CartItem
            key={item.product_id}
            item={item}
            handleRemove={handleRemove}
          ></CartItem>
        ))}
      </div>
    </>
  );
};

export default CartItems;
