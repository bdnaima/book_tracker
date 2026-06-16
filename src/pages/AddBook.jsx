const AddBook = () => {
  return (
    <section className="add-book">
      <h1>Add New Book</h1>

      <form className="book-form">
        <input type="text" placeholder="Book title" />

        <input type="text" placeholder="Author" />

        <button>Add Book</button>
      </form>
    </section>
  );
};

export default AddBook;
