import { Link } from "react-router-dom";
import bookCover from "../assets/images/book_cover.jpg";
import "./Landing.css";

const Landing = () => {
  return (
    <main className="landing">
      <section className="landing-hero">
        <div className="landing-content">
          <span className="landing-badge">Book Tracker</span>

          <h1>
            Your books.
            <br />
            <span>Your reading journey.</span>
          </h1>

          <p>
            Keep track of the books you want to read and the ones you've already
            finished — all in one place.
          </p>

          <div className="landing-buttons">
            <Link to="/library" className="landing-button primary">
              My Library
            </Link>

            <Link to="/search" className="landing-button secondary">
              Find a Book
            </Link>
          </div>
        </div>

        <div className="landing-image">
          <img src={bookCover} alt="Books" />
        </div>
      </section>

      <section className="landing-features">
        <div className="feature-item">
          <span className="feature-accent"></span>
          <h2>Track Your Books</h2>
          <p>Keep all your books organized in one personal library.</p>
        </div>

        <div className="feature-item">
          <span className="feature-accent"></span>
          <h2>Save Your Progress</h2>
          <p>Mark books as read or keep them on your Want to Read list.</p>
        </div>

        <div className="feature-item">
          <span className="feature-accent"></span>
          <h2>Discover New Books</h2>
          <p>Search for books and easily add them to your library.</p>
        </div>
      </section>

      <section className="featured-books">
        <div className="featured-books-heading">
          <span>Discover</span>
          <h2>Featured Books</h2>
          <p>A few books to inspire your next read.</p>
        </div>

        <div className="featured-books-grid">
          <div className="featured-book">
            <img
              src="https://covers.openlibrary.org/b/isbn/9780141439518-M.jpg"
              alt="Pride and Prejudice"
            />
            <h3>Pride and Prejudice</h3>
            <p>Jane Austen</p>
          </div>

          <div className="featured-book">
            <img
              src="https://covers.openlibrary.org/b/isbn/9780147514011-M.jpg"
              alt="Little Women"
            />
            <h3>Little Women</h3>
            <p>Louisa May Alcott</p>
          </div>

          <div className="featured-book">
            <img
              src="https://covers.openlibrary.org/b/isbn/9780684717609-M.jpg"
              alt="The Great Gatsby"
            />
            <h3>The Great Gatsby</h3>
            <p>F. Scott Fitzgerald</p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Landing;
