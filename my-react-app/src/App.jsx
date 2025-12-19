import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout/layout";
import Banner from "./Pages/home/banner";
import About from "./Pages/about/banner";
import "../src/assets/style/global.scss"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Banner />} />
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}