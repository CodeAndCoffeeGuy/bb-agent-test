import { setCorsHeaders, handleOptions } from '../../lib/cors';

export default function handler(req, res) {
  setCorsHeaders(res);

  if (handleOptions(req, res)) {
    return;
  }

  return res.status(200).json({
    ok: true,
    service: 'bb-test',
    ts: Date.now()
  });
}