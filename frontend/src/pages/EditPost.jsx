import React, { useEffect, useState } from 'react'
import PostForm from '../components/PostForm'
import { posts as postsApi } from '../services/api'
import { useParams, useNavigate } from 'react-router-dom'

export default function EditPost(){
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const nav = useNavigate();
  useEffect(()=>{ postsApi.get(id).then(setPost).catch(()=>{}); },[id]);
  const submit = async payload => { try{ await postsApi.update(id,payload); nav(`/posts/${id}`); }catch(e){alert('Error');} }
  if(!post) return <div style={{padding:20}}>Loading...</div>
  return (
    <div style={{padding:20}}>
      <h2>Edit Post</h2>
      <PostForm initial={post} onSubmit={submit} />
    </div>
  )
}
