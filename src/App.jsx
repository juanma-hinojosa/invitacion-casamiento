import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import HomePage from './assets/pages/Home'
import NavbarComponent from './assets/components/NavbarComponent'
import GiftListComponent from './assets/components/GiftListComponent'
import Location from './assets/components/Location'
import AboutUs from './assets/components/AboutUs'

function App() {
  return (
    <>
      {/* <NavbarComponent /> */}
      <HomePage />
      <GiftListComponent />
      <Location />
      <AboutUs />
    </>
  )
}

export default App
