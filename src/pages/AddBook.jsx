import { useState } from "react";

const AddBook = ({ setBooks }) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newBook = {
      id: Date.now(),
      title,
      author,
      status: "Want to Read",
    };

    setBooks((prev) => [...prev, newBook]);

    setTitle("");
    setAuthor("");
  };

  return (
    <section className="add-book">
      <h1>Add Book</h1>

      <form className="book-form" onSubmit={handleSubmit}>
        <input
          placeholder="Book title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          placeholder="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />

        <button type="submit">Add</button>
      </form>
    </section>
  );
};

export default AddBook;
