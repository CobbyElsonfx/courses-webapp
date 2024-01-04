// App.jsx
import React from 'react';
import { Route, Routes } from 'react-router';

import Modules from './pages/Modules';
import Home from './pages/Home';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
                <Route path="/courses/:courseId" element={<Modules />} />
      </Routes>
    </div>
  );
};

export default App;
