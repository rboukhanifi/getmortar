import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Company from './pages/Company';
import TermsOfService from './pages/TermsOfService';
import Research from './pages/Research';
import GetStarted from './pages/GetStarted';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/company" element={<Company />} />
        <Route path="/terms" element={<TermsOfService />} />
        <Route path="/research" element={<Research />} />
        <Route path="/get-started" element={<GetStarted />} />
      </Routes>
    </Router>
  );
}

export default App;
