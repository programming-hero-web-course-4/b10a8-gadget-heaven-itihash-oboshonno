import { useEffect, useState } from "react";
import WishItem from "../WishItem/WishItem";
import {
  removingIdFromWishList,
  theWishListIdHolder,
} from "../Utility/addToLocal";
import { useLoaderData } from "react-router-dom";
import { ToastContainer } from "react-toastify";

const WishItems = () => {
  const allGadgets = useLoaderData();
  const [wishItems, setWishItems] = useState([]);

  useEffect(() => {
    const wishList = theWishListIdHolder();
    const wishListForShow = allGadgets.filter((item) =>
      wishList.includes(item.product_id)
    );
    setWishItems(wishListForShow);
  }, []);

  const handleRemove = (id) => {
    removingIdFromWishList(id);
    const wishList = theWishListIdHolder();
    const wishListForShow = allGadgets.filter((item) =>
      wishList.includes(item.product_id)
    );
    setWishItems(wishListForShow);
  };

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
      <div>
        <div>
          <p className="text-2xl font-bold text-primBlack">Wishlist</p>
        </div>
        <div></div>
      </div>
      <div className="py-8 grid gap-5">
        {wishItems.map((item) => (
          <WishItem
            key={item.product_id}
            item={item}
            handleRemove={handleRemove}
          ></WishItem>
        ))}
      </div>
    </>
  );
};

export default WishItems;
