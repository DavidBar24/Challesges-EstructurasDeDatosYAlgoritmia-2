import { useState } from "react";
import BookStack from "./BookStack";
import BookForm from "./BookForm";
import BookList from "./BookList";

const bookStack = new BookStack();

function BookPage() {
  const [books, setBooks] = useState(bookStack.getBooks());

  const addBook = (book) => {
    bookStack.push(book);
    setBooks(bookStack.getBooks());
  };

  const removeBook = () => {
    bookStack.pop();
    setBooks(bookStack.getBooks());
  };

  return (
    <div>
      <h1>Libros</h1>
      <BookForm onAdd={addBook} />
      <BookList books={books} onRemove={removeBook} />
    </div>
  );
}

export default BookPage;