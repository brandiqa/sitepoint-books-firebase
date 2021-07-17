import React from 'react'
import PageHeading from '../../components/ui/PageHeading'
import CategoryForm from '../../components/category/Form'

function ScreenCategoryForm({ match: { params } }) {
  const { id } = params
  const title = !id ? 'Create' : 'Update'
  return (
    <>
      <PageHeading title={`${title} Category`} />
      <CategoryForm id={id} />
    </>
  )
}

export default ScreenCategoryForm
