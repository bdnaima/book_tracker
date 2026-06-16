import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2>📚 Book Tracker</h2>

      <div className="nav-links">
        <Link to="/">Dashboard</Link>
        <Link to="/add-book">Add Book</Link>
        <Link to="/search">Search</Link>
      </div>
    </nav>
  );
};

export default Navbar;
