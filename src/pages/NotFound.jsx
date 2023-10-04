import { Link } from "react-router-dom"

const NotFound = () => {
  return (
    <section className="flex flex-col justify-center items-center">
      <div className="mt-14">
        <h1 className='text-2xl text-gray-500'>Sorry!</h1>
        <p>The page Not Found</p>
        <Link to="/" className="text-gray-500">
          Back to Home page
        </Link>
      </div>
    </section>
  )
}

export default NotFound