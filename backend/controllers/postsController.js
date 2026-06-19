const { readData, writeData, getNextId } = require('../data/store');

exports.list = (req, res) => {
  const { sort, category, q } = req.query;
  const data = readData();
  let posts = data.posts.map(p => ({ ...p }));
  if (category) posts = posts.filter(p => p.category === category);
  if (q) posts = posts.filter(p => p.title.toLowerCase().includes(q.toLowerCase()) || p.body.toLowerCase().includes(q.toLowerCase()));
  if (sort === 'liked') posts = posts.sort((a, b) => b.likes.length - a.likes.length);
  else posts = posts.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  res.json(posts);
};

exports.get = (req, res) => {
  const id = Number(req.params.id);
  const data = readData();
  const post = data.posts.find(p => p.id === id);
  if (!post) return res.status(404).json({ error: 'Not found' });
  // populate comments for the post
  const postComments = data.comments.filter(c => c.postId === post.id).map(c => ({ id: c.id, authorId: c.authorId, text: c.text, createdAt: c.createdAt }));
  const result = { ...post, comments: postComments };
  res.json(result);
};

exports.create = (req, res) => {
  const data = readData();
  const id = getNextId(data.posts);
  const { title, body, category, resources } = req.body;
  const post = { id, authorId: req.user.id, title, body, category: category || 'Notes', likes: [], comments: [], resources: resources || [], createdAt: new Date().toISOString() };
  data.posts.push(post);
  writeData(data);
  res.json(post);
};

exports.update = (req, res) => {
  const id = Number(req.params.id);
  const data = readData();
  const post = data.posts.find(p => p.id === id);
  if (!post) return res.status(404).json({ error: 'Not found' });
  if (post.authorId !== req.user.id) return res.status(403).json({ error: 'Forbidden' });
  const { title, body, category, resources } = req.body;
  if (title !== undefined) post.title = title;
  if (body !== undefined) post.body = body;
  if (category !== undefined) post.category = category;
  if (resources !== undefined) post.resources = resources;
  writeData(data);
  res.json(post);
};

exports.remove = (req, res) => {
  const id = Number(req.params.id);
  const data = readData();
  const idx = data.posts.findIndex(p => p.id === id);
  if (idx === -1) return res.status(404).json({ error: 'Not found' });
  const post = data.posts[idx];
  if (post.authorId !== req.user.id) return res.status(403).json({ error: 'Forbidden' });
  data.posts.splice(idx, 1);
  writeData(data);
  res.json({ ok: true });
};

exports.toggleLike = (req, res) => {
  const id = Number(req.params.id);
  const data = readData();
  const post = data.posts.find(p => p.id === id);
  if (!post) return res.status(404).json({ error: 'Not found' });
  const userId = req.user.id;
  const i = post.likes.indexOf(userId);
  if (i === -1) post.likes.push(userId);
  else post.likes.splice(i,1);
  writeData(data);
  res.json({ likes: post.likes.length });
};
