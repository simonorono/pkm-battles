import { ReactNode } from 'react'
import { Link } from 'react-router-dom'

interface TDProps {
  children: ReactNode
  className?: string
  colSpan?: number
}

function TD(props: TDProps) {
  const { children, className, colSpan = 0 } = props

  return (
    <td
      className={`whitespace-nowrap px-3 py-4 text-sm ${className}`}
      colSpan={colSpan}
    >
      {children}
    </td>
  )
}

interface Props {
  battles: Battle[]
}

export default function TableBody(props: Props) {
  const { battles } = props

  return (
    <>
      {battles.map(battle => (
        <tr key={battle.file}>
          <TD>{battle.date}</TD>
          <TD>{battle.format}</TD>
          <TD>{battle.player1}</TD>
          <TD>{battle.player2}</TD>
          <TD>
            <Link
              className="text-green-700 hover:underline"
              to={`/${battle.date}/${battle.file}`}
            >
              View
            </Link>
          </TD>
        </tr>
      ))}
    </>
  )
}
