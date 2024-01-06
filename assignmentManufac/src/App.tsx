import './App.css';
import Flavanoid, { flavanoidsMap } from './component/flavanoid';
import Gamma, { gammaMap } from './component/gamma';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>This is desired Flavanoids table</p>
        <Flavanoid flavanoidsMap={flavanoidsMap} />
        <p>This is desired Gamma table</p>
        <Gamma gammaMap={gammaMap} />
      </header>
    </div>
  );
}

export default App;
