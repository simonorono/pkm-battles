import dates from './battles/index.json'

function App() {
  return (
    <ul>
      {dates.map(date => (
        <li key={date}>

        </li>
      ))}
    </ul>
  )
}

export default App
