const { readData, writeData } = require('../data/store');

exports.list = (req, res) => {
  const data = readData();
  const users = data.users.map(u => ({ id: u.id, username: u.username, name: u.name, avatar: u.avatar, bio: u.bio, department: u.department, semester: u.semester, followers: u.followers.length, following: u.following.length, joined: u.joined }));
  res.json(users);
};

exports.get = (req, res) => {
  const id = Number(req.params.id);
  const data = readData();
  const user = data.users.find(u => u.id === id);
  if (!user) return res.status(404).json({ error: 'Not found' });
  const posts = data.posts.filter(p => p.authorId === user.id);
  res.json({ user: { id: user.id, username: user.username, name: user.name, avatar: user.avatar, bio: user.bio, department: user.department, semester: user.semester, followers: user.followers.length, following: user.following.length, joined: user.joined }, posts });
};

exports.update = (req, res) => {
  const id = Number(req.params.id);
  const data = readData();
  const user = data.users.find(u => u.id === id);
  if (!user) return res.status(404).json({ error: 'Not found' });
  if (req.user.id !== user.id) return res.status(403).json({ error: 'Forbidden' });
  const { bio, department, semester, avatar } = req.body;
  if (bio !== undefined) user.bio = bio;
  if (department !== undefined) user.department = department;
  if (semester !== undefined) user.semester = semester;
  if (avatar !== undefined) user.avatar = avatar;
  writeData(data);
  res.json({ ok: true, user });
};
