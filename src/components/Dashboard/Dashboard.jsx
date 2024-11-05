import { useLoaderData } from "react-router-dom";
import CartItems from "../CartItems/CartItems";
import WishItems from "../WishItems/WishItems";
import { useEffect, useState } from "react";
import { theCartIdHolder, theWishListIdHolder } from "../Utility/addToLocal";

const Dashboard = () => {
  const allGadgets = useLoaderData();

  const [cartItems, setCartItems] = useState([]);
  const [wishItems, setWishItems] = useState([]);
  const [shorto, setShorto] = useState(true);

  const tabToggle = (para) => {
    setShorto(para);
  };

  useEffect(() => {
    const cartList = theCartIdHolder();
    const cartListForShow = allGadgets.filter((item) =>
      cartList.includes(item.product_id)
    );
    setCartItems(cartListForShow);

    const wishList = theWishListIdHolder();
    const wishListForShow = allGadgets.filter((item) =>
      wishList.includes(item.product_id)
    );
    setWishItems(wishListForShow);
  }, []);

  return (
    <div>
      <div className="bg-primPink py-16 text-white text-center grid gap-6 px-5">
        <h3 className="text-3xl font-bold">Dashboard</h3>
        <p>
          Welcome to Gadget Heaven's dashboard. Buy your cart items or check
          your wish-list from here.
        </p>
        <div className="grid grid-cols-2 gap-5 items-center justify-center max-w-96 mx-auto">
          <button
            onClick={() => tabToggle(true)}
            className={
              shorto
                ? "bg-white border-2 border-white text-primPink text-xl font-bold px-6 py-3 rounded-full"
                : "bg-primPink border-2 border-white text-white text-xl px-6 py-3 rounded-full"
            }
          >
            Cart
          </button>
          <button
            onClick={() => tabToggle(false)}
            className={
              shorto
                ? "bg-primPink border-2 border-white text-white text-xl px-6 py-3 rounded-full"
                : "bg-white border-2 border-white text-primPink text-xl font-bold px-6 py-3 rounded-full"
            }
          >
            Wishlist
          </button>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-5 py-10">
        <div>
            <div>{shorto ? <p className="text-2xl font-bold text-primBlack">Cart</p> : <p className="text-2xl font-bold text-primBlack">Wishlist</p>}</div>
            <div></div>
        </div>
        <div className="py-8 grid gap-5">{shorto ? <CartItems cartItems={cartItems}></CartItems> : <WishItems wishItems={wishItems}></WishItems>}</div>
      </div>
    </div>
  );
};

export default Dashboard;
