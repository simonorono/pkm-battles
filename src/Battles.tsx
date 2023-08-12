import { Link, useParams } from 'react-router-dom'
import { battlesForDay } from './data'

export default function Battles() {
  const { date } = useParams() as { date: string }

  return (
    <div className="mx-auto max-w-7xl">
      <h2 className="mb-5 text-xl">Battles from {date}</h2>

      <div className="mx-auto mb-8 w-full max-w-7xl">
        <Link to="/" className="underline sm:no-underline sm:hover:underline">
          « Back to index
        </Link>
      </div>

      <ul className="list-disc px-4">
        {battlesForDay(date).map(battle => (
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
    </div>
  )
}
