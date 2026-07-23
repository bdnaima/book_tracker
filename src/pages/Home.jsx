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
