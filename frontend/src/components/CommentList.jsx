import React, { useState } from 'react'

export default function CommentList({ comments = [], onAdd, onDelete, usersMap }){
  const [text, setText] = useState('');
  return (
    <div className="card">
      <h4>Comments</h4>
      <div style={{display:'flex',gap:8,marginBottom:8}}>
        <input className="input" value={text} onChange={e=>setText(e.target.value)} placeholder="Write a comment" />
        <button className="btn" onClick={() => { if(text.trim()){ onAdd(text); setText(''); } }}>Comment</button>
      </div>
      {comments.map(c=> (
        <div key={c.id} style={{borderTop:'1px solid #f1f3f5',paddingTop:8,paddingBottom:8}}>
          <div style={{fontWeight:600}}>{usersMap[c.authorId]?.name || 'Student'}</div>
          <div className="small">{new Date(c.createdAt).toLocaleString()}</div>
          <div style={{marginTop:6}}>{c.text}</div>
          {onDelete && <div style={{marginTop:6}}><button className="btn" onClick={()=>onDelete(c.id)}>Delete</button></div>}
        </div>
      ))}
    </div>
  )
}
