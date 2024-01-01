import { useState } from 'react';
import BookEdit from './BookEdit';

function BookShow({ book, onDelete, onEdit }) {
  const [showEdit, setShowEdit] = useState(false); // State to pop up edit menu

  const handleDeleteClick = () => {
    onDelete(book.id); // delete of parent is used ======================
  };

  const handleEditClick = () => { // Toggle "showEdit" State to pop up edit menu
    setShowEdit(!showEdit);
  };

  const handleSubmit = (id, newTitle) => {
    setShowEdit(false); // 4. hide edit menu
    onEdit(id, newTitle); // 4. call parent edit =========================
  };

  let content = <h3>{book.title}</h3>; // content will change if showEdit is true
  if (showEdit) {
    content = <BookEdit onSubmit={handleSubmit} book={book} />; // 3. pass props to child, child will call handleSubmit() ==============
  }

  return (
    <div className="book-show">
      <img alt="books" src={`https://picsum.photos/seed/${book.id}/300/200`} />
      <div>{content}</div> {/* 2. pops up on click edit only */}
      <div className="actions">
        <button className="edit" onClick={handleEditClick}> {/* 1. Click */}
          Edit
        </button>
        <button className="delete" onClick={handleDeleteClick}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default BookShow;
