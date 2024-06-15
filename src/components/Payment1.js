import React, { useContext } from 'react';
import { CartContext } from './cartContext';

const Payment1 = () => {
  const { totalPrice } = useContext(CartContext);

  return (
    <div style={{ width: '80%', margin: '40px auto', padding: '20px', border: '1px solid #ddd', borderRadius: '10px' }}>
      <h1 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '20px' }}>
        Amount Need To Be Paid ₹ {totalPrice}
      </h1>
      <div style={{ display: 'flex', justifyContent: 'pace-between', marginBottom: '20px' }}>
        <div style={{ width: '30%', padding: '20px', border: '1px solid #ddd', borderRadius: '10px' }}>
          <h2 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '10px' }}>Credit/Debit Card</h2>
          <input type="text" placeholder="Card Number" style={{ width: '100%', padding: '10px', margin: '10px 0' }} />
          <input type="text" placeholder="Expiry Date" style={{ width: '100%', padding: '10px', margin: '10px 0' }} />
          <input type="text" placeholder="CVV" style={{ width: '100%', padding: '10px', margin: '10px 0' }} />
        </div>
        <div style={{ width: '30%', padding: '20px', border: '1px solid #ddd', borderRadius: '10px' }}>
          <h2 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '10px' }}>UPI</h2>
          <input type="text" placeholder="UPI ID" style={{ width: '100%', padding: '10px', margin: '10px 0' }} />
        </div>
        <div style={{ width: '30%', padding: '20px', border: '1px solid #ddd', borderRadius: '10px' }}>
          <h2 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '10px' }}>Internet Banking</h2>
          <select style={{ width: '100%', padding: '10px', margin: '10px 0' }}>
            <option value="">Select Bank</option>
            <option value="SBI">SBI</option>
            <option value="HDFC">HDFC</option>
            <option value="ICICI">ICICI</option>
          </select>
        </div>
      </div>
      <button style={{ backgroundColor: '#4CAF50', color: '#fff',alignItems:'center', padding: '10px 20px', border: 'none', borderRadius: '10px', cursor: 'pointer' }}>
        Make Payment
      </button>
    </div>
  );
};

export default Payment1;