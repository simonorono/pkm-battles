import { useParams } from 'react-router-dom'

export default function Battle() {
  const { file } = useParams() as { file: string }

  return (
    <div className="h-screen w-full">
      <iframe className="h-full w-full" src={`/battles/${file}`} />
    </div>
  )
}
