import React from 'react'
import { Link } from 'react-router-dom'

function AuthorList() {
  const authors = [
    { id: '123', name: 'Jane Cooper' },
    { id: '124', name: 'Cody Fisher' },
  ]

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
          {authors.map((author, index) => (
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
