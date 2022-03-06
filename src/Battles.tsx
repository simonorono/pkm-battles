import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const battleFiles = import.meta.glob('./battles/*.json')

export default function Battles() {
  const [isLoading, setIfLoading] = useState(true)
  const [battles, setBattles] = useState([] as Battle[])

  const { date } = useParams() as { date: string }

  const battleFile = battleFiles[`./battles/${date}.json`] || null

  if (battleFile) {
    battleFile().then(data => {
      setIfLoading(false)
      setBattles(data.default)
    })
  }

  return (
    <div className="mx-auto max-w-7xl">
      <h2 className="mb-5 text-xl">Battles from {date}</h2>

      <div className="mx-auto mb-8 w-full max-w-7xl">
        <Link to="/" className="underline sm:no-underline sm:hover:underline">
          « Back to index
        </Link>
      </div>

      {isLoading && <p>Loading</p>}
      {isLoading || (
        <ul className="list-disc px-4">
          {battles.map(battle => (
            <li className="mb-1 text-base" key={battle.file}>
              <Link to={`/${date}/${battle.file}`} className="hover:underline">
                <span className="font-mono">[{battle.format}]</span>
                <span className="font-medium">
                  {' '}
                  {battle.player1} vs. {battle.player2}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
