import { useNavigate, useParams } from 'react-router-dom';
import useFetch from '../components/useFetch';

const BlogDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data: blog, isPending, error } = useFetch(`http://localhost:3000/blogs/${id}`);
  const handleClick = () => {
    fetch(`http://localhost:3000/blogs/${blog.id}`, {
      method: 'DELETE',
    }).then(() => {
      navigate('/');
    });
  };

  return (
    <section className="flex justify-center items-center">
      { isPending && <div className="mt-14 text-teal-500">Loading...</div> }
      { error && <div className="text-red-500 font-bold mt-14">{ error }</div> }
      { blog && (
        <article className="flex flex-col gap-5 w-2/3 mt-14">
          <h2 className="text-2xl text-red-500">{ blog.title }</h2>
          <p>
            Written by
            { blog.author }
          </p>
          <p>{ blog.body }</p>
          <button type="submit" onClick={handleClick} className="bg-red-500 text-white rounded-lg w-1/12 px-1 py-2">Delete</button>
        </article>
      )}
    </section>
  );
};

export default BlogDetails;
