import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Battle from './Battle'
import Index from './Index'

function App() {
  return (
    <Router>
      <div className="flex min-h-screen flex-col px-2">
        <header className="mx-auto w-full max-w-7xl">
          <div className="mb-5 mt-8 flex flex-col items-baseline justify-between border-b-2 border-black pb-2 sm:flex-row">
            <h1 className="font-serif text-3xl hover:underline">
              <Link to="/">Pokémon Battle History</Link>
            </h1>
            <h2>
              <a
                href="https://simonorono.com"
                className="underline sm:no-underline sm:hover:underline"
                target="_blank"
              >
                Simón Oroño
              </a>
            </h2>
          </div>
        </header>
        <main className="grow">
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/:date/:file" element={<Battle />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
