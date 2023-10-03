import { useParams } from "react-router-dom"

const BlogDetails = () => {
  const { id } = useParams();

  return (
    <section>
      <h1>BlogDetails - {id}</h1>
    </section>
  )
}

export default BlogDetails