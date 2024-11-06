import { useLoaderData, useParams } from "react-router-dom";
import Product from "../Product/Product";
import { useEffect, useState } from "react";

const ExploreCntnt = () => {

    const {category} = useParams();
    const allData = useLoaderData();
    const [dataSend, setDataSend] = useState([]);
    useEffect(() => {
        if (category) {
            if (category === "All Products") {
                setDataSend(allData);
            } else {
                const filteredData = [...allData].filter(item => item.category === category);
                setDataSend(filteredData);
            }
        } else {
            setDataSend(allData);
        }
    }, [category, allData]);

    return (
        <>
            {
                dataSend.map(product => <Product key={product.product_id} product={product}></Product>)
            }
        </>
    );
};

export default ExploreCntnt;