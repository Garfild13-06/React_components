import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import App from './App';
import App2 from "./App2";
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Router>
            <Routes>
                <Route path="/store-func" element={<App/>}/>
                <Route path="/store-class" element={<App2/>}/>
                <Route path="/" element={<App/>}/>
            </Routes>
        </Router>
    </React.StrictMode>
);

reportWebVitals();
