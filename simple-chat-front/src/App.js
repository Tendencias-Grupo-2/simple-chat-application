import "./App.css";
import Chat from "./components/Chat/Chat";
import UserNameInput from "./components/UserNameInput/UserNameInput";
import TestComponent from "./components/TestComponent/TestComponent";

function App() {
  return (
    <div className="App">
      <TestComponent />
      <UserNameInput />
      <Chat></Chat>
    </div>
  );
}

export default App;
