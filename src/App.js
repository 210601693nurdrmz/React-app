import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import SecondPage from './pages/SecondPage';
import AppContext from './AppContext'; // Import AppContext
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => {
    const [activePage, setActivePage] = useState('home'); // State to manage the active page

    return (
       <AppContext.Provider value={{ activePage, setActivePage }}> 
          <Router>
             <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/second" element={<SecondPage />} />
             </Routes>
          </Router>
       </AppContext.Provider>
    );
}

export default App;
