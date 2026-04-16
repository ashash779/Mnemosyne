import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Home from './pages/Home.jsx'
import Quiz from './pages/Quiz.jsx'
import Diagrams from './pages/Diagrams.jsx'
import Lessons from './pages/Lessons.jsx'
import ShellyPage from './pages/Shelly.jsx'
import { ShellyWidget } from './components/Shelly/index.js'
import SkipLink from './components/UI/SkipLink.jsx'

const pageVariants = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.3, ease: 'easeOut' } },
  exit:    { opacity: 0, y: -6, transition: { duration: 0.2, ease: 'easeIn' } },
}

function PageWrapper({ children }) {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      id="main-content"
      tabIndex={-1}
    >
      {children}
    </motion.div>
  )
}

function AnimatedRoutes() {
  const location = useLocation()
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/"         element={<PageWrapper><Home /></PageWrapper>} />
        <Route path="/quiz"     element={<PageWrapper><Quiz /></PageWrapper>} />
        <Route path="/diagrams" element={<PageWrapper><Diagrams /></PageWrapper>} />
        <Route path="/lessons"  element={<PageWrapper><Lessons /></PageWrapper>} />
        <Route path="/shelly"   element={<PageWrapper><ShellyPage /></PageWrapper>} />
      </Routes>
    </AnimatePresence>
  )
}

function App() {
  return (
    <BrowserRouter>
      <SkipLink />
      <AnimatedRoutes />
      <ShellyWidget />
    </BrowserRouter>
  )
}

export default App
