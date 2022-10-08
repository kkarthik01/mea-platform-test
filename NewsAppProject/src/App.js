import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import NewsList from "./components/NewsList/NewsList";
import NavBarComponent from "./components/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SingleNews from "./components/SingleNews";

function App() {
  const [newsList, setNewsList] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await axios.get(
          "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=b4012a595cbd4e1ba049b3206958e74d"
        );
        setNewsList(res.data.articles);
      } catch (err) {
        console.log(err);
      }
      
    };
    fetchNews();
  }, []);

  return (
    <BrowserRouter>
      <NavBarComponent />
      <Routes>
        <Route path='/' element={<NewsList newsList={newsList}/>} />
        <Route path="/news/:id" element={<SingleNews newsList={newsList} />} />
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;

//b4012a595cbd4e1ba049b3206958e74d
