import { useState } from 'react';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';

function App() {
  const [books, setBooks] = useState([]); // 1. in lowest common parent

  // 1. 3 event handlers defined below
  const editBookById = (id, newTitle) => {
    console.log("editing book with id: ", id);
    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, title: newTitle }; // new array should be sent to rerender BECAUSE OF ....
      } // rerender optimization used in child component ***************

      return book;
    });

    setBooks(updatedBooks);
  };
  const deleteBookById = (id) => {
    console.log("deleting book with id : ", id);
    const updatedBooks = books.filter((book) => {
      return book.id !== id;
    });

    setBooks(updatedBooks);
  };
  const createBook = (title) => {
    console.log("creating new book with title : ", title);
    const updatedBooks = [ // Never use books.push()
      ...books,
      {
        id: Math.round(Math.random() * 9999),
        title,
      },
    ];
      // When used as state system, for primitives rerender works, for {} [] it doesn't
      // Grt cheat sheet on https://state-updates.vercel.app/
    setBooks(updatedBooks); // new array should be sent to rerender
  };

  return (
    <div className="app">
      <h1>Reading List</h1>
      <BookList books={books} onEdit={editBookById} onDelete={deleteBookById} />
      <BookCreate onCreate={createBook} />
    </div>
  );
}

export default App;
