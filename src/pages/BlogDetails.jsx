import { useParams } from "react-router-dom"
import useFetch from "../components/useFetch";

const BlogDetails = () => {
  const { id } = useParams();
  const {data: blog, isPending, error} = useFetch('http://localhost:3000/blogs/' + id)

  return (
    <section className="flex justify-center items-center">
      { isPending && <div className="mt-14 text-teal-500">Loading...</div> }
      { error && <div className="text-red-500 font-bold mt-14">{ error }</div> }
      { blog && (
        <article className="flex flex-col gap-5 w-2/3 mt-14">
          <h2 className='text-2xl text-red-500'>{ blog.title }</h2>
          <p>Written by { blog.author }</p>
          <p>{ blog.body }</p>
        </article>
      )}
    </section>
  )
}

export default BlogDetails