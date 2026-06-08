<div align="center">

<img width="1600" height="676" alt="CRED" src="https://github.com/user-attachments/assets/45dd5230-4f0f-4d5d-bfd4-d5f4ff86af5c" />

<br />
<br />

<p>
  <img src="https://img.shields.io/badge/React_18-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React 18" />
  <img src="https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E" alt="Vite" />
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js" />
  <img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" alt="Express" />
</p>

<h1>💳 CRED Fintech Experience Platform</h1>

<p>
  <strong>A high-fidelity fintech web portal featuring premium 3D interactions, contextual AI chat, intelligent search, and real-time analytics inspired by the CRED ecosystem.</strong>
</p>

<p>
  <a href="#-live-demo">
    <img src="https://img.shields.io/badge/🚀_Live_Demo-000000?style=for-the-badge" alt="Live Demo" />
  </a>
  <a href="#-demo-video">
    <img src="https://img.shields.io/badge/🎥_Demo_Video-000000?style=for-the-badge" alt="Demo Video" />
  </a>
  <a href="#-key-features">
    <img src="https://img.shields.io/badge/✨_Features-000000?style=for-the-badge" alt="Features" />
  </a>
  <a href="#%EF%B8%8F-technologies-used">
    <img src="https://img.shields.io/badge/🛠️_Technologies-000000?style=for-the-badge" alt="Technologies" />
  </a>
  <a href="#%EF%B8%8F-installation--setup">
    <img src="https://img.shields.io/badge/⚙️_Setup-000000?style=for-the-badge" alt="Setup" />
  </a>
</p>

</div>

<br />

> Designed as a robust full-stack monorepo, this project pairs a meticulously crafted, high-end frontend clone of the CRED platform with a lightweight Express backend. It showcases cutting-edge UI/UX engineering—including mouse-tilt 3D perspectives, global command overlays, CSS keyframe animations, contextual AI chat, intelligent search experiences, and real-time statistics.

---

## 🚀 Live Demo

A live version of the application is hosted here:

**[Add Your Deployment URL Here]**

---

## 🎥 Demo Video

<p align="center">
  <a href="https://youtu.be/l9b0cWi2kYM">
    <img src="https://img.shields.io/badge/▶️_Watch_Full_Demo-FF0000?style=for-the-badge&logo=youtube&logoColor=white" alt="Watch Demo">
  </a>
</p>

---

## ✨ Key Features

### 📱 Premium UI Engineering & 3D Interactions

- **Interactive 3D Phone Mockup:** A physics-driven phone model (`Deserve.jsx`) that tilts in 3D space relative to the cursor's coordinates (`perspective: 1200`).
- **Dynamic Island Sensor:** Custom mock dynamic island featuring camera lens reflections and visual state indicators.
- **Micro-Animations & Scroll Reveals:** Custom scroll reveal hooks and CSS keyframe marquees for smooth, high-framerate ticker displays.

### 🤖 Intelligent AI & Contextual Search

- **Contextual AI Chat Assistant:** Simulates real-time support with custom-paced typing animations, quick-action prompts, and an Express-backed query-matching engine.
- **Global Command Palette (`Cmd/Ctrl + K`):** Instant, global hotkey search overlay with a high-end glassmorphic blur backdrop (`backdrop-filter: blur(28px)`) and server-side autocomplete indexing.

### 💳 Real-Time Fintech Dashboard

- **Dynamic Data Ingestion:** Automatically polls API endpoints to ingest and render real-time statistics (total members, active ratings, bills paid).
- **Curated Card Showcases:** Visually rich tier selectors displaying lifestyle rewards and expenditure insights on gradient-wrapped UI cards.
- **Interactive Credit Experience:** Premium UI components inspired by modern fintech ecosystems.

---

## 🛠️ Technologies Used

### Frontend

<p align="left">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg" alt="React" width="60" height="60" />
  <br />
  <br />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original-wordmark.svg" alt="CSS3" width="60" height="60" />
  <br />
  <br />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg" alt="Vite" width="60" height="60" />
</p>

- **React 18**
- **Vite**
- **Vanilla CSS**
- **Custom Hooks**
- **3D Perspective Animations**

### Backend & AI

<p align="left">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg" alt="Node.js" width="60" height="60" />
  <br />
  <br />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original-wordmark.svg" alt="Express" width="60" height="60" />
</p>

- **Node.js**
- **Express.js**
- **CORS**
- **Nodemon**

---

## 📦 Project Directory Structure

```text
CRED-Fintech-Experience-Platform/
│
├── client/
│   ├── src/
│   │   ├── components/
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── package.json
│   └── vite.config.js
│
├── server/
│   ├── routes/
│   │   └── api.js
│   ├── index.js
│   └── package.json
│
├── .gitignore
├── package.json
└── README.md
```

---

## ⚙️ Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/rudraprasad69/CRED-Fintech-Experience-Platform.git
```

### 2. Navigate to the project directory

```bash
cd CRED-Fintech-Experience-Platform
```

### 3. Navigate to the frontend application

```bash
cd client
```

### 4. Install frontend dependencies

```bash
npm install
```

### 5. Navigate to the backend service

```bash
cd ../server
```

### 6. Install backend dependencies

```bash
npm install
```

### 7. Create environment variables

```env
PORT=5000
```

### 8. Start the backend development server

```bash
npm run dev
```

### 9. Navigate back to the frontend application

```bash
cd ../client
```

### 10. Start the frontend development server

```bash
npm run dev
```

### 11. Open the frontend application

```text
http://localhost:5173
```

### 12. Access the backend server

```text
http://localhost:5000
```

---

## 📝 License

This project is licensed under the MIT License. See the LICENSE file for details.

*(Action: Create a LICENSE file and add the MIT License text.)*
