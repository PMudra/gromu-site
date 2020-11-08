import React from "react"
import SEO from "../components/seo"

export default () => (
  <>
    <SEO title="Startseite" />
    <h1 class="text-orange-700 font-sans">Hello World!</h1>
    <h1 class="text-orange-700 font-serif">Hello World!</h1>
    <h1 class="text-orange-700 font-mono">Hello World!</h1>
    <div>
      <div class="w-32 h-32 bg-green-900 shadow-inner"></div>
      <div class="w-32 h-32 bg-green-700 shadow-inner"></div>
      <div class="w-32 h-32 bg-green-500 shadow-inner"></div>
      <div class="w-32 h-32 bg-green-300 shadow-inner"></div>
      <div class="w-32 h-32 bg-green-100 shadow-inner"></div>
    </div>
  </>
)
