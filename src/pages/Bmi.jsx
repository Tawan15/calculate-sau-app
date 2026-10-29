import bmi from "./../assets/bmi.png";
import { Link } from "react-router";

export default function Bmi() {
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

        {/* ส่วนของ from ให้ผู้ใช้ป้อนเลือกคลิก */}
        <form className="w-full flex flex-col">
          <label className="font-kanit ">ป้อนน้ำหนัก (กิโลกรัม)</label>
          <input
            type="number"
            name=""
            id=""
            placeholder="เช่น 65"
            className="border border-gray-500 rounded-sm p-2"
          />

          <label className="font-kanit  mt-5">ป้อนส่วนสูง (เซนติเมตร)</label>
          <input
            type="number"
            name=""
            id=""
            placeholder="เช่น 170"
            className="border border-gray-500 rounded-sm p-2"
          />

          <button className="bg-blue-600 text-white p-2 mt-5 rounded-sm font-kanit font-bold hover:bg-blue-800 cursor-pointer">
            คำนวณ BMI
          </button>
          <button className="bg-gray-200 text-gray-700 p-2 mt-5 rounded-sm font-kanit font-bold hover:bg-gray-300 cursor-pointer">
            รีเซ็ต
          </button>
        </form>
        {/* แสดงผล */}
        <div className="flex items-center justify-center mt-5 gap-5">
          <p className="font-kanit font-bold mt-5">ค่า BMI ที่คำนวณได้ </p>
          <p className="font-kanit font-bold mt-5 text-blue-600">0.00</p>
        </div>
        {/* ลิงค์กลับไปหน้าหลัก */}
        <Link
          to="/"
          className="w-full text-center bg-gray-200 text-gray-700 p-2 mt-5 rounded-sm font-kanit font-bold hover:bg-gray-300"
        >
          กลับหน้าหลัก
        </Link>
      </div>
    </>
  );
}
