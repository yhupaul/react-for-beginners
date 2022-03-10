import React, {useState}   from "react"
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom"

import Header from "./components/Header";
import Detail from "./routes/Detail";
import Home from "./routes/Home";
import Group from "./routes/Group";
import Search from "./routes/Search";

function App() {

  return (
  <div>
    <Router>  
    <Header />  
    <Routes>
        <Route path={`/search/:search`} element={<Search />}>
        </Route>
        <Route path={`/page/:group/:page`} element={<Group />}>
        </Route>        
        <Route path="/movie/:id" element={<Detail />}> 
        </Route>
        <Route path="/" element={<Home />}>
        </Route>
      </Routes>
    </Router>
  </div>
  );
}

export default App;
