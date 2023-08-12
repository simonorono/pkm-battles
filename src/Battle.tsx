import { useRef } from 'react'
import { Link, useParams } from 'react-router-dom'

export default function Battle() {
  const iframe = useRef(null as HTMLIFrameElement | null)
  const { date, file } = useParams() as { date: string; file: string }

  // Avoids having nested scroll bars by setting the height of the iframe to
  // the minimum required
  const onIframeLoad = () => {
    if (!iframe.current) {
      return
    }

    if (!iframe.current.contentWindow) {
      return
    }

    iframe.current.style.height = `${iframe.current.contentWindow.document.body.scrollHeight}px`
  }

  return (
    <div className="w-full">
      <div className="mx-auto w-full max-w-7xl">
        <Link to={`/`} className="underline sm:no-underline sm:hover:underline">
          « Back to index
        </Link>
      </div>

      <iframe
        ref={iframe}
        className="w-full"
        src={`/battles/${file}`}
        onLoad={onIframeLoad}
      />
    </div>
  )
}
