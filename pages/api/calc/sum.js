import { setCorsHeaders, handleOptions } from '../../../lib/cors';

export default async function handler(req, res) {
  setCorsHeaders(res);

  if (handleOptions(req, res)) {
    return;
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