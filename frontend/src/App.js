import "./App.css";
import Create from "./components/Create";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Signup from "./components/Signup";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <div className="App">
          <Routes>
            <Route Exact path="/" element={<Home />} />
            <Route path="/create" element={<Create />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
