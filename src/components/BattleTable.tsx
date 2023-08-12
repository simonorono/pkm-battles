import { useState } from 'react'
import TableHeader from './TableHeader'
import TableBody from './TableBody'
import { battles } from '../data'

const PER_PAGE = 10

export default function BattleTable() {
  const all = battles()

  const [page, setPage] = useState(1)
  const show = Math.min(page * PER_PAGE, all.length)
  const hasMore = show < all.length

  return (
    <div className="mt-8 flow-root">
      <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
          <div className="overflow-hidden border sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-300">
              <TableHeader />
              <tbody className="divide-y divide-gray-200 bg-white">
                <TableBody battles={all.slice(0, show)} />

                <tr className="bg-gray-100">
                  <td
                    className="whitespace-nowrap px-3 py-4 text-center text-sm font-semibold"
                    colSpan={5}
                  >
                    <div className="flex justify-between">
                      <p>
                        Showing {show}/{all.length}
                      </p>

                      {hasMore && (
                        <a
                          className="hover:cursor-pointer hover:underline"
                          onClick={() => setPage(page + 1)}
                        >
                          Load more
                        </a>
                      )}

                      {hasMore || <p />}
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
