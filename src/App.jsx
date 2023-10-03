import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Create from './pages/Create';
import BlogDetails from './pages/BlogDetails'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/create' element={<Create />} />
        <Route path='/blogs/:id' element={<BlogDetails />} />
      </Routes>
    </>
  );
}

export default App;
