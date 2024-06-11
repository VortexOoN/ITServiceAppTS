import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Pages/Layout.tsx';
import Home from './Pages/Home.tsx';
import About from './Pages/About.tsx';
import Gallery from './Pages/Gallery.tsx';
import Contact from './Pages/Contact.tsx';
import Services from './Pages/Services.tsx';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout></Layout>}>
        <Route index element={<Home/>} />
        <Route path='/About' element={<About></About>}></Route>
        <Route path='/Gallery' element={<Gallery></Gallery>}></Route>
        <Route path='/Contact' element={<Contact></Contact>}></Route>
        <Route path='/Services' element={<Services></Services>}></Route>
      </Route>
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
