import React from 'react'

const Create = () => {
  return (
    <section className="flex flex-col justify-center items-center gap-5">
      <h2 className='text-3xl text-red-500 mt-14'>Add a New Blog</h2>
      <form className='flex flex-col justify-center gap-3 w-1/3'>
        <label>Blog Title:</label>
        <input 
          type="text"
          className='border rounded-sm px-2 py-1'
          required
        />
        <label>Blog Body:</label>
        <textarea className='border rounded-sm px-2 py-1' required>

        </textarea>
        <label>Blog Author:</label>
        <select className='border rounded-sm px-2 py-1'>
          <option value="mario">mario</option>
          <option value="yoshi">yoshi</option>
        </select>
        <button className='self-center bg-red-500 text-white w-20 rounded-md px-1 py-2'>Add Blog</button>
      </form>
    </section>
  )
}

export default Create