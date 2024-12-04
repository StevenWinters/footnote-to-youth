import { Outlet, useLocation } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";

const Layout = () => {
  const { pathname } = useLocation();
  const [status, setStatus] = useState(true);

  useEffect(() => {
    if (pathname === "/") return setStatus(false);
    return setStatus(true);
  }, [pathname]);

  return (
    <>
      <NavBar status={status} />
      <Outlet />
      {status && <Footer />}
    </>
  );
};

export default Layout;
