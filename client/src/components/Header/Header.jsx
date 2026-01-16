/**
 * Header Component
 * Single Responsibility: แสดง header ของเว็บไซต์เท่านั้น
 * High Cohesion: หน้าที่เกี่ยวข้องกับการแสดง header อยู่ด้วยกัน
 */
function Header() {
  return (
    <header className="bg-white py-4 md:py-6 lg:py-8 text-center ">
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#409fcf] m-0 mt-4 sm:mt-6 md:mt-8 font-semibold px-4">
        เที่ยวไหนดี
      </h1>
    </header>
  );
}

export default Header;

