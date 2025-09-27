import Script from 'next/script';

export default function About() {
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

      {/* Hero Section */}
      <header style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        padding: '60px 5%',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h1 style={{ fontSize: '3rem', marginBottom: '20px' }}>❄️ About Arctic Supply Co.</h1>
          <p style={{ fontSize: '1.3rem', opacity: 0.9, lineHeight: 1.6 }}>
            For over a decade, we've been equipping adventurers with professional-grade gear
            designed to withstand the world's most extreme conditions.
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

      {/* Our Story */}
      <section style={{ padding: '80px 5%', background: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '60px',
            alignItems: 'center'
          }}>
            <div>
              <h2 style={{ fontSize: '2.5rem', marginBottom: '25px', color: '#333' }}>Our Story</h2>
              <p style={{ fontSize: '1.1rem', lineHeight: 1.7, color: '#666', marginBottom: '20px' }}>
                Arctic Supply Co. was founded in 2010 by expedition leader Marcus Frost and
                gear engineer Sarah Chen after a harrowing rescue mission in the Canadian Arctic.
                They realized that survival often depends on having the right equipment –
                gear that won't fail when your life depends on it.
              </p>
              <p style={{ fontSize: '1.1rem', lineHeight: 1.7, color: '#666', marginBottom: '20px' }}>
                What started as a small operation in Anchorage, Alaska, has grown into a trusted
                global supplier of premium outdoor equipment. Every product we sell has been
                personally tested by our team in real-world extreme conditions.
              </p>
              <p style={{ fontSize: '1.1rem', lineHeight: 1.7, color: '#666' }}>
                Today, Arctic Supply Co. serves professional mountaineers, arctic researchers,
                military units, and outdoor enthusiasts who demand nothing less than perfection
                from their gear.
              </p>
            </div>
            <div style={{
              background: 'linear-gradient(45deg, #f0f8ff, #e6f3ff)',
              borderRadius: '15px',
              padding: '40px',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '4rem', marginBottom: '20px' }}>🏔️</div>
              <h3 style={{ color: '#333', marginBottom: '15px' }}>Founded in the Arctic</h3>
              <p style={{ color: '#666', lineHeight: 1.6 }}>
                Our headquarters in Anchorage, Alaska, sits at the gateway to some of the world's
                most challenging terrain. This isn't just where we work – it's our testing ground.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section style={{ padding: '80px 5%', background: '#f8f9fa' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '50px', color: '#333' }}>Our Mission & Values</h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '40px',
            marginBottom: '60px'
          }}>
            <div style={{
              background: 'white',
              padding: '40px',
              borderRadius: '15px',
              boxShadow: '0 5px 15px rgba(0,0,0,0.1)'
            }}>
              <div style={{ fontSize: '3rem', marginBottom: '20px' }}>🎯</div>
              <h3 style={{ color: '#333', marginBottom: '15px' }}>Our Mission</h3>
              <p style={{ color: '#666', lineHeight: 1.6 }}>
                To provide outdoor professionals and enthusiasts with gear so reliable,
                so well-engineered, that it becomes an extension of their own capabilities
                in the world's most demanding environments.
              </p>
            </div>

            <div style={{
              background: 'white',
              padding: '40px',
              borderRadius: '15px',
              boxShadow: '0 5px 15px rgba(0,0,0,0.1)'
            }}>
              <div style={{ fontSize: '3rem', marginBottom: '20px' }}>🔬</div>
              <h3 style={{ color: '#333', marginBottom: '15px' }}>Innovation</h3>
              <p style={{ color: '#666', lineHeight: 1.6 }}>
                We continuously push the boundaries of what's possible in outdoor gear design,
                working with cutting-edge materials and technologies to solve real-world problems.
              </p>
            </div>

            <div style={{
              background: 'white',
              padding: '40px',
              borderRadius: '15px',
              boxShadow: '0 5px 15px rgba(0,0,0,0.1)'
            }}>
              <div style={{ fontSize: '3rem', marginBottom: '20px' }}>🌍</div>
              <h3 style={{ color: '#333', marginBottom: '15px' }}>Sustainability</h3>
              <p style={{ color: '#666', lineHeight: 1.6 }}>
                We're committed to responsible manufacturing and environmental stewardship,
                because the wilderness we explore is worth protecting for future generations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section style={{ padding: '80px 5%', background: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '50px', color: '#333', textAlign: 'center' }}>
            Leadership Team
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '40px'
          }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{
                width: '150px',
                height: '150px',
                borderRadius: '50%',
                background: 'linear-gradient(45deg, #667eea, #764ba2)',
                margin: '0 auto 20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '3rem',
                color: 'white'
              }}>
                🧭
              </div>
              <h3 style={{ color: '#333', marginBottom: '10px' }}>Marcus Frost</h3>
              <p style={{ color: '#666', fontWeight: 'bold', marginBottom: '10px' }}>CEO & Co-Founder</p>
              <p style={{ color: '#666', lineHeight: 1.6, fontSize: '14px' }}>
                Former expedition leader with 15+ years of Arctic experience.
                Led rescue operations in extreme conditions across Alaska and Greenland.
              </p>
            </div>

            <div style={{ textAlign: 'center' }}>
              <div style={{
                width: '150px',
                height: '150px',
                borderRadius: '50%',
                background: 'linear-gradient(45deg, #667eea, #764ba2)',
                margin: '0 auto 20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '3rem',
                color: 'white'
              }}>
                ⚙️
              </div>
              <h3 style={{ color: '#333', marginBottom: '10px' }}>Sarah Chen</h3>
              <p style={{ color: '#666', fontWeight: 'bold', marginBottom: '10px' }}>CTO & Co-Founder</p>
              <p style={{ color: '#666', lineHeight: 1.6, fontSize: '14px' }}>
                Materials engineer specializing in extreme-weather gear design.
                Former researcher at NASA's cold-weather equipment division.
              </p>
            </div>

            <div style={{ textAlign: 'center' }}>
              <div style={{
                width: '150px',
                height: '150px',
                borderRadius: '50%',
                background: 'linear-gradient(45deg, #667eea, #764ba2)',
                margin: '0 auto 20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '3rem',
                color: 'white'
              }}>
                📊
              </div>
              <h3 style={{ color: '#333', marginBottom: '10px' }}>David Kim</h3>
              <p style={{ color: '#666', fontWeight: 'bold', marginBottom: '10px' }}>Head of Operations</p>
              <p style={{ color: '#666', lineHeight: 1.6, fontSize: '14px' }}>
                Supply chain expert with extensive experience in global logistics
                and quality control for outdoor equipment manufacturers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section style={{
        padding: '80px 5%',
        background: 'linear-gradient(45deg, #1e3c72 0%, #2a5298 100%)',
        color: 'white',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '50px' }}>By The Numbers</h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '40px'
          }}>
            <div>
              <div style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '10px' }}>14</div>
              <p style={{ fontSize: '1.1rem', opacity: 0.9 }}>Years of Excellence</p>
            </div>
            <div>
              <div style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '10px' }}>50,000+</div>
              <p style={{ fontSize: '1.1rem', opacity: 0.9 }}>Satisfied Customers</p>
            </div>
            <div>
              <div style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '10px' }}>500+</div>
              <p style={{ fontSize: '1.1rem', opacity: 0.9 }}>Premium Products</p>
            </div>
            <div>
              <div style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '10px' }}>95%</div>
              <p style={{ fontSize: '1.1rem', opacity: 0.9 }}>Customer Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section style={{ padding: '60px 5%', background: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '40px', color: '#333' }}>
            Certifications & Partnerships
          </h2>

          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '40px',
            flexWrap: 'wrap',
            alignItems: 'center'
          }}>
            <div style={{
              padding: '20px',
              background: '#f8f9fa',
              borderRadius: '10px',
              minWidth: '150px'
            }}>
              <div style={{ fontSize: '2rem', marginBottom: '10px' }}>🏔️</div>
              <p style={{ margin: 0, fontWeight: 'bold', color: '#333' }}>UIAA Certified</p>
            </div>
            <div style={{
              padding: '20px',
              background: '#f8f9fa',
              borderRadius: '10px',
              minWidth: '150px'
            }}>
              <div style={{ fontSize: '2rem', marginBottom: '10px' }}>🌍</div>
              <p style={{ margin: 0, fontWeight: 'bold', color: '#333' }}>ISO 9001</p>
            </div>
            <div style={{
              padding: '20px',
              background: '#f8f9fa',
              borderRadius: '10px',
              minWidth: '150px'
            }}>
              <div style={{ fontSize: '2rem', marginBottom: '10px' }}>✅</div>
              <p style={{ margin: 0, fontWeight: 'bold', color: '#333' }}>CE Marked</p>
            </div>
            <div style={{
              padding: '20px',
              background: '#f8f9fa',
              borderRadius: '10px',
              minWidth: '150px'
            }}>
              <div style={{ fontSize: '2rem', marginBottom: '10px' }}>🎖️</div>
              <p style={{ margin: 0, fontWeight: 'bold', color: '#333' }}>Military Grade</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}