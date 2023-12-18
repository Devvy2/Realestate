import "./Navbar.css";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <Link to="/">
        <h1 className="logo-nav">Realestate</h1>
      </Link>
      <input className="nav-search" type="text" />
      <ul className="navbar-list">
        <Link to="/">
          <li>home</li>
        </Link>
        <Link to="/about">
          <li>About</li>
        </Link>
        <Link to="/sign-in">
          <li>Sign in</li>
        </Link>
      </ul>
    </nav>
  );
}

export default NavBar;
