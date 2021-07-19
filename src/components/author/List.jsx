import React from 'react'
import { Link } from 'react-router-dom'
import EmptyState from '../ui/EmptyState'
import { UserCircleIcon } from '@heroicons/react/outline'

function AuthorList({ data }) {
  if (!data || data.length == 0) {
    return (
      <EmptyState
        icon={UserCircleIcon}
        title="No authors"
        message="Start by creating a new author"
        link="/author/create"
      />
    )
  }
  return (
    <div className="overflow-x-auto">
      <table className="table w-full max-w-screen-md">
        <thead>
          <tr>
            <th>Name</th>
            <th scope="col">
              <span className="sr-only">Edit</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((author, index) => (
            <tr key={index}>
              <td>{author.name}</td>
              <td>
                <Link
                  to={`/author/edit/${author.id}`}
                  className="text-primary hover:text-primary-focus"
                >
                  Edit
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default AuthorList
