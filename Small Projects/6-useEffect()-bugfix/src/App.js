import { useEffect, useContext } from 'react';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';
import BooksContext from './context/books';

function App() {
  const { fetchBooks } = useContext(BooksContext);

  useEffect(() => {
    fetchBooks();
    const cleanUp = () => { console.log("Cleanup !") };
    return cleanUp; // 3. returned item will perform the cleanup tasks
  }, [fetchBooks]); // 1. keeping array blank will always fetch initial value of fetchBook from memory, so we added fetchBook
  // adding fetchBook will call fetch book on first render, and fetchBook of Provider is modifying state of book, this process lead to infinite rerender

  return (
    <div className="app">
      <h1>Reading List</h1>
      <BookList />
      <BookCreate />
    </div>
  );
}

export default App;
