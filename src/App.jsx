import './App.css'
import About from './components/About'
import Contact from './components/Contact'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Skills from './components/Skills'
import Work from './components/Work'

function App() {
  return (
    <>
      <div className='bg-custom-bg bg-noise-texture'>
        <Navbar />
        <Home />
        <About />
        <Skills />
        <Work />
        <div className='mt-44'>
          <Contact />
        </div>
      </div>
    </>
  )
}

export default App
