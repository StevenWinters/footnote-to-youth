import { Link } from "react-router-dom";
import Logo from "./Logo";
import { GoArrowLeft } from "react-icons/go";

interface Props {
  status: boolean;
}

const NavBar = ({ status }: Props) => {
  return (
    <nav
      className={`flex justify--${
        status ? "between" : "center"
      } align--center nav__bar`}
    >
      {status && (
        <Link to="">
          <GoArrowLeft className="icon--back" />
        </Link>
      )}
      <Logo />
    </nav>
  );
};

export default NavBar;
