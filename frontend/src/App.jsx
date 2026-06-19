import React, { useContext } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Profile from './pages/Profile'
import PostDetails from './pages/PostDetails'
import CreatePost from './pages/CreatePost'
import EditPost from './pages/EditPost'
import Search from './pages/Search'
import Notifications from './pages/Notifications'
import { AuthContext } from './context/AuthContext'

export default function App(){
  const { user, logout } = useContext(AuthContext);
  return (
    <div className="app">
      <header>
        <h1>Campus Connect</h1>
        <nav>
          {user? <><Link to={`/profile/${user.id}`} style={{fontWeight:600}}>{user.username}</Link><button className="btn" onClick={logout} style={{padding:'8px 12px'}}>Logout</button></> : <><Link to="/login" style={{fontWeight:500}}>Login</Link><Link to="/register" style={{fontWeight:500}}>Register</Link></>}
        </nav>
      </header>
      <div style={{display:'flex',flex:1}}>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/profile/:id" element={<Profile/>} />
          <Route path="/posts/:id" element={<PostDetails/>} />
          <Route path="/create" element={<CreatePost/>} />
          <Route path="/edit/:id" element={<EditPost/>} />
          <Route path="/search" element={<Search/>} />
          <Route path="/notifications" element={<Notifications/>} />
        </Routes>
      </div>
    </div>
  )
}
