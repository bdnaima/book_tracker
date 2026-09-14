import { BrowserRouter, Routes, Route } from "react-router-dom";
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

  useEffect(() => {
    async function getBooks() {
      const { data, error } = await supabase.from("books").select("*");

      console.log("Supabase books:", data);
      console.log("Supabase error:", error);

      if (error) {
        console.error("Error fetching books:", error);
        return;
      }

      setBooks(data);
    }

    getBooks();
  }, []);

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
          element={<Home books={books} setBooks={setBooks} />}
        />
        {/** Page for adding a new book */}
        <Route path="/add-book" element={<AddBook setBooks={setBooks} />} />
        {/** Page for searching books */}
        <Route path="/search" element={<Search setBooks={setBooks} />} />
        {/** Landing page */}
        <Route path="/landing" element={<Landing />} />
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
};

export default App;
