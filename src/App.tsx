
import './App.css';
import Sidebar from './component/sidebar/Sidebar.tsx';
import Navbar from './component/navbar/Navbar';
import DarkMode from './component/DarkMode-button/DarkMode';
import Dashboard from './pages/Dashboard.tsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ComingSoon from './component/ComingSoon';



function App() {
  
  return (
    <Router>
    <div className="App">
      <Sidebar />
      
      <div className='main'>
        <Navbar />
        <div className='theme-toggler'>
          <DarkMode/>
        </div>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/coming-soon" element={<ComingSoon />} />
            <Route path="*" element={<ComingSoon />} />
          </Routes>
      </div>
    </div>
    </Router>
  );
}

export default App;
