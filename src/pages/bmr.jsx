import bmrImg from "../assets/bmr.png";
import { Link } from "react-router";
import { useState } from "react";
import Swal from "sweetalert2";
import Footer from "./../components/Footer";

export default function Bmr() {
  //สร้าง state
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("m");
  const [bmrValue, setBmrValue] = useState("0.00");

  //สร้างฟังก์ชัน คำนวณ BMR ------------
  const handleCalBmrClick = (e) => {
    e.preventDefault();

    //Validate UI
    if (weight === "" || height === "" || age === "") {
      Swal.fire({
        icon: "warning",
        title: "คำเตือน",
        text: "กรุณากรอกข้อมูลให้ครบถ้วน",
        confirmButtonText: "ตกลง",
      });

      return;
    }

    //พร้อมคำนวณ แต่ต้องแปลง state ที่จะต้องใช้ในการคำนวณให้เป็นตัวเลขก่อน
    const w = Number(weight);
    const h = Number(height);
    const a = Number(age);
    let bmrResult;

    if (gender === "m") {
      bmrResult = 66 + 13.7 * w + 5 * h - 6.8 * a;
    } else {
      bmrResult = 655 + 9.6 * w + 1.8 * h - 4.7 * a;
    }

    //นำผลที่ได้ไปกำหนดให้กับ state bmrValue เพื่อแสดงผลต่อไป
    setBmrValue(bmrResult.toFixed(2));
  };

  //สร้างฟังก์ชัน reset ค่าบน component
  const handleResetClick = (e) => {
    e.preventDefault();

    setWeight("");
    setHeight("");
    setAge("");
    setGender("m");
    setBmrValue("0.00");
  };

  return (
    <>
      <div className="font-kanit min-h-screen bg-gray-100 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-lg flex flex-col items-center">
          {/* หัวข้อ */}
          <h1 className="text-2xl font-bold text-gray-800">BMR Calculator</h1>
          <p className="text-gray-500 mb-6">คำนวณ BMR</p>

          {/* แสดงรูปภาพ bmr.png */}
          <div className="mb-6 flex justify-center">
            <img
              src={bmrImg}
              alt="BMR Icon"
              className="w-24 h-24 object-contain rounded-2xl shadow-md"
            />
          </div>

          {/* ฟอร์มกรอกข้อมูล */}
          <div className="w-full flex flex-col gap-4">
            <div>
              <label className="block text-sm text-gray-600 mb-1">
                ป้อนน้ำหนัก (กิโลกรัม)
              </label>
              <input
                type="number"
                placeholder="น้ำหนัก"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                className="w-full border border-gray-300 p-2.5 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-600 mb-1">
                ป้อนส่วนสูง (เซนติเมตร)
              </label>
              <input
                type="number"
                placeholder="ส่วนสูง"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                className="w-full border border-gray-300 p-2.5 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-600 mb-1">
                ป้อนอายุ (ปี)
              </label>
              <input
                type="number"
                placeholder="อายุ"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                className="w-full border border-gray-300 p-2.5 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-600 mb-1">เพศ:</label>
              <div className="flex gap-6 mt-1">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="gender"
                    value="m"
                    checked={gender === "m"}
                    onChange={(e) => setGender(e.target.value)}
                    className="w-4 h-4 text-indigo-600"
                  />
                  <span className="text-gray-700">ชาย</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="gender"
                    value="f"
                    checked={gender === "f"}
                    onChange={(e) => setGender(e.target.value)}
                    className="w-4 h-4 text-indigo-600"
                  />
                  <span className="text-gray-700">หญิง</span>
                </label>
              </div>
            </div>

            {/* ปุ่มคำนวณและรีเซ็ต */}
            <div className="flex gap-4 mt-2">
              <button
                onClick={handleCalBmrClick}
                type="button"
                className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white p-3 rounded-lg font-medium transition cursor-pointer shadow-md"
              >
                คำนวณ BMR
              </button>
              <button
                onClick={handleResetClick}
                type="button"
                className="flex-1 bg-red-500 hover:bg-red-600 text-white p-3 rounded-lg font-medium transition cursor-pointer shadow-md"
              >
                รีเซ็ต
              </button>
            </div>
          </div>

          {/* ผลลัพธ์ */}
          <div className="mt-6 text-center">
            <p className="text-gray-600">
              ค่า BMR ที่คำนวณได้:
              <span className="text-indigo-600 font-bold ml-2">{bmrValue}</span>
            </p>
          </div>

          {/* ปุ่มกลับหน้าหลัก */}

          <Link
            to="/"
            className="w-full text-center mt-5 bg-gray-200 hover:bg-gray-300 text-gray-700 p-3 rounded-lg font-medium transition cursor-pointer"
          >
            กลับหน้าหลัก
          </Link>
        </div>
      </div>

      <div className="w-full flex justify-center">
        <Footer />
      </div>
    </>
  );
}
