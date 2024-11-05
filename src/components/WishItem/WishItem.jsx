const WishItem = ({ item }) => {
  const { product_image, product_title, description, price } = item;

  return (
    <div className="flex items-center justify-between bg-white p-5 rounded-2xl shadow-lg">
      <div className="flex items-center gap-6">
        <div>
          <img
            className="object-cover h-44 w-52 rounded-xl border"
            src={product_image}
            alt=""
          />
        </div>
        <div className="grid gap-3 text-primBlack">
          <p className="font-semibold text-2xl">{product_title}</p>
          <p className="opacity-60">{description}</p>
          <p className="text-lg font-semibold opacity-80">${price}</p>
          <div className="flex">
          <button className="font-semibold px-6 py-2 rounded-full border-2 border-primPink text-primPink hover:border-2 hover:border-primPink hover:bg-primPink hover:text-white transition-colors">Add to Cart</button>
          </div>
        </div>
      </div>
      <div>
        <button>
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

export default WishItem;
