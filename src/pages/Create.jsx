import React from 'react'

const Create = () => {
  return (
    <section className="flex flex-col justify-center items-center gap-5">
      <h2 className='text-3xl text-red-500 mt-14'>Add a New Blog</h2>
      <form>
        <label>Blog Title:</label>
        <input 
          type="text"
          required
        />
        <label>Blog Body:</label>
        <textarea required>

        </textarea>
        <label>Blog Author:</label>
        <select>
          <option value="mario">mario</option>
          <option value="yoshi">yoshi</option>
        </select>
        <button>Add Blog</button>
      </form>
    </section>
  )
}

export default Create