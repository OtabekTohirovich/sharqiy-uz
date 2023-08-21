import "./App.css";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Footer from "./components/Footer";
import ProductPage from "./pages/ProductPage";

function App() {
  return (
    <div style={{ position: "relative", height: "100vh" }}>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product/:id" element={<ProductPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
