import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'; // Thêm Navigate
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import Support from './pages/Support';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          {/* Cấu trúc này sẽ đảm bảo đường dẫn gốc (/) là trang chi tiết sản phẩm */}
          <Route path="/" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/support" element={<Support />} />
          
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;