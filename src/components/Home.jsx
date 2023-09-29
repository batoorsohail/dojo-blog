import { useState } from "react"

const Home = () => {
  let [num, setNum] = useState(0);

  const handleClick = () => {
    setNum(num + 1);
  }

  const handleChange = () => {
    setNum(num - 1);
  }

  return (
    <div className="flex flex-col gap-5">
      <p className="font-bold text-lg">{num}</p>
      <div>
        <button onClick={handleClick} className="px-5 py-2 bg-blue-600 text-white">
          Increase Me
        </button>
        <button onClick={handleChange} className="px-5 py-2 bg-red-500 text-white">
          Decrease Me
        </button>
      </div>
    </div>
  )
}

export default Home