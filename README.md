# 🗺️ เที่ยวไหนดี - Tourist Attraction Search

เว็บแอปพลิเคชันสำหรับค้นหาสถานที่ท่องเที่ยวในประเทศไทย พร้อมระบบค้นหาที่ใช้งานง่ายและรองรับการค้นหาจากหมวดหมู่

## 🎯 เกี่ยวกับโปรเจกต์

**เที่ยวไหนดี** เป็นเว็บแอปพลิเคชันที่ช่วยให้ผู้ใช้ค้นหาสถานที่ท่องเที่ยวได้อย่างรวดเร็วและง่ายดาย โดยสามารถค้นหาจาก:
- การพิมพ์คำค้นหาในช่องค้นหา
- การคลิกที่หมวดหมู่ (Tags) เพื่อเพิ่มคำค้นหา

## ✨ คุณสมบัติ

- 🔍 **ค้นหาแบบ Real-time** - ค้นหาข้อมูลทันทีเมื่อพิมพ์
- 🏷️ **ค้นหาจากหมวดหมู่** - คลิกที่หมวดหมู่เพื่อเพิ่มคำค้นหา
- 📱 **Responsive Design** - รองรับทุกขนาดหน้าจอ (Mobile, Tablet, Desktop)
- 🎨 **Modern UI** - ใช้ Tailwind CSS สำหรับการออกแบบที่สวยงาม
- ⚡ **Fast Performance** - ใช้ Vite สำหรับการ Build ที่รวดเร็ว

## 🚀 วิธีการใช้งาน

### วิธีที่ 1: ค้นหาด้วยการพิมพ์

1. พิมพ์คำค้นหาลงในช่อง **"ค้นหาที่เกี่ยว"**
2. ระบบจะค้นหาข้อมูลทันทีเมื่อคุณพิมพ์
3. ผลลัพธ์จะแสดงรายการสถานที่ท่องเที่ยวที่ตรงกับคำค้นหา

**ตัวอย่างคำค้นหา:**
- `เกาะ`
- `ทะเล`
- `คาเฟ่`
- `กรุงเทพมหานคร`

### วิธีที่ 2: ค้นหาด้วยการคลิกหมวดหมู่

1. ดูที่ส่วน **"หมวด"** ในแต่ละการ์ดสถานที่ท่องเที่ยว
2. คลิกที่หมวดหมู่ที่ต้องการ (เช่น `เกาะ`, `ทะเล`, `คาเฟ่`)
3. หมวดหมู่จะถูกเพิ่มลงในช่องค้นหาอัตโนมัติ
4. คลิกหมวดหมู่หลายตัวเพื่อค้นหาหลายคำพร้อมกัน

**ตัวอย่าง:**
- คลิก `เกาะ` → ช่องค้นหาจะเป็น: `เกาะ`
- คลิก `ทะเล` → ช่องค้นหาจะเป็น: `เกาะ ทะเล`
- คลิก `เกาะ` อีกครั้ง → ไม่เพิ่มซ้ำ (ยังคงเป็น: `เกาะ ทะเล`)

### การดูรายละเอียด

- คลิกที่ **"อ่านต่อ"** เพื่อดูรายละเอียดเพิ่มเติม
- คลิกที่ **ไอคอนลิงก์** (🔗) มุมขวาล่างเพื่อเปิดลิงก์

## 🛠️ Tool ที่ใช้

### Frontend

- **React** - JavaScript library สำหรับสร้าง UI
- **Vite** - Build tool ที่รวดเร็ว
- **Tailwind CSS** - Utility-first CSS framework
- **Axios** - HTTP client สำหรับเรียก API

### Backend

- **Node.js** - JavaScript runtime
- **Express** - Web framework สำหรับ Node.js
- **Nodemon** - Auto-restart server เมื่อมีการเปลี่ยนแปลง


### ขั้นตอนการติดตั้ง

1. **Clone โปรเจกต์**
   ```bash
   git clone <repository-url>
   cd react-tourist-attraction-mini-project
   ```

2. **ติดตั้ง Dependencies สำหรับ Server**
   ```bash
   cd server
   npm install
   ```

3. **ติดตั้ง Dependencies สำหรับ Client**
   ```bash
   cd ../client
   npm install
   ```

### การรันโปรเจกต์

#### รัน Server (Terminal 1)
```bash
cd server
npm start
```
Server จะรันที่ `http://localhost:4001`

#### รัน Client (Terminal 2)
```bash
cd client
npm run dev
```
Client จะรันที่ `http://localhost:5173` (หรือ port อื่นที่ Vite กำหนด)

### Build สำหรับ Production

```bash
cd client
npm run build
```

ไฟล์ที่ build จะอยู่ในโฟลเดอร์ `client/dist`

## 📁 โครงสร้างโปรเจกต์

```
react-tourist-attraction-mini-project/
├── client/                 # Frontend (React + Vite)
│   ├── src/
│   │   ├── components/     # React Components
│   │   │   ├── Header/
│   │   │   │   └── Header.jsx          # แสดงหัวข้อ "เที่ยวไหนดี"
│   │   │   ├── SearchInput/
│   │   │   │   └── SearchInput.jsx     # ช่องค้นหาสถานที่ท่องเที่ยว
│   │   │   ├── TripCard/
│   │   │   │   └── TripCard.jsx        # แสดงข้อมูลสถานที่ท่องเที่ยวแต่ละรายการ
│   │   │   ├── TripList/
│   │   │   │   └── TripList.jsx        # แสดงรายการสถานที่ท่องเที่ยวทั้งหมด
│   │   │   ├── LoadingMessage/
│   │   │   │   └── LoadingMessage.jsx  # แสดงข้อความกำลังโหลด
│   │   │   └── ErrorMessage/
│   │   │       └── ErrorMessage.jsx    # แสดงข้อความ error
│   │   ├── hooks/          # Custom Hooks
│   │   │   └── useTripSearch.js        # Hook สำหรับจัดการการค้นหาและ state
│   │   ├── services/       # API Services
│   │   │   └── tripService.js          # Service สำหรับเรียก API
│   │   ├── App.jsx                     # Main App Component
│   │   ├── main.jsx                    # Entry point
│   │   └── index.css                   # Global styles และ Tailwind directives
│   ├── index.html
│   ├── package.json
│   ├── vite.config.js
│   ├── tailwind.config.js
│   └── postcss.config.js
│
├── server/                 # Backend (Express)
│   ├── app.js             # Express server และ API endpoints
│   ├── db.js              # Database (mock data)
│   └── package.json
│
└── README.md
```

## 🧩 Components Overview

### Header Component
- **หน้าที่**: แสดงหัวข้อ "เที่ยวไหนดี" ที่ด้านบนของหน้าเว็บ
- **Props**: ไม่มี
- **Location**: `client/src/components/Header/Header.jsx`

### SearchInput Component
- **หน้าที่**: แสดงช่องค้นหาสถานที่ท่องเที่ยว
- **Props**: 
  - `value`: ค่าปัจจุบันในช่องค้นหา
  - `onChange`: ฟังก์ชันเมื่อมีการเปลี่ยนแปลง
  - `placeholder`: ข้อความ placeholder
- **Location**: `client/src/components/SearchInput/SearchInput.jsx`

### TripCard Component
- **หน้าที่**: แสดงข้อมูลสถานที่ท่องเที่ยว 1 แห่ง (รูปภาพ, ชื่อ, คำอธิบาย, หมวดหมู่)
- **Props**:
  - `trip`: ข้อมูลสถานที่ท่องเที่ยว
  - `onTagClick`: ฟังก์ชันเมื่อคลิกที่หมวดหมู่
- **Location**: `client/src/components/TripCard/TripCard.jsx`

### TripList Component
- **หน้าที่**: แสดงรายการสถานที่ท่องเที่ยวทั้งหมด
- **Props**:
  - `trips`: array ของสถานที่ท่องเที่ยว
  - `onTagClick`: ฟังก์ชันเมื่อคลิกที่หมวดหมู่
- **Location**: `client/src/components/TripList/TripList.jsx`

### LoadingMessage Component
- **หน้าที่**: แสดงข้อความ "กำลังโหลดข้อมูล..."
- **Props**: ไม่มี
- **Location**: `client/src/components/LoadingMessage/LoadingMessage.jsx`

### ErrorMessage Component
- **หน้าที่**: แสดงข้อความ error เมื่อเกิดปัญหา
- **Props**:
  - `message`: ข้อความ error ที่ต้องการแสดง
- **Location**: `client/src/components/ErrorMessage/ErrorMessage.jsx`

## 🪝 Custom Hooks

### useTripSearch Hook
- **หน้าที่**: จัดการ state และ logic การค้นหาสถานที่ท่องเที่ยว
- **Returns**:
  - `searchTerm`: คำค้นหาปัจจุบัน
  - `trips`: รายการสถานที่ท่องเที่ยว
  - `loading`: สถานะกำลังโหลด
  - `error`: ข้อความ error (ถ้ามี)
  - `handleSearchChange`: ฟังก์ชันจัดการการเปลี่ยนแปลงในช่องค้นหา
  - `handleTagClick`: ฟังก์ชันจัดการการคลิกที่หมวดหมู่
- **Location**: `client/src/hooks/useTripSearch.js`

## 🔌 Services

### tripService
- **หน้าที่**: จัดการการเรียก API เกี่ยวกับ trips
- **Methods**:
  - `searchTrips(keywords)`: ค้นหาสถานที่ท่องเที่ยวตาม keywords
- **Location**: `client/src/services/tripService.js`

## 🎨 Design Principles

โปรเจกต์นี้ใช้หลักการ:

- **DRY (Don't Repeat Yourself)** - ไม่เขียนโค้ดซ้ำ
- **SRP (Single Responsibility Principle)** - แต่ละ component/hook มีหน้าที่เดียว
- **High Cohesion** - หน้าที่ที่เกี่ยวข้องอยู่ด้วยกัน
- **Loose Coupling** - Components ทำงานอิสระจากกัน


