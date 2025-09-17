import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Gallery from "./pages/Gallery"
import Products from "./pages/Products"
import ProductDetail from "./pages/ProductDetail"
import Contact from "./pages/Contact"
function App() {
  return (
  
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product-detail" element={<ProductDetail />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
  
  
  )
}

export default App
