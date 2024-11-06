import { useEffect, useState } from "react";
import WishItem from "../WishItem/WishItem";
import { theWishListIdHolder } from "../Utility/addToLocal";
import { useLoaderData } from "react-router-dom";

const WishItems = () => {
  const allGadgets = useLoaderData();
  const [wishItems, setWishItems] = useState([]);
  useEffect(() => {
    const wishList = theWishListIdHolder();
    const wishListForShow = allGadgets.filter((item) =>
      wishList.includes(item.product_id)
    );
    setWishItems(wishListForShow);
  }, [])

  return (
    <>
      <div>
        <div>
          <p className="text-2xl font-bold text-primBlack">Wishlist</p>
        </div>
        <div></div>
      </div>
      <div className="py-8 grid gap-5">
        {wishItems.map((item) => (
          <WishItem key={item.product_id} item={item}></WishItem>
        ))}
      </div>
    </>
  );
};

export default WishItems;
