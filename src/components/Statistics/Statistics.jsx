import { pageTitle } from "../Utility/customTabNames";

const Statistics = () => {
  pageTitle({
    "/statistics" : "Statistics | Gadget Heaven"
  });
  return (
    <div>
      <div className="bg-primPink py-16 text-white text-center grid gap-6 px-5">
        <h3 className="text-2xl md:text-3xl font-bold">Statistics</h3>
        <p>
          Welcome to Gadget Heaven's statistics page. Learn about the price and rating comparison among all the products via visual charts.
        </p>
      </div>
      <div className="px-5 py-10">
        <p className="text-2xl md:text-5xl text-primPink font-semibold text-center">No Data to Show</p>
      </div>
    </div>
  );
};

export default Statistics;
