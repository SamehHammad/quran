import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";
import { AiOutlineArrowRight } from "react-icons/ai";

const Navbar = ({ setsearch, onClick, Children, navStyle,classNav }) => {
  return (
    <div className={classNav} style={navStyle}>
      <Link onClick={onClick}>{Children}</Link>

      <div className="Search">
        <i className="fa-solid fa-magnifying-glass"></i>
        <input
          dir="rtl"
          type="text"
          placeholder="ماذا تريد أن تقرأ؟"
          onChange={(e) => setsearch(e.target.value)}
        />
      </div>
      <div className="items">
        <NavLink className="itemsaa" to="/contact">
          إتصل بي
        </NavLink>
        <NavLink className="itemsaa" to="/">
          السور
        </NavLink>

        <Link to={"/"}>
          <AiOutlineArrowRight />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
