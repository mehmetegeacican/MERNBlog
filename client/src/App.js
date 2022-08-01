import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/home";
import NavBar from "./components/layout/NavBar";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
        <div  className="pages">
          <Routes>
            <Route 
              path="/"
              element={<Home/>}/>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
