/**
 * SearchInput Component
 * Single Responsibility: จัดการ input field สำหรับค้นหาเท่านั้น
 * High Cohesion: หน้าที่เกี่ยวข้องกับการรับ input อยู่ด้วยกัน
 */
function SearchInput({ value, onChange, placeholder }) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-6 sm:mb-8">
      <label htmlFor="search-input" className="text-sm sm:text-base text-gray-900 whitespace-nowrap">
        ค้นหาที่เกี่ยว
      </label>
      <input
        id="search-input"
        type="text"
        className="flex-1 px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border-0 rounded bg-gray-100 outline-none text-gray-500 focus:bg-white focus:border focus:border-gray-300 focus:text-gray-900 transition-colors"
        value={value}
        onChange={onChange}
        placeholder={placeholder || "หาที่เกี่ยวแล้วไปกัน ..."}
      />
    </div>
  );
}

export default SearchInput;

