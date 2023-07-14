import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Homepage from './Components/Homepage';

function App() {
    return (
  <Router>
    <Routes>
        <Route> path="/" element={<Homepage/>}</Route>
    </Routes>
  </Router>
    );
}

export default App;
