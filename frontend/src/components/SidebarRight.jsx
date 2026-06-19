import React, { useEffect, useState } from 'react'
import { posts as postsApi } from '../services/api'

export default function SidebarRight(){
  const [trending, setTrending] = useState([]);
  useEffect(()=>{ postsApi.list('sort=liked').then(setTrending).catch(()=>{}); },[]);
  return (
    <aside className="right">
      <div className="card">
        <h4>Trending</h4>
        {trending.slice(0,5).map(p=> (
          <div key={p.id} style={{padding:'8px 0',borderTop:'1px solid #f1f3f5'}}>
            <div style={{fontWeight:600}}>{p.title}</div>
            <div className="small">{p.likes.length} likes · {new Date(p.createdAt).toLocaleDateString()}</div>
          </div>
        ))}
      </div>
    </aside>
  )
}
