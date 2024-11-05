import CartItem from "../CartItem/CartItem";

const CartItems = ({ cartItems }) => {
    const cartData = cartItems
  return (
    <>
      {
        cartData.map(item => <CartItem key={item.product_id} item={item}></CartItem>)
      }
    </>
  );
};

export default CartItems;
