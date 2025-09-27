import { useState } from 'react';
import { useRouter } from 'next/router';
import Script from 'next/script';
import { useCart } from '../../contexts/CartContext';

export default function ProductDetail() {
  const router = useRouter();
  const { id } = router.query;
  const { addToCart, getCartItemCount } = useCart();
  const [addedToCart, setAddedToCart] = useState(false);
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  // Product data - in a real app, this would come from an API
  const products = [
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
      description: 'Professional-grade winter jacket designed for extreme conditions.',
      detailedDescription: `The Arctic Pro Winter Jacket is engineered for the most demanding cold-weather conditions. Built with a three-layer shell system featuring Gore-Tex Pro fabric for ultimate protection against wind and moisture while maintaining breathability.

      The jacket features 800-fill power down insulation that provides exceptional warmth-to-weight ratio, keeping you comfortable in temperatures as low as -40°C. Critical seams are sealed to prevent moisture penetration, while the adjustable hood with reinforced visor provides additional protection.

      Perfect for mountaineering, arctic expeditions, and extreme winter activities.`,
      specifications: {
        'Material': 'Gore-Tex Pro 3-layer',
        'Insulation': '800-fill power down',
        'Temperature Rating': '-40°C / -40°F',
        'Weight': '1.2 kg / 2.6 lbs',
        'Sizes': 'XS, S, M, L, XL, XXL',
        'Colors': 'Arctic Blue, Storm Gray, Summit Red',
        'Warranty': 'Lifetime',
        'Water Resistance': '20,000mm',
        'Breathability': '15,000g/m²/24hr'
      },
      images: ['🧥', '👔', '🔧', '🏔️'],
      reviews: [
        {
          id: 1,
          name: 'Sarah M.',
          rating: 5,
          date: '2024-01-15',
          title: 'Outstanding quality and warmth',
          comment: 'Used this jacket on a winter expedition in Alaska. Kept me completely warm and dry in brutal conditions. The build quality is exceptional and the fit is perfect. Worth every penny!'
        },
        {
          id: 2,
          name: 'Mike R.',
          rating: 5,
          date: '2024-01-10',
          title: 'Best winter jacket I\'ve owned',
          comment: 'Incredibly warm yet breathable. The attention to detail is amazing - every zipper, pocket, and seam is perfectly designed. This jacket will last a lifetime.'
        },
        {
          id: 3,
          name: 'Jennifer K.',
          rating: 4,
          date: '2024-01-05',
          title: 'Great for extreme conditions',
          comment: 'Excellent jacket for serious winter activities. Only minor complaint is that it can be a bit bulky for everyday wear, but that\'s expected for this level of insulation.'
        }
      ]
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
      description: 'Premium merino wool base layer for optimal temperature regulation.',
      detailedDescription: `Our Thermal Base Layer Set is crafted from the finest merino wool, providing superior temperature regulation and moisture management. The natural properties of merino wool keep you warm when it's cold and cool when it's warm, making it perfect for variable conditions.

      The fabric is naturally odor-resistant, allowing for extended wear during multi-day expeditions. The seamless construction eliminates chafing, while the ergonomic fit provides freedom of movement for all activities.`,
      specifications: {
        'Material': '100% Merino Wool',
        'Weight': '200gsm',
        'Fit': 'Athletic/Slim',
        'Care': 'Machine washable',
        'Sizes': 'XS-XXL',
        'Colors': 'Charcoal, Navy, Forest Green',
        'Origin': 'New Zealand Merino'
      },
      images: ['👕', '🧵', '🐑', '🌡️'],
      reviews: []
    }
    // Add more products as needed
  ];

  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return (
      <div style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'system-ui, sans-serif'
      }}>
        <div style={{ textAlign: 'center' }}>
          <h1>Product not found</h1>
          <a href="/products" style={{ color: '#4CAF50' }}>← Back to Products</a>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

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
        padding: '20px 5%'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <a href="/" style={{ textDecoration: 'none', color: 'inherit' }}>
              <h1 style={{ margin: 0, fontSize: '2rem', cursor: 'pointer' }}>❄️ Arctic Supply Co.</h1>
            </a>
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
              gap: '8px'
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
            <a href="/products" style={{
              color: 'white',
              textDecoration: 'none',
              padding: '10px 20px',
              border: '1px solid white',
              borderRadius: '20px'
            }}>
              ← All Products
            </a>
          </div>
        </div>
      </header>

      {/* Product Detail */}
      <div style={{ padding: '40px 5%' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          {/* Breadcrumb */}
          <div style={{ marginBottom: '30px', fontSize: '14px', color: '#666' }}>
            <a href="/" style={{ color: '#666', textDecoration: 'none' }}>Home</a> /
            <a href="/products" style={{ color: '#666', textDecoration: 'none' }}> Products</a> /
            <a href={`/products?category=${product.category}`} style={{ color: '#666', textDecoration: 'none' }}> {product.category}</a> /
            <span style={{ color: '#333' }}> {product.name}</span>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '60px',
            background: 'white',
            padding: '40px',
            borderRadius: '15px',
            boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
            marginBottom: '40px'
          }}>
            {/* Product Images */}
            <div>
              <div style={{
                height: '400px',
                background: 'linear-gradient(45deg, #f0f0f0, #e0e0e0)',
                borderRadius: '15px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '8rem',
                marginBottom: '20px',
                position: 'relative'
              }}>
                {product.images[selectedImage]}
                {product.originalPrice && (
                  <div style={{
                    position: 'absolute',
                    top: '20px',
                    right: '20px',
                    background: '#ff4444',
                    color: 'white',
                    padding: '8px 16px',
                    borderRadius: '20px',
                    fontSize: '14px',
                    fontWeight: 'bold'
                  }}>
                    SALE
                  </div>
                )}
              </div>

              {/* Image Thumbnails */}
              <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
                {product.images.map((img, index) => (
                  <div
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    style={{
                      width: '60px',
                      height: '60px',
                      background: selectedImage === index ? '#667eea' : '#f0f0f0',
                      borderRadius: '8px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '1.5rem',
                      cursor: 'pointer',
                      border: selectedImage === index ? '2px solid #667eea' : '2px solid transparent'
                    }}
                  >
                    {img}
                  </div>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div>
              <div style={{
                background: '#e3f2fd',
                color: '#1976d2',
                padding: '6px 12px',
                borderRadius: '15px',
                fontSize: '12px',
                fontWeight: '500',
                display: 'inline-block',
                marginBottom: '15px'
              }}>
                {product.category}
              </div>

              <h1 style={{
                margin: '0 0 15px',
                fontSize: '2.5rem',
                color: '#333',
                lineHeight: 1.2
              }}>
                {product.name}
              </h1>

              {/* Rating */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                marginBottom: '20px'
              }}>
                <div style={{ color: '#ffc107', fontSize: '18px' }}>
                  {'★'.repeat(Math.floor(product.rating))}{'☆'.repeat(5 - Math.floor(product.rating))}
                </div>
                <span style={{ fontSize: '16px', color: '#666' }}>
                  {product.rating} ({product.reviews.length} reviews)
                </span>
              </div>

              {/* Price */}
              <div style={{ marginBottom: '25px' }}>
                <span style={{
                  fontSize: '2.5rem',
                  fontWeight: 'bold',
                  color: '#2e7d32'
                }}>
                  ${product.price}
                </span>
                {product.originalPrice && (
                  <span style={{
                    fontSize: '1.5rem',
                    color: '#999',
                    textDecoration: 'line-through',
                    marginLeft: '15px'
                  }}>
                    ${product.originalPrice}
                  </span>
                )}
              </div>

              {/* Features */}
              <div style={{ marginBottom: '25px' }}>
                <h3 style={{ color: '#333', marginBottom: '10px' }}>Key Features:</h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {product.features.map((feature, index) => (
                    <span key={index} style={{
                      background: '#f8f9fa',
                      color: '#495057',
                      padding: '6px 12px',
                      borderRadius: '15px',
                      fontSize: '14px',
                      border: '1px solid #dee2e6'
                    }}>
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              {/* Description */}
              <div style={{ marginBottom: '30px' }}>
                <p style={{
                  color: '#666',
                  fontSize: '16px',
                  lineHeight: 1.6,
                  margin: 0
                }}>
                  {product.description}
                </p>
              </div>

              {/* Quantity and Add to Cart */}
              <div style={{
                display: 'flex',
                gap: '20px',
                alignItems: 'center',
                marginBottom: '30px'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <label style={{ fontWeight: 'bold', color: '#333' }}>Quantity:</label>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      style={{
                        background: '#f5f5f5',
                        border: '1px solid #ddd',
                        width: '35px',
                        height: '35px',
                        borderRadius: '6px',
                        cursor: 'pointer'
                      }}
                    >
                      −
                    </button>
                    <span style={{
                      minWidth: '40px',
                      textAlign: 'center',
                      fontWeight: 'bold',
                      fontSize: '16px'
                    }}>
                      {quantity}
                    </span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      style={{
                        background: '#f5f5f5',
                        border: '1px solid #ddd',
                        width: '35px',
                        height: '35px',
                        borderRadius: '6px',
                        cursor: 'pointer'
                      }}
                    >
                      +
                    </button>
                  </div>
                </div>

                <button
                  onClick={handleAddToCart}
                  style={{
                    background: addedToCart ? '#2E7D32' : '#4CAF50',
                    color: 'white',
                    border: 'none',
                    padding: '15px 30px',
                    borderRadius: '30px',
                    fontSize: '16px',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                    flex: 1,
                    maxWidth: '250px'
                  }}
                >
                  {addedToCart ? '✓ Added to Cart!' : `Add ${quantity} to Cart`}
                </button>
              </div>

              {/* Additional Info */}
              <div style={{
                background: '#f8f9fa',
                padding: '20px',
                borderRadius: '10px',
                fontSize: '14px',
                color: '#666'
              }}>
                <div style={{ marginBottom: '8px' }}>🚚 <strong>Free shipping</strong> on all orders</div>
                <div style={{ marginBottom: '8px' }}>🔄 <strong>30-day returns</strong> - hassle free</div>
                <div style={{ marginBottom: '8px' }}>🛡️ <strong>Lifetime warranty</strong> included</div>
                <div>💬 <strong>Expert support</strong> - chat with our gear specialists</div>
              </div>
            </div>
          </div>

          {/* Detailed Description and Specs */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '2fr 1fr',
            gap: '40px',
            marginBottom: '40px'
          }}>
            <div style={{
              background: 'white',
              padding: '30px',
              borderRadius: '15px',
              boxShadow: '0 5px 15px rgba(0,0,0,0.1)'
            }}>
              <h2 style={{ color: '#333', marginBottom: '20px' }}>Product Details</h2>
              <div style={{
                color: '#666',
                fontSize: '16px',
                lineHeight: 1.7,
                whiteSpace: 'pre-line'
              }}>
                {product.detailedDescription}
              </div>
            </div>

            <div style={{
              background: 'white',
              padding: '30px',
              borderRadius: '15px',
              boxShadow: '0 5px 15px rgba(0,0,0,0.1)'
            }}>
              <h2 style={{ color: '#333', marginBottom: '20px' }}>Specifications</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {Object.entries(product.specifications || {}).map(([key, value]) => (
                  <div key={key} style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    paddingBottom: '10px',
                    borderBottom: '1px solid #f0f0f0'
                  }}>
                    <span style={{ fontWeight: 'bold', color: '#333' }}>{key}:</span>
                    <span style={{ color: '#666' }}>{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Reviews Section */}
          {product.reviews && product.reviews.length > 0 && (
            <div style={{
              background: 'white',
              padding: '30px',
              borderRadius: '15px',
              boxShadow: '0 5px 15px rgba(0,0,0,0.1)'
            }}>
              <h2 style={{ color: '#333', marginBottom: '25px' }}>Customer Reviews</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
                {product.reviews.map((review) => (
                  <div key={review.id} style={{
                    padding: '20px',
                    border: '1px solid #f0f0f0',
                    borderRadius: '10px'
                  }}>
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      marginBottom: '10px'
                    }}>
                      <div>
                        <div style={{ fontWeight: 'bold', color: '#333' }}>{review.name}</div>
                        <div style={{ color: '#ffc107', fontSize: '14px' }}>
                          {'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}
                        </div>
                      </div>
                      <div style={{ fontSize: '12px', color: '#999' }}>{review.date}</div>
                    </div>
                    <h4 style={{ margin: '0 0 10px', color: '#333' }}>{review.title}</h4>
                    <p style={{ margin: 0, color: '#666', lineHeight: 1.6 }}>{review.comment}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}