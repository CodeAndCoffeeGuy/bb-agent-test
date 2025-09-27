import { useState } from 'react';
import Script from 'next/script';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    inquiryType: 'general'
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // Simulate form submission
    setTimeout(() => setSubmitted(false), 3000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
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
        padding: '60px 5%',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h1 style={{ fontSize: '3rem', marginBottom: '20px' }}>❄️ Contact Arctic Supply Co.</h1>
          <p style={{ fontSize: '1.3rem', opacity: 0.9, lineHeight: 1.6 }}>
            Get in touch with our team of outdoor experts. We're here to help you find
            the perfect gear for your next adventure.
          </p>
        </div>
        <a href="/" style={{
          position: 'absolute',
          top: '30px',
          right: '5%',
          color: 'white',
          textDecoration: 'none',
          padding: '10px 20px',
          border: '1px solid white',
          borderRadius: '20px'
        }}>
          ← Back to Home
        </a>
      </header>

      {/* Contact Information */}
      <section style={{ padding: '60px 5%', background: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '40px',
            marginBottom: '60px'
          }}>
            <div style={{
              background: '#f8f9fa',
              padding: '40px',
              borderRadius: '15px',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '3rem', marginBottom: '20px' }}>📍</div>
              <h3 style={{ color: '#333', marginBottom: '15px' }}>Headquarters</h3>
              <p style={{ color: '#666', lineHeight: 1.6, margin: 0 }}>
                Arctic Supply Co.<br />
                1234 Glacier Avenue<br />
                Anchorage, AK 99501<br />
                United States
              </p>
            </div>

            <div style={{
              background: '#f8f9fa',
              padding: '40px',
              borderRadius: '15px',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '3rem', marginBottom: '20px' }}>📞</div>
              <h3 style={{ color: '#333', marginBottom: '15px' }}>Phone & Hours</h3>
              <p style={{ color: '#666', lineHeight: 1.6, margin: 0 }}>
                <strong>Sales:</strong> +1 (907) 555-0123<br />
                <strong>Support:</strong> +1 (907) 555-0124<br />
                <strong>Hours:</strong> Mon-Fri 8AM-6PM AST<br />
                <strong>Weekend:</strong> Sat 9AM-4PM AST
              </p>
            </div>

            <div style={{
              background: '#f8f9fa',
              padding: '40px',
              borderRadius: '15px',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '3rem', marginBottom: '20px' }}>✉️</div>
              <h3 style={{ color: '#333', marginBottom: '15px' }}>Email</h3>
              <p style={{ color: '#666', lineHeight: 1.6, margin: 0 }}>
                <strong>General:</strong> info@arcticsupply.com<br />
                <strong>Sales:</strong> sales@arcticsupply.com<br />
                <strong>Support:</strong> support@arcticsupply.com<br />
                <strong>Press:</strong> media@arcticsupply.com
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section style={{ padding: '60px 5%', background: '#f8f9fa' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div style={{
            background: 'white',
            padding: '40px',
            borderRadius: '15px',
            boxShadow: '0 5px 15px rgba(0,0,0,0.1)'
          }}>
            <h2 style={{ fontSize: '2rem', marginBottom: '30px', color: '#333', textAlign: 'center' }}>
              Send us a Message
            </h2>

            {submitted && (
              <div style={{
                background: '#d4edda',
                border: '1px solid #c3e6cb',
                color: '#155724',
                padding: '15px',
                borderRadius: '8px',
                marginBottom: '20px',
                textAlign: 'center'
              }}>
                ✅ Thank you! Your message has been sent. We'll get back to you within 24 hours.
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '20px',
                marginBottom: '20px'
              }}>
                <div>
                  <label style={{
                    display: 'block',
                    marginBottom: '8px',
                    fontWeight: 'bold',
                    color: '#333'
                  }}>
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      border: '1px solid #ddd',
                      borderRadius: '8px',
                      fontSize: '16px'
                    }}
                  />
                </div>

                <div>
                  <label style={{
                    display: 'block',
                    marginBottom: '8px',
                    fontWeight: 'bold',
                    color: '#333'
                  }}>
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      border: '1px solid #ddd',
                      borderRadius: '8px',
                      fontSize: '16px'
                    }}
                  />
                </div>
              </div>

              <div style={{ marginBottom: '20px' }}>
                <label style={{
                  display: 'block',
                  marginBottom: '8px',
                  fontWeight: 'bold',
                  color: '#333'
                }}>
                  Inquiry Type
                </label>
                <select
                  name="inquiryType"
                  value={formData.inquiryType}
                  onChange={handleChange}
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    border: '1px solid #ddd',
                    borderRadius: '8px',
                    fontSize: '16px',
                    background: 'white'
                  }}
                >
                  <option value="general">General Inquiry</option>
                  <option value="product">Product Information</option>
                  <option value="support">Technical Support</option>
                  <option value="warranty">Warranty Claim</option>
                  <option value="partnership">Partnership/Wholesale</option>
                  <option value="media">Media/Press</option>
                </select>
              </div>

              <div style={{ marginBottom: '20px' }}>
                <label style={{
                  display: 'block',
                  marginBottom: '8px',
                  fontWeight: 'bold',
                  color: '#333'
                }}>
                  Subject *
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    border: '1px solid #ddd',
                    borderRadius: '8px',
                    fontSize: '16px'
                  }}
                />
              </div>

              <div style={{ marginBottom: '30px' }}>
                <label style={{
                  display: 'block',
                  marginBottom: '8px',
                  fontWeight: 'bold',
                  color: '#333'
                }}>
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    border: '1px solid #ddd',
                    borderRadius: '8px',
                    fontSize: '16px',
                    resize: 'vertical'
                  }}
                  placeholder="Tell us how we can help you..."
                />
              </div>

              <button
                type="submit"
                style={{
                  background: 'linear-gradient(45deg, #1e3c72 0%, #2a5298 100%)',
                  color: 'white',
                  border: 'none',
                  padding: '15px 40px',
                  borderRadius: '30px',
                  fontSize: '18px',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                  width: '100%',
                  boxShadow: '0 4px 15px rgba(0,0,0,0.2)'
                }}
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section style={{ padding: '60px 5%', background: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '40px', color: '#333', textAlign: 'center' }}>
            Need Help Right Away?
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '30px'
          }}>
            <div style={{
              background: 'linear-gradient(45deg, #4CAF50, #45a049)',
              color: 'white',
              padding: '30px',
              borderRadius: '15px',
              textAlign: 'center',
              cursor: 'pointer'
            }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '15px' }}>💬</div>
              <h3 style={{ margin: '0 0 10px' }}>Live Chat</h3>
              <p style={{ margin: 0, opacity: 0.9 }}>Chat with our support team instantly</p>
            </div>

            <div style={{
              background: 'linear-gradient(45deg, #2196F3, #1976D2)',
              color: 'white',
              padding: '30px',
              borderRadius: '15px',
              textAlign: 'center',
              cursor: 'pointer'
            }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '15px' }}>📚</div>
              <h3 style={{ margin: '0 0 10px' }}>Knowledge Base</h3>
              <p style={{ margin: 0, opacity: 0.9 }}>Find answers in our help center</p>
            </div>

            <div style={{
              background: 'linear-gradient(45deg, #FF9800, #F57C00)',
              color: 'white',
              padding: '30px',
              borderRadius: '15px',
              textAlign: 'center',
              cursor: 'pointer'
            }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '15px' }}>📦</div>
              <h3 style={{ margin: '0 0 10px' }}>Track Order</h3>
              <p style={{ margin: 0, opacity: 0.9 }}>Check your order status</p>
            </div>

            <div style={{
              background: 'linear-gradient(45deg, #9C27B0, #7B1FA2)',
              color: 'white',
              padding: '30px',
              borderRadius: '15px',
              textAlign: 'center',
              cursor: 'pointer'
            }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '15px' }}>🔧</div>
              <h3 style={{ margin: '0 0 10px' }}>Product Support</h3>
              <p style={{ margin: 0, opacity: 0.9 }}>Get help with your gear</p>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section style={{ padding: '60px 5%', background: '#f8f9fa' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '30px', color: '#333', textAlign: 'center' }}>
            Visit Our Flagship Store
          </h2>
          <div style={{
            background: 'white',
            padding: '40px',
            borderRadius: '15px',
            boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
            textAlign: 'center'
          }}>
            <div style={{
              height: '300px',
              background: 'linear-gradient(45deg, #e8f5e8, #f0f8ff)',
              borderRadius: '10px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '20px'
            }}>
              <div>
                <div style={{ fontSize: '4rem', marginBottom: '20px' }}>🗺️</div>
                <p style={{ color: '#666', fontSize: '1.1rem' }}>
                  Interactive map showing our Anchorage headquarters<br />
                  Located in the heart of Alaska's outdoor recreation district
                </p>
              </div>
            </div>
            <p style={{ color: '#666', lineHeight: 1.6 }}>
              <strong>Store Hours:</strong> Monday-Friday 9AM-7PM, Saturday 9AM-6PM, Sunday 10AM-5PM AST<br />
              <strong>Services:</strong> Gear fitting, product demonstrations, repair services, and expert consultation
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}