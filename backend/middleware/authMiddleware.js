const jwt = require('jsonwebtoken');
const { readData } = require('../data/store');
const SECRET = process.env.JWT_SECRET || 'campus-secret';

function authMiddleware(req, res, next) {
  const auth = req.headers.authorization || '';
  const token = auth.replace('Bearer ', '');
  if (!token) return res.status(401).json({ error: 'Missing token' });
  try {
    const decoded = jwt.verify(token, SECRET);
    const data = readData();
    const user = data.users.find(u => u.id === decoded.id);
    if (!user) return res.status(401).json({ error: 'Invalid token' });
    req.user = user;
    next();
  } catch (err) {
    return res.status(401).json({ error: 'Invalid token' });
  }
}

module.exports = authMiddleware;
