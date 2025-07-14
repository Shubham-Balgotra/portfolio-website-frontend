// components/DynamicTitle.jsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const DynamicTitle = () => {
  const location = useLocation();

  useEffect(() => {
    const { pathname } = location;

    let title = "Shubham Balgotra"; // Default title

    if (pathname === "/") title = "Home | Shubham Balgotra";
    else if (pathname === "/about") title = "About | Shubham Balgotra";
    else if (pathname === "/blog") title = "Blogs | Shubham Balgotra";
    else if (pathname.startsWith("/blog/")) title = "Blog Details | Shubham Balgotra";
    else if (pathname === "/project") title = "Projects | Shubham Balgotra";
    else if (pathname === "/service") title = "Services | Shubham Balgotra";
    else if (pathname === "/resume") title = "Resume | Shubham Balgotra";
    else if (pathname === "/contact") title = "Contact | Shubham Balgotra";

    document.title = title;
  }, [location]);

  return null; 
};

export default DynamicTitle;
