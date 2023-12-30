import './SearchBar.css';
import { useState } from 'react';

function SearchBar({ onSubmit }) { // 3. callback event
  const [term, setTerm] = useState('');

  const handleFormSubmit = (event) => { // 2. event passed to handle form submit
    event.preventDefault();

    onSubmit(term); // 3. callback of parent, used here
  };

  const handleChange = (event) => { // 1. handle input change
    setTerm(event.target.value);
  };

  return (
    <div className="search-bar">
      <form onSubmit={handleFormSubmit}> {/* 2. Complex */}
        <label>Enter Search Term</label>
        <input value={term} onChange={handleChange} /> {/* 1. EASY */}
      </form>
    </div>
  );
}

export default SearchBar;
