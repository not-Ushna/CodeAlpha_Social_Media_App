const { readData, writeData } = require('../data/store');

exports.follow = (req, res) => {
  const { targetId } = req.body;
  const data = readData();
  const me = data.users.find(u => u.id === req.user.id);
  const target = data.users.find(u => u.id === Number(targetId));
  if (!target) return res.status(404).json({ error: 'Target not found' });
  if (!me.following.includes(target.id)) me.following.push(target.id);
  if (!target.followers.includes(me.id)) target.followers.push(me.id);
  writeData(data);
  res.json({ ok: true, followers: target.followers.length, following: me.following.length });
};

exports.unfollow = (req, res) => {
  const { targetId } = req.body;
  const data = readData();
  const me = data.users.find(u => u.id === req.user.id);
  const target = data.users.find(u => u.id === Number(targetId));
  if (!target) return res.status(404).json({ error: 'Target not found' });
  me.following = me.following.filter(id => id !== target.id);
  target.followers = target.followers.filter(id => id !== me.id);
  writeData(data);
  res.json({ ok: true, followers: target.followers.length, following: me.following.length });
};
