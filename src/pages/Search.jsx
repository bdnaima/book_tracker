import { useState } from "react";
import { FaSpinner } from "react-icons/fa";
import "../App.css";

const Search = ({ books, setBooks }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const searchBooks = async () => {
    setLoading(true);
    const res = await fetch(
      `https://openlibrary.org/search.json?q=${searchTerm}`,
    );

    const data = await res.json();
    setResults(data.docs.slice(0, 10));
    setLoading(false);
  };

  const saveBook = (book) => {
    const newBook = {
      id: Date.now(),
      title: book.title,
      author: book.author_name?.[0] || "Unknown",
      status: "Want to Read",
    };

    setBooks((prev) => [...prev, newBook]);
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
            Search
          </button>
        </div>
      </div>

      <div className="books-grid">
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
