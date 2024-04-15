import { Routes, Route } from "react-router-dom"
import Home from "./components/home"
import News from "./components/news"
import About from "./components/about"
import Navbar from "./components/navbar"
import NotFound from "./components/not-found"
import NgoaiHangAnh from './components/ngoai-hang-anh';
import NewsDetail from './components/news-detail';
function App() {
  return (
    <div className="container">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/news" element={<News />} />
        <Route path="/news/:slug/:newid" element={<NewsDetail />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App
