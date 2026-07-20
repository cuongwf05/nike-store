import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export default function ProductDetail() {
  const navigate = useNavigate();
  const location = useLocation(); 

  // Hứng toàn bộ dữ liệu (Bao gồm cả sizesList và description)
  const product = location.state || {
    title: "Nike Pegasus 42",
    type: "Women's Road Running Shoes",
    price: "4,059,000đ",
    imageSrc: "/images/pegasus.png",
    sizesList: ['EU 36', 'EU 36.5', 'EU 37.5', 'EU 38', 'EU 38.5', 'EU 39', 'EU 40', 'EU 40.5', 'EU 41', 'EU 42', 'EU 42.5'],
    description: "A springy ride for every run, the Peg's familiar, just-for-you feel returns to help you accomplish your goals."
  };

  const handleAddToCart = () => {
    navigate('/cart');
  };

  return (
    <>
      <main className="detail-container">
        
        <div className="detail-image">
          <img src={product.imageSrc} alt={product.title} />
        </div>
        
        <div className="detail-info">
          <h1 className="detail-title">{product.title}</h1>
          <p className="detail-subtitle">{product.type}</p>
          <p className="detail-price">{product.price}</p>

          <div className="size-section">
            <div className="size-header">
              <span>Select Size</span>
              <span className="size-guide">Size Guide</span>
            </div>
            
            <div className="size-grid">
              {/* TỰ ĐỘNG VẼ NÚT SIZE DỰA VÀO DỮ LIỆU ĐƯỢC GỬI SANG */}
              {product.sizesList.map((size, index) => (
                <button key={index} className="size-btn">{size}</button>
              ))}
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <button className="btn-dark" onClick={handleAddToCart}>Add to Bag</button>
            <button className="btn-outline">Favourite ♡</button>
          </div>
          
          <p style={{marginTop: '24px', lineHeight: '1.6', color: '#707072'}}>
            {/* TỰ ĐỘNG ĐỔI MÔ TẢ SẢN PHẨM */}
            {product.description}
          </p>
        </div>

      </main>
    </>
  );
}