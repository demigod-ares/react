import { useState } from 'react';

function BookEdit({ book, onSubmit }) { // handle submit of parent
  const [title, setTitle] = useState(book.title);

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // submit event on form, prevent network call

    onSubmit(book.id, title); // handleSubmit of <BookShow> will call <App> "editBook"
  };

  return (
    <form onSubmit={handleSubmit} className="book-edit">
      <label>Title</label>
      <input className="input" value={title} onChange={handleChange} />
      <button className="button is-primary">Save</button>
    </form>
  );
}

export default BookEdit;
