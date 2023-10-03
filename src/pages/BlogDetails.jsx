import { useParams } from "react-router-dom"
import useFetch from "../components/useFetch";

const BlogDetails = () => {
  const { id } = useParams();
  const {data: blog, isPending, error} = useFetch('http://localhost:3000/blogs/' + id)

  return (
    <section>
      { isPending && <div>Loading</div> }
      { error && <div>{ error }</div> }
      { blog && (
        <article>
          <h2>{ blog.title }</h2>
          <p>Written by { blog.author }</p>
          <p>{ blog.body }</p>
        </article>
      )}
    </section>
  )
}

export default BlogDetails