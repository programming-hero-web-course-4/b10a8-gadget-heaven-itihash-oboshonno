import { useEffect, useState } from "react";
import CartItem from "../CartItem/CartItem";
import { removingIdFromCart, theCartIdHolder } from "../Utility/addToLocal";
import { useLoaderData, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import paymentImg from "../../assets/complete.png";
import { pageTitle } from "../Utility/customTabNames";

const CartItems = () => {
  const allGadgets = useLoaderData();
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const cartList = theCartIdHolder();
    const cartListForShow = allGadgets.filter((item) =>
      cartList.includes(item.product_id)
    );
    setCartItems(cartListForShow);
    const jogPhol = cartListForShow.reduce(
      (sum, prottek) => sum + prottek.price,
      0
    );
    setTotalPrice(Number(jogPhol.toFixed(2)));
  }, []);

  const handleRemove = (id) => {
    removingIdFromCart(id);
    const cartList = theCartIdHolder();
    const cartListForShow = allGadgets.filter((item) =>
      cartList.includes(item.product_id)
    );
    setCartItems(cartListForShow);
    const jogPhol = cartListForShow.reduce(
      (sum, prottek) => sum + prottek.price,
      0
    );
    setTotalPrice(Number(jogPhol.toFixed(2)));
  };

  const handleSort = () => {
    const cartList = theCartIdHolder();
    const cartListForShow = allGadgets.filter((item) =>
      cartList.includes(item.product_id)
    );
    const sorted = [...cartListForShow].sort((a, b) => b.price - a.price);
    setCartItems(sorted);
  };

  const purchase = () => {
    document.getElementById("purchase").showModal();
    localStorage.setItem("cart", JSON.stringify([]));
    const cartList = theCartIdHolder();
    const cartListForShow = allGadgets.filter((item) =>
      cartList.includes(item.product_id)
    );
    setCartItems(cartListForShow);
    const jogPhol = cartListForShow.reduce(
      (sum, prottek) => sum + prottek.price,
      0
    );
    setTotalPrice(Number(jogPhol.toFixed(2)));
  };

  pageTitle({
    "/dashboard/cart" : "Cart | Gadget Heaven"
  });

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
          <p className="font-bold text-2xl">Total Price: {totalPrice} $</p>
          <button
            onClick={handleSort}
            className="flex items-center font-semibold text-primPink bg-gray-100 border-2 border-primPink px-6 py-2 rounded-full hover:bg-primPink hover:text-white transition-colors"
          >
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
          <button
            disabled={cartItems.length < 1}
            onClick={purchase}
            className={cartItems.length < 1 ? "font-semibold bg-gray-300 text-white border-2 border-gray-300 px-6 py-2 rounded-full" : "font-semibold bg-primPink text-white border-2 border-primPink px-6 py-2 rounded-full hover:bg-[#a62ff2] hover:border-[#a62ff2] transition-colors"}
          >
            Purchase
          </button>
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
        <div>
          <dialog id="purchase" className="modal text-center">
            <div className="modal-box grid justify-center">
              <div className="flex flex-col justify-center gap-5">
                <img
                  className="max-h-16 max-w-16 mx-auto"
                  src={paymentImg}
                  alt=""
                />
                <h3 className="font-bold text-lg">Payment Successful!</h3>
                <p>Thanks for Purchasing.</p>
              </div>

              <div className="modal-action flex justify-center">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button
                    onClick={() => navigate("/")}
                    className="px-6 py-2 font-semibold rounded-xl bg-gray-100 text-primBlack hover:bg-gray-300"
                  >
                    Close
                  </button>
                </form>
              </div>
            </div>
          </dialog>
        </div>
      </div>
    </>
  );
};

export default CartItems;
