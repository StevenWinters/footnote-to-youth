import { Outlet, useLocation } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";

const Layout = () => {
  const location = useLocation();
  const { pathname } = useLocation();
  const [status, setStatus] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);

    if (pathname === "/") return setStatus(false);
    return setStatus(true);
  }, [pathname, location]);

  return (
    <>
      <NavBar status={status} />
      <Outlet />
      {status && <Footer />}
    </>
  );
};

export default Layout;
