import Product from "../Product/Product";

const ExploreCntnt = ({filterCopy}) => {

    let filteredData = filterCopy;

    return (
        <>
            {
                filteredData.map(product => <Product key={product.product_id} product={product}></Product>)
            }
        </>
    );
};

export default ExploreCntnt;