import BookCard from "../components/BookCard/BookCard";
import "../App.css";

// Home component to display the user's library
const Home = ({ books, setBooks }) => {
  // Delete a book
  const deleteBook = (id) => {
    setBooks((prev) => prev.filter((book) => book.id !== id));
  };

  const toggleStatus = (id) => {
    setBooks((prev) =>
      prev.map((book) =>
        book.id === id
          ? {
              ...book,
              status: book.status === "Want to Read" ? "Read" : "Want to Read",
            }
          : book,
      ),
    );
  };

  return (
    <section className="home">
      <h1>My Library</h1>

      {books.length === 0 ? (
        <p className="empty-state">No books in your library yet</p>
      ) : (
        <div className="books-grid">
          {books.map((book) => (
            <BookCard
              key={book.id}
              book={book}
              deleteBook={deleteBook}
              toggleStatus={toggleStatus}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default Home;
