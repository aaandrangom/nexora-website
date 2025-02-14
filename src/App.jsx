import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Loading from './components/Loading';

const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./pages/AboutSection'));
const Services = React.lazy(() => import('./pages/ServicesSection'));
const Contact = React.lazy(() => import('./pages/ContactSection'));
const Consultation = React.lazy(() => import('./pages/Consultation'));
function App() {
  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/inicio" element={<Home />} />
          <Route path="/sobre-nosotros" element={<About />} />
          <Route path="/servicios" element={<Services />} />
          <Route path="/contacto" element={<Contact />} />
          <Route path="/asesorias" element={<Consultation />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;