import "./index.css";
import Logo from "../../assets/images/logo.svg";
import { Link, NavLink } from "react-router-dom";
import { links } from "../../data";
import { HiMiniBarsArrowDown } from "react-icons/hi2";
import { FaRegWindowClose } from "react-icons/fa";
import { useState } from "react";

const Navbar = () => {
  const [openNav, setOpenNav] = useState(false);
  return (
    <nav>
      <div className="container nav__container">
        <Link to="/" className="logo" onClick={() => setOpenNav(false)}>
          <img src={Logo} alt="Logo" />
        </Link>
        <ul
          className={`nav__links ${openNav ? "show__nav" : "hide__nav"}`}
          onClick={() => setOpenNav((prev) => !prev)}
        >
          {links.map(({ name, path }, index) => (
            <li key={index}>
              <NavLink
                to={path}
                className={({ isActive }) => (isActive ? "active-nav" : "")}
              >
                {name}
              </NavLink>
            </li>
          ))}
        </ul>
        <button
          className="nav__toggle-btn"
          onClick={() => setOpenNav((prev) => !prev)}
        >
          {openNav ? <FaRegWindowClose /> : <HiMiniBarsArrowDown />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
