import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Pages/Home/Home";
import Footer from "./components/Footer/Footer";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import Contact from "./components/Pages/Home/Contact/Contact";

library.add(fab, fas);
function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
