import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from './components/Home/Home'
import NavBarComponent from "./components/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/About";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBarComponent />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/AboutUs' element={<About/>}/> 
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
