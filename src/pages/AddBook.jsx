import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { supabase } from "../lib/supabase";

const AddBook = ({ setBooks, user }) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user) {
      toast.error("Please log in first.");
      navigate("/auth");
      return;
    }

    if (!title.trim() || !author.trim()) {
      return;
    }

    // Create a new book object
    const newBook = {
      title,
      author,
      status: "Want to Read",
      description,
      user_id: user.id, // Associate the book with the current user's ID
    };

    const { data, error } = await supabase
      .from("books")
      .insert(newBook)
      .select()
      .single();

    if (error) {
      console.error("Error adding book:", error);
      toast.error("Could not add book");
      return;
    }

    // Add the new book to the state
    setBooks((prev) => [...prev, data]);
    // Show a success message
    toast.success("Book added successfully!");
    // Navigate back to the home page
    navigate("/library");
  };

  return (
    <section className="add-book">
      <h1>Add Book</h1>
      <p className="add-book-subtitle">
        Add a book to your personal library and keep track of your reading
        journey.
      </p>
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
