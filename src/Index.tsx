import BattleTable from './components/BattleTable'

export default function Index() {
  return (
    <div className="mx-auto max-w-7xl">
      <div className="border-2 border-red-900 bg-red-100 md:hidden">
        <p className="p-6 text-red-900">
          Replays stored in this site come directly from «Pokémon Showdown!» and
          will not look good on mobile devices.
        </p>
      </div>

      <BattleTable />
    </div>
  )
}
