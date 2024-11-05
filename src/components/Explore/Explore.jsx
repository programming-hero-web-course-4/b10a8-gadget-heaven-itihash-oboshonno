import { useState } from "react";
import ExploreBtns from "../ExploreBtns/ExploreBtns";
import ExploreCntnt from "../ExploreCntnt/ExploreCntnt";

const Explore = ({allProds}) => {

  const [contentErMalik, setContentErMalik] = useState("All Products");
  const allCopy = [...allProds];
  const filterCopy = allCopy.filter(item => item.category === contentErMalik);

  return (
    <div className="mx-5 pb-40 relative bottom-36">
      <div>
        <h2
          id="explore"
          className="text-4xl font-bold text-primBlack grid justify-center"
        >
          Explore Cutting-Edge Gadgets
        </h2>
      </div>
      <div className="grid md:flex gap-5 justify-between items-start max-w-7xl mx-auto pt-10">
        <div className="p-5 bg-white rounded-2xl grid gap-3">
          <ExploreBtns setContentErMalik={setContentErMalik}></ExploreBtns>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <ExploreCntnt filterCopy={contentErMalik ==="All Products" ? allCopy : filterCopy}></ExploreCntnt>
        </div>
      </div>
    </div>
  );
};

export default Explore;
