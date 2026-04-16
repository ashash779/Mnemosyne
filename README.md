# Mnemosyne 🐢

A biology learning web app for high school students. Study interactively, discover your learning style, and earn oranges from Shelly the turtle.

---

## How to run locally

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

To build for production:

```bash
npm run build
npm run preview   # preview the production build at http://localhost:4173
```

---

## Features

### 🧠 Learner Type Quiz
A 10-question quiz that identifies your learning style — **Visual**, **Auditory**, **Reading/Writing**, or **Kinesthetic**. Results include a personalised profile and 8 biology-specific study techniques. Your type is saved and shown on the home page.

### 🔬 Interactive Biology Diagrams
Three clickable SVG diagrams built entirely in React:
- **Animal Cell** — 8 labelled organelles with pulsing hotspots
- **Human Heart** — 8 parts including chambers and vessels
- **Leaf Cross-Section** — 8 layers from cuticle to stomata

Clicking a hotspot slides in a detail panel with a short description, a full explanation, and an optional Shelly hint (costs 1 orange).

### 📖 Lessons with Embedded Quizzes
Three full biology lessons, each with 4 sections and 3 quiz checkpoints:
- **The Cell — Life's Building Block**
- **Photosynthesis — How Plants Make Food**
- **The Human Circulatory System**

Content is unlocked progressively — each checkpoint must be passed before the next section appears. Completed lessons are marked on the selection page.

### 🍊 Shelly's Orange System
- Earn oranges by answering quiz and checkpoint questions correctly
- Spend oranges to unlock hints from Shelly on diagrams and lesson questions
- Bar holds up to 5; Shelly's mood changes as you earn and spend
- Shelly sends a break reminder every 5 minutes

### 💾 Persistent Progress
All state (learner type, orange count, lesson completions) is saved to `localStorage` and restored on page reload.

---

## Tech stack

| Tool | Purpose |
|---|---|
| React 19 + Vite 8 | UI framework and build tool |
| Tailwind CSS v4 | Utility styling via `@tailwindcss/vite` |
| Framer Motion | Animations — page transitions, Shelly float, slide panels |
| React Router v7 | Client-side routing |
| Google Fonts | Fraunces (headings) + DM Sans (body) |

All data is static — no backend or database required.

---

## Project structure

```
src/
  components/
    Shelly/       # Shelly SVG, speech bubble, orange bar, floating widget
    Diagrams/     # SVG diagrams, hotspot viewer, info panel
    Lessons/      # Lesson reader, quiz checkpoint
    UI/           # Navbar, footer, skip link, loading spinner
  pages/          # Home, Quiz, Diagrams, Lessons, Shelly
  data/           # Quiz questions, learner profiles, diagram data, lessons
  context/        # AppContext — global state + localStorage persistence
  hooks/          # useWindowSize
```
