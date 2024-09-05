import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import GraphicDesign from './pages/GraphicDesign';
import UIUXDesign from './pages/UIUXDesign';
import Illustration from './pages/Illustration';
import Animation from './pages/Animation';
import VideoEditing from './pages/VideoEditing';
import VideoProduction from './pages/VideoProduction';

const App = () => (
  <Router>
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/design/graphic" element={<GraphicDesign />} />
        <Route path="/design/uiux" element={<UIUXDesign />} />
        <Route path="/design/illustration" element={<Illustration />} />
        <Route path="/video/animation" element={<Animation />} />
        <Route path="/video/editing" element={<VideoEditing />} />
        <Route path="/video/production" element={<VideoProduction />} />
      </Routes>
    </Layout>
  </Router>
);

export default App;
