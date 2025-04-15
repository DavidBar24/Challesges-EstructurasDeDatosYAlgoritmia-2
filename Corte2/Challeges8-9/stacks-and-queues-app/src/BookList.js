function BookList({ books, onRemove }) {
    return (
      <div>
        <h2>Estanterias Libros</h2>
        <ul>
          {books.map((book, index) => (
            <li key={index}>
              <strong>{book.name}</strong> - {book.author} ({book.publisher}) - Codigo: {book.isbn}
            </li>
          ))}
        </ul>
        <button onClick={onRemove} disabled={books.length === 0}>Quitar Ultimo Libro</button>
      </div>
    );
  }
  
  export default BookList;
  