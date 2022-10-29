import "./App.css";
import { Route, Routes, useNavigate } from "react-router-dom";

import Search from "./pages/Search";

import Layout from "./components/Layout";

import News from "./pages/News";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<News />} />
        <Route path="/address" element={<Search />} />
      </Route>
    </Routes>
  );
}

export default App;
