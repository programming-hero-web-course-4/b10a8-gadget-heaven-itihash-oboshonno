import { NavLink } from "react-router-dom";

const ExploreBtns = ({ categories }) => {
  return (
    <>
      {categories.map((category) => (
        <NavLink
          key={category.id}
          className={({ isActive }) =>
            isActive
              ? "rounded-full px-6 py-3 text-white font-medium bg-primPink transition-colors"
              : "rounded-full px-6 py-3 text-primBlack font-medium bg-gray-100 hover:bg-primPink hover:text-white transition-colors"
          }
          to={`/category/${category.category}`}
        >
          <button>{category.category}</button>
        </NavLink>
      ))}
    </>
  );
};

export default ExploreBtns;
