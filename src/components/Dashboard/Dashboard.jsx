import { NavLink, Outlet } from "react-router-dom";
const Dashboard = () => {
  return (
    <div>
      <div className="bg-primPink py-16 text-white text-center grid gap-6 px-5">
        <h3 className="text-3xl font-bold">Dashboard</h3>
        <p>
          Welcome to Gadget Heaven's dashboard. Buy your cart items or check
          your wish-list from here.
        </p>
        <div className="grid grid-cols-2 gap-5 items-center justify-center max-w-96 mx-auto">
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "bg-white border-2 border-white text-primPink text-xl font-bold px-6 py-3 rounded-full"
                : "bg-primPink border-2 border-white text-white text-xl px-6 py-3 rounded-full"
            }
            to="/dashboard/cart"
          >
            <button>Cart</button>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "bg-white border-2 border-white text-primPink text-xl font-bold px-6 py-3 rounded-full"
                : "bg-primPink border-2 border-white text-white text-xl px-6 py-3 rounded-full"
            }
            to="/dashboard/wishlist"
          >
            <button>Wishlist</button>
          </NavLink>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-5 py-10">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
