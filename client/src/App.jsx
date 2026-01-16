import SearchInput from "./components/SearchInput/SearchInput";
import TripList from "./components/TripList/TripList";
import Header from "./components/Header/Header";
import LoadingMessage from "./components/LoadingMessage/LoadingMessage";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import useTripSearch from "./hooks/useTripSearch";

/**
 * App Component
 * Loose Coupling: Components ทำงานอิสระจากกัน ใช้ props และ callbacks ในการสื่อสาร
 * Single Responsibility: จัดการ orchestration เท่านั้น
 */
function App() {
  const {
    searchTerm,
    trips,
    loading,
    error,
    handleSearchChange,
    handleTagClick,
  } = useTripSearch();

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8 py-4 sm:py-6 md:py-8">
        <SearchInput
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="หาที่เกี่ยวแล้วไปกัน ..."
        />
        {error && <ErrorMessage message={error} />}
        {/* แสดง loading เฉพาะเมื่อยังไม่มีข้อมูล หรือเมื่อกำลังโหลดครั้งแรก */}
        {loading && trips.length === 0 && <LoadingMessage />}
        {/* แสดงผลลัพธ์เดิมไว้ก่อนระหว่างโหลด เพื่อป้องกันการกระพริบ */}
        {trips.length > 0 && (
          <div className={loading ? "opacity-50 transition-opacity duration-200" : "opacity-100 transition-opacity duration-200"}>
            <TripList trips={trips} onTagClick={handleTagClick} />
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
