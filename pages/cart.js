import { useState } from 'react';
import Script from 'next/script';
import { useCart } from '../contexts/CartContext';

export default function Cart() {
  const { items, updateQuantity, removeFromCart, getCartTotal, clearCart } = useCart();
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);

  const handleQuantityChange = (productId, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(productId);
    } else {
      updateQuantity(productId, newQuantity);
    }
  };

  const handleCheckout = () => {
    setIsCheckingOut(true);
    // Simulate checkout process
    setTimeout(() => {
      setIsCheckingOut(false);
      setOrderPlaced(true);
      clearCart();
      setTimeout(() => setOrderPlaced(false), 5000);
    }, 2000);
  };

  if (orderPlaced) {
    return (
      <div style={{
        minHeight: '100vh',
        fontFamily: 'system-ui, sans-serif',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        textAlign: 'center'
      }}>
        <div style={{
          background: 'rgba(255, 255, 255, 0.1)',
          padding: '60px',
          borderRadius: '20px',
          backdropFilter: 'blur(10px)'
        }}>
          <div style={{ fontSize: '4rem', marginBottom: '20px' }}>✅</div>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>Order Placed Successfully!</h1>
          <p style={{ fontSize: '1.2rem', marginBottom: '30px', opacity: 0.9 }}>
            Thank you for your purchase. You'll receive a confirmation email shortly.
          </p>
          <a href="/products" style={{
            background: '#4CAF50',
            color: 'white',
            textDecoration: 'none',
            padding: '15px 30px',
            borderRadius: '30px',
            fontSize: '18px',
            fontWeight: 'bold',
            display: 'inline-block'
          }}>
            Continue Shopping
          </a>
        </div>
      </div>
    );
  }

  return (
    <div style={{
      minHeight: '100vh',
      fontFamily: 'system-ui, sans-serif',
      background: '#f5f5f5'
    }}>
      {/* BlizzardBerry Agent Widget */}
      <Script
        id="blizzardberry-agent"
        src="https://blizzardberry.com/agent/agent.js"
        strategy="afterInteractive"
        data-agent-id="2db456e4-3137-4fa8-9824-462b301b8729"
      />

      {/* Header */}
      <header style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        padding: '30px 5%'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <a href="/" style={{ textDecoration: 'none', color: 'inherit' }}>
              <h1 style={{ margin: 0, fontSize: '2.5rem', cursor: 'pointer' }}>❄️ Arctic Supply Co.</h1>
            </a>
            <p style={{ margin: '5px 0 0', opacity: 0.9 }}>Shopping Cart</p>
          </div>
          <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
            <a href="/products" style={{
              color: 'white',
              textDecoration: 'none',
              padding: '10px 20px',
              border: '1px solid white',
              borderRadius: '20px'
            }}>
              ← Continue Shopping
            </a>
            <a href="/" style={{
              color: 'white',
              textDecoration: 'none',
              padding: '10px 20px',
              border: '1px solid white',
              borderRadius: '20px'
            }}>
              Home
            </a>
          </div>
        </div>
      </header>

      <div style={{ padding: '40px 5%' }}>
        {items.length === 0 ? (
          <div style={{
            background: 'white',
            borderRadius: '15px',
            padding: '60px',
            textAlign: 'center',
            boxShadow: '0 5px 15px rgba(0,0,0,0.1)'
          }}>
            <div style={{ fontSize: '4rem', marginBottom: '20px' }}>🛒</div>
            <h2 style={{ color: '#333', marginBottom: '15px' }}>Your cart is empty</h2>
            <p style={{ color: '#666', marginBottom: '30px' }}>
              Looks like you haven't added anything to your cart yet.
            </p>
            <a href="/products" style={{
              background: '#4CAF50',
              color: 'white',
              textDecoration: 'none',
              padding: '15px 30px',
              borderRadius: '30px',
              fontSize: '18px',
              fontWeight: 'bold',
              display: 'inline-block'
            }}>
              Start Shopping
            </a>
          </div>
        ) : (
          <div style={{
            display: 'grid',
            gridTemplateColumns: '2fr 1fr',
            gap: '30px',
            maxWidth: '1200px',
            margin: '0 auto'
          }}>
            {/* Cart Items */}
            <div style={{
              background: 'white',
              borderRadius: '15px',
              padding: '30px',
              boxShadow: '0 5px 15px rgba(0,0,0,0.1)'
            }}>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '30px'
              }}>
                <h2 style={{ margin: 0, color: '#333' }}>Cart Items ({items.length})</h2>
                <button
                  onClick={clearCart}
                  style={{
                    background: 'transparent',
                    color: '#666',
                    border: '1px solid #ddd',
                    padding: '8px 16px',
                    borderRadius: '20px',
                    fontSize: '14px',
                    cursor: 'pointer'
                  }}
                >
                  Clear Cart
                </button>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {items.map((item) => (
                  <div key={item.id} style={{
                    display: 'grid',
                    gridTemplateColumns: '80px 1fr auto auto auto',
                    gap: '20px',
                    alignItems: 'center',
                    padding: '20px',
                    border: '1px solid #e0e0e0',
                    borderRadius: '10px'
                  }}>
                    {/* Product Image */}
                    <div style={{
                      fontSize: '3rem',
                      background: '#f5f5f5',
                      borderRadius: '10px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '80px',
                      height: '80px'
                    }}>
                      {item.image}
                    </div>

                    {/* Product Info */}
                    <div>
                      <h3 style={{ margin: '0 0 5px', color: '#333', fontSize: '1.1rem' }}>
                        {item.name}
                      </h3>
                      <p style={{ margin: '0 0 5px', color: '#666', fontSize: '14px' }}>
                        {item.category}
                      </p>
                      <p style={{ margin: 0, color: '#2e7d32', fontWeight: 'bold' }}>
                        ${item.price}
                      </p>
                    </div>

                    {/* Quantity Controls */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <button
                        onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                        style={{
                          background: '#f5f5f5',
                          border: '1px solid #ddd',
                          width: '30px',
                          height: '30px',
                          borderRadius: '50%',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}
                      >
                        −
                      </button>
                      <span style={{
                        minWidth: '30px',
                        textAlign: 'center',
                        fontWeight: 'bold'
                      }}>
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                        style={{
                          background: '#f5f5f5',
                          border: '1px solid #ddd',
                          width: '30px',
                          height: '30px',
                          borderRadius: '50%',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}
                      >
                        +
                      </button>
                    </div>

                    {/* Item Total */}
                    <div style={{ textAlign: 'right' }}>
                      <p style={{
                        margin: 0,
                        fontSize: '1.1rem',
                        fontWeight: 'bold',
                        color: '#333'
                      }}>
                        ${(item.price * item.quantity).toFixed(2)}
                      </p>
                    </div>

                    {/* Remove Button */}
                    <button
                      onClick={() => removeFromCart(item.id)}
                      style={{
                        background: '#ff4444',
                        color: 'white',
                        border: 'none',
                        padding: '8px 12px',
                        borderRadius: '6px',
                        fontSize: '12px',
                        cursor: 'pointer'
                      }}
                    >
                      Remove
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Order Summary */}
            <div style={{
              background: 'white',
              borderRadius: '15px',
              padding: '30px',
              boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
              height: 'fit-content'
            }}>
              <h2 style={{ margin: '0 0 30px', color: '#333' }}>Order Summary</h2>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', marginBottom: '20px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span>Subtotal:</span>
                  <span>${getCartTotal().toFixed(2)}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span>Shipping:</span>
                  <span style={{ color: '#4CAF50' }}>FREE</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span>Tax:</span>
                  <span>${(getCartTotal() * 0.08).toFixed(2)}</span>
                </div>
                <hr style={{ border: 'none', borderTop: '1px solid #e0e0e0', margin: '10px 0' }} />
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  fontSize: '1.2rem',
                  fontWeight: 'bold',
                  color: '#333'
                }}>
                  <span>Total:</span>
                  <span>${(getCartTotal() * 1.08).toFixed(2)}</span>
                </div>
              </div>

              <button
                onClick={handleCheckout}
                disabled={isCheckingOut}
                style={{
                  background: isCheckingOut ? '#ccc' : 'linear-gradient(45deg, #1e3c72 0%, #2a5298 100%)',
                  color: 'white',
                  border: 'none',
                  padding: '15px 30px',
                  borderRadius: '30px',
                  fontSize: '18px',
                  fontWeight: 'bold',
                  cursor: isCheckingOut ? 'not-allowed' : 'pointer',
                  width: '100%',
                  marginBottom: '15px'
                }}
              >
                {isCheckingOut ? 'Processing...' : 'Proceed to Checkout'}
              </button>

              <div style={{
                background: '#f8f9fa',
                padding: '15px',
                borderRadius: '10px',
                fontSize: '14px',
                color: '#666'
              }}>
                <div style={{ marginBottom: '10px', fontWeight: 'bold', color: '#333' }}>
                  🚚 Free shipping on all orders
                </div>
                <div style={{ marginBottom: '5px' }}>✓ 30-day return policy</div>
                <div style={{ marginBottom: '5px' }}>✓ Lifetime warranty included</div>
                <div>✓ Expert customer support</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}