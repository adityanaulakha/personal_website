# 🚀 Personal Portfolio Website

A sleek, modern, and interactive **personal portfolio** built with **React**, featuring **3D hyperspeed effects**, **smooth animations**, and a **glass-morphism** design — fully responsive across all devices.

![React](https://img.shields.io/badge/React-19.1.1-61dafb?style=for-the-badge&logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7.1.7-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.1.14-38B2AC?style=for-the-badge&logo=tailwindcss&logoColor=white)
![GSAP](https://img.shields.io/badge/GSAP-3.13.0-88CE02?style=for-the-badge)
![Three.js](https://img.shields.io/badge/Three.js-0.180.0-black?style=for-the-badge)

---

## ✨ Highlights

- 🎨 **Glass-morphism UI** with micro-interactions and modern motion design  
- 🧭 **Smart Navbar Pagination** — highlights the active section while scrolling  
- ⚙️ **Dual-Row Tech Carousel** — infinite, auto-scrolling with reverse animation  
- 🕓 **Experience Timeline** — animated vertical milestones with details  
- 🧩 **Project Showcase** — dynamic cards with badges, overlays, and links  
- 🌌 **3D Hyperspeed Background** — Three.js + postprocessing in the Contact section  
- 📱 **iOS-Style Mobile Navbar** — smooth icon animations and active states  

---

## 🛠️ Tech Stack

**Frontend**
- React 19  
- Vite 7  
- Tailwind CSS 4  
- React Router DOM 7  

**Animations & 3D**
- GSAP 3.13  
- Three.js + Postprocessing  

**Icons**
- React Icons (Simple Icons + Hero Icons)

---

## ⚡ Getting Started

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/adityanaulakha/personal_website.git
cd personal_website
```

### 2️⃣ Install Dependencies
```bash
npm install
```

### 3️⃣ Start Development Server
```bash
npm run dev
```

### 4️⃣ Build for Production
```bash
npm run build
```

### 5️⃣ Preview Production Build
```bash
npm run preview
```

---

## 📁 Folder Structure

```
Portfolio-new/
├── public/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # Desktop navigation (GSAP animations)
│   │   ├── MobileNavbar.jsx    # iOS-style mobile navbar
│   │   ├── HeroSection.jsx     # Intro section
│   │   ├── About.jsx           # Personal summary
│   │   ├── Skills.jsx          # Dual-row carousel (infinite scroll)
│   │   ├── Experience.jsx      # Vertical timeline with tags
│   │   ├── Projects.jsx        # Responsive project grid
│   │   ├── Contact.jsx         # CTA + Hyperspeed 3D background
│   │   ├── Hyperspeed.jsx      # Three.js scene setup
│   │   ├── *.css               # Component-level styling
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
├── eslint.config.js
├── vite.config.js
├── package.json
└── README.md
```

---

## 🎨 Sections Overview

| Section | Description |
|----------|--------------|
| **Hero** | Intro animation and tagline |
| **About** | Personal story & summary |
| **Skills** | Dual infinite carousel of tools/technologies |
| **Experience** | Animated timeline of roles and milestones |
| **Projects** | Showcase grid with badges and live links |
| **Contact** | 3D hyperspeed effect, CTA, and social footer |

---

## 🎯 Key Features

### 🧭 Active Section Tracking
Navbar automatically highlights the section currently in view.  
- Desktop → Underline indicator  
- Mobile → Animated active icon  
- Controlled via Intersection Observer

### ♾️ Infinite Tech Carousel
- Dual-row auto-scroll (reverse directions)  
- Pause on hover  
- Speed adjustable in `Skills.css` via animation duration  

### 💎 Glass-Morphism Design
- Transparent panels with blur & soft shadows  
- Subtle hover transitions and gradients  

---

## 🧩 Customization Guide

| Feature | File | Instructions |
|----------|------|--------------|
| **Email** | `Contact.jsx` | Update `mailto:` link |
| **Social Links** | `Contact.jsx` | Add GitHub, LinkedIn, etc. |
| **Experience** | `Experience.jsx` | Edit the `experiences` array |
| **Projects** | `Projects.jsx` | Update `projects` array with details |
| **Skills** | `Skills.jsx` | Modify `techStack` arrays |
| **Colors / Animations** | CSS files | Adjust gradients, blur, durations |

---

## ☁️ Deployment

Deploy easily on any static hosting service:

### **Vercel**
```bash
npm run build
vercel --prod
```

### **Netlify**
```bash
npm run build
# Drag and drop the dist/ folder
```

### **GitHub Pages**
```bash
npm run build
# Use gh-pages or GitHub Actions to deploy /dist
```

---

## 📦 NPM Scripts

| Command | Description |
|----------|--------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint checks |

---

## 🤝 Contributing

Contributions, feature suggestions, and issues are always welcome.  
Feel free to open a pull request or submit feedback!

---

## 📜 License

This project is licensed under the **MIT License**.

---

## 👤 Author

**Aditya Naulakha**  
- 🌐 [Portfolio](https://adityanaulakha.tech)  
- 💻 [GitHub](https://github.com/adityanaulakha)  
- 📧 [Email](mailto:your.email@example.com)

---

⭐ **If you liked this project, consider giving it a star!**  
Built with ❤️ using **React**, **GSAP**, and **Three.js**.
