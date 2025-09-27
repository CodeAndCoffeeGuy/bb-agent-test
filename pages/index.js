import Script from 'next/script';

export default function Home() {
  return (
    <div style={{
      minHeight: '100vh',
      fontFamily: 'system-ui, sans-serif',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    }}>
      {/* BlizzardBerry Agent Widget - appears naturally */}
      <Script
        id="blizzardberry-agent"
        src="https://blizzardberry.com/agent/agent.js"
        strategy="afterInteractive"
        data-agent-id="2db456e4-3137-4fa8-9824-462b301b8729"
      />
      {/* Navigation */}
      <nav style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '20px 5%',
        background: 'rgba(255, 255, 255, 0.1)',
        backdropFilter: 'blur(10px)'
      }}>
        <div style={{
          fontSize: '24px',
          fontWeight: 'bold',
          color: 'white',
          display: 'flex',
          alignItems: 'center'
        }}>
          ❄️ Arctic Supply Co.
        </div>
        <div style={{ display: 'flex', gap: '30px' }}>
          <a href="/products" style={{ color: 'white', textDecoration: 'none', fontSize: '16px' }}>Products</a>
          <a href="/about" style={{ color: 'white', textDecoration: 'none', fontSize: '16px' }}>About</a>
          <a href="/inventory" style={{ color: 'white', textDecoration: 'none', fontSize: '16px' }}>Inventory</a>
          <a href="/dashboard" style={{ color: 'white', textDecoration: 'none', fontSize: '16px' }}>Dashboard</a>
          <a href="/contact" style={{ color: 'white', textDecoration: 'none', fontSize: '16px' }}>Contact</a>
          <a href="/support" style={{
            background: '#4CAF50',
            color: 'white',
            padding: '10px 20px',
            borderRadius: '25px',
            textDecoration: 'none',
            fontSize: '16px'
          }}>Support</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section style={{
        textAlign: 'center',
        padding: '100px 5% 50px',
        color: 'white'
      }}>
        <h1 style={{
          fontSize: '3.5rem',
          fontWeight: 'bold',
          marginBottom: '20px',
          textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
        }}>
          Premium Outdoor Gear & Equipment
        </h1>
        <p style={{
          fontSize: '1.4rem',
          marginBottom: '40px',
          maxWidth: '600px',
          margin: '0 auto 40px',
          opacity: 0.9
        }}>
          Your trusted partner for adventure. From mountain peaks to winter trails,
          we supply the gear that keeps explorers moving forward.
        </p>
        <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
          <button style={{
            background: '#4CAF50',
            color: 'white',
            border: 'none',
            padding: '15px 30px',
            fontSize: '18px',
            borderRadius: '30px',
            cursor: 'pointer',
            boxShadow: '0 4px 15px rgba(0,0,0,0.2)'
          }}>
            Shop Now
          </button>
          <button style={{
            background: 'transparent',
            color: 'white',
            border: '2px solid white',
            padding: '15px 30px',
            fontSize: '18px',
            borderRadius: '30px',
            cursor: 'pointer'
          }}>
            View Catalog
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section style={{
        background: 'white',
        padding: '80px 5%',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '40px'
      }}>
        <div style={{ textAlign: 'center', padding: '20px' }}>
          <div style={{ fontSize: '3rem', marginBottom: '15px' }}>🏔️</div>
          <h3 style={{ color: '#333', marginBottom: '10px' }}>Mountain Gear</h3>
          <p style={{ color: '#666' }}>Professional climbing equipment, hiking boots, and mountain apparel for serious adventurers.</p>
        </div>
        <div style={{ textAlign: 'center', padding: '20px' }}>
          <div style={{ fontSize: '3rem', marginBottom: '15px' }}>⛷️</div>
          <h3 style={{ color: '#333', marginBottom: '10px' }}>Winter Sports</h3>
          <p style={{ color: '#666' }}>Complete range of skiing, snowboarding, and winter camping equipment for cold weather adventures.</p>
        </div>
        <div style={{ textAlign: 'center', padding: '20px' }}>
          <div style={{ fontSize: '3rem', marginBottom: '15px' }}>🏕️</div>
          <h3 style={{ color: '#333', marginBottom: '10px' }}>Camping & Survival</h3>
          <p style={{ color: '#666' }}>Tents, sleeping systems, cooking gear, and survival tools for extended wilderness expeditions.</p>
        </div>
      </section>

      {/* Company Values Section */}
      <section style={{
        background: 'linear-gradient(45deg, #1e3c72 0%, #2a5298 100%)',
        padding: '80px 5%',
        color: 'white',
        textAlign: 'center'
      }}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '30px' }}>Why Choose Arctic Supply Co.</h2>
        <p style={{ fontSize: '1.2rem', marginBottom: '40px', maxWidth: '800px', margin: '0 auto 40px' }}>
          With over a decade of experience in extreme weather conditions, we understand what it takes
          to keep you safe and equipped for any adventure.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px', marginTop: '50px' }}>
          <div style={{ background: 'rgba(255,255,255,0.1)', padding: '30px', borderRadius: '15px' }}>
            <h4 style={{ marginBottom: '15px' }}>🌡️ Extreme Weather Tested</h4>
            <p>All products tested in real Arctic conditions to ensure maximum performance</p>
          </div>
          <div style={{ background: 'rgba(255,255,255,0.1)', padding: '30px', borderRadius: '15px' }}>
            <h4 style={{ marginBottom: '15px' }}>🚚 Fast Global Shipping</h4>
            <p>Express delivery worldwide with tracking and insurance on all orders</p>
          </div>
          <div style={{ background: 'rgba(255,255,255,0.1)', padding: '30px', borderRadius: '15px' }}>
            <h4 style={{ marginBottom: '15px' }}>🛡️ Lifetime Warranty</h4>
            <p>Comprehensive warranty and repair service for all premium equipment</p>
          </div>
        </div>
        <div style={{ marginTop: '40px' }}>
          <button style={{
            background: '#4CAF50',
            color: 'white',
            padding: '18px 40px',
            borderRadius: '30px',
            border: 'none',
            fontSize: '18px',
            fontWeight: 'bold',
            cursor: 'pointer',
            boxShadow: '0 6px 20px rgba(0,0,0,0.3)'
          }}>
            Shop Premium Collection →
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        background: '#333',
        color: 'white',
        padding: '40px 5%',
        textAlign: 'center'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '20px' }}>
          <div>
            <h4>❄️ Arctic Supply Co.</h4>
            <p style={{ margin: '5px 0', opacity: 0.8 }}>Premium outdoor equipment since 2020</p>
          </div>
          <div style={{ display: 'flex', gap: '30px' }}>
            <a href="/products" style={{ color: '#ccc', textDecoration: 'none' }}>Products</a>
            <a href="/about" style={{ color: '#ccc', textDecoration: 'none' }}>About Us</a>
            <a href="/contact" style={{ color: '#ccc', textDecoration: 'none' }}>Contact</a>
            <a href="/support" style={{ color: '#ccc', textDecoration: 'none' }}>Support</a>
          </div>
        </div>
        <div style={{ marginTop: '20px', paddingTop: '20px', borderTop: '1px solid #555', opacity: 0.7 }}>
          © 2024 Arctic Supply Co. All rights reserved. | Professional outdoor equipment for extreme conditions.
        </div>
      </footer>
    </div>
  );
}