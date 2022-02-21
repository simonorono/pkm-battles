import dates from './battles/index.json'
import { FolderIcon } from '@heroicons/react/solid'
import { Link } from 'react-router-dom'

export default function Index() {
  return (
    <div className="mx-auto max-w-7xl">
      <ul className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {dates.map(date => (
          <li key={date} className="rounded-lg border">
            <Link to={`/${date}`} className="inline-flex h-full w-full items-center">
              <FolderIcon className="w-20 text-emerald-700" />
              <h3>{date}</h3>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
