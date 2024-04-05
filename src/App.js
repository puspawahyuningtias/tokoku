import { Route, Routes } from "react-router-dom";
import './App.css';
import Home from "./Pages";
import Login from "./Pages/login";
import Create from "./Pages/create";
import Update from "./Pages/update";

function App() {
  return (
    <div>
      <Routes>
        {/* Auth */}
        <Route name='Login' path="/" element={<Login />} />
        <Route name='Home' path="/home" element={<Home />} />
        <Route name='Create' path="/create" element={<Create />} />
        <Route name='Update' path="/update/:id" element={<Update />} />
      </Routes>
    </div>
  );
}

export default App;
