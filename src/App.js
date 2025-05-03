
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AboutUs from './pages/AboutUs';
function App() {
  return (

    <Router>
      <Routes>
        <Route path="/" element={<AboutUs />} />
  
      </Routes>

    </Router>



  );
}

export default App;
