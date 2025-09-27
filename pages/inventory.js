import { useState, useEffect } from 'react';

export default function Inventory() {
  const [inventory, setInventory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  // Mock inventory data
  useEffect(() => {
    const mockData = [
      {
        id: 1,
        name: 'Arctic Pro Winter Jacket',
        category: 'Winter Apparel',
        sku: 'APW-001',
        stock: 45,
        minStock: 10,
        price: 299.99,
        supplier: 'Nordic Gear Co.',
        lastRestocked: '2024-01-15',
        status: 'in_stock'
      },
      {
        id: 2,
        name: 'Mountaineer Hiking Boots',
        category: 'Footwear',
        sku: 'MHB-102',
        stock: 8,
        minStock: 15,
        price: 189.99,
        supplier: 'Summit Shoes Ltd.',
        lastRestocked: '2024-01-10',
        status: 'low_stock'
      },
      {
        id: 3,
        name: 'Alpine Tent 4-Person',
        category: 'Camping',
        sku: 'AT4-203',
        stock: 0,
        minStock: 5,
        price: 449.99,
        supplier: 'Shelter Systems Inc.',
        lastRestocked: '2023-12-20',
        status: 'out_of_stock'
      },
      {
        id: 4,
        name: 'Carbon Fiber Ski Poles',
        category: 'Winter Sports',
        sku: 'CFP-304',
        stock: 32,
        minStock: 20,
        price: 89.99,
        supplier: 'Peak Performance',
        lastRestocked: '2024-01-18',
        status: 'in_stock'
      },
      {
        id: 5,
        name: 'Thermal Sleeping Bag -20°C',
        category: 'Camping',
        sku: 'TSB-405',
        stock: 12,
        minStock: 10,
        price: 259.99,
        supplier: 'Warmth Solutions',
        lastRestocked: '2024-01-12',
        status: 'in_stock'
      },
      {
        id: 6,
        name: 'Professional Climbing Harness',
        category: 'Climbing',
        sku: 'PCH-506',
        stock: 6,
        minStock: 12,
        price: 124.99,
        supplier: 'Vertical Gear',
        lastRestocked: '2024-01-08',
        status: 'low_stock'
      }
    ];

    setTimeout(() => {
      setInventory(mockData);
      setLoading(false);
    }, 1000);
  }, []);

  const filteredInventory = inventory.filter(item => {
    const matchesFilter = filter === 'all' || item.status === filter;
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.sku.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.category.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const getStatusColor = (status) => {
    switch (status) {
      case 'in_stock': return '#4CAF50';
      case 'low_stock': return '#FF9800';
      case 'out_of_stock': return '#F44336';
      default: return '#757575';
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case 'in_stock': return 'In Stock';
      case 'low_stock': return 'Low Stock';
      case 'out_of_stock': return 'Out of Stock';
      default: return 'Unknown';
    }
  };

  if (loading) {
    return (
      <div style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        fontSize: '24px'
      }}>
        Loading inventory data...
      </div>
    );
  }

  return (
    <div style={{
      minHeight: '100vh',
      fontFamily: 'system-ui, sans-serif',
      background: '#f5f5f5'
    }}>
      {/* Header */}
      <header style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        padding: '30px 5%'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
          <div>
            <h1 style={{ margin: 0, fontSize: '2.5rem' }}>❄️ Arctic Supply Co.</h1>
            <p style={{ margin: '5px 0 0', opacity: 0.9 }}>Inventory Management System</p>
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

        {/* Stats Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '20px',
          marginTop: '30px'
        }}>
          <div style={{
            background: 'rgba(255,255,255,0.1)',
            padding: '20px',
            borderRadius: '10px',
            textAlign: 'center'
          }}>
            <h3 style={{ margin: '0 0 10px', fontSize: '2rem' }}>{inventory.length}</h3>
            <p style={{ margin: 0, opacity: 0.9 }}>Total Products</p>
          </div>
          <div style={{
            background: 'rgba(76, 175, 80, 0.2)',
            padding: '20px',
            borderRadius: '10px',
            textAlign: 'center'
          }}>
            <h3 style={{ margin: '0 0 10px', fontSize: '2rem' }}>
              {inventory.filter(item => item.status === 'in_stock').length}
            </h3>
            <p style={{ margin: 0, opacity: 0.9 }}>In Stock</p>
          </div>
          <div style={{
            background: 'rgba(255, 152, 0, 0.2)',
            padding: '20px',
            borderRadius: '10px',
            textAlign: 'center'
          }}>
            <h3 style={{ margin: '0 0 10px', fontSize: '2rem' }}>
              {inventory.filter(item => item.status === 'low_stock').length}
            </h3>
            <p style={{ margin: 0, opacity: 0.9 }}>Low Stock</p>
          </div>
          <div style={{
            background: 'rgba(244, 67, 54, 0.2)',
            padding: '20px',
            borderRadius: '10px',
            textAlign: 'center'
          }}>
            <h3 style={{ margin: '0 0 10px', fontSize: '2rem' }}>
              {inventory.filter(item => item.status === 'out_of_stock').length}
            </h3>
            <p style={{ margin: 0, opacity: 0.9 }}>Out of Stock</p>
          </div>
        </div>
      </header>

      {/* Controls */}
      <div style={{
        background: 'white',
        padding: '20px 5%',
        borderBottom: '1px solid #e0e0e0',
        display: 'flex',
        gap: '20px',
        alignItems: 'center',
        flexWrap: 'wrap'
      }}>
        <input
          type="text"
          placeholder="Search products, SKU, or category..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            flex: 1,
            minWidth: '300px',
            padding: '12px 16px',
            border: '1px solid #ddd',
            borderRadius: '8px',
            fontSize: '16px'
          }}
        />

        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          style={{
            padding: '12px 16px',
            border: '1px solid #ddd',
            borderRadius: '8px',
            fontSize: '16px',
            background: 'white'
          }}
        >
          <option value="all">All Items</option>
          <option value="in_stock">In Stock</option>
          <option value="low_stock">Low Stock</option>
          <option value="out_of_stock">Out of Stock</option>
        </select>

        <button style={{
          background: '#4CAF50',
          color: 'white',
          border: 'none',
          padding: '12px 24px',
          borderRadius: '8px',
          fontSize: '16px',
          cursor: 'pointer'
        }}>
          + Add Product
        </button>
      </div>

      {/* Inventory Table */}
      <div style={{ padding: '20px 5%' }}>
        <div style={{
          background: 'white',
          borderRadius: '10px',
          overflow: 'hidden',
          boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '2fr 1fr 1fr 1fr 1fr 1.5fr 1fr 120px',
            gap: '20px',
            padding: '20px',
            background: '#f8f9fa',
            fontWeight: 'bold',
            borderBottom: '1px solid #e0e0e0'
          }}>
            <div>Product</div>
            <div>SKU</div>
            <div>Category</div>
            <div>Stock</div>
            <div>Price</div>
            <div>Supplier</div>
            <div>Status</div>
            <div>Actions</div>
          </div>

          {filteredInventory.map((item) => (
            <div key={item.id} style={{
              display: 'grid',
              gridTemplateColumns: '2fr 1fr 1fr 1fr 1fr 1.5fr 1fr 120px',
              gap: '20px',
              padding: '20px',
              borderBottom: '1px solid #f0f0f0',
              alignItems: 'center'
            }}>
              <div>
                <div style={{ fontWeight: 'bold', marginBottom: '4px' }}>{item.name}</div>
                <div style={{ fontSize: '12px', color: '#666' }}>
                  Last restocked: {item.lastRestocked}
                </div>
              </div>
              <div style={{ fontFamily: 'monospace' }}>{item.sku}</div>
              <div>{item.category}</div>
              <div>
                <div style={{ fontWeight: 'bold' }}>{item.stock}</div>
                <div style={{ fontSize: '12px', color: '#666' }}>Min: {item.minStock}</div>
              </div>
              <div style={{ fontWeight: 'bold' }}>${item.price}</div>
              <div style={{ fontSize: '14px' }}>{item.supplier}</div>
              <div>
                <span style={{
                  padding: '4px 12px',
                  borderRadius: '20px',
                  fontSize: '12px',
                  fontWeight: 'bold',
                  color: 'white',
                  background: getStatusColor(item.status)
                }}>
                  {getStatusText(item.status)}
                </span>
              </div>
              <div style={{ display: 'flex', gap: '8px' }}>
                <button style={{
                  background: '#2196F3',
                  color: 'white',
                  border: 'none',
                  padding: '6px 12px',
                  borderRadius: '4px',
                  fontSize: '12px',
                  cursor: 'pointer'
                }}>
                  Edit
                </button>
                <button style={{
                  background: '#FF9800',
                  color: 'white',
                  border: 'none',
                  padding: '6px 12px',
                  borderRadius: '4px',
                  fontSize: '12px',
                  cursor: 'pointer'
                }}>
                  Reorder
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredInventory.length === 0 && (
          <div style={{
            textAlign: 'center',
            padding: '40px',
            color: '#666'
          }}>
            No products found matching your criteria.
          </div>
        )}
      </div>

    </div>
  );
}