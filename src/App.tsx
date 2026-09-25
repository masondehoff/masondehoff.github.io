import About from './components/About'
import BackgroundFX from './components/BackgroundFX'
import Contact from './components/Contact'
import Education from './components/Education'
import Experience from './components/Experience'
import Hero from './components/Hero'
import Leadership from './components/Leadership'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import SideNav from './components/SideNav'
import Skills from './components/Skills'

export default function App() {
  return (
    <div className="relative min-h-screen">
      <BackgroundFX />
      <Navbar />
      <SideNav />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Leadership />
        <Contact />
      </main>
    </div>
  )
}
