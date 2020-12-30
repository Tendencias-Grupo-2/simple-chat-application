import './App.css';
import Chat from './components/Chat/Chat';
import UserNameInput from './components/UserNameInput/UserNameInput';

function App() {
  return (
    <div className="App">
      <UserNameInput />
      <Chat></Chat>
    </div>
  );
}

export default App;
