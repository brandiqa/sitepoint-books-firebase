import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { LoginIcon } from '@heroicons/react/outline'
import { UserCircleIcon } from '@heroicons/react/solid'

import './navbar.css'

function Navbar() {
  const routes = [
    {
      text: 'Home',
      url: '/',
    },
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
      exact
    >
      {route.text}
    </NavLink>
  ))
  return (
    <nav className="bg-neutral rounded-box shadow-lg text-neutral-content mb-2 navbar">
      <div className="mx-2 px-2 navbar-start">
        <Link to="/" className="font-bold text-primary text-lg inline-block">
          <span>SitePoint </span>
          <span className="text-base-content">Books</span>
        </Link>
      </div>
      <div className="mx-2 px-2 navbar-center hidden md:flex">
        <div className="flex items-stretch">{links}</div>
      </div>
      <div className="navbar-end">
        <div className="flex space-x-4">
          <NavLink className="w-28 btn btn-sm btn-secondary" to="/login">
            <LoginIcon className="h-5 mr-2 -ml-1 w-5" aria-hidden="true" />
            Login
          </NavLink>
          <NavLink
            className="w-28 btn btn-sm btn-primary hover:text-white"
            to="/join"
          >
            <UserCircleIcon className="h-5 mr-2 -ml-1 w-5" aria-hidden="true" />
            Join
          </NavLink>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
