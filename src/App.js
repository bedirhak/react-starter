import './style/normalization.css';
import { Route, Routes } from 'react-router-dom';
import Homepage from './views/Homepage';


function App() {
  return (
    <div className="App">
       <Routes>
        <Route path='/' element={<Homepage/>} />
        <Route path='*' element={<Homepage/>} />
        <Route path='/homepage' element={<Homepage/>} />
      </Routes>
    </div>
  );
}

export default App;