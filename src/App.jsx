import React from 'react'
import { Catagories, Food, HeaderCards, Hero, Navbar } from './components'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <HeaderCards />
      <Food />
      <Catagories />
    </div>
  )
}

export default App
