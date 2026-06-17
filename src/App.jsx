import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Home from "./pages/Home";
import AddBook from "./pages/AddBook";
import Search from "./pages/Search";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";

function App() {
  const [books, setBooks] = useState([]);
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home books={books} />} />
        <Route path="/add-book" element={<AddBook setBooks={setBooks} />} />
        <Route path="/search" element={<Search setBooks={setBooks} />} />
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
