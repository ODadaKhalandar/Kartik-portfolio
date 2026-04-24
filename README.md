# Kartik Tiraki – Portfolio

Personal portfolio website built with React.js.

## 🚀 Quick Start

```bash
npm install
npm start
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## 📦 Build for Production

```bash
npm run build
```

This creates a `dist/` folder ready to deploy.

## ☁️ Deploy to Vercel

### Option 1: Vercel CLI
```bash
npm install -g vercel
vercel
```

### Option 2: GitHub + Vercel Dashboard
1. Push this project to a GitHub repository
2. Go to [vercel.com](https://vercel.com) and import the repo
3. Vercel auto-detects Create React App — just click **Deploy**

## 📄 Resume Download

The resume PDF is located at `public/resume.pdf`.  
To update it: replace `public/resume.pdf` with your new PDF (keep the same filename).

## 📁 Project Structure

```
kartik-portfolio/
├── public/
│   ├── index.html
│   └── resume.pdf          ← Your resume (replace to update)
├── src/
│   ├── components/
│   │   ├── Navbar.jsx/css
│   │   ├── Hero.jsx/css
│   │   ├── About.jsx/css
│   │   ├── Skills.jsx/css
│   │   ├── Experience.jsx/css
│   │   ├── Projects.jsx/css
│   │   ├── Education.jsx/css
│   │   ├── Contact.jsx/css
│   │   └── Footer.jsx/css
│   ├── hooks/
│   │   └── useScrollAnimation.js
│   ├── App.jsx
│   ├── App.css
│   ├── index.js
│   └── index.css
├── .gitignore
├── vercel.json
└── package.json
```

## ✏️ Customizing Content

All your personal info is in the component files inside `src/components/`.  
Edit the data arrays/objects at the top of each file to update content.

| File | What to edit |
|------|-------------|
| `Hero.jsx` | Taglines, stats |
| `About.jsx` | Bio text, contact info |
| `Skills.jsx` | Skill names and percentages |
| `Experience.jsx` | Job history, projects |
| `Projects.jsx` | Project cards |
| `Education.jsx` | Degrees, achievements |
| `Contact.jsx` | Email, phone, location |
