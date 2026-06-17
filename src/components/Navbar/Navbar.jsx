import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBookReader } from "react-icons/fa";
import "./Navbar.css";

// Navbar component for navigation
const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <FaBookReader style={{ color: "#5f7d5d", fontSize: "1.5rem" }} />
        <h2>Book Tracker</h2>
      </div>

      <button className="menu-btn" onClick={() => setOpen(!open)}>
        ☰
      </button>

      <div className={`nav-links ${open ? "active" : ""}`}>
        <Link to="/" onClick={() => setOpen(false)}>
          Dashboard
        </Link>
        <Link to="/search" onClick={() => setOpen(false)}>
          Search
        </Link>
        <Link to="/add-book" onClick={() => setOpen(false)}>
          Add Book
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
