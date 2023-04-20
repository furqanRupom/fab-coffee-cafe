import React from 'react';
import Header from '../pages/Shared/Header/Header';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div className="max-w-7xl mx-auto px-10">
            <Header />
            <Outlet />
        </div>
    );
};

export default Main;