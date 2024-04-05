import { Route, Routes } from "react-router-dom";
import './App.css';
import Home from "./Pages";

function App() {
  return (
    <div>
      <Routes>
        {/* Auth */}
        <Route name='Home' path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
