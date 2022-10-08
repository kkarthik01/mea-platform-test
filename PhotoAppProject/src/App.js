import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Photo from "./components/Photos/Photo";
import NavBarComponent from "./components/NavBar";
import EnlargedPhoto from "./components/EnlargedPhoto";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/About";
import ContactUs from "./components/ContactUs";
import NotFound from "./components/NotFound";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBarComponent />
        
        <Routes>
          <Route path='/' element={<Photo />} />
          <Route path='/AboutUs' element={<About />} /> 
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path='/photos/:id' element={<EnlargedPhoto />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        
      </div>
    </BrowserRouter>
  );
}

export default App;

/* <Link to='/AboutUs'>About</Link>
        <Link to='/ContactUs'>ContactUs</Link>
        <Link to='/'>NavBarComponent</Link> */