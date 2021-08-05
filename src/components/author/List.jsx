import React from 'react'
import { Link } from 'react-router-dom'
import EmptyState from '../ui/EmptyState'
import { UserCircleIcon, PencilAltIcon } from '@heroicons/react/outline'

function AuthorList({ data }) {
  if (!data || data.length == 0) {
    return (
      <EmptyState
        icon={UserCircleIcon}
        title="No authors"
        message="Start by adding a new author"
        btnLabel="Add Author"
        link="/author/create"
      />
    )
  }
  return (
    <div className="overflow-x-auto">
      <div className="mb-4">
        <Link to="/author/create" className="btn btn-secondary btn-sm">
          New Author
        </Link>
      </div>
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
                  title="Edit"
                >
                  <PencilAltIcon
                    className="w-5 h-5 mr-2 -ml-1"
                    aria-hidden="true"
                  />
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
