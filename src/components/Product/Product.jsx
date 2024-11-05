import { Link } from "react-router-dom";

const Product = ({ product }) => {
  const { product_id, product_image, product_title, price } = product;

  return (
    <div className="rounded-3xl grid gap-5 p-6 bg-white">
      <div className="h-64">
        <img
          className="rounded-2xl object-cover max-h-64 w-full"
          src={product_image}
          alt=""
        />
      </div>
      <div>
        <h6 className="font-semibold text-2xl text-primBlack">{product_title}</h6>
      </div>
      <div>
        <p className="font-medium text-xl text-primBlack opacity-60">{price}<span>$</span></p>
      </div>
      <div>
        <Link to={`/products/${product_id}`}>
            <button className="text-lg font-semibold px-6 py-3 rounded-full border-2 border-primPink text-primPink hover:border-2 hover:border-primPink hover:bg-primPink hover:text-white">View Details</button>
        </Link>
      </div>
    </div>
  );
};

export default Product;
