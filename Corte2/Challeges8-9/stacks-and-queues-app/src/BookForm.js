import { useState } from "react";

function BookForm({ onAdd }) {
  const [book, setBook] = useState({ name: "", isbn: "", author: "", publisher: "" });

  const handleChange = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(book);
    setBook({ name: "", isbn: "", author: "", publisher: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Libro" value={book.name} onChange={handleChange} required />
      <input type="text" name="isbn" placeholder="Codigo" value={book.isbn} onChange={handleChange} required />
      <input type="text" name="author" placeholder="Author" value={book.author} onChange={handleChange} required />
      <input type="text" name="publisher" placeholder="Editoria" value={book.publisher} onChange={handleChange} required />
      <button type="submit">Adquirir Libro</button>
    </form>
  );
}

export default BookForm;