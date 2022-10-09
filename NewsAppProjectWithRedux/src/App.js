import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import NewsList from "./components/NewsList/NewsList";
import NavBarComponent from "./components/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SingleNews from "./components/SingleNews";
import Count from "./components/Count";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {

  return (
    <Provider store={store}>
      <BrowserRouter>
        <NavBarComponent />
        <Routes>
          <Route path="/" element={<NewsList/>} />
          <Route
            path="/news/:id"
            element={<SingleNews />}
          />
          <Route path="/count" element={<Count />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;

//b4012a595cbd4e1ba049b3206958e74d
