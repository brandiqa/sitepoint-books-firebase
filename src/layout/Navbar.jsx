import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { LoginIcon } from '@heroicons/react/outline'
import { UserCircleIcon } from '@heroicons/react/solid'

import './navbar.css'

function Navbar() {
  const routes = [
    {
      text: 'Categories',
      url: '/category/list',
    },
    {
      text: 'Authors',
      url: '/author/list',
    },
    {
      text: 'Books',
      url: '/book/list',
    },
  ]
  const links = routes.map((route, index) => (
    <NavLink
      to={route.url}
      key={index}
      className="rounded-btn btn btn-ghost btn-sm"
    >
      {route.text}
    </NavLink>
  ))
  return (
    <nav className="mb-2 shadow-lg bg-neutral text-neutral-content navbar">
      <div className="px-2 mx-2 navbar-start">
        <Link to="/" className="inline-block text-lg font-bold text-primary">
          <span>Sitepoint </span>
          <span className="text-base-content">Books</span>
        </Link>
      </div>
      <div className="hidden px-2 mx-2 navbar-center md:flex">
        <div className="flex items-stretch space-x-2">
          <NavLink to="/" className="rounded-btn btn btn-ghost btn-sm" exact>
            Home
          </NavLink>
          {links}
        </div>
      </div>
      <div className="navbar-end">
        <div className="flex space-x-4">
          <Link className="w-28 btn btn-sm btn-secondary" to="/login">
            <LoginIcon className="w-5 h-5 mr-2 -ml-1" aria-hidden="true" />
            Login
          </Link>
          <Link className="w-24 btn btn-sm btn-primary" to="/join">
            <UserCircleIcon className="w-5 h-5 mr-2 -ml-1" aria-hidden="true" />
            Join
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
