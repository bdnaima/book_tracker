import { Link } from "react-router-dom";
import { FaBookReader } from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2>
        <FaBookReader style={{ color: "#5f7d5d" }} /> Book Tracker
      </h2>

      <div className="nav-links">
        <Link to="/">Dashboard</Link>
        <Link to="/add-book">Add Book</Link>
        <Link to="/search">Search</Link>
      </div>
    </nav>
  );
};

export default Navbar;
