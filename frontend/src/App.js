import AllRoute from './AllRoutes/AllRoute';
import './App.css';
import Board from './Components/Board';
import Home from './Components/Home';
import Login from './Components/Login';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <AllRoute/>
      {/* <Board/> */}
    </div>
  );
}

export default App;
