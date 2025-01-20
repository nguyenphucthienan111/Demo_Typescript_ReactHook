import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HooksDemo from './components/HooksDemo';
import UseMemoDemo from './pages/UseMemoDemo';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HooksDemo />} />
        <Route path="/usememo-demo" element={<UseMemoDemo />} />
      </Routes>
    </Router>
  );
}

export default App;