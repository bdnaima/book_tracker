import { useState } from "react";
import { FaSpinner } from "react-icons/fa";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { supabase } from "../lib/supabase";
import bookCoverDefault from "../assets/images/book_cover.jpg";
import "../App.css";

const Search = ({ setBooks, user }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);

  const navigate = useNavigate();

  // Function to search for books
  const searchBooks = async () => {
    if (!searchTerm.trim()) {
      toast.info("Please enter a book title or author.");
      return;
    }
    setLoading(true);
    setResults([]);
    setHasSearched(true);

    // Fetch books from Open Library API
    try {
      const res = await fetch(
        `https://openlibrary.org/search.json?q=${encodeURIComponent(
          searchTerm.trim(),
        )}`,
      );

      // Check if the response is successful
      if (!res.ok) {
        toast.error("Failed to fetch books");
        setLoading(false);
        return;
      }

      // If the response is successful, parse the JSON data
      const data = await res.json();

      setResults(data.docs.slice(0, 12));
      setLoading(false);
    } catch (error) {
      console.error("Error searching books:", error);
      toast.error("Could not search for books.");
      setLoading(false);
    }
  };

  // Function to save a book
  const saveBook = async (book) => {
    if (!user) {
      toast.info("Please log in to save books to your library.");
      navigate("/auth");
      return;
    }
    const newBook = {
      title: book.title,
      author: book.author_name?.[0] || "Unknown",
      status: "Want to Read",
      cover_i: book.cover_i,
      user_id: user.id, // Associate the book with the current user's ID
    };

    // Check if the book already exists
    const { data: existingBook, error: checkError } = await supabase
      .from("books")
      .select("id")
      .eq("title", newBook.title)
      .eq("author", newBook.author)
      .maybeSingle();

    if (checkError) {
      console.error("Error checking for existing book:", checkError);
      return;
    }

    if (existingBook) {
      toast.info("This book is already in your library.");
      return;
    }

    // Insert the book
    const { data, error } = await supabase
      .from("books")
      .insert(newBook)
      .select()
      .single();

    if (error) {
      console.error("Error saving book:", error);
      toast.error("Could not save book.");
      return;
    }

    // Add the new book to the state
    setBooks((prev) => [...prev, data]);
    // Show a success message
    toast.success("Book added successfully!");
    // Navigate back to the library
    navigate("/library");
  };

  return (
    <section className="search">
      <h1>Search Books</h1>
      <p className="search-subtitle">
        Find books and add them to your personal library.
      </p>

      <div className="search-wrapper">
        <div className="search-box">
          <span className="search-icon">🔍</span>

          <input
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                searchBooks();
              }
            }}
            placeholder="Search books..."
          />

          <button className="search-btn" onClick={searchBooks}>
            Search
          </button>
        </div>
        {loading && (
          <div className="loading-container">
            <FaSpinner className="spinner" />
            <p>Searching books...</p>
          </div>
        )}
        {!loading && hasSearched && results.length === 0 && (
          <p className="no-results">No books found.</p>
        )}
      </div>

      <div className="books-grid home">
        {results.map((book) => (
          <div key={book.key} className="book-card">
            <img
              className="book-cover"
              src={
                book.cover_i
                  ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
                  : bookCoverDefault
              }
              alt={book.title}
            />

            <div className="book-content">
              <h3 className="book-title">{book.title}</h3>

              <p className="book-author">
                {book.author_name?.[0] || "Unknown Author"}
              </p>

              <button className="save-btn" onClick={() => saveBook(book)}>
                {user ? "Save Book" : "Log in to Save"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Search;
