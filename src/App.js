import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './styles.css';
import Toolbar from './components/Toolbar';
import Banner from './components/Banner';
import Brands from './components/Brands';
import Models from './components/Models';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';

function App() {
  return (
    <div>
      <Toolbar />
      <Banner />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Brands />
              <Services />
              <Testimonials />
              <FAQ />
            </>
          }
        />
        <Route path="/brand/:brandId/models" element={<Models />} />
      </Routes>
    </div>
  );
}

export default App;
