import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Shop from './Shop';



function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />}>
          <Route path=':id' element={<About />} />
        </Route>
        <Route path='shop' element={<Shop />} />
      </Routes>
    </Router>
  );
}

export default App;
