import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ServiceTerm from './screen/term/ServiceTerm';
import PrivacyTerm from './screen/term/PrivacyTerm';
import LocationTerm from './screen/term/LocationTerm';
import HomePage from './screen/home/HomeScreen';
import PromotionPage from './screen/promotion/promotion_page';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/term/service" element={<ServiceTerm />} />
        <Route path="/term/privacy" element={<PrivacyTerm />} />
        <Route path="/term/location" element={<LocationTerm />} />
        <Route path="/promotion" element={<PromotionPage />} />
      </Routes>
    </Router>
  );
}

export default App;
