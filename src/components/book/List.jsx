import React from 'react'
import EmptyState from '../ui/EmptyState'
import { BookOpenIcon } from '@heroicons/react/outline'

function BookList({ data }) {
  if (!data || data.length == 0) {
    return (
      <EmptyState
        icon={BookOpenIcon}
        title="No books"
        message="Start by adding a new book"
        btnLabel="Add Book"
        link="/book/create"
      />
    )
  }
  return (
    <div>
      <p>BookList</p>
    </div>
  )
}

export default BookList
