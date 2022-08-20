import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/layout/NavBar";
import Blogs from "./pages/blogs";
import Footer from "./components/layout/Footer";
import AddBlog from "./pages/addBlog";
import BlogDetails from "./pages/blogDetails";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <section className="hero is-large">
          <Routes>
            <Route path="/" element={<Blogs />} />
            <Route path="/create" element={<AddBlog />} />

            <Route path="/:id" element={<BlogDetails />} />
          </Routes>
        </section>
        <section className="hero is-small">
          <Footer />
        </section>
      </BrowserRouter>
    </div>
  );
}

export default App;
