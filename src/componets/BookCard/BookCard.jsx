import "./BookCard.css";

const BookCard = ({ book }) => {
  return (
    <div className="book-card">
      <h3>{book.title}</h3>

      <p>{book.author}</p>

      <span>{book.status}</span>
    </div>
  );
};

export default BookCard;
