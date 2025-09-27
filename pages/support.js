import { useEffect, useState } from 'react';
import Script from 'next/script';

export default function Support() {
  const [open, setOpen] = useState(false);
  const [qty, setQty] = useState(1);
  const [submitted, setSubmitted] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState('');
  const [orderProcessed, setOrderProcessed] = useState(null);
  const [inventoryUpdated, setInventoryUpdated] = useState(null);
  const [customerInquiry, setCustomerInquiry] = useState('');

  const products = [
    { sku: 'APW-001', name: 'Arctic Pro Winter Jacket', price: 299.99, stock: 45 },
    { sku: 'MHB-102', name: 'Mountaineer Hiking Boots', price: 189.99, stock: 8 },
    { sku: 'AT4-203', name: 'Alpine Tent 4-Person', price: 449.99, stock: 0 },
    { sku: 'CFP-304', name: 'Carbon Fiber Ski Poles', price: 89.99, stock: 32 },
    { sku: 'TSB-405', name: 'Thermal Sleeping Bag -20°C', price: 259.99, stock: 12 }
  ];

  useEffect(() => {
    // Enhanced BB Actions for Arctic Supply Co. demo
    window.bbActions = {
      // Customer Service Actions
      openCustomerInquiry: () => {
        setOpen(true);
        return { opened: true, type: 'customer_inquiry' };
      },

      // Inventory Management Actions
      checkInventory: ({ sku } = {}) => {
        const product = products.find(p => p.sku === sku);
        if (product) {
          return {
            sku: product.sku,
            name: product.name,
            stock: product.stock,
            price: product.price,
            status: product.stock > 10 ? 'in_stock' : product.stock > 0 ? 'low_stock' : 'out_of_stock'
          };
        }
        return { error: 'Product not found' };
      },

      // Order Processing Actions
      processOrder: ({ sku, quantity = 1, customerInfo = {} } = {}) => {
        const product = products.find(p => p.sku === sku);
        if (!product) {
          return { error: 'Product not found' };
        }

        if (product.stock < quantity) {
          return { error: 'Insufficient stock', available: product.stock };
        }

        const order = {
          orderId: `ORD-${Date.now()}`,
          product: product.name,
          sku: product.sku,
          quantity: quantity,
          unitPrice: product.price,
          totalPrice: product.price * quantity,
          customer: customerInfo.name || 'Demo Customer',
          status: 'confirmed',
          estimatedDelivery: '3-5 business days'
        };

        setOrderProcessed(order);
        return order;
      },

      // Inventory Transfer Actions
      transferInventory: ({ sku, fromLocation = 'Warehouse A', toLocation = 'Warehouse B', qty = 1 } = {}) => {
        const product = products.find(p => p.sku === sku);
        if (!product) {
          return { error: 'Product not found' };
        }

        const transfer = {
          transferId: `TRF-${Date.now()}`,
          sku: sku,
          product: product.name,
          quantity: qty,
          from: fromLocation,
          to: toLocation,
          status: 'completed',
          timestamp: new Date().toISOString()
        };

        setInventoryUpdated(transfer);
        return transfer;
      },

      // Customer Recommendations
      getProductRecommendations: ({ category = 'winter', budget = 500 } = {}) => {
        const recommendations = products
          .filter(p => p.price <= budget && p.stock > 0)
          .slice(0, 3)
          .map(p => ({
            sku: p.sku,
            name: p.name,
            price: p.price,
            reason: `Perfect for ${category} activities and within your budget`
          }));

        return { recommendations, budget, category };
      },

      // Analytics Actions
      getBusinessInsights: () => {
        return {
          totalRevenue: 127850,
          topSellingCategory: 'Winter Apparel',
          lowStockAlerts: 3,
          recentOrdersCount: 15,
          recommendedActions: [
            'Reorder Mountaineer Hiking Boots (low stock)',
            'Increase Winter Jacket inventory (high demand)',
            'Contact Alpine Tent supplier (out of stock)'
          ]
        };
      },

      // Legacy actions (for compatibility)
      openTestPanel: () => {
        setOpen(true);
        return { opened: true };
      },

      fillAndSubmit: ({ qty: q = 1 } = {}) => {
        setOpen(true);
        setQty(q);
        setSubmitted({ ok: true, qty: q });
        return { submitted: true, qty: q };
      }
    };

    console.log('Arctic Supply Co. BB Actions registered:', Object.keys(window.bbActions));
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    setSubmitted({ ok: true, qty: Number(qty) });
  };

  return (
    <div style={{
      minHeight: '100vh',
      fontFamily: 'system-ui, sans-serif',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    }}>
      {/* Header */}
      <header style={{
        background: 'rgba(255, 255, 255, 0.1)',
        backdropFilter: 'blur(10px)',
        color: 'white',
        padding: '20px 5%'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <h1 style={{ margin: 0, fontSize: '2rem' }}>❄️ Arctic Supply Co. Support</h1>
            <p style={{ margin: '5px 0 0', opacity: 0.9 }}>Customer Service & Technical Support</p>
          </div>
          <a href="/" style={{
            color: 'white',
            textDecoration: 'none',
            padding: '10px 20px',
            border: '1px solid white',
            borderRadius: '20px'
          }}>
            ← Back to Home
          </a>
        </div>
      </header>

      <div style={{ padding: '30px 5%' }}>
        {/* BlizzardBerry Agent Widget */}
        <Script
          id="blizzardberry-agent"
          src="https://blizzardberry.com/agent/agent.js"
          strategy="afterInteractive"
          data-agent-id="2db456e4-3137-4fa8-9824-462b301b8729"
        />

        {/* Customer Support Section */}
        <div style={{
          background: 'white',
          borderRadius: '15px',
          padding: '30px',
          marginBottom: '30px',
          boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
        }}>
          <h2 style={{ margin: '0 0 20px', color: '#333', textAlign: 'center' }}>How can we help you today?</h2>
          <p style={{ textAlign: 'center', color: '#666', marginBottom: '30px' }}>
            Our customer service team is here to assist with orders, product information, and technical support.
          </p>

          <div style={{
            border: '1px solid #e0e0e0',
            padding: '30px',
            borderRadius: '10px',
            textAlign: 'center',
            background: '#f9f9f9'
          }}>
            <p style={{ margin: '0 0 10px', color: '#666', fontSize: '16px' }}>
              💬 Live Chat Support Available
            </p>
            <p style={{ margin: 0, color: '#999', fontSize: '14px' }}>
              Ask about products, track orders, get recommendations, or request technical assistance
            </p>
          </div>
        </div>

        {/* Demo Actions Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '25px',
          marginBottom: '30px'
        }}>
          {/* Customer Service Demo */}
          <div style={{
            background: 'white',
            padding: '25px',
            borderRadius: '15px',
            boxShadow: '0 5px 15px rgba(0,0,0,0.1)'
          }}>
            <h3 style={{ margin: '0 0 15px', color: '#333', display: 'flex', alignItems: 'center', gap: '10px' }}>
              💬 Customer Service Demo
            </h3>
            <p style={{ color: '#666', fontSize: '14px', marginBottom: '15px' }}>
              Try these customer service scenarios with the AI:
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <button style={{
                background: '#4CAF50',
                color: 'white',
                border: 'none',
                padding: '10px 15px',
                borderRadius: '8px',
                cursor: 'pointer',
                fontSize: '14px'
              }}>
                "Check availability of winter jackets"
              </button>
              <button style={{
                background: '#2196F3',
                color: 'white',
                border: 'none',
                padding: '10px 15px',
                borderRadius: '8px',
                cursor: 'pointer',
                fontSize: '14px'
              }}>
                "I need gear for mountain climbing"
              </button>
              <button style={{
                background: '#FF9800',
                color: 'white',
                border: 'none',
                padding: '10px 15px',
                borderRadius: '8px',
                cursor: 'pointer',
                fontSize: '14px'
              }}>
                "Track my recent order"
              </button>
            </div>
          </div>

          {/* Inventory Management Demo */}
          <div style={{
            background: 'white',
            padding: '25px',
            borderRadius: '15px',
            boxShadow: '0 5px 15px rgba(0,0,0,0.1)'
          }}>
            <h3 style={{ margin: '0 0 15px', color: '#333', display: 'flex', alignItems: 'center', gap: '10px' }}>
              📦 Inventory Management
            </h3>
            <p style={{ color: '#666', fontSize: '14px', marginBottom: '15px' }}>
              AI can manage inventory automatically:
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <button style={{
                background: '#673AB7',
                color: 'white',
                border: 'none',
                padding: '10px 15px',
                borderRadius: '8px',
                cursor: 'pointer',
                fontSize: '14px'
              }}>
                "Check stock levels for all products"
              </button>
              <button style={{
                background: '#E91E63',
                color: 'white',
                border: 'none',
                padding: '10px 15px',
                borderRadius: '8px',
                cursor: 'pointer',
                fontSize: '14px'
              }}>
                "Transfer 10 ski poles to Warehouse B"
              </button>
              <button style={{
                background: '#795548',
                color: 'white',
                border: 'none',
                padding: '10px 15px',
                borderRadius: '8px',
                cursor: 'pointer',
                fontSize: '14px'
              }}>
                "What products need reordering?"
              </button>
            </div>
          </div>

          {/* Business Analytics Demo */}
          <div style={{
            background: 'white',
            padding: '25px',
            borderRadius: '15px',
            boxShadow: '0 5px 15px rgba(0,0,0,0.1)'
          }}>
            <h3 style={{ margin: '0 0 15px', color: '#333', display: 'flex', alignItems: 'center', gap: '10px' }}>
              📊 Business Analytics
            </h3>
            <p style={{ color: '#666', fontSize: '14px', marginBottom: '15px' }}>
              Get intelligent business insights:
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <button style={{
                background: '#009688',
                color: 'white',
                border: 'none',
                padding: '10px 15px',
                borderRadius: '8px',
                cursor: 'pointer',
                fontSize: '14px'
              }}>
                "Show me sales performance"
              </button>
              <button style={{
                background: '#FF5722',
                color: 'white',
                border: 'none',
                padding: '10px 15px',
                borderRadius: '8px',
                cursor: 'pointer',
                fontSize: '14px'
              }}>
                "What are our top products?"
              </button>
              <button style={{
                background: '#607D8B',
                color: 'white',
                border: 'none',
                padding: '10px 15px',
                borderRadius: '8px',
                cursor: 'pointer',
                fontSize: '14px'
              }}>
                "Give me business recommendations"
              </button>
            </div>
          </div>
        </div>

        {/* Results Display */}
        {(orderProcessed || inventoryUpdated || submitted) && (
          <div style={{
            background: 'white',
            padding: '25px',
            borderRadius: '15px',
            boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
            marginBottom: '30px'
          }}>
            <h3 style={{ margin: '0 0 20px', color: '#333' }}>🎯 AI Action Results</h3>

            {orderProcessed && (
              <div style={{
                background: '#e8f5e8',
                border: '1px solid #4CAF50',
                padding: '15px',
                borderRadius: '8px',
                marginBottom: '15px'
              }}>
                <h4 style={{ margin: '0 0 10px', color: '#2E7D32' }}>✅ Order Processed Successfully</h4>
                <p style={{ margin: '5px 0' }}><strong>Order ID:</strong> {orderProcessed.orderId}</p>
                <p style={{ margin: '5px 0' }}><strong>Product:</strong> {orderProcessed.product}</p>
                <p style={{ margin: '5px 0' }}><strong>Quantity:</strong> {orderProcessed.quantity}</p>
                <p style={{ margin: '5px 0' }}><strong>Total:</strong> ${orderProcessed.totalPrice}</p>
                <p style={{ margin: '5px 0' }}><strong>Delivery:</strong> {orderProcessed.estimatedDelivery}</p>
              </div>
            )}

            {inventoryUpdated && (
              <div style={{
                background: '#e3f2fd',
                border: '1px solid #2196F3',
                padding: '15px',
                borderRadius: '8px',
                marginBottom: '15px'
              }}>
                <h4 style={{ margin: '0 0 10px', color: '#1976D2' }}>📦 Inventory Transfer Completed</h4>
                <p style={{ margin: '5px 0' }}><strong>Transfer ID:</strong> {inventoryUpdated.transferId}</p>
                <p style={{ margin: '5px 0' }}><strong>Product:</strong> {inventoryUpdated.product}</p>
                <p style={{ margin: '5px 0' }}><strong>Quantity:</strong> {inventoryUpdated.quantity}</p>
                <p style={{ margin: '5px 0' }}><strong>From:</strong> {inventoryUpdated.from} → <strong>To:</strong> {inventoryUpdated.to}</p>
              </div>
            )}

            {submitted && (
              <div style={{
                background: '#fff3e0',
                border: '1px solid #FF9800',
                padding: '15px',
                borderRadius: '8px'
              }}>
                <h4 style={{ margin: '0 0 10px', color: '#F57C00' }}>📋 Form Submitted</h4>
                <p style={{ margin: '5px 0' }}><strong>Quantity:</strong> {submitted.qty}</p>
              </div>
            )}
          </div>
        )}

        {/* Technical Information */}
        <details style={{
          background: 'white',
          padding: '25px',
          borderRadius: '15px',
          boxShadow: '0 5px 15px rgba(0,0,0,0.1)'
        }}>
          <summary style={{
            cursor: 'pointer',
            fontSize: '18px',
            fontWeight: 'bold',
            color: '#333',
            marginBottom: '15px'
          }}>
            🛠️ Technical Integration Details
          </summary>

          <div style={{ marginTop: '20px' }}>
            <h4 style={{ color: '#333', marginBottom: '10px' }}>Available AI Actions:</h4>
            <div style={{
              background: '#f5f5f5',
              padding: '15px',
              borderRadius: '8px',
              fontFamily: 'monospace',
              fontSize: '12px',
              overflow: 'auto'
            }}>
              <div>• <strong>checkInventory</strong>({`{ sku: "APW-001" }`})</div>
              <div>• <strong>processOrder</strong>({`{ sku: "MHB-102", quantity: 2 }`})</div>
              <div>• <strong>transferInventory</strong>({`{ sku: "CFP-304", qty: 5 }`})</div>
              <div>• <strong>getProductRecommendations</strong>({`{ category: "winter", budget: 300 }`})</div>
              <div>• <strong>getBusinessInsights</strong>()</div>
              <div>• <strong>openCustomerInquiry</strong>()</div>
            </div>

            <h4 style={{ color: '#333', marginTop: '20px', marginBottom: '10px' }}>Available API Endpoints:</h4>
            <div style={{
              background: '#f5f5f5',
              padding: '15px',
              borderRadius: '8px',
              fontFamily: 'monospace',
              fontSize: '12px'
            }}>
              <div>• GET /api/ping</div>
              <div>• POST /api/calc/sum</div>
              <div>• POST /api/inventory/transfer</div>
              <div>• GET /api/products</div>
              <div>• POST /api/orders</div>
            </div>
          </div>
        </details>
      </div>
    </div>
  );
}