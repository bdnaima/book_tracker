import { useState } from "react";
import { toast } from "react-toastify";

const AddBook = ({ setBooks }) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim() || !author.trim()) {
      return;
    }

    const newBook = {
      id: Date.now(),
      title,
      author,
      status: "Want to Read",
      description,
    };

    setBooks((prev) => [...prev, newBook]);
    toast.success("Book added successfully!");

    setTitle("");
    setAuthor("");
    setDescription("");
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

        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <button type="submit">Add</button>
      </form>
    </section>
  );
};

export default AddBook;
