import { Link } from "react-router-dom";
import BookCard from "../components/BookCard/BookCard";
import { toast } from "react-toastify";
import { supabase } from "../lib/supabase";
import "../App.css";

// Home component to display the user's library
const Home = ({ books, setBooks }) => {
  // Delete a book
  const deleteBook = async (id) => {
    const { error } = await supabase.from("books").delete().eq("id", id);

    if (error) {
      console.error("Error deleting book:", error);
      return;
    }

    setBooks((prev) => prev.filter((book) => book.id !== id));
    toast.success("Book deleted successfully!");
  };

  const toggleStatus = async (id) => {
    // Find the current book
    const currentBook = books.find((book) => book.id === id);

    if (!currentBook) return;

    // Decide the new status
    const newStatus =
      currentBook.status === "Want to Read" ? "Read" : "Want to Read";

    // Update Supabase
    const { error } = await supabase
      .from("books")
      .update({ status: newStatus })
      .eq("id", id);

    if (error) {
      console.error("Error updating book:", error);
      return;
    }

    // Update React state
    setBooks((prev) =>
      prev.map((book) =>
        book.id === id ? { ...book, status: newStatus } : book,
      ),
    );
  };

  return (
    <section className="home">
      <p className="library-label">MY LIBRARY</p>
      <h1>My Books</h1>

      {books.length === 0 ? (
        <div className="empty-state">
          <h2>Your library is empty</h2>
          <p>
            Start building your personal collection by adding your first book.
          </p>

          <Link to="/add-book" className="empty-state-button">
            Add Your First Book
          </Link>
        </div>
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
