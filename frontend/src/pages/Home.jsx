import React, { useEffect, useState, useContext } from 'react'
import SidebarLeft from '../components/SidebarLeft'
import SidebarRight from '../components/SidebarRight'
import PostCard from '../components/PostCard'
import { posts as postsApi, users as usersApi } from '../services/api'
import { AuthContext } from '../context/AuthContext'

export default function Home(){
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(()=>{ postsApi.list().then(setPosts).catch(()=>{}); usersApi.list().then(setUsers).catch(()=>{}); },[]);

  const usersMap = Object.fromEntries(users.map(u=>[u.id,u]));
  const handleLike = async (id) => {
    try{ await postsApi.like(id);
      setPosts(ps=>ps.map(p=>p.id===id?{...p, likes: p.likes.includes(user?.id)?p.likes.filter(x=>x!==user.id):[...p.likes, user.id]}:p))
    }catch(e){}
  }

  return (
    <div className="app">
      <SidebarLeft />
      <main className="main">
        <div className="nav">
          <h2>Home</h2>
          <div className="small">{user?`Signed in as ${user.username}`:'Not signed in'}</div>
        </div>
        {posts.map(p=> (
          <PostCard key={p.id} post={p} author={usersMap[p.authorId]} onLike={handleLike} />
        ))}
      </main>
      <SidebarRight />
    </div>
  )
}
