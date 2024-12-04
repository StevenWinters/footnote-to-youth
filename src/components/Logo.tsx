import { Link } from "react-router-dom";
import Dove from "../assets/logo.png";

const Logo = () => {
  return (
    <Link to="" className="logo__link">
      {" "}
      <img className="img img--logo" src={Dove} alt="" />
    </Link>
  );
};

export default Logo;
