import Navbar from '../components/UI/Navbar.jsx'
import Footer from '../components/UI/Footer.jsx'
import { Shelly as ShellyIllustration } from '../components/Shelly/index.js'
import { useApp } from '../context/AppContext.jsx'

export default function ShellyPage() {
  const { shellyMood } = useApp()
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      <main style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '3rem 1.5rem' }}>
        <h1 style={{ fontFamily: "'Fraunces', serif", color: 'var(--color-green-deep)', marginBottom: '1.5rem' }}>Shelly's Corner 🐢</h1>
        <ShellyIllustration mood={shellyMood} size={200} />
      </main>
      <Footer />
    </div>
  )
}
