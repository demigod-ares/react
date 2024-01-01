import BookShow from './BookShow';
import useBooksContext from '../hooks/use-books-context';

function BookList() {
  const { books } = useBooksContext(); // used custom hook instead of two imports

  const renderedBooks = books.map((book) => {
    return <BookShow book={book} />; // still passing book to know the exact list in map
  });

  return <div className="book-list">{renderedBooks}</div>;
}

export default BookList;
