import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Gallery, Loginpage, Logout } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Gallery />} />
        <Route path="/login" element={<Loginpage />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
