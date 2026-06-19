import React, { useState } from 'react'
import { posts as postsApi, users as usersApi } from '../services/api'
import PostCard from '../components/PostCard'

export default function Search(){
  const [q, setQ] = useState('');
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);

  const doSearch = async ()=>{
    const ps = await postsApi.list(`q=${encodeURIComponent(q)}`);
    setPosts(ps);
    const us = await usersApi.list();
    setUsers(us.filter(u=>u.username.includes(q) || u.name.includes(q)));
  }

  return (
    <div style={{padding:20}}>
      <h2>Search</h2>
      <div style={{display:'flex',gap:8}}>
        <input className="input" value={q} onChange={e=>setQ(e.target.value)} />
        <button className="btn" onClick={doSearch}>Search</button>
      </div>
      <h3>Users</h3>
      {users.map(u=> <div key={u.id} className="card">{u.name} · {u.department}</div>)}
      <h3>Posts</h3>
      {posts.map(p=> <PostCard key={p.id} post={p} author={{id:p.authorId,name:'Student'}} />)}
    </div>
  )
}
