import { Link } from "react-router-dom";

const Product = ({ product }) => {
  const { product_id, product_image, product_title, price } = product;

  return (
    <div className="rounded-3xl grid gap-5 p-6 bg-white shadow-lg">
      <div className="h-64">
        <img
          className="rounded-2xl object-cover max-h-64 w-full border"
          src={product_image}
          alt=""
        />
      </div>
      <div>
        <h6 className="font-semibold text-xl text-primBlack">{product_title}</h6>
      </div>
      <div>
        <p className="font-medium text-xl text-primBlack opacity-60">{price}<span>$</span></p>
      </div>
      <div>
        <Link to={`/product/${product_id}`}>
            <button className="text-lg font-semibold px-6 py-2 rounded-full border-2 border-primPink text-primPink hover:border-2 hover:border-primPink hover:bg-primPink hover:text-white transition-colors">View Details</button>
        </Link>
      </div>
    </div>
  );
};

export default Product;
