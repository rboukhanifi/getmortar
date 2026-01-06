import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Company from './pages/Company';
import TermsOfService from './pages/TermsOfService';
import Solutions from './pages/Solutions';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/company" element={<Company />} />
        <Route path="/terms" element={<TermsOfService />} />
        <Route path="/solutions" element={<Solutions />} />
      </Routes>
    </Router>
  );
}

export default App;
