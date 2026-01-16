/**
 * TripCard Component
 * Single Responsibility: แสดงข้อมูลสถานที่ท่องเที่ยว 1 แห่งเท่านั้น
 * High Cohesion: หน้าที่เกี่ยวข้องกับการแสดงข้อมูล trip อยู่ด้วยกัน
 */
function TripCard({ trip, onTagClick }) {
  const { title, description, photos, tags, url } = trip;

  // จัดการการคลิกที่ tag
  const handleTagClick = (tag) => {
    if (onTagClick) {
      onTagClick(tag);
    }
  };

  // แสดงเฉพาะส่วนแรกของ description ไม่เกิน 100 ตัวอักษร
  const shortDescription = description
    ? description.substring(0, 100) + (description.length > 100 ? "..." : "")
    : "";

  return (
    <article className="mb-8 sm:mb-10 md:mb-12 bg-white relative">
      <div className="flex flex-col md:flex-row gap-4 md:gap-6 relative items-start">
        {/* รูปภาพหลัก - Mobile: ด้านบน, Desktop: ด้านซ้าย */}
        <div className="w-full md:flex-none md:w-[300px] lg:w-[400px]">
          <img
            src={photos[0]}
            alt={title}
            className="w-full h-[200px] md:h-[230px] object-cover rounded-[20px]"
          />
        </div>
        
        {/* เนื้อหา - Mobile: ด้านล่าง, Desktop: ด้านขวา */}
        <div className="flex-1 flex flex-col gap-1.5 relative pr-0 md:pr-8 w-full">
          <h2 className="text-lg sm:text-xl font-semibold m-0 leading-tight">
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-900 hover:text-blue-600 hover:underline transition-colors cursor-pointer"
            >
              {title}
            </a>
          </h2>
          <p className="text-sm sm:text-[0.95rem] text-gray-600 leading-relaxed m-0">
            {shortDescription}
          </p>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 no-underline text-sm sm:text-[0.95rem] self-start hover:underline mt-0.5"
          >
            อ่านต่อ
          </a>
          <div className="text-xs sm:text-sm text-gray-600 mt-1">
            <span className="font-semibold mr-2">หมวด</span>
            <span className="text-gray-500">
              {tags.map((tag, index) => (
                <span key={index}>
                  <button
                    type="button"
                    onClick={() => handleTagClick(tag)}
                    className="underline hover:text-blue-600 hover:underline cursor-pointer transition-colors"
                  >
                    {tag}
                  </button>
                  {index < tags.length - 1 && (
                    index === tags.length - 2 ? " และ " : " "
                  )}
                </span>
              ))}
            </span>
          </div>
          <div className="flex gap-5 mt-2">
            {photos.slice(1, 4).map((photo, index) => (
              <img
                key={index}
                src={photo}
                alt={`${title} - ภาพ ${index + 2}`}
                className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-[10px]"
              />
            ))}
          </div>
          
          {/* Link icon มุมขวาล่าง */}
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-0 right-0 text-blue-600 p-2 transition-transform hover:scale-110 cursor-pointer"
            aria-label="ลิงก์ไปยังบทความ"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 sm:h-6 sm:w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
              />
            </svg>
          </a>
        </div>
      </div>
    </article>
  );
}

export default TripCard;

