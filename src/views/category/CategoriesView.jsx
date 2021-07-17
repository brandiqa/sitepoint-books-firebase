import React from 'react'
import PageHeading from '../../components/ui/PageHeading'
import CategoryList from '../../components/category/CategoryList'

function CategoriesView() {
  return (
    <>
      <PageHeading title="Category List" />
      <CategoryList />
    </>
  )
}

export default CategoriesView
