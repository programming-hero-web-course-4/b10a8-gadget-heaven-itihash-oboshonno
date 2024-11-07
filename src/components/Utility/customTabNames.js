import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const pageTitle = (titelObj) => {
  const currentlyOn = useLocation();
  useEffect(() => {
    document.title = titelObj[currentlyOn.pathname] || "Page Not Found | Gadget Heaven";
  }, [currentlyOn, titelObj]);
};

export { pageTitle };