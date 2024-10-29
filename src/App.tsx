import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import RacePage from './pages/user/RacePage/RacePage';
import AdminPage from './pages/admin/AdminPage/AdminPage';

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/race" element={<RacePage />} />
                <Route path="/admin" element={<AdminPage />} />
                <Route path="/*" element={<Navigate to="/race" />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;