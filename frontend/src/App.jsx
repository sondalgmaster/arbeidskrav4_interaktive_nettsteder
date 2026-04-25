//https://dev.to/jps27cse/understanding-layout-components-and-react-router-outlet-in-react-3l2e
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import { Routes, Route } from "react-router-dom";
import Layout from './components/layout'
import Patrykrp from './components/patrykrp'
import PatrykCard from './components/patrykcard.jsx';
import './App.css'
import ArbkSide from './components/ARBKside.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<PatrykCard />} />
        <Route path="/member/:slug" element={<Patrykrp />} />
        <Route path="/project/:slug" element={<ArbkSide />} />
      </Route>
    </Routes>

  )
}

export default App

