import './App.css';
// import TestComponent from './components/TestComponent/TestComponent'
import UserNameInput from './components/UserNameInput/UserNameInput';

function App() {
  return (
    <div className="App">
      <UserNameInput />
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>a
          Editass <code>src/App.js</code> and save to reload.
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
      <TestComponent /> */}
    </div>
  );
}

export default App;
