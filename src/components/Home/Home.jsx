import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import Explore from "../Explore/Explore";

const Home = () => {
    const allProds = useLoaderData()
    return (
        <div className="max-w-full mx-auto">
            <Banner></Banner>
            <Explore allProds={allProds}></Explore>
        </div>
    );
};

export default Home;