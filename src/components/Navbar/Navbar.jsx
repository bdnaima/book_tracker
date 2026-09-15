import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaBookReader } from "react-icons/fa";
import { supabase } from "../../lib/supabase";
import "./Navbar.css";

// Navbar component for navigation
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const getUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      setUser(user);
    };

    getUser();
  }, []);

  useEffect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/");
  };

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">
        <FaBookReader style={{ color: "#5f7d5d", fontSize: "1.5rem" }} />
        <h2>Book Tracker</h2>
      </Link>

      <button
        className="menu-btn"
        onClick={() => setOpen(!open)}
        aria-label={open ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={open}
      >
        ☰
      </button>

      <div className={`nav-links ${open ? "active" : ""}`}>
        {user && (
          <>
            <Link to="/library" onClick={() => setOpen(false)}>
              My Library
            </Link>

            <Link to="/add-book" onClick={() => setOpen(false)}>
              Add Book
            </Link>
          </>
        )}

        <Link to="/search" onClick={() => setOpen(false)}>
          Search
        </Link>
        {user ? (
          <button
            onClick={async () => {
              await handleLogout();
              setOpen(false);
            }}
          >
            Log Out
          </button>
        ) : (
          <Link to="/auth" onClick={() => setOpen(false)}>
            Log In
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
