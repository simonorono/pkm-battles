import { ReactNode } from 'react'

interface THProps {
  children: ReactNode
}

function TableTH(props: THProps) {
  return (
    <th
      scope="col"
      className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
    >
      {props.children}
    </th>
  )
}

export default function TableHeader() {
  return (
    <thead className="bg-gray-50">
      <tr>
        <TableTH>Date</TableTH>
        <TableTH>Format</TableTH>
        <TableTH>Player 1</TableTH>
        <TableTH>Player 2</TableTH>
        <TableTH>{''}</TableTH>
      </tr>
    </thead>
  )
}
