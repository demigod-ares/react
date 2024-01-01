import './SearchBar.css';
import { useState } from 'react';

function SearchBar({ onSubmitChild }) { // 3. callback function of parent passed to child
  const [term, setTerm] = useState('');

  const handleFormSubmit = (event) => { // 2. event passed to prevent form submit sending network request
    event.preventDefault(); // prevent default behaviour of sending network request (see image)

    onSubmitChild(
      term // 1. OR document.querySelector('input').value // Never USE this because it looks EASY 
      // Instead (create term state and use onChange in input) to take the control of dom elements using state
      ); // 3. callback of parent, used here
  };

  const handleChange = (event) => { // 1. handle input change used event
    setTerm(event.target.value);
  };

  return (
    <div className="search-bar">
      <form onSubmit={handleFormSubmit}> {/* 2. Complex */}
      {/* VVI: when you put <input> inside a <form>, pressing enter key in input will submit form
      AND send a network request Automatically */}
        <label>Enter Search Term</label>
        <input value={term} onChange={handleChange} /> {/* 1. EASY */}
      </form>
    </div>
  );
}

export default SearchBar;
