import { Link } from "react-router-dom";
import Logo from "./Logo";
import { footerData } from "../data/footerData";

const Footer = () => {
  return (
    <footer className="block">
      <div className="container">
        <div className="grid--1x2 grid--center footer__grid">
          <div className="flex flex--column align--center footer__flex">
            <div className="flex flex--column align--center gap footer__container">
              <Logo />
              <span className="footer__heading">
                Footnote <br />
                to Youth
              </span>
            </div>
            <span className="footer__author">Jose Garcia Villa</span>
          </div>
          <div className="flex flex--column align--center footer__links">
            <h4>Links</h4>
            <ul className="flex flex--column align--center">
              {footerData.map((data, index) => (
                <li key={index} className="footer__list">
                  <Link className="footer__link" to={data.path}>
                    {data.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p className="copyright">
          Copyright &copy; 2024. All Rights Reserved. Powered by Group 4 - 21ST.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
