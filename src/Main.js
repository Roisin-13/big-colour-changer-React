import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
//import { Routes, Route } from 'react-router-dom';
import BodyHTML from './components/body(html)';
import BodyHEX from './components/body(hex)';
import BodyRGB from './components/body(rgb)';

const Main = () => (
    <main>
        <Routes>
            <Route path='/' element={<BodyHTML />} />
            <Route path='body(hex)' element={<BodyHEX />} />
            <Route path='body(rgb)' element={<BodyRGB />} />
        </Routes>
    </main>
)

export default Main