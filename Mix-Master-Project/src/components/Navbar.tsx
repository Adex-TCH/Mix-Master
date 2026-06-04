import { NavLink } from "react-router-dom";
import Wrapper from "../assets/wrappers/Navbar";

const Navbar = () => {
  return (
    <Wrapper>
      <div className="nav-center">
        <h1 className="logo">MixMaster</h1>

        <div className="nav-links">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            About
          </NavLink>

          <NavLink
            to="/newsletter"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Newsletter
          </NavLink>
        </div>
      </div>
    </Wrapper>
  );
};

export default Navbar;


