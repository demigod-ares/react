import './App.css';
import { useState } from 'react';
import AnimalShow from './AnimalShow';

function getRandomAnimal() {
  const animals = ['bird', 'cat', 'cow', 'dog', 'gator', 'horse']; // 1

  return animals[Math.floor(Math.random() * animals.length)]; // 2 // 5
}

function App() {
  const [animals, setAnimals] = useState([]);

  const handleClick = () => {
    setAnimals([...animals, getRandomAnimal()]); // 4
  };

  const renderedAnimals = animals.map((animal, index) => {
    return <AnimalShow key={index} type={animal} />;
  });

  return (
    <div className="app">
      <button onClick={handleClick}>Add Animal</button> 
      {/* 3 */}
      <div className="animal-list">{renderedAnimals}</div>
      {/* 6 */}
    </div>
  );
}

export default App;
