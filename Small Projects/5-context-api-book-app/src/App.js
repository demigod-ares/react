import { useEffect,
  // useContext
  } from 'react';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';
// import BooksContext from './context/books';
import useBooksContext from './hooks/use-books-context';

function App() {
  // const { fetchBooks } = useContext(BooksContext); // Using BooksContext here
  const { fetchBooks } = useBooksContext(); // used custom hook instead of two imports

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div className="app">
      <h1>Reading List</h1>
      <BookList />
      <BookCreate />
    </div>
  );
}

export default App;
