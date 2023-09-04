import React, { useState } from 'react'
import { BrowserRouter, Route, Routes, Switch } from 'react-router-dom';
import Home from '../screens/home';
import Project from '../screens/project';
import About from '../screens/about';
import Navbar from '../components/navbar';
import Projectview from '../screens/projectview'
import Footer from '../components/footer';

export const Router = () => {

    return (
        <>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/">
                        <Route index element={<Home />} />
                        <Route path=":projectName" element={<Projectview />} />
                    </Route>

                    <Route path='/about' element={<About />} />

                    <Route path='/projects' >
                        <Route index element={<Project />} />
                        <Route path=":projectName" element={<Projectview />} />
                    </Route>

                    <Route path='*' element={<div>Error</div>} />

                </Routes>
                <Footer />
            </BrowserRouter>
        </>
    )
}


export default Router;
