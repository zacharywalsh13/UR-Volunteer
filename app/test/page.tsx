"use client"
import React, { useState, useEffect } from 'react'
import {  client } from '../../sanity/lib/client' 
type Post = {
  title: string;
  slug: string;
};

const MyComponent = () => {
  const [posts, setPosts] = useState<Post[] | null>(null)

  useEffect(() => {
    client.fetch('*[_type == "post"]{title, slug}')
      .then((data: Post[]) => setPosts(data))
      .catch(console.error)
  }, [])

  return (
    <div>
      {posts ? posts.map((post: Post, index: number) => <h2 key={index}>{post.title}</h2>) : <h2>Loading...</h2>}
    </div>
  )
}

export default MyComponent
