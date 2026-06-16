import "./BookCard.css";

const BookCard = ({ book }) => {
  return (
    <div className="book-card">
      <img
        className="book-cover"
        src={`https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`}
        alt={book.title}
      />

      <div className="book-content">
        <h3 className="book-title">{book.title}</h3>
        <p className="book-author">{book.author_name?.[0]}</p>

        <p className="book-desc">
          {book.first_sentence?.[0] || "No description available."}
        </p>

        <button onClick={() => saveBook(book)}>➕ Save</button>
      </div>
    </div>
  );
};

export default BookCard;
