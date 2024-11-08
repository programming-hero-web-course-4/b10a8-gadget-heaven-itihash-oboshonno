import { Outlet, useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import ExploreBtns from "../ExploreBtns/ExploreBtns";
import { pageTitle } from "../Utility/customTabNames";

const Home = () => {
  const categories = useLoaderData();
  pageTitle({
    "/" : "Gadget Heaven",
    "/category/All%20Products" : "All Products | Gadget Heaven",
    "/category/Laptops" : "Laptops | Gadget Heaven",
    "/category/Accessories" : "Accessories | Gadget Heaven",
    "/category/Appliances" : "Appliances | Gadget Heaven",
    "/category/Televisions" : "Televisions | Gadget Heaven",
    "/category/Phones": "Phones | Gadget Heaven",
    "/category/Vehicles" : "Vehicles | Gadget Heaven",
  });
  return (
    <div className="max-w-full mx-auto">
      <Banner></Banner>
      <div className="mx-5 pb-40 relative bottom-36">
        <div>
          <h2
            id="explore"
            className="text-2xl md:text-4xl font-bold text-primBlack grid justify-center text-center"
          >
            Explore Cutting-Edge Gadgets
          </h2>
        </div>
        <div className="grid md:flex gap-5 justify-center items-start max-w-7xl mx-auto pt-10">
          <div className="p-5 bg-white rounded-2xl grid gap-3">
            <ExploreBtns categories={categories}></ExploreBtns>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <Outlet></Outlet>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
