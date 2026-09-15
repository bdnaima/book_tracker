import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { ToastContainer } from "react-toastify";
import { supabase } from "./lib/supabase";
import "react-toastify/dist/ReactToastify.css";

import Home from "./pages/Home";
import AddBook from "./pages/AddBook";
import Search from "./pages/Search";
import Navbar from "./components/Navbar/Navbar";
import Landing from "./pages/Landing";
import Auth from "./pages/Auth";
import "./App.css";

const App = () => {
  const [books, setBooks] = useState([]);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getBooks() {
      if (!user) return;

      const { data, error } = await supabase
        .from("books")
        .select("*")
        .eq("user_id", user.id); // Fetch books for the logged-in user

      if (error) {
        console.error("Error fetching books:", error);
        return;
      }

      setBooks(data);
    }

    getBooks();
  }, [user]);

  // Get the current user
  useEffect(() => {
    async function getUser() {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      setUser(user);
      setLoading(false);
    }

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

  if (loading) {
    return null;
  }

  return (
    <BrowserRouter>
      <Navbar />
      {/* Define routes for different pages */}
      <Routes>
        {/** Home page that displays the list of books */}

        <Route path="/" element={<Landing />} />
        <Route path="/auth" element={<Auth />} />
        <Route
          path="/library"
          element={
            user ? (
              <Home books={books} setBooks={setBooks} />
            ) : (
              <Navigate to="/auth" />
            )
          }
        />
        {/** Page for adding a new book */}
        <Route
          path="/add-book"
          element={
            user ? (
              <AddBook setBooks={setBooks} user={user} />
            ) : (
              <Navigate to="/auth" />
            )
          }
        />
        {/** Page for searching books */}
        <Route
          path="/search"
          element={<Search setBooks={setBooks} user={user} />}
        />
        {/** Landing page */}
        <Route path="/landing" element={<Landing />} />
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
};

export default App;
