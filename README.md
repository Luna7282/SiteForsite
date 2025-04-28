
#  Website Builder AI
> 🚀 Create complete websites with natural language prompts powered by AI

**Website Builder AI** is a web-based platform that allows users to generate complete websites from simple natural language prompts using AI.  
It provides real-time code preview, an interactive file explorer, code editing, and project export features — making website development intuitive and fast.

🔗 **Live Demo:** [Website Builder AI](https://sfs-frontend.vercel.app/)  
🔗 **GitHub Repository:** [SiteForSite GitHub](https://github.com/Luna7282/SiteForsite.git)

---

## 📚 Project Overview

Website Builder AI transforms user descriptions into fully functional websites using AI (Anthropic Claude).  
The platform features a real-time development environment, allowing users to preview, edit, and refine their websites iteratively, and download the final project.

---

## 🛠️ Setup Instructions

### Prerequisites
- Node.js v16 or later
- npm or yarn

---

### Backend Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Luna7282/SiteForsite.git
   ```

2. **Navigate to the backend directory:**
   ```bash
   cd SiteForsite/mm/back
   ```

3. **Install backend dependencies:**
   ```bash
   npm install
   ```

4. **Create a `.env` file inside the `back/` directory with the following keys:**

   ```env
   ANTHROPIC_API_KEY=your_anthropic_api_key_here
   PORT=8001
   ```
   > ⚠️ Replace `your_anthropic_api_key_here` with your actual Anthropic API Key.  
   **Do not share your API key publicly.**

5. **Start the backend server:**
   ```bash
   npm run dev
   ```
   The backend will be hosted locally at [http://localhost:8001](http://localhost:8001).

---

### Frontend Setup

1. **Navigate to the frontend directory:**
   ```bash
   cd ../frontend
   ```

2. **Install frontend dependencies:**
   ```bash
   npm install
   ```

3. **Create a `.env` file inside the `frontend/` directory with the following key:**

   ```env
   VITE_BACKEND_URL=http://localhost:8001
   ```

4. **Start the frontend development server:**
   ```bash
   npm run dev
   ```

5. **Visit the application:**  
   Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## ⚙️ Special Configuration Notes

- WebContainer functionality requires **special CORS** and **security headers** for in-browser code execution.
- Ensure environment variables are set properly before starting the servers.

---

## 🏗️ Project Structure

```
mm/
├── back/
│   ├── .env
│   ├── tsconfig.json
│   └── src/
│       ├── index.ts
│       ├── constants.ts
│       ├── prompt.ts
│       ├── stripiIndents.ts
│       └── defaults/
│
└── frontend/
    ├── src/
    │   ├── App.tsx
    │   ├── main.tsx
    │   ├── steps.tsx
    │   ├── components/
    │   └── hooks/
    ├── vite.config.ts
    ├── tailwind.config.js
    ├── netlify.toml
    └── vercel.json
```

---

## 🔥 Key Features

- **AI-Powered Code Generation:** Turn simple text prompts into full websites.
- **Real-Time Preview:** Instantly see the website generated.
- **Interactive File Explorer:** Browse through project files.
- **Code Editor:** Syntax-highlighted live code editing (Monaco Editor).
- **Iterative Refinement:** Use chat interface for continuous improvements.
- **Project Export:** Download your full website as a ZIP file.

---

## 📦 Dependencies

### Backend
- Node.js
- Express
- CORS
- Dotenv
- @anthropic-ai/sdk

### Frontend
- React
- Vite
- TypeScript
- Tailwind CSS
- Monaco Editor
- WebContainer API
- JSZip
- Lucide React





