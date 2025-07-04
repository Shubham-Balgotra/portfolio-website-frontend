// components/DynamicTitle.jsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const DynamicTitle = () => {
  const location = useLocation();

  useEffect(() => {
    const pathTitleMap = {
      "/": "Home | Shubham Balgotra",
      "/about": "About | Shubham Balgotra",
      "/projects": "Projects | Shubham Balgotra",
      "/resume": "Resume | Shubham Balgotra",
      "/contact": "Contact | Shubham Balgotra",
    };

    const currentTitle = pathTitleMap[location.pathname] || "Shubham Balgotra";
    document.title = currentTitle;
  }, [location]);

  return null; // This component doesn’t render anything
};

export default DynamicTitle;
