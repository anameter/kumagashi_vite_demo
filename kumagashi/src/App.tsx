import { ThemeProvider } from './contexts/ThemeProvider'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Footer from './components/Footer'

const App = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen">
        <Navbar />
        <Hero />
        <Projects />
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App
