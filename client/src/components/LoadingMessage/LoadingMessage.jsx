/**
 * LoadingMessage Component
 * Single Responsibility: แสดงข้อความ loading เท่านั้น
 * High Cohesion: หน้าที่เกี่ยวข้องกับการแสดง loading state อยู่ด้วยกัน
 */
function LoadingMessage() {
  return (
    <div className="text-center py-6 md:py-8 text-gray-600 text-base sm:text-lg">
      กำลังโหลดข้อมูล...
    </div>
  );
}

export default LoadingMessage;

