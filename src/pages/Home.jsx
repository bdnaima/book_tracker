import { useState } from "react";
import booksData from "../data/books";
import BookCard from "../componets/BookCard/BookCard";

const Home = () => {
  const [books] = useState(booksData);

  return (
    <section className="home">
      <h1>My Reading Journey</h1>

      <p>Track your books and reading progress.</p>

      <div className="books-grid">
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </section>
  );
};

export default Home;
