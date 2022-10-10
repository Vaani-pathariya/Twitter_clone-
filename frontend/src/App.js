import "./App.css";
import Navbar from "./Navbar";
import Main from "./Main";
import New from "./New";
import Search from "./Search";
import {BrowserRouter,Routes ,Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <header className="App-header">
        <div><Navbar /></div>
        <div >
          <Routes>
            <Route exact path="/" element={<Main/>}></Route>
            <Route path="/search" element ={<Search/>}></Route>
          </Routes>
        </div>
        <div ><New /></div>
      </header>
    </div>
    </BrowserRouter>
  );
}

export default App;
