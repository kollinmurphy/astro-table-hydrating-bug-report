/* @jsxImportSource solid-js */

import { createEffect } from 'solid-js'

const Div = () => {
  createEffect(() => {
    alert("I'm hydrated")
  })

  return <div>I render and hydrate.</div>
}

export default Div
