import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-white py-10">
      <div className="grid justify-center gap-4">
        <Link className="text-lg md:text-3xl text-primBlack font-bold text-center">
          <h4>Gadget Heaven</h4>
        </Link>
        <p className="font-semibold opacity-70 text-center mx-5">
          Leading the way in cutting-edge technology and innovation.
        </p>
      </div>
      <hr className="my-10" />
      <footer className="footer bg-transparent text-primBlack max-w-7xl mx-auto flex justify-center items-center">
        <nav>
          <div className="grid md:flex gap-5 md:gap-20 font-medium">
            <Link to="/" className="opacity-80 hover:opacity-100"><p>Home</p></Link>
            <Link to="/statistics" className="opacity-80 hover:opacity-100"><p>Statistics</p></Link>
            <Link to="/dashboard/cart" className="opacity-80 hover:opacity-100"><p>Dashboard</p></Link>
            <Link to="/faq" className="opacity-80 hover:opacity-100"><p>FAQs</p></Link>
          </div>
        </nav>
      </footer>
      <hr className="my-10" />
      <div className="flex justify-center mx-5">
        <p className="text-center text-sm md:text-base">&#169; 2024 Gadget Heaven. All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
