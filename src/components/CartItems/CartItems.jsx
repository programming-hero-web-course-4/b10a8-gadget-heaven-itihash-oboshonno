import { useEffect, useState } from "react";
import CartItem from "../CartItem/CartItem";
import { removingIdFromCart, theCartIdHolder } from "../Utility/addToLocal";
import { useLoaderData } from "react-router-dom";

const CartItems = () => {
  const allGadgets = useLoaderData();
  const [cartItems, setCartItems] = useState([]);
  
  useEffect(() => {
    const cartList = theCartIdHolder();
    const cartListForShow = allGadgets.filter((item) =>
      cartList.includes(item.product_id)
    );
    setCartItems(cartListForShow);
  }, [])

  const handleRemove = (id) => {
    removingIdFromCart(id);
    const cartList = theCartIdHolder();
    const cartListForShow = allGadgets.filter((item) =>
      cartList.includes(item.product_id)
    );
    setCartItems(cartListForShow);
  }

  return (
    <>
      <div>
        <div>
          <p className="text-2xl font-bold text-primBlack">Cart</p>
        </div>
        <div></div>
      </div>
      <div className="py-8 grid gap-5">
        {cartItems.map((item) => (
          <CartItem key={item.product_id} item={item} handleRemove={handleRemove}></CartItem>
        ))}
      </div>
    </>
  );
};

export default CartItems;
