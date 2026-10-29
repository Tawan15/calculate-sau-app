export default function CardMenu({ imgShow, titleShow, stitleShow }) {
  return (
    <>
      <div className="w-80 border-2 border-gray-200 p-10 rounded-2xl shadow-2xl flex flex-col items-center">
        {/* เปลี่ยนจาก bmi เป็น imgShow */}
        <img src={imgShow} alt={titleShow} className="w-35 object-contain" />

        {/* เปลี่ยนข้อความให้ใช้จาก Props */}
        <p className="mt-4 font-kanit text-xl font-bold text-center">
          {titleShow}
        </p>
        <p className="mt-4 font-charm text-lg text-gray-500 text-center">
          {stitleShow}
        </p>
      </div>
    </>
  );
}
