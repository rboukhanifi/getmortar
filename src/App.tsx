import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Company from './pages/Company';
import TermsOfService from './pages/TermsOfService';
import Research from './pages/Research';
import IndustrialAutonomy from './pages/IndustrialAutonomy';
import SensorParadox from './pages/SensorParadox';
import GetStarted from './pages/GetStarted';
import JoinUs from './pages/JoinUs';
import AegisP1 from './pages/AegisP1';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/company" element={<Company />} />
        <Route path="/join" element={<JoinUs />} />
        <Route path="/terms" element={<TermsOfService />} />
        <Route path="/research" element={<Research />} />
        <Route path="/research/industrial-autonomy" element={<IndustrialAutonomy />} />
        <Route path="/research/sensor-paradox" element={<SensorParadox />} />
        <Route path="/get-started" element={<GetStarted />} />
        <Route path="/aegisp1" element={<AegisP1 />} />
      </Routes>
    </Router>
  );
}

export default App;
