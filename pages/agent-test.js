import { useEffect, useState } from 'react';
import Script from 'next/script';

export default function AgentTest() {
  const [open, setOpen] = useState(false);
  const [qty, setQty] = useState(1);
  const [submitted, setSubmitted] = useState(null);

  useEffect(() => {
    // Registracija client-side akcija koje BB agent može zvati
    window.bbActions = {
      openTestPanel: () => {
        setOpen(true);
        return { opened: true };
      },
      fillAndSubmit: ({ qty: q = 1 } = {}) => {
        setOpen(true);
        setQty(q);
        // Simulacija submit akcije
        setSubmitted({ ok: true, qty: q });
        return { submitted: true, qty: q };
      }
    };

    console.log('BB Actions registered:', window.bbActions);
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    setSubmitted({ ok: true, qty: Number(qty) });
  };

  return (
    <div style={{ padding: 24, fontFamily: 'system-ui, sans-serif' }}>
      <h1>🔵 BlizzardBerry Agent Test</h1>
      <p>Test stranica za frontend i backend akcije kroz BB agenta.</p>

      {/* BlizzardBerry Agent Widget */}
      <Script
        id="blizzardberry-agent"
        src="https://blizzardberry.com/agent/agent.js"
        strategy="afterInteractive"
        data-agent-id="2db456e4-3137-4fa8-9824-462b301b8729"
      />

      <div style={{
        border: '2px solid #0070f3',
        padding: 16,
        margin: '16px 0',
        background: '#f0f8ff',
        borderRadius: 8
      }}>
        <small>🔵 BlizzardBerry Agent će se pojaviti ovdje</small>
      </div>

      <hr style={{ margin: '24px 0' }} />

      <details open={open}>
        <summary style={{
          cursor: 'pointer',
          fontSize: '18px',
          marginBottom: '12px'
        }}>
          📋 Test Panel (client action: <code>openTestPanel</code>)
        </summary>

        <form onSubmit={onSubmit} style={{
          marginTop: 12,
          padding: 16,
          border: '1px solid #ddd',
          borderRadius: 8,
          backgroundColor: '#fff'
        }}>
          <label style={{ display: 'block', marginBottom: 8 }}>
            Quantity:
            <input
              type="number"
              value={qty}
              onChange={(e) => setQty(e.target.value)}
              min={1}
              style={{
                width: 80,
                marginLeft: 8,
                padding: 4,
                border: '1px solid #ccc',
                borderRadius: 4
              }}
            />
          </label>
          <button
            type="submit"
            style={{
              padding: '8px 16px',
              backgroundColor: '#0070f3',
              color: 'white',
              border: 'none',
              borderRadius: 4,
              cursor: 'pointer'
            }}
          >
            Submit
          </button>
        </form>

        {submitted && (
          <div style={{
            marginTop: 16,
            padding: 12,
            backgroundColor: '#d4edda',
            border: '1px solid #c3e6cb',
            borderRadius: 4
          }}>
            ✅ Submitted qty: <strong>{submitted.qty}</strong>
          </div>
        )}
      </details>

      <hr style={{ margin: '24px 0' }} />

      <h3>🧪 Manual API Test</h3>
      <div style={{ fontSize: '14px', fontFamily: 'monospace' }}>
        <p>Test backend rute direktno:</p>
        <ul>
          <li>GET /api/ping</li>
          <li>POST /api/calc/sum {"{ a: 2, b: 3 }"}</li>
          <li>POST /api/inventory/transfer {"{ sku: 'ABC', from: 'A', to: 'B', qty: 5 }"}</li>
        </ul>
      </div>
    </div>
  );
}