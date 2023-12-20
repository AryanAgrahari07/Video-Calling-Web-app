import './App.css';
import { Route, Routes } from "react-router-dom";import './index.css';
import LobbyScreen from './screens/lobby';
import { RoomPage } from './screens/Room';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path= "/" element = {<LobbyScreen/>} />
        <Route path= "/room/:roomId" element = {<RoomPage/>} />
      </Routes>
    </div>
  );
}

export default App;
