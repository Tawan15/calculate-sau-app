//ไฟล์สำหรับตั้งค่า Router ต่างๆ ของการ Re-render
import { BrowserRouter, Router, Route, Routes } from "react-router";
import Home from "./pages/Home";
import Bmi from "./pages/Bmi";
import Bmr from "./pages/Bmr";
import Car from "./pages/Car";
export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="bmi" element={<Bmi />} />
          <Route path="bmr" element={<Bmr />} />
          <Route path="car" element={<Car />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
 