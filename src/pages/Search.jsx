import { useState } from "react";
import "../App.css";

const Search = ({ books, setBooks }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);

  const searchBooks = async () => {
    const res = await fetch(
      `https://openlibrary.org/search.json?q=${searchTerm}`,
    );

    const data = await res.json();
    setResults(data.docs.slice(0, 10));
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
        </div>
      </div>

      <button onClick={searchBooks}>Search</button>

      <div className="books-grid">
        {results.map((book) => (
          <div key={book.key} className="book-card">
            <h3>{book.title}</h3>
            <p>{book.author_name?.[0]}</p>

            <button onClick={() => saveBook(book)}>➕ Save to Library</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Search;
