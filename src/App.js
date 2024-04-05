import { Route, Routes } from "react-router-dom";
import './App.css';
import Home from "./Pages";
import Login from "./Pages/login";

function App() {
  return (
    <div>
      <Routes>
        {/* Auth */}
        <Route name='Login' path="/" element={<Login />} />
        <Route name='Home' path="/home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
