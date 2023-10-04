import React, { useState } from 'react'

const Create = () => {
  const [ title, setTitle ] = useState('');
  const [ body, setBody ] = useState('');
  const [ author, setAuthor ] = useState('mario');

  const handleSubmit = (e) => {
    e.preventDefault()
    const blog = { title, body, author };
    fetch('http://localhost:3000/blogs', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(blog)
    }).then(() => {
      console.log('Blog Added');
    })
  }
 
  return (
    <section className="flex flex-col justify-center items-center gap-5">
      <h2 className='text-3xl text-red-500 mt-14'>Add a New Blog</h2>
      <form onSubmit={handleSubmit} className='flex flex-col justify-center gap-3 w-1/3'>
        <label>Blog Title:</label>
        <input 
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className='border rounded-sm px-2 py-1'
          required
        />
        <label>Blog Body:</label>
        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
          className='border rounded-sm px-2 py-1'
          required
        >
        </textarea>
        <label>Blog Author:</label>
        <select
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          className='border rounded-sm px-2 py-1'
        >
          <option value="mario">mario</option>
          <option value="yoshi">yoshi</option>
        </select>
        <button className='self-center bg-red-500 text-white w-20 rounded-md px-1 py-2'>Add Blog</button>
        <p>{title}</p>
        <p>{body}</p>
        <p>{author}</p>
      </form>
    </section>
  )
}

export default Create