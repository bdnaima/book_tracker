import { useState } from "react";
import { FaSpinner } from "react-icons/fa";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "../App.css";

const Search = ({ setBooks }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  // Function to search for books
  const searchBooks = async () => {
    setLoading(true);
    // Fetch books from Open Library API
    const res = await fetch(
      `https://openlibrary.org/search.json?q=${searchTerm}`,
    );
    // Check if the response is successful
    if (!res.ok) {
      toast.error("Failed to fetch books");
      setLoading(false);
      return;
    }
    // If the response is successful, parse the JSON data
    const data = await res.json();
    console.log(data.docs);
    setResults(data.docs.slice(0, 12));
    setLoading(false);
  };

  // Function to save a book
  const saveBook = (book) => {
    const newBook = {
      id: Date.now(),
      title: book.title,
      author: book.author_name?.[0] || "Unknown",
      status: "Want to Read",
      cover_i: book.cover_i,
    };

    // Add the new book to the state
    setBooks((prev) => [...prev, newBook]);
    // Show a success message
    toast.success("Book added successfully!");
    // Navigate back to the home page
    navigate("/");
  };

  return (
    <section className="search">
      <h1>Search Books</h1>

      <div className="search-wrapper">
        <div className="search-box">
          <span className="search-icon">🔍</span>

          <input
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search books..."
          />

          <button className="search-btn" onClick={searchBooks}>
            {loading ? <FaSpinner className="spinner" /> : "Search"}
          </button>
        </div>
      </div>

      <div className="books-grid home">
        {results.map((book) => (
          <div key={book.key} className="book-card">
            <img
              className="book-cover"
              src={
                book.cover_i
                  ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
                  : "https://via.placeholder.com/180x260?text=No+Cover"
              }
              alt={book.title}
            />

            <div className="book-content">
              <h3 className="book-title">{book.title}</h3>

              <p className="book-author">
                {book.author_name?.[0] || "Unknown Author"}
              </p>

              <button className="save-btn" onClick={() => saveBook(book)}>
                Save Book
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Search;
