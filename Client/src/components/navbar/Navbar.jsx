import "./Navbar.css";

function NavBar() {
  return (
    <nav>
      <h1>Realestate</h1>
      <input className="nav-search" type="text" />
      <ul className="navbar-list">
        <li>home</li>
        <li>About</li>
      </ul>
    </nav>
  );
}

export default NavBar;
