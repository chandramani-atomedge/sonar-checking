import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Myform from './Myform.js';
import Get from './get.js';
import Firstpage from './firstpage.js';

// import Gett from './gget.js';

const App = () => {
 
  return (
    
    
    <Router>
      <Routes>
        <Route path="/" element={<Firstpage/>}/>
        <Route path="/Myform" element={<Myform />} />
        <Route path="/getuser" element={<Get />} />
        
      </Routes>
    </Router>
    
  );
};

export default App;