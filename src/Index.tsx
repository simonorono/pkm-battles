import dates from './battles/index.json'

export default function Index() {
  return (
    <div className="mx-auto max-w-7xl">
      <ul>
        {dates.map(date => (
          <li key={date}>{date}</li>
        ))}
      </ul>
    </div>
  )
}
