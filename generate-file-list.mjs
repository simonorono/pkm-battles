import fs from 'fs'

const BATTLES_DIR = './public/battles'
const TARGET_DIR = './src/battles'

const files = fs.readdirSync(BATTLES_DIR)

let result = {}

for (const file of files) {
  const parts = file.replaceAll('.html', '').split('-')

  const format = parts[0]
  const date = `${parts[1]}-${parts[2]}-${parts[3]}`
  const player1 = parts[4]
  const player2 = parts[5]

  const object = { format, date, player1, player2, file }

  if (result[date]) {
    result[date].push(object)
  } else {
    result[date] = [object]
  }
}

fs.rmSync(TARGET_DIR, { recursive: true })

fs.mkdirSync(TARGET_DIR, { recursive: true })

for (const date of Object.keys(result)) {
  fs.writeFileSync(`${TARGET_DIR}/${date}.json`, JSON.stringify(result[date]), { flag: 'w+' })
}

fs.writeFileSync(
  `${TARGET_DIR}/index.json`,
  JSON.stringify(
    Object.keys(result).sort((a, b) => a > b ? -1 : 1)
  ),
  { flag: 'w+' }
)
