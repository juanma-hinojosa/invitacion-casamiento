import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import HomePage from './assets/pages/Home'
import NavbarComponent from './assets/components/NavbarComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavbarComponent />
      <HomePage />
    </>
  )
}

export default App
