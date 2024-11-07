const CartItem = ({ item, handleRemove }) => {
  const { product_id, product_image, product_title, description, price } = item;
  return (
    <div className="flex items-center justify-between bg-white p-5 rounded-2xl shadow-lg">
      <div className="flex items-center gap-6">
        <div>
          <img
            className="object-cover h-32 w-52 rounded-xl border"
            src={product_image}
            alt=""
          />
        </div>
        <div className="grid gap-4 text-primBlack">
          <p className="font-semibold md:text-2xl">{product_title}</p>
          <p className="opacity-60 text-xs md:text-base">{description}</p>
          <p className="md:text-lg font-semibold opacity-80">${price}</p>
        </div>
      </div>
      <div>
        <button onClick={() => handleRemove(product_id)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="red"
            className="size-6 md:size-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default CartItem;
