import { Route, Routes } from "react-router-dom";
import './App.css';
import Home from "./Pages";
import Login from "./Pages/login";
import Create from "./Pages/create";

function App() {
  return (
    <div>
      <Routes>
        {/* Auth */}
        <Route name='Login' path="/" element={<Login />} />
        <Route name='Home' path="/home" element={<Home />} />
        <Route name='Create' path="/create" element={<Create />} />
      </Routes>
    </div>
  );
}

export default App;
