class BookStack {
    constructor() {
      this.books = [];
    }
  
    push(book) {
      this.books.push(book);
    }
  
    pop() {
      return this.books.length > 0 ? this.books.pop() : null;
    }
  
    peek() {
      return this.books.length > 0 ? this.books[this.books.length - 1] : null;
    }
  
    isEmpty() {
      return this.books.length === 0;
    }
  
    size() {
      return this.books.length;
    }
  
    getBooks() {
      return [...this.books].reverse();
    }
  }
  
  export default BookStack;