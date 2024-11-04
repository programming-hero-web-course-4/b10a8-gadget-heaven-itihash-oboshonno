const Footer = () => {
  return (
    <div className="bg-white py-20">
      <div className="grid justify-center gap-4">
        <h4 className="text-lg md:text-3xl text-primBlack font-bold text-center">
          Gadget Heaven
        </h4>
        <p className="font-semibold opacity-70 text-center">
          Leading the way in cutting-edge technology and innovation.
        </p>
      </div>
      <hr className="my-10" />
      <footer className="footer bg-transparent text-primBlack p-10 max-w-7xl mx-auto flex justify-between items-center">
        <nav>
          <h6 className="font-semibold text-primBlack opacity-70 text-base">
            Services
          </h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="font-semibold text-primBlack opacity-70 text-base">
            Company
          </h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="font-semibold text-primBlack opacity-70 text-base">
            Legal
          </h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
