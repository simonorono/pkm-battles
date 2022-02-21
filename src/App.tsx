import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Battle from './Battle'
import Battles from './Battles'
import Index from './Index'

function App() {
  return (
    <Router>
      <div className="flex min-h-screen flex-col px-2">
        <header className="mx-auto w-full max-w-7xl">
          <div className="mt-8 mb-5 flex items-baseline justify-between border-b-2 border-black pb-2">
            <h1 className="font-serif text-3xl">Pokémon Battle History</h1>
            <h2>Simón Oroño</h2>
          </div>
        </header>
        <main className="grow">
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/:date" element={<Battles />} />
            <Route path="/:date/:file" element={<Battle />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
