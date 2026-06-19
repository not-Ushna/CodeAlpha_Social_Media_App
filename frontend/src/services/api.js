const API = 'http://localhost:4000/api';

async function request(path, opts = {}) {
  const token = localStorage.getItem('token');
  const headers = opts.headers || {};
  if (token) headers['Authorization'] = `Bearer ${token}`;
  const res = await fetch(API + path, { ...opts, headers });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) throw data;
  return data;
}

export const auth = {
  register: (u) => request('/register', { method: 'POST', headers: { 'Content-Type':'application/json' }, body: JSON.stringify(u) }),
  login: (u) => request('/login', { method: 'POST', headers: { 'Content-Type':'application/json' }, body: JSON.stringify(u) })
}

export const users = {
  list: () => request('/users'),
  get: (id) => request(`/users/${id}`),
  update: (id, body) => request(`/users/${id}`, { method: 'PUT', headers: { 'Content-Type':'application/json' }, body: JSON.stringify(body) })
}

export const posts = {
  list: (q) => request('/posts' + (q ? `?${q}` : '')),
  get: (id) => request(`/posts/${id}`),
  create: (p) => request('/posts', { method: 'POST', headers: {'Content-Type':'application/json'}, body: JSON.stringify(p) }),
  update: (id,p) => request(`/posts/${id}`, { method:'PUT', headers:{'Content-Type':'application/json'}, body: JSON.stringify(p) }),
  remove: (id)=> request(`/posts/${id}`, { method:'DELETE' }),
  like: (id)=> request(`/posts/${id}/like`, { method:'POST' })
}

export const comments = {
  create: (c)=> request('/comments', { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify(c)}),
  remove: (id)=> request(`/comments/${id}`, { method:'DELETE' })
}

export const follow = {
  follow: (targetId)=> request('/follow', { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({ targetId }) }),
  unfollow: (targetId)=> request('/unfollow', { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({ targetId }) })
}

export default { api: API };
