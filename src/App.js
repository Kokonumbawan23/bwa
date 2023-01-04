import React from 'react'
import { BrowserRouter as Router,createBrowserRouter,Route,Routes } from 'react-router-dom'


import LandingPage from 'pages/LandingPage';
import './assets/scss/style.scss';
import './elements/Star/index.scss'
import ErrorPage from 'pages/errorPage';

const App = createBrowserRouter([{
    path: '/',
    element: <LandingPage />,
    errorElement: <ErrorPage />,
},]);

export default App;
