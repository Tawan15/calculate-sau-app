import bmi from "./../assets/bmi.png";
import { Link } from "react-router";
import { useState } from "react";
import Swal from "sweetalert2";
import Footer from "../components/Footer";

export default function Bmi() {
  // สร้าง state
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmiValue, setBmiValue] = useState("0.00");

  // สร้างฟังก์ชัน คำนวณ BMI ------------
  const handleCalBmiClick = (e) => {
    e.preventDefault();

    // Validate UI
    if (weight === "" || height === "") {
      Swal.fire({
        icon: "warning",
        title: "คำเตือน",
        text: "กรุณากรอกข้อมูลให้ครบถ้วน",
        confirmButtonText: "ตกลง",
      });

      return;
    }

    // พร้อมคำนวณ แต่ต้องแปลง state ที่จะต้องใช้ในการคำนวณให้เป็นตัวเลขก่อน
    const w = Number(weight);
    const h = Number(height) / 100; // แปลงส่วนสูงจากเซนติเมตรเป็นเมตร

    // สูตรคำนวณ BMI = น้ำหนัก (kg) / (ส่วนสูง (m) * ส่วนสูง (m))
    const bmiResult = w / (h * h);

    // นำผลที่ได้ไปกำหนดให้กับ state bmiValue เพื่อแสดงผลต่อไป
    setBmiValue(bmiResult.toFixed(2));
  };

  // สร้างฟังก์ชัน reset ค่าบน component
  const handleResetClick = (e) => {
    e.preventDefault();

    setWeight("");
    setHeight("");
    setBmiValue("0.00");
  };

  return (
    <>
      <div className="w-200 mt-40 mx-auto border-2 border-gray-100 shadow-2xl flex flex-col items-center p-15">
        <p className="text-3xl font-kanit font-bold text-center">
          BMI Calculator
        </p>
        <p className="text-lg font-kanit text-center text-gray-700">
          คำนวณ BMI
        </p>
        {/* แสดงรูป */}
        <img src={bmi} alt="bmi" className="mt-5 w-30" />

        {/* ส่วนของ form ให้ผู้ใช้ป้อนเลือกคลิก */}
        <form className="w-full flex flex-col">
          <label className="font-kanit">ป้อนน้ำหนัก (กิโลกรัม)</label>
          <input
            type="number"
            placeholder="เช่น 65"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            className="border border-gray-500 rounded-sm p-2"
          />

          <label className="font-kanit mt-5">ป้อนส่วนสูง (เซนติเมตร)</label>
          <input
            type="number"
            placeholder="เช่น 170"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            className="border border-gray-500 rounded-sm p-2"
          />

          <button
            type="button"
            onClick={handleCalBmiClick}
            className="bg-blue-600 text-white p-2 mt-5 rounded-sm font-kanit font-bold hover:bg-blue-800 cursor-pointer"
          >
            คำนวณ BMI
          </button>
          <button
            type="button"
            onClick={handleResetClick}
            className="bg-gray-200 text-gray-700 p-2 mt-5 rounded-sm font-kanit font-bold hover:bg-gray-300 cursor-pointer"
          >
            รีเซ็ต
          </button>
        </form>

        {/* แสดงผล */}
        <div className="flex items-center justify-center mt-5 gap-5">
          <p className="font-kanit font-bold mt-5">ค่า BMI ที่คำนวณได้ </p>
          <p className="font-kanit font-bold mt-5 text-blue-600">{bmiValue}</p>
        </div>

        {/* ลิงค์กลับไปหน้าหลัก */}
        <Link
          to="/"
          className="w-full text-center bg-gray-200 text-gray-700 p-2 mt-5 rounded-sm font-kanit font-bold hover:bg-gray-300"
        >
          กลับหน้าหลัก
        </Link>
      </div>

      <div className="w-full flex justify-center mt-10">
        <Footer />
      </div>
    </>
  );
}
