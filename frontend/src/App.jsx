// File: src/App.jsx
import React from 'react';
import { Outlet, ScrollRestoration } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-rich-black text-white selection:bg-primary selection:text-rich-black">
      <Navbar />
      <main className="grow">
        <Outlet />
      </main>
      <Footer />
      <ScrollRestoration />
    </div>
  );
}

export default App;
