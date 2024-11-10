import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from '../pages/Home';
import Profile from '../pages/Profile';
import MyJob from '../pages/MyJob';
import Header from '../components/Header';
import Button from '../components/button';

function RoutesApp() {
  return (
    <Router>
      <Header />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/myjob" element={<MyJob />} />
      </Routes>
      <Button />
    </Router>
  );
}

export default RoutesApp;