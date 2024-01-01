import { createContext, useState } from 'react';
import axios from 'axios';

const BooksContext = createContext();

function Provider({ children }) { // Provider created // called automatically with children prop
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    const response = await axios.get('http://localhost:3001/books');

    setBooks(response.data);
  };

  const editBookById = async (id, newTitle) => {
    const response = await axios.put(`http://localhost:3001/books/${id}`, {
      title: newTitle,
    });

    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, ...response.data };
      }

      return book;
    });

    setBooks(updatedBooks);
  };

  const deleteBookById = async (id) => {
    await axios.delete(`http://localhost:3001/books/${id}`);

    const updatedBooks = books.filter((book) => {
      return book.id !== id;
    });

    setBooks(updatedBooks);
  };

  const createBook = async (title) => {
    const response = await axios.post('http://localhost:3001/books', {
      title,
    });

    const updatedBooks = [...books, response.data];
    setBooks(updatedBooks);
  };

  const valueToShare = { // valueToShare contains all state and methods to change state
    books,
    deleteBookById,
    editBookById,
    createBook,
    fetchBooks,
  };

  // Provider wraps BookContext.provider with default prop "value" and returns it.
  return (
    <BooksContext.Provider value={valueToShare}> 
    {/* valueToShare will be accessed by all components */}
      {children}
    </BooksContext.Provider>
  );
}

export { Provider }; // Used around <APP> in index.js . Provider wraps BookContext.provider with default prop "value" and returns it.
export default BooksContext;
