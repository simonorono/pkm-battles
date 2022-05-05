import { FolderIcon } from '@heroicons/react/solid'
import { Link } from 'react-router-dom'
import history from './battles/history.json'

export default function Index() {
  const dates = Object.keys(history).sort((a: string, b: string) =>
    a > b ? -1 : 1
  )

  return (
    <div className="mx-auto max-w-7xl">
      <ul className="grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {dates.map(date => (
          <li key={date} className="rounded-lg border">
            <Link
              to={`/${date}`}
              className="group inline-flex h-full w-full items-center"
            >
              <FolderIcon className="w-20 text-emerald-700" />
              <h3 className="group-hover:underline">{date}</h3>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
