import React from 'react'
import { Link } from 'react-router-dom'

export default function PostCard({ post, author, onLike }){
  return (
    <article className="card">
      <div style={{display:'flex',gap:12,marginBottom:12}}>
        <img src={author?.avatar || '/avatars/default.svg'} className="avatar" alt="avatar" />
        <div style={{flex:1}}>
          <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-start'}}>
            <div>
              <div style={{fontWeight:700,fontSize:14}}>{author?.name}</div>
              <div className="post-meta">@{author?.username} · {new Date(post.createdAt).toLocaleDateString()}</div>
            </div>
            <span style={{background:'#f3e8ff',color:'#7c3aed',padding:'4px 10px',borderRadius:'6px',fontSize:'11px',fontWeight:600}}>{post.category}</span>
          </div>
        </div>
      </div>
      <h3 className="post-title">{post.title}</h3>
      <p className="post-body">{post.body.substring(0,300)}{post.body.length > 300 ? '...' : ''}</p>
      <div className="post-actions">
        <button className="btn" onClick={()=>onLike && onLike(post.id)}>👍 {post.likes.length}</button>
        <Link to={`/posts/${post.id}`} className="btn" style={{background:'#f3f4f6',color:'var(--text)'}}>💬 {post.comments.length}</Link>
        <Link to={`/profile/${author?.id}`} className="btn" style={{background:'#f3f4f6',color:'var(--text)'}}>Profile</Link>
      </div>
    </article>
  )
}
