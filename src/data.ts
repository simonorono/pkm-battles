import history_json from './battles/history.json'

const history: { [p: string]: Battle[] } = history_json

const allDays = Object.keys(history).sort((a: string, b: string) =>
  a > b ? -1 : 1
)

const allBattles = Object.values(history).flatMap(_ => _)

allBattles.sort((a: Battle, b: Battle) => (a.date > b.date ? -1 : 1))

export function days(): string[] {
  return allDays
}

export function battlesForDay(day: string): Battle[] {
  return history[day] || []
}

export function battles(): Battle[] {
  return allBattles
}
