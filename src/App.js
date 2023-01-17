import { Routes ,Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Details from "./pages/Details";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Shop from "./pages/Shop";
import AboutUs from "./pages/AboutUs";
import BlogPage from "./pages/BlogPage";
import ContactUs from "./pages/ContactUs";

function App() {


  const location=useLocation()

useEffect(()=>{window.scrollTo(0,0)},[location])
  return (
    <div className="App">
    <Header />
    <Routes>
<Route path="/" element={<Home />} />
<Route path="/cart/:id" element={<Details />} />
<Route path="/shop" element={<Shop />} />
<Route path="/about" element={<AboutUs/>} />
<Route path="/blog" element={<BlogPage/>} />
<Route path="/contact" element={<ContactUs/>} />



    </Routes>
    <Footer/>




    </div>
  );
}

export default App;
