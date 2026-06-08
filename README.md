<div align="center">
  <img width="1600" height="676" alt="CRED" src="https://github.com/user-attachments/assets/45dd5230-4f0f-4d5d-bfd4-d5f4ff86af5c" />

  <br />
  <br />

  <p>
    <img src="https://img.shields.io/badge/React_18-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React 18" />
    <img src="https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E" alt="Vite" />
    <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js" />
    <img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" alt="Express" />
    <img src="https://img.shields.io/badge/Ethereum_EVM-3C3C3D?style=for-the-badge&logo=ethereum&logoColor=white" alt="EVM" />
  </p>

  <h1>💳 CRED Platform & Carbon Ledger</h1>

  <p>
    <strong>A high-fidelity fintech web portal featuring premium 3D interactions, contextual AI chat, and an architecture ready for blockchain-backed ledger integration.</strong>
  </p>

  <p>
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

> Designed as a robust full-stack monorepo, this project pairs a meticulously crafted, high-end frontend clone of the CRED platform with a lightweight Express backend. It showcases cutting-edge UI/UX engineering—including mouse-tilt 3D perspectives, global command overlays, and CSS keyframe animations—alongside an intelligent API layer for chat, search, and real-time statistics.

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

---

## 🛠️ Technologies Used

### Frontend:
- **React 18** & **Vite**
- **Vanilla CSS** with custom HSL color palette and keyframes.

### Backend & AI:
- **Node.js** & **Express.js**
- **CORS** & **Nodemon**

---

## 📦 Project Directory Structure

```text
CRED/
├── client/                   # React Frontend App
│   ├── src/
│   │   ├── components/      # UI Components (Hero, AIChat, Deserve, etc.)
│   │   ├── App.jsx          # Main App entry with search shortcuts
│   │   ├── main.jsx         # React bootstrapping
│   │   └── index.css        # Core custom variables & animations
│   ├── package.json         # Client dependencies
│   └── vite.config.js       # Vite configuration
├── server/                   # Node/Express API Server
│   ├── routes/
│   │   └── api.js           # Chatbot, stats, and search endpoints
│   ├── index.js             # Express app setup and health checks
│   └── package.json         # Server dependencies
├── .gitignore                # Production & node_modules exclusions
├── package.json              # Concurrently script manager
└── README.md                 # Project documentation
```

---

## ⚙️ Installation & Setup

### 1. Clone the repository
```bash
git clone https://github.com/rudraprasad69/CRED-Fintech-Experience-Platform.git
cd CRED-Fintech-Experience-Platform
```

### 2. Install all dependencies
This project uses a root-level script to install dependencies for the root, client, and server at once:
```bash
npm run install:all
```

### 3. Start the development servers
To run the frontend and backend servers concurrently:
```bash
npm run dev
```

*   **Frontend Client**: [http://localhost:3000](http://localhost:3000)
*   **Backend Server**: [http://localhost:5000](http://localhost:5000)
