import {BrowserRouter, Routes, Route} from "react-router-dom";
import NavBar from "./components/layout/NavBar";
import Blogs from "./pages/blogs";
import Footer from "./components/layout/Footer";
import AddBlog from "./pages/addBlog";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
        <section  className="hero is-large">
          <Routes>
            <Route 
              path="/"
              element={<Blogs/>}/>
            <Route 
              path="/create"
              element={<AddBlog/>}/>
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
