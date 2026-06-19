import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { users as usersApi, posts as postsApi, follow as followApi } from '../services/api'

export default function Profile(){
  const { id } = useParams();
  const [data, setData] = useState(null);
  useEffect(()=>{ usersApi.get(id).then(setData).catch(()=>{}); },[id]);
  if(!data) return <div style={{padding:20}}>Loading...</div>
  const user = data.user;
  return (
    <div style={{display:'flex',gap:20}}>
      <div style={{flex:1}}>
        <div className="card">
          <div style={{height:120,background:'#ddd',borderRadius:6,marginBottom:12}}>Cover</div>
          <div style={{display:'flex',gap:12,alignItems:'center'}}>
            <img src={user.avatar} className="avatar" alt="avatar" />
            <div>
              <div style={{fontWeight:700}}>{user.name}</div>
              <div className="small">{user.department} · Semester {user.semester}</div>
            </div>
          </div>
          <p style={{marginTop:12}}>{user.bio}</p>
          <div className="small">Followers: {user.followers} · Following: {user.following}</div>
        </div>
        <h3 style={{marginTop:12}}>Posts</h3>
        {data.posts.map(p=> (
          <div key={p.id} className="card">
            <div style={{fontWeight:700}}>{p.title}</div>
            <div className="small">{p.category} · {new Date(p.createdAt).toLocaleDateString()}</div>
            <p>{p.body}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
