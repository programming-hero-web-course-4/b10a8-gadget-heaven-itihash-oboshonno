import { useState } from "react";

const ExploreBtns = ({setContentErMalik}) => {

    const [active, setActive] = useState("All Products");
    const handleActivity = (id) => {
        setActive(id);
        setContentErMalik(id);
    }

  return (
    <>
      <button onClick={() => handleActivity("All Products")} className={ active==="All Products" ? "rounded-full px-6 py-3 text-white font-medium bg-primPink transition-colors" : "rounded-full px-6 py-3 text-primBlack font-medium bg-gray-100 hover:bg-primPink hover:text-white transition-colors"}>
        All Products
      </button>
      <button onClick={() => handleActivity("Laptops")} className={ active==="Laptops" ? "rounded-full px-6 py-3 text-white font-medium bg-primPink transition-colors" : "rounded-full px-6 py-3 text-primBlack font-medium bg-gray-100 hover:bg-primPink hover:text-white transition-colors"}>
        Laptops
      </button>
      <button onClick={() => handleActivity("Accessories")} className={ active==="Accessories" ? "rounded-full px-6 py-3 text-white font-medium bg-primPink transition-colors" : "rounded-full px-6 py-3 text-primBlack font-medium bg-gray-100 hover:bg-primPink hover:text-white transition-colors"}>
        Accessories
      </button>
      <button onClick={() => handleActivity("Appliances")} className={ active==="Appliances" ? "rounded-full px-6 py-3 text-white font-medium bg-primPink transition-colors" : "rounded-full px-6 py-3 text-primBlack font-medium bg-gray-100 hover:bg-primPink hover:text-white transition-colors"}>
        Appliances
      </button>
      <button onClick={() => handleActivity("Televisions")} className={ active==="Televisions" ? "rounded-full px-6 py-3 text-white font-medium bg-primPink transition-colors" : "rounded-full px-6 py-3 text-primBlack font-medium bg-gray-100 hover:bg-primPink hover:text-white transition-colors"}>
        Televisions
      </button>
      <button onClick={() => handleActivity("Phones")} className={ active==="Phones" ? "rounded-full px-6 py-3 text-white font-medium bg-primPink transition-colors" : "rounded-full px-6 py-3 text-primBlack font-medium bg-gray-100 hover:bg-primPink hover:text-white transition-colors"}>
        Phones
      </button>
      <button onClick={() => handleActivity("Vehicles")} className={ active==="Vehicles" ? "rounded-full px-6 py-3 text-white font-medium bg-primPink transition-colors" : "rounded-full px-6 py-3 text-primBlack font-medium bg-gray-100 hover:bg-primPink hover:text-white transition-colors"}>
        Vehicles
      </button>
    </>
  );
};

export default ExploreBtns;
