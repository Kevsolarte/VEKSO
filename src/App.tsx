import './App.css'
import Navbar from './sections/Navbar'
import Hero from './sections/Hero'
import Problem from './sections/Problem'
import Services from './sections/Services'
import Portfolio from './sections/Portfolio'
import Process from './sections/Process'
import Differentiator from './sections/Differentiator'
import CTA from './sections/CTA'

function App() {
  return (
    <>
      <Navbar />
      <main className="app-container">
        <Hero />
        <Problem />
        <Services />
        <Portfolio />
        <Process />
        <Differentiator />
        <CTA />
      </main>
    </>
  )
}

export default App
