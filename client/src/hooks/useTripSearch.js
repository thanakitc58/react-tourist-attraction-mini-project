import { useState, useEffect, useRef, useCallback } from "react";
import tripService from "../services/tripService";

/**
 * Custom Hook สำหรับจัดการการค้นหา trips
 * Single Responsibility: จัดการ state และ logic การค้นหาเท่านั้น
 * High Cohesion: หน้าที่เกี่ยวข้องกับการค้นหา trips อยู่ด้วยกัน
 */
function useTripSearch() {
  const [searchTerm, setSearchTerm] = useState("");
  const [trips, setTrips] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const debounceTimerRef = useRef(null);

  // โหลดข้อมูลทั้งหมดเมื่อ component mount (ตาม requirement)
  useEffect(() => {
    loadTrips("");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // ฟังก์ชันสำหรับโหลดข้อมูล trips
  const loadTrips = useCallback(async (keywords) => {
    setLoading(true);
    setError(null);
    try {
      const data = await tripService.searchTrips(keywords);
      setTrips(data);
    } catch (err) {
      const errorMsg =
        "เกิดข้อผิดพลาดในการโหลดข้อมูล: " +
        (err.message || "ไม่สามารถเชื่อมต่อกับ server ได้");
      setError(errorMsg);
      console.error("Error loading trips:", err);
    } finally {
      setLoading(false);
    }
  }, []);

  // จัดการการเปลี่ยนแปลงในช่องค้นหา (พร้อม debounce)
  const handleSearchChange = useCallback((e) => {
    const value = e.target.value;
    setSearchTerm(value);

    // Clear timer เดิม
    if (debounceTimerRef.current) {
      clearTimeout(debounceTimerRef.current);
    }

    // ตั้ง timer ใหม่ (รอ 300ms หลังจากผู้ใช้หยุดพิมพ์)
    debounceTimerRef.current = setTimeout(() => {
      loadTrips(value);
    }, 300);
  }, [loadTrips]);

  // Cleanup timer เมื่อ component unmount
  useEffect(() => {
    return () => {
      if (debounceTimerRef.current) {
        clearTimeout(debounceTimerRef.current);
      }
    };
  }, []);

  // จัดการการคลิกที่หมวดหมู่
  const handleTagClick = (tag) => {
    // แยกคำที่อยู่ใน searchTerm ออกเป็น array
    const currentTerms = searchTerm
      .trim()
      .split(/\s+/)
      .filter((term) => term.length > 0);

    // ตรวจสอบว่า tag นี้มีอยู่แล้วหรือไม่
    const tagExists = currentTerms.includes(tag);

    if (!tagExists) {
      // ถ้ายังไม่มี ให้เพิ่ม tag ใหม่
      const newSearchTerm = searchTerm.trim()
        ? `${searchTerm.trim()} ${tag}`
        : tag;
      setSearchTerm(newSearchTerm);
      loadTrips(newSearchTerm);
    }
    // ถ้ามีอยู่แล้ว ไม่ต้องทำอะไร (ไม่เพิ่มซ้ำ)
  };

  return {
    searchTerm,
    trips,
    loading,
    error,
    handleSearchChange,
    handleTagClick,
  };
}

export default useTripSearch;

