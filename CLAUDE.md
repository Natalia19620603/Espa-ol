# CLAUDE.md - AI Assistant Guide for Spanish Learning App

## Project Overview

**Name:** Spanish Learning App (Синтетическая школа испанского)
**Purpose:** Interactive web-based Spanish language learning platform for Russian-speaking students
**Tech Stack:** React 18 + Vite + React Router DOM
**Deployment:** Vercel (auto-deploys on PR merge to main)

## Quick Reference Commands

```bash
# Development
npm run dev       # Start development server (Vite)
npm run build     # Production build (outputs to dist/)
npm run preview   # Preview production build locally
```

## Project Structure

```
/
├── src/
│   ├── main.jsx              # React entry point
│   ├── App.jsx               # Main router (9 routes)
│   ├── App.css / index.css   # Global styles
│   ├── components/           # Reusable components
│   │   ├── ExerciseComponent.jsx    # Exercise runner (~90KB, core component)
│   │   ├── AudioPlayer.jsx          # Audio playback with controls
│   │   ├── VideoPlayer.jsx          # Video player (~11KB)
│   │   ├── PronunciationRecorder.jsx # Recording for pronunciation (~9KB)
│   │   └── ErrorBoundary.jsx        # Error handling (class component)
│   ├── pages/                # Page components (each has .module.css)
│   │   ├── HomePage.jsx
│   │   ├── LoginPage.jsx
│   │   ├── RegisterPage.jsx
│   │   ├── CoursesPage.jsx          # Course dashboard
│   │   ├── ModulePage.jsx           # Module lessons list
│   │   ├── LessonPage.jsx           # Main lesson content view (~45KB)
│   │   ├── ListeningPage.jsx        # Listening exercises (~13KB)
│   │   ├── ProfilePage.jsx
│   │   └── DebugPage.jsx
│   ├── data/
│   │   └── lessonsData.js    # ALL course content (~2.5MB, ~37K lines)
│   └── assets/
├── public/
│   ├── audio/                # Audio files (includes nested module subdirs)
│   ├── images/               # Images
│   └── video/                # Video files (100+ MP4s)
├── .github/workflows/
│   └── vercel-auto-deploy.yml  # CI/CD pipeline
├── Tooling (root):
│   ├── analyze_correct_answers.py   # Exercise answer distribution analysis
│   ├── analyze_detailed.py          # Detailed exercise analysis
│   ├── fix_correct_answers.py       # Fix answer distribution issues
│   ├── correct_answers_analysis_report.md
│   └── exercises_with_patterns.csv
└── Configuration:
    ├── package.json
    ├── vite.config.js
    ├── vercel.json
    └── .vercel-trigger         # Auto-updated by CI/CD for deployment
```

## Application Routes

| Route | Component | Description |
|-------|-----------|-------------|
| `/` | HomePage | Landing page |
| `/login` | LoginPage | User login (demo available) |
| `/register` | RegisterPage | User registration |
| `/profile` | ProfilePage | User profile |
| `/courses` | CoursesPage | Course catalog with progress |
| `/module/:moduleId` | ModulePage | Module lessons list |
| `/lesson/:lessonId` | LessonPage | Full lesson content |
| `/listening` | ListeningPage | Listening exercises |
| `/debug` | DebugPage | Debug utilities |

## Data Architecture

### Content Hierarchy

```
courseLevels (A1, A2, B1)
  └── modules (12 modules, IDs: module-1 through module-11 + module-17)
       └── lessons (47 lessons)
            ├── grammar: { title, intro, sections }
            ├── vocabulary: { tabs: [{ title, words }] }
            ├── readingText: { text, translation }
            ├── exercises: ['ex-1-1-1', ...]
            ├── videos: [{ title, url, description }]
            └── (725 exercises total across all lessons)
```

### Key Exports from `lessonsData.js`

```javascript
export const courseLevels = [...]     // 3 proficiency levels
export const modules = { ... }         // Module definitions
export const lessons = { ... }         // Lesson content
export const exercises = { ... }       // Exercise definitions
```

### Exercise Structure

```javascript
exercises: {
  'ex-1-1-1': {
    id: 'ex-1-1-1',
    type: 'grammar',  // or 'vocabulary', 'reading', 'subjunctive', etc.
    title: 'Exercise Title',
    description: 'Description',
    questions: [{
      text: 'Question text',
      options: ['Option A', 'Option B', 'Option C', 'Option D'],
      correct: 0,           // Index of correct answer
      explanation: 'Why this is correct'
    }]
  }
}
```

### Exercise Types
- `grammar` - Grammar exercises
- `vocabulary` - Vocabulary practice
- `reading` - Reading comprehension
- `subjunctive` - Subjunctive mood
- `pronouns` - Pronoun exercises
- `synonyms` / `antonyms`
- `context` - Context-based
- `false-friends` - False cognates
- `idioms` - Idiomatic expressions
- `collocations` - Word collocations

## Coding Conventions

### Naming
- **Components:** PascalCase (`ExerciseComponent.jsx`)
- **CSS classes:** camelCase in CSS modules
- **Data IDs:** kebab-case (`lesson-1-1`, `module-1`, `ex-1-2-7`)

### Component Patterns
- Functional components with React Hooks
- Class components only for ErrorBoundary
- Local state with `useState` / `useEffect`
- `localStorage` for persistence (no backend)

### State Management
- No global state library - uses localStorage
- User data: `localStorage.getItem('user')` → `{ email, name }`
- Progress: `localStorage.getItem('progress')` → `{ moduleId: { lessonId: { completed, score } } }`

### Styling
- CSS Modules for component scoping
- Color palette:
  - Primary gradient: `#667eea` → `#764ba2` (purple)
  - Success: `#4caf50` → `#45a049` (green)
  - Neutrals: whites, grays (`#f0f0f0`, `#666`)
- Responsive breakpoints at `768px`
- Border-radius: `8-20px`
- Transitions: `0.3s ease`

## Development Workflow

### Local Development
1. `npm install` - Install dependencies
2. `npm run dev` - Start dev server
3. Make changes
4. Test in browser

### Deployment Pipeline
1. Create feature branch
2. Make changes and commit
3. Create PR to `main`
4. Merge PR
5. GitHub Actions updates `.vercel-trigger` file
6. Vercel auto-deploys

### Adding New Content

#### New Lesson
1. Add lesson entry to `modules` object in `lessonsData.js`
2. Add lesson data to `lessons` object with:
   - `id`, `title`, `moduleId`
   - `grammar`, `vocabulary`, `readingText`, `videos`
   - `exercises` array referencing exercise IDs
3. Add corresponding exercise entries to `exercises` object

#### New Module
1. Add module to `modules` object
2. Reference in appropriate `courseLevels` entry
3. Add lessons as above

## Important Files

| File | Purpose | Size |
|------|---------|------|
| `src/data/lessonsData.js` | All course content | ~2.5MB, ~37K lines |
| `src/components/ExerciseComponent.jsx` | Exercise runner | ~90KB |
| `src/pages/LessonPage.jsx` | Lesson display | ~45KB |
| `src/pages/ListeningPage.jsx` | Listening exercises | ~13KB |
| `src/components/VideoPlayer.jsx` | Video player | ~11KB |

## Known Considerations

### Large Data File
- `lessonsData.js` contains ALL content (~37K lines)
- Loading is synchronous - consider lazy loading for optimization
- When editing, use search to find specific lesson/exercise IDs

### Exercise Design
- Analysis tools available: `analyze_correct_answers.py`, `analyze_detailed.py`, `fix_correct_answers.py`
- Analysis output: `correct_answers_analysis_report.md`, `exercises_with_patterns.csv`
- Some exercises have answer distribution issues (documented in the report)
- When adding exercises, vary correct answer positions

### Module ID Gaps
- Module IDs are not sequential: module-1 through module-11 exist, then module-17
- Module IDs 12-16 are unused — do not assume sequential numbering

### No Backend
- All auth is simulated via localStorage
- Demo login available (`demo@example.com`)
- No real password verification

## Language Notes

- UI text: Russian
- Learning content: Spanish with Russian translations/explanations
- Code comments: Primarily Russian
- Variable names: English

## Dependencies

```json
{
  "react": "^18.2.0",
  "react-dom": "^18.2.0",
  "react-router-dom": "^6.20.0"
}
```

Dev dependencies: Vite 5.x, @vitejs/plugin-react

## Common Tasks

### Find a specific lesson
```bash
# Search in lessonsData.js
grep -n "lesson-5-2" src/data/lessonsData.js
```

### Find exercises for a lesson
```javascript
// In lessonsData.js, lessons have exercises array:
lessons['lesson-1-1'].exercises // → ['ex-1-1-1', 'ex-1-1-2', ...]
```

### Add a video to a lesson
```javascript
// In lessons object, add to videos array:
videos: [
  {
    title: 'Video Title',
    url: 'filename.mp4',  // Place file in public/ or public/video/
    description: 'Description text'
  }
]
```

### Check build
```bash
npm run build && npm run preview
```

## File Locations Quick Reference

| Need | Location |
|------|----------|
| Add/edit course content | `src/data/lessonsData.js` |
| Modify how exercises work | `src/components/ExerciseComponent.jsx` |
| Change lesson page layout | `src/pages/LessonPage.jsx` |
| Update routing | `src/App.jsx` |
| Add media files | `public/audio/`, `public/video/`, `public/images/` |
| Modify deployment | `.github/workflows/vercel-auto-deploy.yml` |
