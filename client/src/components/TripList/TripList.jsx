import TripCard from "../TripCard/TripCard";

/**
 * TripList Component
 * Single Responsibility: แสดงรายการสถานที่ท่องเที่ยวเท่านั้น
 * DRY: ใช้ TripCard component ซ้ำเพื่อแสดงแต่ละ trip
 * High Cohesion: หน้าที่เกี่ยวข้องกับการแสดง list อยู่ด้วยกัน
 */
function TripList({ trips, onTagClick }) {
  if (!trips || trips.length === 0) {
    return (
      <div className="text-center py-8 sm:py-10 md:py-12 text-gray-600 text-base sm:text-lg">
        <p>ไม่พบสถานที่ท่องเที่ยวที่ค้นหา</p>
      </div>
    );
  }

  return (
    <section className="flex flex-col">
      {trips.map((trip) => (
        <TripCard key={trip.eid} trip={trip} onTagClick={onTagClick} />
      ))}
    </section>
  );
}

export default TripList;

