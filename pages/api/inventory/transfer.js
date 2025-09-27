function newId() {
  return 'tr_' + Math.random().toString(36).slice(2, 10);
}

import { setCorsHeaders, handleOptions } from '../../../lib/cors';

// Simple in-memory cache for demo (use Redis/DB in production)
const processedRequests = new Map();

export default async function handler(req, res) {
  setCorsHeaders(res);

  if (handleOptions(req, res)) {
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'POST only' });
  }

  const { sku, from, to, qty, idempotencyKey } = req.body || {};

  // Debug logging
  console.log('📦 Received request body:', JSON.stringify(req.body, null, 2));
  console.log('📋 Extracted fields:', { sku, from, to, qty });

  if (!sku || !from || !to || !qty) {
    console.log('❌ Missing fields error');
    return res.status(400).json({
      error: 'Missing fields',
      received: { sku, from, to, qty },
      body: req.body
    });
  }

  // Create deterministic idempotency key based on request content only
  const requestKey = idempotencyKey || `${sku}:${from}:${to}:${qty}`;

  // Check if request already processed
  if (processedRequests.has(requestKey)) {
    console.log('🔄 Duplicate request detected, returning cached response');
    return res.status(200).json(processedRequests.get(requestKey));
  }

  // Process new request
  const response = {
    transferId: newId(),
    status: 'queued',
    moved: { sku, from, to, qty: Number(qty) },
    idempotencyKey: requestKey
  };

  // Cache response for 30 minutes (longer to handle agent retries)
  processedRequests.set(requestKey, response);
  setTimeout(() => processedRequests.delete(requestKey), 30 * 60 * 1000);

  console.log(`✅ New transfer processed: ${response.transferId}`);
  return res.status(200).json(response);
}