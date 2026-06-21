import "./BookCard.css";
import { FaTrashAlt, FaCheck, FaUndoAlt } from "react-icons/fa";
import bookCoverDefault from "../../assets/images/book_cover.jpg";

// BookCard component to display individual book information
const BookCard = ({ book, deleteBook, toggleStatus }) => {
  return (
    <div className="book-card">
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
        <div className="book-info">
          <h3 className="book-title">{book.title}</h3>
          <span
            className={`book-status ${book.status === "Read" ? "read" : "want"}`}
          >
            {book.status === "Read" ? "Read" : "Want to Read"}
          </span>
        </div>
        <p className="book-author">{book.author}</p>

        <p className="book-desc">
          {book.description || "No description available."}
        </p>
      </div>
      <div className="book-actions">
        <button
          className="icon-btn delete-btn"
          onClick={() => deleteBook(book.id)}
          title="Delete book"
          aria-label="Delete book"
        >
          <FaTrashAlt />
        </button>

        <button
          className={`icon-btn status-btn ${book.status === "Read" ? "read" : "want"}`}
          onClick={() => toggleStatus(book.id)}
          title={
            book.status === "Read" ? "Mark as Want to Read" : "Mark as Read"
          }
          aria-label={
            book.status === "Read" ? "Mark as Want to Read" : "Mark as Read"
          }
        >
          {book.status === "Read" ? <FaUndoAlt /> : <FaCheck />}
        </button>
      </div>
    </div>
  );
};

export default BookCard;
