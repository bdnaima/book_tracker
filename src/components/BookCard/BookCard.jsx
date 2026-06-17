import "./BookCard.css";
import bookCoverDefault from "../../assets/images/book_cover.jpg";

// BookCard component to display individual book information
const BookCard = ({ book }) => {
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
        <h3 className="book-title">{book.title}</h3>
        <p className="book-author">{book.author_name?.[0]}</p>

        <p className="book-desc">
          {book.description || "No description available."}
        </p>
      </div>
    </div>
  );
};

export default BookCard;
