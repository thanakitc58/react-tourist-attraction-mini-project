/**
 * ErrorMessage Component
 * Single Responsibility: แสดงข้อความ error เท่านั้น
 * High Cohesion: หน้าที่เกี่ยวข้องกับการแสดง error state อยู่ด้วยกัน
 */
function ErrorMessage({ message }) {
  return (
    <div className="text-center py-6 md:py-8 text-base sm:text-lg text-red-600 bg-red-50 border border-red-200 rounded">
      {message}
    </div>
  );
}

export default ErrorMessage;

