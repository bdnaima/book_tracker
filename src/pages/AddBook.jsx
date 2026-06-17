import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const AddBook = ({ setBooks }) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim() || !author.trim()) {
      return;
    }

    // Create a new book object
    const newBook = {
      id: Date.now(),
      title,
      author,
      status: "Want to Read",
      description,
    };

    // Add the new book to the state
    setBooks((prev) => [...prev, newBook]);
    // Show a success message
    toast.success("Book added successfully!");
    // Navigate back to the home page
    navigate("/");

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
