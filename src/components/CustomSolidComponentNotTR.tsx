/* @jsxImportSource solid-js */

import { createEffect } from 'solid-js'

const CustomSolidComponentNotTR = () => {
  createEffect(() => {
    alert("I'm hydrated")
  })

  return <div>I render and hydrate.</div>
}

export default CustomSolidComponentNotTR
