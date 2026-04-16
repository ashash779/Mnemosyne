
import { createContext, useContext, useState, useEffect, useCallback, useRef } from 'react'

const AppContext = createContext(null)

const STORAGE_KEY = 'Mnemosyne_state'
const MAX_ORANGES = 5

function loadFromStorage() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved) return JSON.parse(saved)
  } catch {
    // ignore parse errors
  }
  return null
}

export function AppProvider({ children }) {
  const saved = loadFromStorage()

  const [learnerType, setLearnerTypeState] = useState(saved?.learnerType ?? null)
  const [orangeCount, setOrangeCount] = useState(saved?.orangeCount ?? 0)
  const [shellyMood, setShellyMood] = useState(saved?.shellyMood ?? 'idle')
  const [hintsUsed, setHintsUsed] = useState(saved?.hintsUsed ?? 0)
  const [lessonProgress, setLessonProgress] = useState(saved?.lessonProgress ?? {})

  // Ref that always mirrors orangeCount so useHint can read it synchronously
  const orangeCountRef = useRef(saved?.orangeCount ?? 0)
  useEffect(() => { orangeCountRef.current = orangeCount }, [orangeCount])

  // Persist to localStorage whenever state changes
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({
        learnerType,
        orangeCount,
        shellyMood,
        hintsUsed,
        lessonProgress,
      }))
    } catch {
      // ignore storage errors
    }
  }, [learnerType, orangeCount, shellyMood, hintsUsed, lessonProgress])

  const addOrange = useCallback(() => {
    setOrangeCount(prev => {
      const next = Math.min(prev + 1, MAX_ORANGES)
      if (next === MAX_ORANGES) {
        setShellyMood('excited')
      } else {
        setShellyMood('happy')
      }
      return next
    })
  }, [])

  // Returns true if hint was dispensed, false if not enough oranges.
  // Uses a ref to read count synchronously — avoids async setState race.
  const useHint = useCallback(() => {
    if (orangeCountRef.current > 0) {
      setOrangeCount(prev => Math.max(0, prev - 1))
      setHintsUsed(h => h + 1)
      setShellyMood('idle')
      return true
    }
    return false
  }, [])

  const setLearnerType = useCallback((type) => {
    setLearnerTypeState(type)
  }, [])

  const completeLesson = useCallback((lessonId) => {
    setLessonProgress(prev => ({ ...prev, [lessonId]: true }))
  }, [])

  const setShellyMoodDirect = useCallback((mood) => {
    setShellyMood(mood)
  }, [])

  const value = {
    learnerType,
    orangeCount,
    shellyMood,
    hintsUsed,
    lessonProgress,
    addOrange,
    useHint,
    setLearnerType,
    completeLesson,
    setShellyMood: setShellyMoodDirect,
    MAX_ORANGES,
  }

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

export function useApp() {
  const ctx = useContext(AppContext)
  if (!ctx) throw new Error('useApp must be used within AppProvider')
  return ctx
}
