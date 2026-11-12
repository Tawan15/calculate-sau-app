import car from "./../assets/car.png";
import { Link } from "react-router";
import { useState } from "react";
import Swal from "sweetalert2";
import Footer from "./../components/Footer";

export default function Car() {
  // สร้าง state
  const [buyerName, setBuyerName] = useState("");
  const [carPrice, setCarPrice] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [downPaymentPercent, setDownPaymentPercent] = useState("15");
  const [installmentMonths, setInstallmentMonths] = useState("24");
  const [monthlyPayment, setMonthlyPayment] = useState("0.00");

  // สร้างฟังก์ชัน คำนวณค่างวดรถ ------------
  const handleCalCarClick = (e) => {
    e.preventDefault();

    // Validate UI (ตรวจสอบการกรอกข้อมูลเบื้องต้น)
    if (buyerName.trim() === "" || carPrice === "" || interestRate === "") {
      Swal.fire({
        icon: "warning",
        title: "คำเตือน",
        text: "กรุณากรอกข้อมูลให้ครบถ้วน",
        confirmButtonText: "ตกลง",
      });

      return;
    }

    // แปลง state ที่ใช้คำนวณให้เป็นตัวเลข
    const price = Number(carPrice);
    const rate = Number(interestRate);
    const downPercent = Number(downPaymentPercent);
    const months = Number(installmentMonths);

    // 1. คำนวณเงินดาวน์ และ ยอดจัดไฟแนนซ์
    const downAmount = (price * downPercent) / 100;
    const financeAmount = price - downAmount;

    // 2. คำนวณดอกเบี้ยทั้งหมดตลอดสัญญา (แปลงจำนวนเดือนเป็นปีด้วย months / 12)
    const years = months / 12;
    const totalInterest = financeAmount * (rate / 100) * years;

    // 3. คำนวณยอดผ่อนชำระต่อเดือน
    const totalAmount = financeAmount + totalInterest;
    const installmentPerMonth = totalAmount / months;

    // แสดงผลเป็นตัวเลขมีลูกน้ำคั่นหลักพัน และทศนิยม 2 ตำแหน่ง
    setMonthlyPayment(
      installmentPerMonth.toLocaleString("en-US", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      }),
    );
  };

  // สร้างฟังก์ชัน ล้างข้อมูล (Reset) ------------
  const handleResetClick = (e) => {
    e.preventDefault();

    setBuyerName("");
    setCarPrice("");
    setInterestRate("");
    setDownPaymentPercent("15");
    setInstallmentMonths("24");
    setMonthlyPayment("0.00");
  };

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
          <label className="font-kanit">ชื่อผู้ซื้อรถ</label>
          <input
            type="text"
            placeholder="ระบุชื่อ-นามสกุล"
            value={buyerName}
            onChange={(e) => setBuyerName(e.target.value)}
            className="border border-gray-500 rounded-sm p-2 mt-1"
          />

          <label className="font-kanit mt-4">ราคารถ (บาท)</label>
          <input
            type="number"
            placeholder="เช่น 850000"
            value={carPrice}
            onChange={(e) => setCarPrice(e.target.value)}
            className="border border-gray-500 rounded-sm p-2 mt-1"
          />

          <label className="font-kanit mt-4">ดอกเบี้ยต่อปี (%)</label>
          <input
            type="number"
            step="0.01"
            placeholder="เช่น 2.5"
            value={interestRate}
            onChange={(e) => setInterestRate(e.target.value)}
            className="border border-gray-500 rounded-sm p-2 mt-1"
          />

          <label className="font-kanit mt-4">เงินดาวน์ (%)</label>
          <div className="flex gap-6 mt-1 font-kanit text-sm">
            {["15", "20", "25", "30", "35"].map((percent) => (
              <label
                key={percent}
                className="flex items-center gap-1 cursor-pointer"
              >
                <input
                  type="radio"
                  name="downpayment"
                  value={percent}
                  checked={downPaymentPercent === percent}
                  onChange={(e) => setDownPaymentPercent(e.target.value)}
                />{" "}
                {percent}%
              </label>
            ))}
          </div>

          <label className="font-kanit mt-4">จำนวนงวดที่ผ่อน</label>
          <select
            value={installmentMonths}
            onChange={(e) => setInstallmentMonths(e.target.value)}
            className="border border-gray-500 rounded-sm p-2 mt-1 font-kanit bg-white"
          >
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
              onClick={handleCalCarClick}
              className="w-1/2 bg-blue-600 text-white p-2 rounded-sm font-kanit font-bold hover:bg-blue-800 cursor-pointer"
            >
              คำนวณ
            </button>
            <button
              type="button"
              onClick={handleResetClick}
              className="w-1/2 bg-gray-200 text-gray-700 p-2 rounded-sm font-kanit font-bold hover:bg-gray-300 cursor-pointer"
            >
              ล้างข้อมูล
            </button>
          </div>
        </form>

        {/* แสดงผล */}
        <div className="flex items-center justify-center mt-6 gap-3">
          <p className="font-kanit font-bold">ผ่อนชำระต่อเดือน: </p>
          <p className="font-kanit font-bold text-blue-600">
            {monthlyPayment} บาท
          </p>
        </div>

        {/* ลิงค์กลับไปหน้าหลัก */}
        <Link
          to="/"
          className="w-full text-center bg-gray-200 text-gray-700 p-2 mt-6 rounded-sm font-kanit font-bold hover:bg-gray-300"
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
