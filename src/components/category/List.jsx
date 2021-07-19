import React from 'react'
import EmptyState from '../ui/EmptyState'
import { CollectionIcon } from '@heroicons/react/outline'

function CategoryList({ data }) {
  if (!data || data.length == 0) {
    return (
      <EmptyState
        icon={CollectionIcon}
        title="No categories"
        message="Start by adding a new category"
        btnLabel="Create Category"
        link="/category/create"
      />
    )
  }
  return (
    <div>
      <p>Category List</p>
    </div>
  )
}

export default CategoryList
