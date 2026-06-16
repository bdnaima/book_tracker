import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import AddBook from "./pages/AddBook";
import Navbar from "./componets/Navbar/Navbar";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-book" element={<AddBook />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
