import React from 'react';
import { Link } from 'react-router-dom';

// Thêm sizesList và description vào để gửi đi
function CartItem({ title, type, color, size, price, imageSrc, sizesList, description }) {
  return (
    <div className="cart-item">
      <Link to="/" state={{ title, type, price, imageSrc, sizesList, description }} className="cart-item-img" style={{ display: 'block' }}>
         <img src={imageSrc} alt={title} style={{width:'100%', height:'100%', objectFit:'cover', borderRadius: '4px', cursor: 'pointer'}} />
      </Link>
      
      <div style={{flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
        <div style={{display:'flex', justifyContent:'space-between'}}>
          <div>
            <Link to="/" state={{ title, type, price, imageSrc, sizesList, description }} style={{textDecoration: 'none', color: 'inherit'}}>
              <h1 style={{fontSize: '15px', fontWeight: 'bold', cursor: 'pointer'}}>{title}</h1>
            </Link>
            <p className="text-gray" style={{fontSize: '15px'}}>{type}</p>
            <p className="text-gray" style={{fontSize: '15px'}}>{color}</p>
            <p className="text-gray" style={{fontSize: '15px'}}>{size}</p>
          </div>
          <span style={{fontWeight: '500'}}>{price}</span>
        </div>
        
        <div style={{display:'flex', gap:'16px', alignItems:'center', marginTop:'24px'}}>
          <span className="text-gray" style={{fontSize:'16px', cursor:'pointer'}}>🗑</span>
          <div className="qty-box">
            <span style={{fontWeight:'500'}}>1</span> <span>⌄</span>
          </div>
          <div className="icon-box" style={{cursor:'pointer'}}>♡</div>
        </div>
      </div>
    </div>
  );
}

export default function Cart() {
  return (
    <>
      <div className="promo-banner">FREE DELIVERY Applies to orders of 5.000.000đ or more. View details.</div>
      <main className="main-container">
        
        <div className="cart-items">
          <CartItem 
            title="Nike Pegasus 42" 
            type="Women's Road Running Shoes" 
            color="Chalk/Spruce Aura/Bleached Lilac" 
            size="Size 37.5" 
            price="4,059,000đ" 
            imageSrc="/images/pegasus.png"
            sizesList={['EU 36', 'EU 36.5', 'EU 37.5', 'EU 38', 'EU 38.5', 'EU 39', 'EU 40', 'EU 40.5', 'EU 41', 'EU 42', 'EU 42.5']}
            description="A springy ride for every run, the Peg's familiar, just-for-you feel returns to help you accomplish your goals."
          />
          <CartItem 
            title="Nike Mercurial Superfly" 
            type="Men's Football Shoes" 
            color="Red/Black" 
            size="Size 42" 
            price="2,909,000đ" 
            imageSrc="/images/shoe2.png"
            sizesList={['EU 39', 'EU 40', 'EU 40.5', 'EU 41', 'EU 42', 'EU 42.5', 'EU 43']}
            description="Built for speed and control. Dominate the pitch with the Mercurial Superfly."
          />
          <CartItem 
            title="South Korea National Team 2026 Stadium Home" 
            type="Men's T-Shirt" 
            color="Red/White" 
            size="Size L" 
            price="1,299,000đ" 
            imageSrc="/images/shirt.png"
            sizesList={['S', 'M', 'L', 'XL', '2XL']}
            description="Rep your team in the South Korea Stadium Home T-Shirt. Highly breathable fabric helps keep sweat off your skin."
          />
        </div>

        <div className="summary-box">
          <h2 style={{fontSize: '24px', fontWeight: '500'}}>Summary</h2>
          <div style={{display: 'flex', flexDirection: 'column', gap: '16px'}}>
            <div className="summary-row"><span>Subtotal 🛈</span> <span>8,267,000đ</span></div>
            <div className="summary-row"><span>Estimated Delivery & Handling</span> <span>250,000đ</span></div>
            <div className="summary-row" style={{borderTop: '1px solid #E5E5E5', borderBottom: '1px solid #E5E5E5', padding: '20px 0', fontWeight: '500'}}>
              <span>Total</span> <span>8,517,000đ</span>
            </div>
          </div>
          <div style={{marginTop: '16px', display:'flex', flexDirection:'column', gap:'16px'}}>
            <button className="btn-dark">Guest Checkout</button>
            <button className="btn-dark">Member Checkout</button>
          </div>
        </div>

      </main>
    </>
  );
}