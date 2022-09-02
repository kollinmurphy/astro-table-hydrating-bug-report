/* @jsxImportSource solid-js */

import { createEffect } from 'solid-js'

const CustomSolidComponentTR = () => {
  createEffect(() => {
    alert("I'm not hydrated")
  })

  return (
    <tr>
      <td>I render but I don't hydrate</td>
    </tr>
  )
}

export default CustomSolidComponentTR
