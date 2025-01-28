import logo from './logo.svg';
import './App.css';
import {findLongestWord} from './ecmascript/test';
import { useEffect } from 'react';
import { countOccurrences } from './ecmascript/test';
function App() {
 /* useEffect(() => {
    const words = ["farah", "oumezzine", "testerword"]; 
    console.log(findLongestWord(words)); 
}, []);*/
useEffect(() => {
  const input = [["a", "b", "c"], ["c", "d","f"], ["d", "f","g"]];
  console.log(countOccurrences(input));
}, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> FARAH.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
