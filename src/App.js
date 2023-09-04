
import './App.css';
import Navbar from './components/Navbar';
import { Routes , Route, Router } from 'react-router-dom';
import WatchList from './components/WatchList';
import Watched from './components/Watched';
import Add from './components/Add';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<WatchList/>}></Route>
        <Route path='/watched' element={<Watched/>}></Route>
        <Route path='/add' element={<Add/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
