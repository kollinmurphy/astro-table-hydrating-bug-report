/* @jsxImportSource solid-js */

import { createEffect } from 'solid-js'

const TableRow = () => {
  createEffect(() => {
    alert("I'm not hydrated either")
  })

  return (
    <table>
      <tr>
        <td>I render but I don't hydrate</td>
      </tr>
    </table>
  )
}

export default TableRow
