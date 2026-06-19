import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { posts as postsApi, comments as commentsApi, users as usersApi } from '../services/api'
import CommentList from '../components/CommentList'

export default function PostDetails(){
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);
  const [users, setUsers] = useState([]);
  useEffect(()=>{
    async function load(){
      try{
        const p = await postsApi.get(id);
        setPost(p);
        setComments(p.comments || []);
        const us = await usersApi.list();
        setUsers(us);
      }catch(e){}
    }
    load();
  },[id]);

  const usersMap = Object.fromEntries(users.map(u=>[u.id,u]));

  const addComment = async text => {
    try{
      const res = await commentsApi.create({ postId: id, text });
      setComments(cs=>[...cs,res]);
    }catch(e){}
  }

  const delComment = async cid => {
    try{ await commentsApi.remove(cid); setComments(cs=>cs.filter(c=>c.id!==cid)); }catch(e){}
  }

  if(!post) return <div style={{padding:20}}>Loading...</div>
  return (
    <div style={{display:'flex',gap:20}}>
      <div style={{flex:1}}>
        <div className="card">
          <h2>{post.title}</h2>
          <div className="small">{post.category} · {new Date(post.createdAt).toLocaleString()}</div>
          <p>{post.body}</p>
        </div>
        <CommentList comments={comments} onAdd={addComment} onDelete={delComment} usersMap={usersMap} />
      </div>
    </div>
  )
}
