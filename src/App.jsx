import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import ProfilePage from './pages/ProfilePage'
import CoursesPage from './pages/CoursesPage'
import ModulePage from './pages/ModulePage'
import LessonPage from './pages/LessonPage'
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/module/:moduleId" element={<ModulePage />} />
        <Route path="/lesson/:lessonId" element={<LessonPage />} />
      </Routes>
    </Router>
  )
}

export default App
