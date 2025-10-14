import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import HomePage from './components/Home';
import ProfilePage from './pages/ProfilePage';
import JobsPage from './pages/JobsPage';
import CertificationPlatform from './components/CertificationPlatform';

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/search" element={<JobsPage />} />
          <Route path="/certifications" element={<CertificationPlatform />} />
        </Routes>
      </main>
    </>
  );
}
