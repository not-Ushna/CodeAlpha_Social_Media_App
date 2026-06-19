const { readData, writeData, getNextId } = require('../data/store');

exports.create = (req, res) => {
  const { postId, text } = req.body;
  const data = readData();
  const post = data.posts.find(p => p.id === Number(postId));
  if (!post) return res.status(404).json({ error: 'Post not found' });
  const id = getNextId(data.comments);
  const comment = { id, postId: Number(postId), authorId: req.user.id, text, createdAt: new Date().toISOString() };
  data.comments.push(comment);
  post.comments.push(comment.id);
  writeData(data);
  res.json(comment);
};

exports.remove = (req, res) => {
  const id = Number(req.params.id);
  const data = readData();
  const idx = data.comments.findIndex(c => c.id === id);
  if (idx === -1) return res.status(404).json({ error: 'Not found' });
  const comment = data.comments[idx];
  if (comment.authorId !== req.user.id) return res.status(403).json({ error: 'Forbidden' });
  const post = data.posts.find(p => p.id === comment.postId);
  if (post) {
    const ci = post.comments.indexOf(comment.id);
    if (ci !== -1) post.comments.splice(ci,1);
  }
  data.comments.splice(idx,1);
  writeData(data);
  res.json({ ok: true });
};
