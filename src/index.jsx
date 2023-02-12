import React from 'react'
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import "./styles/index.css";
import Home from './pages/Home'
import Apropos from './pages/Apropos'
import Logement from './pages/Logement'
import NotFound from './pages/NotFound'


const root = ReactDOM.createRoot(document.getElementById("root"));

 
root.render(
        <React.StrictMode>
            <Router>
                <Routes>
                    <Route exact path="/" element={<Home/>}/>
                    <Route exact path="/a_propos" element={<Apropos/>}/>
                    <Route exact path="/:id" element={<Logement/>}/>
                    <Route exact path="*" element={<NotFound />} />
                </Routes>
            </Router>
        </React.StrictMode>
)