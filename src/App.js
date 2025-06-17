import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Page1 from './page1/page';
import Page2 from './page2/pages2';
import Page3 from './page3/page3';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Page1 />} />
        <Route path="/page2" element={<Page2 />} />
        <Route path="/page3" element={<Page3 />} />
      </Routes>
    </Router>
  );
}

export default App;
