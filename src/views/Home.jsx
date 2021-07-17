import React from 'react'
import { Link } from 'react-router-dom'

import PageHeading from '../components/ui/PageHeading'

function Home() {
  return (
    <>
      <PageHeading title="Home" />
      <h2 className="mt-8 text-lg font-semibold text-primary">
        Browser books by:
      </h2>
      <div>
        <Link to="/category/list">Category</Link>
        <Link to="/author/list">Author</Link>
        <Link to="/book/list">Book</Link>
      </div>
    </>
  )
}

export default Home
