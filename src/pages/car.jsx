import car from "./../assets/car.png";
import { Link } from "react-router";

export default function Car() {
  return (
    <>
      <div className="w-200 mt-20 mx-auto border-2 border-gray-100 shadow-2xl flex flex-col items-center p-15">
        <p className="text-3xl font-kanit font-bold text-center">
          Car Installment Calculator
        </p>
        <p className="text-lg font-kanit text-center text-gray-700">
          คำนวณ Car Installment
        </p>
        {/* แสดงรูป */}
        <img src={car} alt="car" className="mt-5 w-30" />

        {/* ส่วนของ form ให้ผู้ใช้ป้อนข้อมูล */}
        <form className="w-full flex flex-col mt-5">
          <label className="font-kanit ">ชื่อผู้ซื้อรถ</label>
          <input
            type="text"
            name=""
            id=""
            className="border border-gray-500 rounded-sm p-2 mt-1"
          />

          <label className="font-kanit  mt-4">ราคารถ (บาท)</label>
          <input
            type="number"
            name=""
            id=""
            className="border border-gray-500 rounded-sm p-2 mt-1"
          />

          <label className="font-kanit  mt-4">ดอกเบี้ยต่อปี (%)</label>
          <input
            type="number"
            name=""
            id=""
            className="border border-gray-500 rounded-sm p-2 mt-1"
          />

          <label className="font-kanit  mt-4">เงินดาวน์ (%)</label>
          <div className="flex gap-6 mt-1 font-kanit text-sm">
            <label className="flex items-center gap-1 cursor-pointer">
              <input type="radio" name="downpayment" defaultChecked /> 15%
            </label>
            <label className="flex items-center gap-1 cursor-pointer">
              <input type="radio" name="downpayment" /> 20%
            </label>
            <label className="flex items-center gap-1 cursor-pointer">
              <input type="radio" name="downpayment" /> 25%
            </label>
            <label className="flex items-center gap-1 cursor-pointer">
              <input type="radio" name="downpayment" /> 30%
            </label>
            <label className="flex items-center gap-1 cursor-pointer">
              <input type="radio" name="downpayment" /> 35%
            </label>
          </div>

          <label className="font-kanit  mt-4">จำนวนงวดที่ผ่อน</label>
          <select className="border border-gray-500 rounded-sm p-2 mt-1 font-kanit bg-white">
            <option value="24">24 เดือน</option>
            <option value="36">36 เดือน</option>
            <option value="48">48 เดือน</option>
            <option value="60">60 เดือน</option>
            <option value="72">72 เดือน</option>
            <option value="84">84 เดือน</option>
          </select>

          <div className="flex gap-4 mt-6">
            <button
              type="button"
              className="w-1/2 bg-blue-600 text-white p-2 rounded-sm font-kanit font-bold hover:bg-blue-800 cursor-pointer"
            >
              คำนวณ
            </button>
            <button
              type="button"
              className="w-1/2 bg-gray-200 text-gray-700 p-2 rounded-sm font-kanit font-bold hover:bg-gray-300 cursor-pointer"
            >
              ล้างข้อมูล
            </button>
          </div>
        </form>

        {/* แสดงผล */}
        <div className="flex items-center justify-center mt-6 gap-3">
          <p className="font-kanit font-bold">ผ่อนชำระต่อเดือน: </p>
          <p className="font-kanit font-bold text-blue-600">0.00 บาท</p>
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
