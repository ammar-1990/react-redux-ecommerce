import { Routes ,Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Details from "./pages/Details";

function App() {
  return (
    <div className="App">
    <Header />
    <Routes>
<Route path="/" element={<Home />} />
<Route path="/cart/:id" element={<Details />} />



    </Routes>
    <Footer/>




    </div>
  );
}

export default App;
