import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout/layout";
import Home from "./Pages/home/home";
import About from "./Pages/about/about";
import Location from "./Pages/location/location";
import "../src/assets/style/global.scss";
import Error404 from "./Pages/Error/Error.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/locations/:id" element={<Location />}/>
          <Route path="*" element={<Error404 />}/>
        </Route>
      </Routes>
    </BrowserRouter >
  );
}