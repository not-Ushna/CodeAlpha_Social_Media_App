import React from 'react'
import PostForm from '../components/PostForm'
import { posts as postsApi } from '../services/api'
import { useNavigate } from 'react-router-dom'

export default function CreatePost(){
  const nav = useNavigate();
  const submit = async (payload) => {
    try{ const res = await postsApi.create(payload); nav(`/posts/${res.id}`); }catch(e){ alert('Error creating post'); }
  }
  return (
    <div style={{padding:20}}>
      <h2>Create Post</h2>
      <PostForm onSubmit={submit} />
    </div>
  )
}
