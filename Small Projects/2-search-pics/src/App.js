import { useState } from 'react';
import SearchBar from './components/SearchBar';
import ImageList from './components/ImageList';
import searchImages from './api';

function App() {
  const [images, setImages] = useState([]);

  const handleSubmitParent = async (term) => { // term comes from child
    const result = await searchImages(term); // 1. from API
    console.log("Search term is ", term);

    setImages(result); // 1. Images got set
  };

  return (
    <div>
      <SearchBar onSubmitChild={handleSubmitParent} /> {/* // 2. COMPLEX: callback as event sent as props */}
      <ImageList images={images} /> {/* Easy use of props */}
    </div>
  );
}

export default App;
