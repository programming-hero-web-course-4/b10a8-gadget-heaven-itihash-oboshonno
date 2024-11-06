import { useLoaderData, useParams } from "react-router-dom";
import InStock from "../InStock/InStock";
import OutStock from "../OutStock/OutStock";
import {
  addingIdToCart,
  addingIdtoWishList,
  theWishListIdHolder,
} from "../Utility/addToLocal";
import Stars from "../Rating/Rating";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React, { useEffect, useState } from "react";

const ProductDetails = () => {
  const { product_id } = useParams();
  const id = parseInt(product_id);
  const data = useLoaderData();

  const [specificData, setSpecificData] = useState({});
  const [alreadyExists, setAlreadyExists] = useState(false);
  const [specici, setSpecici] = useState([]);

  useEffect(() => {
    const singleData = data.find((item) => item.product_id === id);
    console.log(singleData);
    setSpecificData(singleData);
    setSpecici(singleData.specification);
    const existingWishIds = theWishListIdHolder();
    const find = existingWishIds.find((jinish) => jinish === id);
    if (find) {
      setAlreadyExists(true);
    }
  }, []);

  const handleAddToCart = (id) => {
    addingIdToCart(id);
  };

  const handleAddToWishList = (id) => {
    addingIdtoWishList(id);
    setAlreadyExists(true);
  };

  const { product_image, product_title, price, availability, description, rating, } = specificData;

  return (
    <div>
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
      <div className="bg-primPink pt-16 pb-80 text-white text-center grid gap-6 px-5">
        <h3 className="text-3xl font-bold">Product Details</h3>
        <p>
          Welcome to Gadget Heaven's product details page. Check out the full
          information about the product you may want to buy or add to your
          wish-list.
        </p>
      </div>
      <div className="max-w-7xl mx-auto px-5 py-20 relative bottom-80">
        <div className="rounded-3xl p-6 grid md:flex gap-5 bg-white">
          <div>
            <img
              className="rounded-2xl object-cover max-h-[480px] flex justify-center items-center border"
              src={product_image}
              alt=""
            />
          </div>
          <div className="text-primBlack grid gap-5">
            <div>
              <h4 className="text-2xl font-semibold">{product_title}</h4>
            </div>
            <div>
              <p className="text-xl font-semibold opacity-80">
                Price: {price}$
              </p>
            </div>
            <div className="flex">
              {availability ? <InStock></InStock> : <OutStock></OutStock>}
            </div>
            <div>
              <p className="text-lg opacity-80">{description}</p>
            </div>
            <div className="grid gap-2">
              <p className="font-bold text-lg">Specifications:</p>
              <div>
                <ul className="grid gap-1">
                  {specici.map((spec, index) => (
                    <li key={index}>{spec}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div>
              <p className="font-bold text-lg">Rating</p>
              <div className="flex items-center gap-4">
                <Stars rating={rating}></Stars>
                <div className="px-4 py-1 bg-gray-100 rounded-full">
                  <p className="font-medium text-primBlack opacity-80">
                    {rating}
                  </p>
                </div>
              </div>
            </div>
            <div
              className="flex gap-4 items-center
        "
            >
              <button
                onClick={() => handleAddToCart(id)}
                className="flex gap-3 items-center text-lg font-semibold px-6 py-2 rounded-full border-2 border-primPink text-primPink hover:border-2 hover:border-primPink hover:bg-primPink hover:text-white transition-colors"
              >
                <p>Add to Cart</p>
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
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                  />
                </svg>
              </button>
              <button
                disabled={alreadyExists}
                onClick={() => handleAddToWishList(id)}
                className={
                  alreadyExists === true
                    ? "rounded-full p-2 border-2 border-black text-black opacity-35"
                    : "bg-white text-pink-700 rounded-full p-2 border-2 border-primPink hover:bg-primPink hover:text-white transition-colors"
                }
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-7"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default ProductDetails;
