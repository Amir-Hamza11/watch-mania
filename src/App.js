
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/home/Home';
import Media from './pages/home/media/Media';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/media/:media_type/:id' element={<Media />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
