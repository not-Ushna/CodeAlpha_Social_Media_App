import React from 'react'
import { Link } from 'react-router-dom'

export default function SidebarLeft(){
  return (
    <aside className="left">
      <div className="card">
        <h3>Campus Connect</h3>
        <p className="small">A students-first network for sharing notes, questions and events.</p>
      </div>
      <nav className="card">
        <ul style={{listStyle:'none',padding:0,margin:0}}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/create">Create Post</Link></li>
          <li><Link to="/search">Search</Link></li>
          <li><Link to="/notifications">Notifications</Link></li>
        </ul>
      </nav>
    </aside>
  )
}
