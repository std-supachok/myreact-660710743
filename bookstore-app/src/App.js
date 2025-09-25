// import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
// import Footer from './components/Footer';
import NotFound from './components/NotFound';
import HomePage from './pages/HomePage';
import BookList from './pages/BookListPage';
import Catagory from './pages/CategoryPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <div className="App">
      {/* Navigation Bar - แสดงในทุกหน้า */}
      <Navbar />
      {/* Main Content - เปลี่ยนตาม route */}
      <main className="main-content">
        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route path="/books" element={<BookList />} />

          <Route path="/category/:categoryName" element={<Catagory />} />

          <Route path="/about" element={<AboutPage />} />

          <Route path="/contact" element={<ContactPage />} />

          {/* หน้า 404 - สำหรับ URL ที่ไม่มีอยู่ */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      {/* Footer - แสดงในทุกหน้า */}
      {/* <Footer /> */}
    </div>
  );
}

export default App;
