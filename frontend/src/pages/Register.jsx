import React, { useState, useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'

export default function Register(){
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const { register } = useContext(AuthContext);
  const nav = useNavigate();
  const [err, setErr] = useState(null);

  const submit = async e => {
    e.preventDefault();
    try{ await register({ username, password, name }); nav('/'); }catch(er){ setErr(er.error || 'Register failed'); }
  }

  return (
    <div style={{padding:20}}>
      <h2>Register</h2>
      <form onSubmit={submit} style={{maxWidth:400}}>
        <div className="form-row"><label>Full name</label><input className="input" value={name} onChange={e=>setName(e.target.value)} /></div>
        <div className="form-row"><label>Username</label><input className="input" value={username} onChange={e=>setUsername(e.target.value)} /></div>
        <div className="form-row"><label>Password</label><input type="password" className="input" value={password} onChange={e=>setPassword(e.target.value)} /></div>
        {err && <div style={{color:'crimson'}}>{err}</div>}
        <div style={{marginTop:8}}><button className="btn">Register</button></div>
      </form>
    </div>
  )
}
