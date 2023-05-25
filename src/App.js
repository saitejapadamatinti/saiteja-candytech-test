import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/homePage";
import Category from "./components/category";
import Sidebar from "./components/sidebar";
import Header from "./components/header";

function App() {
  return (
    <div>
      {/* className="app-main-container" */}
      <Header />
      <div className="app-container">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category" element={<Category />} />  
        </Routes>
      </div>
    </div>
  );
}

export default App;
