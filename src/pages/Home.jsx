import calculate from "../assets/calculate.png";
import bmi from "../assets/bmi.png";
import bmr from "../assets/bmr.png";
import car from "../assets/car.png";
import Cardmenu from "../components/CardMenu";
import Footer from "../components/Footer";
import { Link } from "react-router";

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center">
        {/* แสดงรูป */}
        <img src={calculate} alt="calculate" className="w-30 mt-20" />

        {/* แสดงชื่อเว็บ */}
        <p className="font-kanit text-3xl font-bold mt-5">
          เครื่องคำนวณออนไลน์
        </p>
        <p className="font-item text-xl text-gray-700">
          เลือกการคำนวณที่คุณต้องการจากเมนูด้านล่าง
        </p>
        {/* แสดงเมนู 3 เมนู */}

        <div className="mt-20 flex gap-10 items-stretch">
          <Link to="/bmi" className="flex flex-col h-full">
            <Cardmenu
              imgShow={bmi}
              titleShow="BMI(ดัชนีมวลกาย)"
              stitleShow="คำนวณน้ำหนักและส่วนสูงว่าเหมาะสมหรือไม่"
            />
          </Link>
          <Link to="/bmr" className="flex flex-col h-full">
            <Cardmenu
              imgShow={bmr}
              titleShow="BMR (อัตราเผาพลาญ)"
              stitleShow="คำนวณอัตราการเผาพลาญที่ร่างกายต้องการ"
            />
          </Link>
          <Link to="/car" className="flex flex-col h-full">
            <Cardmenu
              imgShow={car}
              titleShow="CAR (การผ่อนชำระรถยนต์)"
              stitleShow="คำนวณยอดผ่อนต่อเดือนและดอกเบี้ยรถยนต์"
            />
          </Link>
        </div>

        <Footer />
      </div>
    </>
  );
}
