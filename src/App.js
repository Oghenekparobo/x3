import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import CardGallery from "./pages/CardGallery";
import Logout from "./pages/Logout";
import Loginpage from "./pages/Loginpage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CardGallery />} />
        <Route path="/login" element={<Loginpage />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
