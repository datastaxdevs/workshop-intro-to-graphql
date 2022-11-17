import graphql_logo from './graphql_logo.svg';
import './App.css';
import Shows from './components/Shows';
import Genres from './components/Genres';
import ShowsByName from './components/ShowsByName';
import ReferenceList from './components/ReferenceList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a href="https://graphql.org/" rel="noreferrer" target="_blank">
          <img src={graphql_logo} className="App-logo" alt="logo" />
        </a>
        <p className="App-subtitle">
          <a href="https://github.com/datastaxdevs/workshop-intro-to-graphql#readme" rel="noreferrer" target="_blank">
            Intro to GraphQL by DataStax Developers
          </a>
        </p>
        <h1>Shows(Local)</h1>
        <Shows />
        <h1>Genres(Local)</h1>
        <Genres />
        <h1>ShowsByName(Astra DB)</h1>
        <ShowsByName />
        <h1>ReferenceList(Astra DB)</h1>
        <ReferenceList />
      </header>
    </div>
  );
}

export default App;
