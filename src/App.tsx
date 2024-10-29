import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import RacePage from './pages/user/RacePage/RacePage';
import AdminProfile from './pages/admin/AdminProfile';
import Lobby from './pages/admin/Lobby/Lobby';
import './App.css';

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/race" element={<RacePage />} />
                <Route path="/admin" element={<AdminProfile />} />
                <Route path='/lobby/:id' element={<Lobby />}/>
                <Route path="/*" element={<Navigate to="/race" />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;