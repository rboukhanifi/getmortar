import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CompanyIntro from './pages/CompanyIntro';
import CompanyMission from './pages/CompanyMission';
import TermsOfService from './pages/TermsOfService';
import Research from './pages/Research';
import IndustrialAutonomy from './pages/IndustrialAutonomy';
import SensorParadox from './pages/SensorParadox';
import GetStarted from './pages/GetStarted';
import JoinUs from './pages/JoinUs';
import AegisP1 from './pages/AegisP1';
import Vision from './pages/Vision';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CompanyIntro />} />
        <Route path="/company" element={<CompanyMission />} />

        <Route path="/join" element={<JoinUs />} />
        <Route path="/terms" element={<TermsOfService />} />
        <Route path="/research" element={<Research />} />
        <Route path="/research/industrial-autonomy" element={<IndustrialAutonomy />} />
        <Route path="/research/sensor-paradox" element={<SensorParadox />} />
        <Route path="/get-started" element={<GetStarted />} />
        <Route path="/aegisp1" element={<AegisP1 />} />
        <Route path="/vision" element={<Vision />} />
      </Routes>
    </Router>
  );
}

export default App;
