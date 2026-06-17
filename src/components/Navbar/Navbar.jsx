import { Link } from "react-router-dom";
import { FaBookReader } from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <FaBookReader style={{ color: "#5f7d5d", fontSize: "1.5rem" }} />
        <h2>Book Tracker</h2>
      </div>

      <div className="nav-links">
        <Link to="/">Dashboard</Link>
        <Link to="/add-book">Add Book</Link>
        <Link to="/search">Search</Link>
      </div>
    </nav>
  );
};

export default Navbar;
