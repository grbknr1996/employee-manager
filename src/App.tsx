import "./App.scss";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Employee from "./components/Employee";
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="add/employee" element={<Employee />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
