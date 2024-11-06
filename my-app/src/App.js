import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ServiceTerm from './screen/term/ServiceTerm';
import PrivacyTerm from './screen/term/PrivacyTerm';
import LocationTerm from './screen/term/LocationTerm';
import HomePage from './screen/home/HomeScreen';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/term/service" element={<ServiceTerm />} />
        <Route path="/term/privacy" element={<PrivacyTerm />} />
        <Route path="/term/location" element={<LocationTerm />} />
      </Routes>
    </Router>
  );
}

export default App;
