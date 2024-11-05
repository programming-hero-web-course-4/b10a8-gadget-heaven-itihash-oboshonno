import WishItem from "../WishItem/WishItem";

const WishItems = ({ wishItems }) => {
    const wishData = wishItems
  return (
    <>
      {
        wishData.map(item => <WishItem key={item.product_id} item={item}></WishItem>)
      }
    </>
  );
};

export default WishItems;