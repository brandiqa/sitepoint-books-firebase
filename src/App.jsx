import React from 'react'
import Footer from './layout/Footer'
import Navbar from './layout/Navbar'

function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="container flex-grow p-4 mx-auto">
        <h1>
          <span className="text-primary">Hello </span>
          <span className="text-base">World!</span>
        </h1>
      </main>
      <Footer />
    </>
  )
}

export default App
