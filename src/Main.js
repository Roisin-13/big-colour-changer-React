import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
//import { Routes, Route } from 'react-router-dom';
import BodyHTML from './components/body(html)';
import BodyHEX from './components/body(hex)';

const Main = () => (
    <main>
        <Routes>
            <Route path='/' element={<BodyHTML />} />
            <Route path='body(hex)' element={<BodyHEX />} />
        </Routes>
    </main>
)

export default Main