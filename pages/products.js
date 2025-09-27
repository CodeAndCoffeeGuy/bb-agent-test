import { useState } from 'react';
import Script from 'next/script';
import { useCart } from '../contexts/CartContext';

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [addedToCart, setAddedToCart] = useState(null);
  const { addToCart, getCartItemCount } = useCart();

  const products = [
    // Winter Apparel
    {
      id: 1,
      name: 'Arctic Pro Winter Jacket',
      category: 'Winter Apparel',
      price: 299.99,
      originalPrice: 349.99,
      image: '🧥',
      rating: 4.8,
      reviews: 124,
      features: ['Windproof', 'Waterproof', 'Down Insulation', '-40°C Rated'],
      description: 'Professional-grade winter jacket designed for extreme conditions.'
    },
    {
      id: 2,
      name: 'Thermal Base Layer Set',
      category: 'Winter Apparel',
      price: 89.99,
      image: '👕',
      rating: 4.7,
      reviews: 89,
      features: ['Moisture Wicking', 'Merino Wool', 'Odor Resistant'],
      description: 'Premium merino wool base layer for optimal temperature regulation.'
    },
    {
      id: 3,
      name: 'Insulated Snow Pants',
      category: 'Winter Apparel',
      price: 179.99,
      image: '👖',
      rating: 4.6,
      reviews: 67,
      features: ['Reinforced Knees', 'Snow Gaiters', 'Adjustable Waist'],
      description: 'Durable snow pants with advanced insulation technology.'
    },

    // Footwear
    {
      id: 4,
      name: 'Mountaineer Hiking Boots',
      category: 'Footwear',
      price: 189.99,
      image: '🥾',
      rating: 4.9,
      reviews: 156,
      features: ['Vibram Sole', 'Gore-Tex', 'Ankle Support', 'Steel Shank'],
      description: 'Professional mountaineering boots for technical terrain.'
    },
    {
      id: 5,
      name: 'Winter Trail Runners',
      category: 'Footwear',
      price: 134.99,
      image: '👟',
      rating: 4.5,
      reviews: 98,
      features: ['Insulated', 'Grip Outsole', 'Quick Dry'],
      description: 'Lightweight winter running shoes with superior traction.'
    },

    // Camping Gear
    {
      id: 6,
      name: 'Alpine Tent 4-Person',
      category: 'Camping',
      price: 449.99,
      image: '⛺',
      rating: 4.8,
      reviews: 87,
      features: ['4-Season', 'Aluminum Frame', 'Waterproof', 'Vestibule'],
      description: 'Four-season expedition tent built for harsh conditions.'
    },
    {
      id: 7,
      name: 'Thermal Sleeping Bag -20°C',
      category: 'Camping',
      price: 259.99,
      image: '🛌',
      rating: 4.7,
      reviews: 112,
      features: ['Down Fill', '-20°C Rating', 'Compression Sack', 'DWR Coating'],
      description: 'Ultra-warm sleeping bag for extreme cold weather camping.'
    },
    {
      id: 8,
      name: 'Portable Camp Stove',
      category: 'Camping',
      price: 79.99,
      image: '🔥',
      rating: 4.6,
      reviews: 143,
      features: ['Wind Resistant', 'Piezo Ignition', 'Fuel Efficient'],
      description: 'Reliable camping stove for all weather conditions.'
    },

    // Winter Sports
    {
      id: 9,
      name: 'Carbon Fiber Ski Poles',
      category: 'Winter Sports',
      price: 89.99,
      image: '🎿',
      rating: 4.8,
      reviews: 76,
      features: ['Carbon Fiber', 'Adjustable Length', 'Ergonomic Grip'],
      description: 'Lightweight, durable ski poles for all skill levels.'
    },
    {
      id: 10,
      name: 'Professional Snowshoes',
      category: 'Winter Sports',
      price: 199.99,
      image: '🦶',
      rating: 4.7,
      reviews: 54,
      features: ['Aluminum Frame', 'Aggressive Traction', 'Easy Binding'],
      description: 'High-performance snowshoes for deep powder and ice.'
    },

    // Climbing Equipment
    {
      id: 11,
      name: 'Professional Climbing Harness',
      category: 'Climbing',
      price: 124.99,
      image: '🧗',
      rating: 4.9,
      reviews: 201,
      features: ['CE Certified', 'Adjustable Legs', 'Gear Loops', 'Belay Loop'],
      description: 'Professional-grade climbing harness for sport and trad climbing.'
    },
    {
      id: 12,
      name: 'Dynamic Climbing Rope 60m',
      category: 'Climbing',
      price: 179.99,
      image: '🪢',
      rating: 4.8,
      reviews: 134,
      features: ['UIAA Certified', 'Dry Treatment', '9.8mm Diameter'],
      description: 'High-quality dynamic rope for multi-pitch climbing.'
    }
  ];

  const categories = ['all', 'Winter Apparel', 'Footwear', 'Camping', 'Winter Sports', 'Climbing'];

  const handleAddToCart = (product) => {
    addToCart(product);
    setAddedToCart(product.id);
    setTimeout(() => setAddedToCart(null), 2000);
  };

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

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
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
          <div>
            <h1 style={{ margin: 0, fontSize: '2.5rem' }}>❄️ Arctic Supply Co.</h1>
            <p style={{ margin: '5px 0 0', opacity: 0.9 }}>Premium Outdoor Equipment Catalog</p>
          </div>
          <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
            <a href="/cart" style={{
              color: 'white',
              textDecoration: 'none',
              padding: '10px 15px',
              border: '1px solid white',
              borderRadius: '20px',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              position: 'relative'
            }}>
              🛒 Cart
              {getCartItemCount() > 0 && (
                <span style={{
                  background: '#ff4444',
                  color: 'white',
                  borderRadius: '50%',
                  width: '20px',
                  height: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '12px',
                  fontWeight: 'bold'
                }}>
                  {getCartItemCount()}
                </span>
              )}
            </a>
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
        </div>

        {/* Search and Filter */}
        <div style={{
          display: 'flex',
          gap: '20px',
          alignItems: 'center',
          flexWrap: 'wrap',
          background: 'rgba(255,255,255,0.1)',
          padding: '20px',
          borderRadius: '15px'
        }}>
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{
              flex: 1,
              minWidth: '250px',
              padding: '12px 16px',
              border: 'none',
              borderRadius: '8px',
              fontSize: '16px'
            }}
          />
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            style={{
              padding: '12px 16px',
              border: 'none',
              borderRadius: '8px',
              fontSize: '16px',
              background: 'white'
            }}
          >
            {categories.map(category => (
              <option key={category} value={category}>
                {category === 'all' ? 'All Categories' : category}
              </option>
            ))}
          </select>
        </div>
      </header>

      {/* Products Grid */}
      <div style={{ padding: '40px 5%' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: '30px'
        }}>
          {filteredProducts.map(product => (
            <div key={product.id} style={{
              background: 'white',
              borderRadius: '15px',
              overflow: 'hidden',
              boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
              transition: 'transform 0.2s ease',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => e.target.style.transform = 'translateY(-5px)'}
            onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}
            >
              {/* Product Image */}
              <div style={{
                height: '200px',
                background: 'linear-gradient(45deg, #f0f0f0, #e0e0e0)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '4rem',
                position: 'relative'
              }}>
                {product.image}
                {product.originalPrice && (
                  <div style={{
                    position: 'absolute',
                    top: '15px',
                    right: '15px',
                    background: '#ff4444',
                    color: 'white',
                    padding: '5px 10px',
                    borderRadius: '20px',
                    fontSize: '12px',
                    fontWeight: 'bold'
                  }}>
                    SALE
                  </div>
                )}
              </div>

              {/* Product Info */}
              <div style={{ padding: '20px' }}>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  marginBottom: '10px'
                }}>
                  <h3 style={{ margin: 0, color: '#333', fontSize: '1.2rem' }}>{product.name}</h3>
                  <span style={{
                    background: '#e3f2fd',
                    color: '#1976d2',
                    padding: '4px 8px',
                    borderRadius: '12px',
                    fontSize: '12px',
                    fontWeight: '500'
                  }}>
                    {product.category}
                  </span>
                </div>

                <p style={{ color: '#666', fontSize: '14px', margin: '0 0 15px' }}>
                  {product.description}
                </p>

                {/* Features */}
                <div style={{ marginBottom: '15px' }}>
                  <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '5px'
                  }}>
                    {product.features.slice(0, 3).map((feature, index) => (
                      <span key={index} style={{
                        background: '#f5f5f5',
                        color: '#666',
                        padding: '2px 8px',
                        borderRadius: '10px',
                        fontSize: '11px'
                      }}>
                        {feature}
                      </span>
                    ))}
                    {product.features.length > 3 && (
                      <span style={{
                        color: '#999',
                        fontSize: '11px',
                        padding: '2px 4px'
                      }}>
                        +{product.features.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Rating */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  marginBottom: '15px'
                }}>
                  <div style={{ color: '#ffc107', fontSize: '14px' }}>
                    {'★'.repeat(Math.floor(product.rating))}{'☆'.repeat(5 - Math.floor(product.rating))}
                  </div>
                  <span style={{ fontSize: '14px', color: '#666' }}>
                    {product.rating} ({product.reviews} reviews)
                  </span>
                </div>

                {/* Price and Action */}
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}>
                  <div>
                    <span style={{
                      fontSize: '1.4rem',
                      fontWeight: 'bold',
                      color: '#2e7d32'
                    }}>
                      ${product.price}
                    </span>
                    {product.originalPrice && (
                      <span style={{
                        fontSize: '1rem',
                        color: '#999',
                        textDecoration: 'line-through',
                        marginLeft: '8px'
                      }}>
                        ${product.originalPrice}
                      </span>
                    )}
                  </div>
                  <button
                    onClick={() => handleAddToCart(product)}
                    style={{
                      background: addedToCart === product.id ? '#2E7D32' : '#4CAF50',
                      color: 'white',
                      border: 'none',
                      padding: '10px 20px',
                      borderRadius: '20px',
                      fontSize: '14px',
                      fontWeight: 'bold',
                      cursor: 'pointer',
                      transition: 'background 0.3s ease'
                    }}>
                    {addedToCart === product.id ? '✓ Added!' : 'Add to Cart'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div style={{
            textAlign: 'center',
            padding: '60px 20px',
            color: '#666'
          }}>
            <h3>No products found</h3>
            <p>Try adjusting your search or filter criteria.</p>
          </div>
        )}
      </div>

      {/* Newsletter Section */}
      <section style={{
        background: 'linear-gradient(45deg, #1e3c72 0%, #2a5298 100%)',
        color: 'white',
        padding: '60px 5%',
        textAlign: 'center'
      }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '20px' }}>Stay Updated</h2>
        <p style={{ fontSize: '1.1rem', marginBottom: '30px', opacity: 0.9 }}>
          Get notified about new products, sales, and outdoor adventure tips.
        </p>
        <div style={{
          display: 'flex',
          gap: '15px',
          justifyContent: 'center',
          maxWidth: '400px',
          margin: '0 auto'
        }}>
          <input
            type="email"
            placeholder="Enter your email"
            style={{
              flex: 1,
              padding: '12px 16px',
              border: 'none',
              borderRadius: '8px',
              fontSize: '16px'
            }}
          />
          <button style={{
            background: '#4CAF50',
            color: 'white',
            border: 'none',
            padding: '12px 24px',
            borderRadius: '8px',
            fontSize: '16px',
            fontWeight: 'bold',
            cursor: 'pointer'
          }}>
            Subscribe
          </button>
        </div>
      </section>
    </div>
  );
}