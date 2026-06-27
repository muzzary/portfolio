import { MobileMenuProvider } from './contexts/MobileMenuContext'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Skills from './components/Skills/Skills'
import AboutMe from './components/AboutMe/AboutMe'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import CustomCursor from './components/UI/CustomCursor'

export default function App() {
  return (
    <MobileMenuProvider>
      <CustomCursor />
      <Header />
      <main>
        <Hero />
        <Skills />
        <AboutMe />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </MobileMenuProvider>
  )
}
