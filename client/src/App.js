import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/home";
import NavBar from "./components/layout/NavBar";
import Blogs from "./pages/blogs";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
        <section  className="hero is-large">
          <Routes>
            <Route 
              path="/"
              element={<Home/>}/>
            <Route
              path="/blogs"
              element={<Blogs/>}/>
          </Routes>
        </section>
        <section className="hero is-small">
          <Footer/>
        </section>
      </BrowserRouter>
    </div>
  );
}

export default App;
