import { Route, Routes } from "react-router-dom"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import About from "./pages/About"
import ScrollToTop from "./components/ScrollToTop"
import Menu from "./pages/Menu"
import Blog from "./pages/Blog"
import BlogDetails from "./pages/BlogDetails"
import Contact from "./pages/Contact"
import BookTable from "./pages/BookTable"

const App = () => {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Routes> 
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu/:category" element={<Menu />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogDetails />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/book-table" element={<BookTable />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App
