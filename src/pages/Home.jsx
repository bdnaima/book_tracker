import BookCard from "../components/BookCard/BookCard";

const Home = ({ books }) => {
  return (
    <section className="home">
      <h1>My Library</h1>

      {books.length === 0 ? (
        <p className="empty-state">📚 No books in your library yet</p>
      ) : (
        <div className="books-grid">
          {books.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      )}
    </section>
  );
};

export default Home;
