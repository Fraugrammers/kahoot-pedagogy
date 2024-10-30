import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import EnterPage from './pages/user/EnterPage';
import AdminProfile from './pages/admin/AdminProfile';
import AdminLobby from './pages/admin/Lobby';
import RaceLobby from './pages/user/Lobby';
import './App.css';

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/race" element={<EnterPage />} />
                <Route path="/race/lobby:id" element={<RaceLobby />} />
                <Route path="/admin" element={<AdminProfile />} />
                <Route path='/admin/lobby/:id' element={<AdminLobby />}/>
                <Route path="/*" element={<Navigate to="/race" />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;