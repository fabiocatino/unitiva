import Home from "../src/components/pages/Home";
import { Route, Routes } from "react-router-dom";
import "../src/styles/globals.css";
import Cart from "./components/pages/Cart";
import ThankYou from "./components/pages/ThankYou";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/thank-you" element={<ThankYou />} />
      </Routes>
    </div>
  );
}

export default App;
