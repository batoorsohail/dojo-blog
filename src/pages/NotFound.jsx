import React from 'react'

const NotFound = () => {
  return (
    <section className="flex flex-col items-center">
      <h1 className='text-2xl text-gray-500'>Sorry!</h1>
      <p>The page Not Found</p>
      <Link to="/" className="text-gray-500">
        Back to Home page
      </Link>
    </section>
  )
}

export default NotFound