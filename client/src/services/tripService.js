import axios from "axios";

const API_BASE_URL = "http://localhost:4001";

/**
 * Service layer สำหรับจัดการ API calls เกี่ยวกับ trips
 * Single Responsibility: จัดการการเรียก API เท่านั้น
 */
class TripService {
  /**
   * ค้นหาสถานที่ท่องเที่ยวตาม keywords
   * @param {string} keywords - คำค้นหา (ถ้าเป็นค่าว่างจะได้ข้อมูลทั้งหมด)
   * @returns {Promise<Array>} - รายการสถานที่ท่องเที่ยว
   */
  async searchTrips(keywords = "") {
    try {
      const response = await axios.get(`${API_BASE_URL}/trips`, {
        params: {
          keywords: keywords.trim(),
        },
      });
      return response.data.data || [];
    } catch (error) {
      console.error("Error fetching trips:", error);
      throw error;
    }
  }
}

export default new TripService();

