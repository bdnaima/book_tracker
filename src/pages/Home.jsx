import BookCard from "../components/BookCard/BookCard";

const Home = ({ books }) => {
  return (
    <section className="home">
      <h1>My Library</h1>

      <div className="books-grid">
        {books.length === 0 ? (
          <p>No books yet</p>
        ) : (
          books.map((book) => <BookCard key={book.id} book={book} />)
        )}
      </div>
    </section>
  );
};

export default Home;
