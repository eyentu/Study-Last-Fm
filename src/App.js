import './App.css';
import {Routes, Route} from 'react-router-dom'
import Main from './components/Main';
import ArtistDetail from './components/ArtistDetail';

function App() {
  return (
    <div className="App">
    <Routes>
      <Route path='/' element={<Main/>}/>
      <Route path='/Main' element={<Main/>}/>
      <Route path='/ArtistDetail' element={<ArtistDetail/>}/>
    </Routes>
    </div>
  );
}

export default App;
