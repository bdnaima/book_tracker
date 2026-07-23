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
      <h1>My Books</h1>

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
