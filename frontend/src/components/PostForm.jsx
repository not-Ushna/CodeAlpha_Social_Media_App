import React, { useState } from 'react'

export default function PostForm({ onSubmit, initial }){
  const [title, setTitle] = useState(initial?.title||'');
  const [body, setBody] = useState(initial?.body||'');
  const [category, setCategory] = useState(initial?.category||'Notes');

  return (
    <form onSubmit={e=>{e.preventDefault(); onSubmit({title,body,category})}} className="card">
      <div className="form-row">
        <label>Title</label>
        <input className="input" value={title} onChange={e=>setTitle(e.target.value)} />
      </div>
      <div className="form-row">
        <label>Category</label>
        <select className="input" value={category} onChange={e=>setCategory(e.target.value)}>
          <option>Notes</option>
          <option>Assignments</option>
          <option>Questions</option>
          <option>Announcements</option>
          <option>Events</option>
        </select>
      </div>
      <div className="form-row">
        <label>Body</label>
        <textarea value={body} onChange={e=>setBody(e.target.value)} />
      </div>
      <div style={{textAlign:'right'}}>
        <button className="btn">Post</button>
      </div>
    </form>
  )
}
