const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { readData, writeData, getNextId } = require('../data/store');
const SECRET = process.env.JWT_SECRET || 'campus-secret';

exports.register = async (req, res) => {
  const { username, password, name, department, semester, bio } = req.body;
  if (!username || !password || !name) return res.status(400).json({ error: 'Missing fields' });
  const data = readData();
  if (data.users.find(u => u.username === username)) return res.status(400).json({ error: 'Username taken' });
  const hashed = await bcrypt.hash(password, 10);
  const id = getNextId(data.users);
  const user = {
    id,
    username,
    name,
    password: hashed,
    avatar: '/avatars/default.svg',
    bio: bio || '',
    department: department || '',
    semester: semester || '',
    joined: new Date().toISOString(),
    followers: [],
    following: []
  };
  data.users.push(user);
  writeData(data);
  const token = jwt.sign({ id: user.id }, SECRET, { expiresIn: '7d' });
  res.json({ token, user: { id: user.id, username: user.username, name: user.name } });
};

exports.login = async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) return res.status(400).json({ error: 'Missing fields' });
  const data = readData();
  const user = data.users.find(u => u.username === username);
  if (!user) return res.status(400).json({ error: 'Invalid credentials' });
  const ok = await bcrypt.compare(password, user.password);
  if (!ok) return res.status(400).json({ error: 'Invalid credentials' });
  const token = jwt.sign({ id: user.id }, SECRET, { expiresIn: '7d' });
  res.json({ token, user: { id: user.id, username: user.username, name: user.name } });
};
