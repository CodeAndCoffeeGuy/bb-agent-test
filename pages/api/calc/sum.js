export default async function handler(req, res) {
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'POST only' });
  }

  try {
    const { a, b } = req.body || {};
    const na = Number(a);
    const nb = Number(b);

    if (Number.isNaN(na) || Number.isNaN(nb)) {
      return res.status(400).json({ error: 'Invalid numbers' });
    }

    return res.status(200).json({ result: na + nb });
  } catch (e) {
    return res.status(500).json({ error: 'calc failed' });
  }
}