//https://dev.to/jps27cse/understanding-layout-components-and-react-router-outlet-in-react-3l2e
import { Routes, Route } from "react-router-dom";
import Layout from './components/layout'
import Patrykrp from './components/patrykrp'
import PatrykCard from './components/patrykcard.jsx';
import Arbkrv from './components/arbkrv.jsx';

import ArbkSide from './components/ARBKside.jsx';

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={
          <>
            <section id="profiles">
              <PatrykCard />
            </section>
            <section id="arbeidskrav">
              <h2>Arbeidskrav</h2>
              <Arbkrv />
            </section>
          </>
        } />
        <Route path="/member/:slug" element={<Patrykrp />} />
        <Route path="/project/:slug" element={<ArbkSide />} />
      </Route>
    </Routes>

  )
}

export default App

