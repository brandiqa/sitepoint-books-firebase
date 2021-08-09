import React from 'react'
import { CollectionIcon } from '@heroicons/react/outline'
import EmptyState from '../ui/EmptyState'

import CategoryCard from './Card'

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

  const cards = data.map((category, index) => (
    <CategoryCard category={category} key={index} />
  ))

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 md:gap-4 gap-y-4">
      {cards}
    </div>
  )
}

export default CategoryList
