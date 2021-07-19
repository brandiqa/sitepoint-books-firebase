import React from 'react'
import PageHeading from '../../components/ui/PageHeading'
import CategoryList from '../../components/category/List'

function ScreenCategoryList() {
  return (
    <>
      <PageHeading title="Category List" />
      <div className="mt-12">
        <CategoryList />
      </div>
    </>
  )
}

export default ScreenCategoryList
