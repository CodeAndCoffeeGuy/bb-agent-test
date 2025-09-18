function newId() {
  return 'tr_' + Math.random().toString(36).slice(2, 10);
}

import { setCorsHeaders, handleOptions } from '../../../lib/cors';

export default async function handler(req, res) {
  setCorsHeaders(res);

  if (handleOptions(req, res)) {
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'POST only' });
  }

  const { sku, from, to, qty } = req.body || {};

  if (!sku || !from || !to || !qty) {
    return res.status(400).json({ error: 'Missing fields' });
  }

  // Mock response - u realnom slučaju bi ovo zvao pravi backend/DB
  return res.status(200).json({
    transferId: newId(),
    status: 'queued',
    moved: { sku, from, to, qty: Number(qty) }
  });
}