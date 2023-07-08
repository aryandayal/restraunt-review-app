import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Restaurant from "./pages/Restaurant";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/restaurant/:restroName" element={<Restaurant />} />
      </Routes>
    </div>
  );
}

export default App;
