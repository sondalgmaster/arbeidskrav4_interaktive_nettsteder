import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import Nav from './components/nav'
import { Routes, Route } from "react-router-dom";

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Nav />

      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/:slug" element={<h1>Member page</h1>} />
      </Routes>
    </>
  )
}

export default App
