import React from 'react'
import ReactDom from "react-dom/client";
import App from './App.jsx'
import './index.css'
//import {
//    createBrowserRouter,
//    RouterProvider,
//} from "react-router-dom";
import { Klub } from './Kluby/KlubPage.jsx';
import { Kluby } from './Kluby/KlubyPage.jsx';
import { Mecz } from './Mecze/MeczPage.jsx';
import { Mecze } from './Mecze/MeczePage.jsx';
import { Zawodnik } from './Zawodnicy/ZawodnikPage.jsx';
import { Zawodnicy } from './Zawodnicy/ZawodnicyPage.jsx';
import { Layout } from './Layout/Layout.jsx';
import { Login } from './Login/Login.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

//const router = createBrowserRouter([
//    {
//        path: "/",
//        element: <App />,
//    },
//    {
//        path: "/klub",
//        element: <Klub />,
//    },
//    {
//        path: "/mecz",
//        element: <Mecz />,
//    },
//    {
//        path: "/mecze",
//        element: <Mecze />,
//    },
//    {
//        path: "/kluby",
//        element: <Kluby />,
//    },
//    {
//        path: "/zawodnik",
//        element: <Zawodnik />,
//    },
//    {
//        path: "/zawodnicy",
//        element: <Zawodnicy />,
//    }
//    {
//        path: "/login",
//        element: <Login />,
//    }
//]);

ReactDom.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        {/*<RouterProvider router={router} />*/}
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<App />} />
                </Route>
                <Route path='/zawodnik' element={<Layout />}>
                    <Route index element={<Zawodnik />} />
                </Route>
                <Route path='/zawodnicy' element={<Layout />}>
                    <Route index element={<Zawodnicy />} />
                </Route>
                <Route path='/Klub' element={<Layout />}>
                    <Route index element={<Klub />} />
                </Route>
                <Route path='/kluby' element={<Layout />}>
                    <Route index element={<Kluby />} />
                </Route>
                <Route path='/mecz' element={<Layout />}>
                    <Route index element={<Mecz />} />
                </Route>
                <Route path='/mecze' element={<Layout />}>
                    <Route index element={<Mecze />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);


