import logo from './logo.svg';
import './App.css';
import Shows from './components/Shows';
import Genres from './components/Genres';
import ShowsByName from './components/ShowsByName';
import ReferenceList from './components/ReferenceList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <h1>Shows</h1>
        <Shows />
        <h1>Genres</h1>
        <Genres />
        <h1>ShowsByName</h1>
        <ShowsByName />
        <h1>ReferenceList</h1>
        <ReferenceList />
      </header>
    </div>
  );
}

export default App;
