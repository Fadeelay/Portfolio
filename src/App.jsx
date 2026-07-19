import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Skills from './pages/Skills'
import About from './pages/About'
import Troubleshooting from './pages/Troubleshooting'

export default function App() {
  return (
    <BrowserRouter basename="/Portfolio">
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/about" element={<About />} />
            <Route path="/troubleshooting" element={<Troubleshooting />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}
