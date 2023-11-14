import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import Home from './Components/Home/Home.js';
import Projects from './Components/Projects/projects.js';
import Resume from './Components/Resume/resume.js';

function App() {
  return (
    <Router>
      <h1>Portfolio</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </Router>
  );
}

export default App;
