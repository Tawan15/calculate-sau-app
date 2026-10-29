import bmr from "./../assets/bmr.png";
import { Link } from "react-router";

export default function Bmr() {
  return (
    <>
      <div className="w-200 mt-20 mx-auto border-2 border-gray-100 shadow-2xl flex flex-col items-center p-15">
        <p className="text-3xl font-kanit font-bold text-center">
          BMR Calculator
        </p>
        <p className="text-lg font-kanit text-center text-gray-700">
          คำนวณ BMR
        </p>
        {/* แสดงรูป */}
        <img src={bmr} alt="bmr" className="mt-5 w-30" />

        {/* ส่วนของ form ให้ผู้ใช้ป้อนข้อมูล */}
        <form className="w-full flex flex-col mt-5">
          <label className="font-kanit ">ป้อนน้ำหนัก (กิโลกรัม)</label>
          <input
            type="number"
            name=""
            id=""
            placeholder="เช่น 65 "
            className="border border-gray-500 rounded-sm p-2 mt-1"
          />

          <label className="font-kanit  mt-4">ป้อนส่วนสูง (เซนติเมตร)</label>
          <input
            type="number"
            name=""
            id=""
            className="border border-gray-500 rounded-sm p-2 mt-1"
          />

          <label className="font-kanit  mt-4">ป้อนอายุ (ปี)</label>
          <input
            type="number"
            name=""
            id=""
            className="border border-gray-500 rounded-sm p-2 mt-1"
          />

          <label className="font-kanit  mt-4">เพศ:</label>
          <div className=" gap-5 mt-1 font-kanit">
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="gender" defaultChecked /> ชาย
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="gender" /> หญิง
            </label>
          </div>

          <div className="flex gap-4 mt-6">
            <button
              type="button"
              className="w-1/2 bg-blue-600 text-white p-2 rounded-sm font-kanit font-bold hover:bg-blue-800 cursor-pointer"
            >
              คำนวณ BMR
            </button>
            <button
              type="button"
              className="w-1/2 bg-red-500 text-white p-2 rounded-sm font-kanit font-bold hover:bg-red-700 cursor-pointer"
            >
              รีเซ็ต
            </button>
          </div>
        </form>

        {/* แสดงผล */}
        <div className="flex items-center justify-center mt-6 gap-3">
          <p className="font-kanit font-bold">ค่า BMR ที่คำนวณได้: </p>
          <p className="font-kanit font-bold text-blue-600">0.00</p>
        </div>

        {/* ลิงค์กลับไปหน้าหลัก */}
        <Link
          to="/"
          className="w-full text-center bg-gray-200 text-gray-700 p-2 mt-6 rounded-sm font-kanit font-bold hover:bg-gray-300"
        >
          กลับหน้าหลัก
        </Link>
      </div>
    </>
  );
}
